import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertUserSchema, insertProductListingSchema } from "@shared/schema";
import { passport, bcrypt, SALT_ROUNDS } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test endpoint to verify API is working
  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working", timestamp: new Date().toISOString() });
  });

  // Authentication Routes
  app.post("/api/register", async (req, res, next) => {
    try {
      const result = insertUserSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid input",
          errors: result.error.errors 
        });
      }

      const { email, password } = result.data;

      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const user = await storage.createUser({
        email,
        password: hashedPassword,
      });

      const plans = await storage.getAllPricingPlans();
      const basicPlan = plans.find(p => p.name === "basic") || plans[0];
      
      if (!basicPlan) {
        return res.status(500).json({ 
          message: "Registration failed: No pricing plans available. Please contact support." 
        });
      }

      await storage.createUserSubscription({
        userId: user.id,
        planId: basicPlan.id,
        creditsRemaining: basicPlan.productCredits || 20,
        isActive: true,
      });

      req.session.regenerate((regenerateErr) => {
        if (regenerateErr) {
          return next(regenerateErr);
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }
          
          req.session.save((saveErr) => {
            if (saveErr) {
              return next(saveErr);
            }
            res.status(201).json({
              message: "User created successfully",
              user: { id: user.id, email: user.email },
            });
          });
        });
      });
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({ message: info?.message || "Login failed" });
      }

      req.session.regenerate((regenerateErr) => {
        if (regenerateErr) {
          return next(regenerateErr);
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          req.session.save((saveErr) => {
            if (saveErr) {
              return next(saveErr);
            }
            res.json({
              message: "Logged in successfully",
              user: { id: user.id, email: user.email },
            });
          });
        });
      });
    })(req, res, next);
  });

  app.post("/api/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      req.session.destroy((destroyErr) => {
        if (destroyErr) {
          return res.status(500).json({ message: "Logout failed" });
        }
        res.clearCookie('connect.sid');
        res.json({ message: "Logged out successfully" });
      });
    });
  });

  app.get("/api/user", (req, res) => {
    if (req.isAuthenticated() && req.user) {
      const user = req.user as any;
      res.json({
        id: user.id,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  app.post("/api/user/change-password", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      const user = req.user as any;
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Current password and new password are required" });
      }

      const dbUser = await storage.getUser(user.id);
      if (!dbUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const isValidPassword = await bcrypt.compare(currentPassword, dbUser.password);
      if (!isValidPassword) {
        return res.status(400).json({ message: "Current password is incorrect" });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
      await storage.updateUserPassword(user.id, hashedNewPassword);

      res.json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ message: "Failed to change password" });
    }
  });

  app.delete("/api/user/delete-account", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      const user = req.user as any;

      await storage.deleteUserUsageMetrics(user.id);
      await storage.deleteUserProductListings(user.id);
      await storage.deleteUserSubscriptions(user.id);
      await storage.deleteUser(user.id);

      req.logout((err) => {
        if (err) {
          return res.status(500).json({ message: "Account deleted but logout failed" });
        }
        req.session.destroy((destroyErr) => {
          if (destroyErr) {
            return res.status(500).json({ message: "Account deleted but session cleanup failed" });
          }
          res.clearCookie('connect.sid');
          res.json({ message: "Account deleted successfully" });
        });
      });
    } catch (error) {
      console.error("Error deleting account:", error);
      res.status(500).json({ message: "Failed to delete account" });
    }
  });

  // Pricing Plans API Routes
  app.get("/api/pricing-plans", async (req, res) => {
    try {
      console.log("Getting pricing plans...");
      const plans = await storage.getAllPricingPlans();
      console.log("Found plans:", plans?.length || 0);
      
      // Set explicit content type
      res.setHeader('Content-Type', 'application/json');
      res.json(plans);
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      res.status(500).json({ error: "Failed to fetch pricing plans" });
    }
  });

  app.get("/api/pricing-plans/:id", async (req, res) => {
    try {
      const plan = await storage.getPricingPlan(req.params.id);
      if (!plan) {
        return res.status(404).json({ error: "Pricing plan not found" });
      }
      res.json(plan);
    } catch (error) {
      console.error("Error fetching pricing plan:", error);
      res.status(500).json({ error: "Failed to fetch pricing plan" });
    }
  });

  // User Subscription API Routes
  app.get("/api/users/:userId/subscription", async (req, res) => {
    try {
      const subscription = await storage.getUserSubscription(req.params.userId);
      if (!subscription) {
        return res.status(404).json({ error: "No active subscription found" });
      }
      res.json(subscription);
    } catch (error) {
      console.error("Error fetching user subscription:", error);
      res.status(500).json({ error: "Failed to fetch subscription" });
    }
  });

  // Contact Sales endpoint for Enterprise
  app.post("/api/contact-sales", async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      // Here you would typically send this to your CRM or email service
      // For now, we'll just log it and return success
      console.log("Enterprise contact sales request:", { name, email, company, message });
      
      res.json({ success: true, message: "Thank you for your interest! Our sales team will contact you within 24 hours." });
    } catch (error) {
      console.error("Error processing contact sales request:", error);
      res.status(500).json({ error: "Failed to process contact request" });
    }
  });

  // Leads endpoint for email signup
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      console.log("New lead created:", lead);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your interest! We'll be in touch soon.",
        id: lead.id
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(500).json({ error: "Failed to process signup" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  // Dashboard API Routes
  app.get("/api/dashboard/metrics", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const user = req.user as any;
      const subscription = await storage.getUserSubscription(user.id);
      
      if (!subscription) {
        return res.status(404).json({ error: "No active subscription found" });
      }

      const plan = await storage.getPricingPlan(subscription.planId);
      const usageMetrics = await storage.getUserUsageMetrics(user.id, 30);
      const todayMetrics = await storage.getTodayUsageMetrics(user.id);

      const totalUses = todayMetrics
        ? (todayMetrics.descriptionAgentUses || 0) +
          (todayMetrics.imageAgentUses || 0) +
          (todayMetrics.pricingAgentUses || 0) +
          (todayMetrics.publishingAgentUses || 0)
        : 0;

      res.json({
        subscription: {
          plan: plan?.displayName || "Unknown",
          creditsRemaining: subscription.creditsRemaining,
          totalCredits: plan?.productCredits,
        },
        usageStats: {
          todayUses: totalUses,
          todayCredits: todayMetrics?.creditsUsed || 0,
          descriptionAgentUses: todayMetrics?.descriptionAgentUses || 0,
          imageAgentUses: todayMetrics?.imageAgentUses || 0,
          pricingAgentUses: todayMetrics?.pricingAgentUses || 0,
          publishingAgentUses: todayMetrics?.publishingAgentUses || 0,
        },
        usageHistory: usageMetrics,
      });
    } catch (error) {
      console.error("Error fetching dashboard metrics:", error);
      res.status(500).json({ error: "Failed to fetch metrics" });
    }
  });

  app.get("/api/dashboard/products", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const user = req.user as any;
      const products = await storage.getUserProductListings(user.id);
      res.json(products);
    } catch (error) {
      console.error("Error fetching user products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.post("/api/dashboard/products", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const user = req.user as any;
      const productData = {
        ...req.body,
        userId: user.id,
      };

      const result = insertProductListingSchema.safeParse(productData);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid input",
          errors: result.error.errors 
        });
      }

      const product = await storage.createProductListing(result.data);
      res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product listing:", error);
      res.status(500).json({ error: "Failed to create product" });
    }
  });

  app.get("/api/dashboard/activity", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const user = req.user as any;
      const products = await storage.getUserProductListings(user.id);
      const recentProducts = products.slice(0, 5);
      
      const activities = recentProducts.map(product => ({
        id: product.id,
        type: "product_created",
        title: product.title,
        description: `Created product listing: ${product.title}`,
        timestamp: product.createdAt,
        status: product.status,
      }));

      res.json(activities);
    } catch (error) {
      console.error("Error fetching dashboard activity:", error);
      res.status(500).json({ error: "Failed to fetch activity" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
