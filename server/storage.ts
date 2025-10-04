import { type User, type InsertUser, type PricingPlan, type InsertPricingPlan, type UserSubscription, type InsertUserSubscription, type Lead, type InsertLead, type ProductListing, type InsertProductListing, type UsageMetrics, type InsertUsageMetrics, users, pricingPlans, userSubscriptions, leads, productListings, usageMetrics } from "@shared/schema";
import { randomUUID } from "crypto";
import pkg from "pg";
const { Pool } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
import { eq, and, sql } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserPassword(id: string, hashedPassword: string): Promise<User | undefined>;
  deleteUser(id: string): Promise<boolean>;
  
  // Pricing Plans
  getAllPricingPlans(): Promise<PricingPlan[]>;
  getPricingPlan(id: string): Promise<PricingPlan | undefined>;
  createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan>;
  
  // User Subscriptions
  getUserSubscription(userId: string): Promise<UserSubscription | undefined>;
  createUserSubscription(subscription: InsertUserSubscription): Promise<UserSubscription>;
  updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription | undefined>;
  deleteUserSubscriptions(userId: string): Promise<boolean>;
  
  // Leads
  getAllLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;
  
  // Product Listings
  getUserProductListings(userId: string): Promise<ProductListing[]>;
  createProductListing(listing: InsertProductListing): Promise<ProductListing>;
  deleteUserProductListings(userId: string): Promise<boolean>;
  
  // Usage Metrics
  getUserUsageMetrics(userId: string, days: number): Promise<UsageMetrics[]>;
  getTodayUsageMetrics(userId: string): Promise<UsageMetrics | undefined>;
  updateUsageMetrics(id: string, updates: Partial<UsageMetrics>): Promise<UsageMetrics>;
  createUsageMetrics(metrics: InsertUsageMetrics): Promise<UsageMetrics>;
  deleteUserUsageMetrics(userId: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private pricingPlans: Map<string, PricingPlan>;
  private userSubscriptions: Map<string, UserSubscription>;
  private leads: Map<string, Lead>;
  private productListings: Map<string, ProductListing>;
  private usageMetrics: Map<string, UsageMetrics>;

  constructor() {
    this.users = new Map();
    this.pricingPlans = new Map();
    this.userSubscriptions = new Map();
    this.leads = new Map();
    this.productListings = new Map();
    this.usageMetrics = new Map();
    
    // Initialize default pricing plans
    this.initializeDefaultPlans();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async updateUserPassword(id: string, hashedPassword: string): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    user.password = hashedPassword;
    this.users.set(id, user);
    return user;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }

  // Pricing Plans Methods
  async getAllPricingPlans(): Promise<PricingPlan[]> {
    return Array.from(this.pricingPlans.values()).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  async getPricingPlan(id: string): Promise<PricingPlan | undefined> {
    return this.pricingPlans.get(id);
  }

  async createPricingPlan(insertPlan: InsertPricingPlan): Promise<PricingPlan> {
    const id = randomUUID();
    const now = new Date();
    const plan: PricingPlan = { 
      id,
      name: insertPlan.name,
      displayName: insertPlan.displayName,
      description: insertPlan.description,
      price: insertPlan.price ?? null,
      currency: insertPlan.currency ?? "USD",
      productCredits: insertPlan.productCredits ?? null,
      hasApiAccess: insertPlan.hasApiAccess ?? false,
      isContactSales: insertPlan.isContactSales ?? false,
      features: insertPlan.features ?? [],
      isPopular: insertPlan.isPopular ?? false,
      sortOrder: insertPlan.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now
    };
    this.pricingPlans.set(id, plan);
    return plan;
  }

  // User Subscriptions Methods
  async getUserSubscription(userId: string): Promise<UserSubscription | undefined> {
    return Array.from(this.userSubscriptions.values()).find(
      (subscription) => subscription.userId === userId && subscription.isActive
    );
  }

  async createUserSubscription(insertSubscription: InsertUserSubscription): Promise<UserSubscription> {
    const id = randomUUID();
    const now = new Date();
    const subscription: UserSubscription = { 
      id,
      userId: insertSubscription.userId,
      planId: insertSubscription.planId,
      creditsRemaining: insertSubscription.creditsRemaining ?? 0,
      isActive: insertSubscription.isActive ?? true,
      startDate: insertSubscription.startDate ?? now,
      endDate: insertSubscription.endDate ?? null,
      createdAt: now,
      updatedAt: now
    };
    this.userSubscriptions.set(id, subscription);
    return subscription;
  }

  async updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription | undefined> {
    const subscription = this.userSubscriptions.get(id);
    if (!subscription) return undefined;
    
    const updatedSubscription: UserSubscription = {
      ...subscription,
      ...updates,
      updatedAt: new Date()
    };
    this.userSubscriptions.set(id, updatedSubscription);
    return updatedSubscription;
  }

  async deleteUserSubscriptions(userId: string): Promise<boolean> {
    const subscriptions = Array.from(this.userSubscriptions.entries())
      .filter(([, sub]) => sub.userId === userId);
    subscriptions.forEach(([id]) => this.userSubscriptions.delete(id));
    return subscriptions.length > 0;
  }

  // Leads Methods
  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const now = new Date();
    const lead: Lead = { 
      id,
      email: insertLead.email,
      company: insertLead.company ?? null,
      consent: insertLead.consent ?? true,
      createdAt: now
    };
    this.leads.set(id, lead);
    return lead;
  }

  // Product Listings Methods
  async getUserProductListings(userId: string): Promise<ProductListing[]> {
    return Array.from(this.productListings.values())
      .filter(listing => listing.userId === userId)
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
  }

  async createProductListing(insertListing: InsertProductListing): Promise<ProductListing> {
    const id = randomUUID();
    const now = new Date();
    const listing: ProductListing = {
      id,
      userId: insertListing.userId,
      title: insertListing.title,
      description: insertListing.description ?? null,
      imageUrl: insertListing.imageUrl ?? null,
      price: insertListing.price ?? null,
      status: insertListing.status ?? "draft",
      agentsUsed: insertListing.agentsUsed ?? [],
      createdAt: now
    };
    this.productListings.set(id, listing);
    return listing;
  }

  async deleteUserProductListings(userId: string): Promise<boolean> {
    const listings = Array.from(this.productListings.entries())
      .filter(([, listing]) => listing.userId === userId);
    listings.forEach(([id]) => this.productListings.delete(id));
    return listings.length > 0;
  }

  // Usage Metrics Methods
  async getUserUsageMetrics(userId: string, days: number): Promise<UsageMetrics[]> {
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    
    return Array.from(this.usageMetrics.values())
      .filter(metric => {
        if (metric.userId !== userId) return false;
        const metricDate = new Date(metric.date);
        return metricDate >= cutoffDate;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
  }

  async getTodayUsageMetrics(userId: string): Promise<UsageMetrics | undefined> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return Array.from(this.usageMetrics.values()).find(metric => {
      if (metric.userId !== userId) return false;
      const metricDate = new Date(metric.date);
      metricDate.setHours(0, 0, 0, 0);
      return metricDate.getTime() === today.getTime();
    });
  }

  async updateUsageMetrics(id: string, updates: Partial<UsageMetrics>): Promise<UsageMetrics> {
    const metric = this.usageMetrics.get(id);
    if (!metric) {
      throw new Error("Usage metric not found");
    }
    
    const updatedMetric: UsageMetrics = {
      ...metric,
      ...updates
    };
    this.usageMetrics.set(id, updatedMetric);
    return updatedMetric;
  }

  async createUsageMetrics(insertMetrics: InsertUsageMetrics): Promise<UsageMetrics> {
    const id = randomUUID();
    const metric: UsageMetrics = {
      id,
      userId: insertMetrics.userId,
      date: insertMetrics.date ?? new Date(),
      descriptionAgentUses: insertMetrics.descriptionAgentUses ?? 0,
      imageAgentUses: insertMetrics.imageAgentUses ?? 0,
      pricingAgentUses: insertMetrics.pricingAgentUses ?? 0,
      publishingAgentUses: insertMetrics.publishingAgentUses ?? 0,
      creditsUsed: insertMetrics.creditsUsed ?? 0
    };
    this.usageMetrics.set(id, metric);
    return metric;
  }

  async deleteUserUsageMetrics(userId: string): Promise<boolean> {
    const metrics = Array.from(this.usageMetrics.entries())
      .filter(([, metric]) => metric.userId === userId);
    metrics.forEach(([id]) => this.usageMetrics.delete(id));
    return metrics.length > 0;
  }

  private async initializeDefaultPlans(): Promise<void> {
    const defaultPlans: InsertPricingPlan[] = [
      {
        name: "basic",
        displayName: "Basic",
        description: "Perfect for getting started",
        price: 2900, // $29 in cents
        currency: "USD",
        productCredits: 20,
        hasApiAccess: false,
        isContactSales: false,
        features: [
          "20 product listings",
          "Basic AI optimization",
          "Email support",
          "Standard processing speed",
          "Monthly credit refresh"
        ],
        isPopular: false,
        sortOrder: 1
      },
      {
        name: "pro",
        displayName: "Pro",
        description: "Best for growing businesses",
        price: 5900, // $59 in cents
        currency: "USD",
        productCredits: 50,
        hasApiAccess: false,
        isContactSales: false,
        features: [
          "50 product listings",
          "Advanced AI optimization",
          "Priority email support",
          "Faster processing speed",
          "Analytics dashboard",
          "Monthly credit refresh"
        ],
        isPopular: true,
        sortOrder: 2
      },
      {
        name: "plus",
        displayName: "Plus",
        description: "For serious e-commerce operations",
        price: 9900, // $99 in cents
        currency: "USD",
        productCredits: 100,
        hasApiAccess: true,
        isContactSales: false,
        features: [
          "100+ product listings",
          "Premium AI optimization",
          "Live chat support",
          "Fastest processing speed",
          "Advanced analytics",
          "API access",
          "Monthly credit refresh"
        ],
        isPopular: false,
        sortOrder: 3
      },
      {
        name: "enterprise",
        displayName: "Enterprise",
        description: "Custom solutions for large teams",
        price: null, // Custom pricing
        currency: "USD",
        productCredits: null, // Unlimited
        hasApiAccess: true,
        isContactSales: true,
        features: [
          "Unlimited product listings",
          "Custom AI model training",
          "Dedicated account manager",
          "24/7 phone support",
          "Custom integrations",
          "White-label options",
          "SLA guarantees",
          "Volume discounts"
        ],
        isPopular: false,
        sortOrder: 4
      }
    ];

    for (const planData of defaultPlans) {
      await this.createPricingPlan(planData);
    }
  }
}

export class DatabaseStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  private pool: InstanceType<typeof Pool>;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL!,
    });
    this.db = drizzle(this.pool);
  }

  async initialize(): Promise<void> {
    await this.initializeDefaultPlans();
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.email, email));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async updateUserPassword(id: string, hashedPassword: string): Promise<User | undefined> {
    const result = await this.db.update(users)
      .set({ password: hashedPassword })
      .where(eq(users.id, id))
      .returning();
    return result[0];
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await this.db.delete(users).where(eq(users.id, id)).returning();
    return result.length > 0;
  }

  async getAllPricingPlans(): Promise<PricingPlan[]> {
    return await this.db.select().from(pricingPlans).orderBy(pricingPlans.sortOrder);
  }

  async getPricingPlan(id: string): Promise<PricingPlan | undefined> {
    const result = await this.db.select().from(pricingPlans).where(eq(pricingPlans.id, id));
    return result[0];
  }

  async createPricingPlan(insertPlan: InsertPricingPlan): Promise<PricingPlan> {
    const result = await this.db.insert(pricingPlans).values(insertPlan).returning();
    return result[0];
  }

  async getUserSubscription(userId: string): Promise<UserSubscription | undefined> {
    const result = await this.db.select().from(userSubscriptions).where(
      and(eq(userSubscriptions.userId, userId), eq(userSubscriptions.isActive, true))
    );
    return result[0];
  }

  async createUserSubscription(insertSubscription: InsertUserSubscription): Promise<UserSubscription> {
    const result = await this.db.insert(userSubscriptions).values(insertSubscription).returning();
    return result[0];
  }

  async updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription | undefined> {
    const result = await this.db.update(userSubscriptions)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(userSubscriptions.id, id))
      .returning();
    return result[0];
  }

  async deleteUserSubscriptions(userId: string): Promise<boolean> {
    const result = await this.db.delete(userSubscriptions)
      .where(eq(userSubscriptions.userId, userId))
      .returning();
    return result.length > 0;
  }

  async getAllLeads(): Promise<Lead[]> {
    return await this.db.select().from(leads);
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const result = await this.db.insert(leads).values(insertLead).returning();
    return result[0];
  }

  // Product Listings Methods
  async getUserProductListings(userId: string): Promise<ProductListing[]> {
    return await this.db
      .select()
      .from(productListings)
      .where(eq(productListings.userId, userId))
      .orderBy(productListings.createdAt);
  }

  async createProductListing(insertListing: InsertProductListing): Promise<ProductListing> {
    const result = await this.db.insert(productListings).values(insertListing).returning();
    return result[0];
  }

  async deleteUserProductListings(userId: string): Promise<boolean> {
    const result = await this.db.delete(productListings)
      .where(eq(productListings.userId, userId))
      .returning();
    return result.length > 0;
  }

  // Usage Metrics Methods
  async getUserUsageMetrics(userId: string, days: number): Promise<UsageMetrics[]> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return await this.db
      .select()
      .from(usageMetrics)
      .where(
        and(
          eq(usageMetrics.userId, userId),
          sql`${usageMetrics.date} >= ${cutoffDate}`
        )
      )
      .orderBy(usageMetrics.date);
  }

  async getTodayUsageMetrics(userId: string): Promise<UsageMetrics | undefined> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const result = await this.db
      .select()
      .from(usageMetrics)
      .where(
        and(
          eq(usageMetrics.userId, userId),
          sql`DATE(${usageMetrics.date}) = DATE(${today})`
        )
      );
    
    return result[0];
  }

  async updateUsageMetrics(id: string, updates: Partial<UsageMetrics>): Promise<UsageMetrics> {
    const result = await this.db
      .update(usageMetrics)
      .set(updates)
      .where(eq(usageMetrics.id, id))
      .returning();
    
    if (!result[0]) {
      throw new Error("Usage metric not found");
    }
    
    return result[0];
  }

  async createUsageMetrics(insertMetrics: InsertUsageMetrics): Promise<UsageMetrics> {
    const result = await this.db.insert(usageMetrics).values(insertMetrics).returning();
    return result[0];
  }

  async deleteUserUsageMetrics(userId: string): Promise<boolean> {
    const result = await this.db.delete(usageMetrics)
      .where(eq(usageMetrics.userId, userId))
      .returning();
    return result.length > 0;
  }

  private async initializeDefaultPlans(): Promise<void> {
    const existingPlans = await this.db.select().from(pricingPlans);
    if (existingPlans.length > 0) {
      return;
    }

    const defaultPlans: InsertPricingPlan[] = [
      {
        name: "basic",
        displayName: "Basic",
        description: "Perfect for getting started",
        price: 2900,
        currency: "USD",
        productCredits: 20,
        hasApiAccess: false,
        isContactSales: false,
        features: [
          "20 product listings",
          "Basic AI optimization",
          "Email support",
          "Standard processing speed",
          "Monthly credit refresh"
        ],
        isPopular: false,
        sortOrder: 1
      },
      {
        name: "pro",
        displayName: "Pro",
        description: "Best for growing businesses",
        price: 5900,
        currency: "USD",
        productCredits: 50,
        hasApiAccess: false,
        isContactSales: false,
        features: [
          "50 product listings",
          "Advanced AI optimization",
          "Priority email support",
          "Faster processing speed",
          "Analytics dashboard",
          "Monthly credit refresh"
        ],
        isPopular: true,
        sortOrder: 2
      },
      {
        name: "plus",
        displayName: "Plus",
        description: "For serious e-commerce operations",
        price: 9900,
        currency: "USD",
        productCredits: 100,
        hasApiAccess: true,
        isContactSales: false,
        features: [
          "100+ product listings",
          "Premium AI optimization",
          "Live chat support",
          "Fastest processing speed",
          "Advanced analytics",
          "API access",
          "Monthly credit refresh"
        ],
        isPopular: false,
        sortOrder: 3
      },
      {
        name: "enterprise",
        displayName: "Enterprise",
        description: "Custom solutions for large teams",
        price: null,
        currency: "USD",
        productCredits: null,
        hasApiAccess: true,
        isContactSales: true,
        features: [
          "Unlimited product listings",
          "Custom AI model training",
          "Dedicated account manager",
          "24/7 phone support",
          "Custom integrations",
          "White-label options",
          "SLA guarantees",
          "Volume discounts"
        ],
        isPopular: false,
        sortOrder: 4
      }
    ];

    for (const planData of defaultPlans) {
      await this.db.insert(pricingPlans).values(planData);
    }
  }
}

const storageInstance = new MemStorage();

export const storage = storageInstance;

export async function initializeStorage(): Promise<void> {
  // MemStorage initializes in constructor, but this keeps the interface consistent
}
