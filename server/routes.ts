import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Pricing Plans API Routes
  app.get("/api/pricing-plans", async (req, res) => {
    try {
      const plans = await storage.getAllPricingPlans();
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

  const httpServer = createServer(app);

  return httpServer;
}
