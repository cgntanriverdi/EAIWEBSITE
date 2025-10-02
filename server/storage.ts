import { type User, type InsertUser, type PricingPlan, type InsertPricingPlan, type UserSubscription, type InsertUserSubscription, type Lead, type InsertLead, users, pricingPlans, userSubscriptions, leads } from "@shared/schema";
import { randomUUID } from "crypto";
import pkg from "pg";
const { Pool } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
import { eq, and } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Pricing Plans
  getAllPricingPlans(): Promise<PricingPlan[]>;
  getPricingPlan(id: string): Promise<PricingPlan | undefined>;
  createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan>;
  
  // User Subscriptions
  getUserSubscription(userId: string): Promise<UserSubscription | undefined>;
  createUserSubscription(subscription: InsertUserSubscription): Promise<UserSubscription>;
  updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription | undefined>;
  
  // Leads
  getAllLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private pricingPlans: Map<string, PricingPlan>;
  private userSubscriptions: Map<string, UserSubscription>;
  private leads: Map<string, Lead>;

  constructor() {
    this.users = new Map();
    this.pricingPlans = new Map();
    this.userSubscriptions = new Map();
    this.leads = new Map();
    
    // Initialize default pricing plans
    this.initializeDefaultPlans();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
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
    this.initializeDefaultPlans();
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
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

  async getAllLeads(): Promise<Lead[]> {
    return await this.db.select().from(leads);
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const result = await this.db.insert(leads).values(insertLead).returning();
    return result[0];
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

export const storage = new DatabaseStorage();
