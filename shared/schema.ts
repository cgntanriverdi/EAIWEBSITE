import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Pricing Plans Schema
export const pricingPlans = pgTable("pricing_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(), // Basic, Pro, Plus, Enterprise
  displayName: text("display_name").notNull(),
  description: text("description").notNull(),
  price: integer("price"), // Price in cents, null for Enterprise
  currency: text("currency").default("USD"),
  productCredits: integer("product_credits"), // 20, 50, 100, null for unlimited
  hasApiAccess: boolean("has_api_access").default(false),
  isContactSales: boolean("is_contact_sales").default(false),
  features: text("features").array(), // Array of feature strings
  isPopular: boolean("is_popular").default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

// User Subscriptions Schema
export const userSubscriptions = pgTable("user_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  planId: varchar("plan_id").notNull().references(() => pricingPlans.id),
  creditsRemaining: integer("credits_remaining").default(0),
  isActive: boolean("is_active").default(true),
  startDate: timestamp("start_date").default(sql`now()`),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const insertPricingPlanSchema = createInsertSchema(pricingPlans).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertUserSubscriptionSchema = createInsertSchema(userSubscriptions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertPricingPlan = z.infer<typeof insertPricingPlanSchema>;
export type PricingPlan = typeof pricingPlans.$inferSelect;
export type InsertUserSubscription = z.infer<typeof insertUserSubscriptionSchema>;
export type UserSubscription = typeof userSubscriptions.$inferSelect;

// Leads Schema
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  company: text("company"),
  consent: boolean("consent").default(true),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
