import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
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

// Product Listings Schema
export const productListings = pgTable("product_listings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  price: integer("price"),
  status: text("status").notNull().default("draft"),
  agentsUsed: text("agents_used").array().default(sql`ARRAY[]::text[]`),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const insertProductListingSchema = createInsertSchema(productListings).omit({
  id: true,
  createdAt: true,
});

export type InsertProductListing = z.infer<typeof insertProductListingSchema>;
export type ProductListing = typeof productListings.$inferSelect;

// Usage Metrics Schema
export const usageMetrics = pgTable("usage_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  date: timestamp("date").notNull().default(sql`now()`),
  descriptionAgentUses: integer("description_agent_uses").default(0),
  imageAgentUses: integer("image_agent_uses").default(0),
  pricingAgentUses: integer("pricing_agent_uses").default(0),
  publishingAgentUses: integer("publishing_agent_uses").default(0),
  creditsUsed: integer("credits_used").default(0),
});

export const insertUsageMetricsSchema = createInsertSchema(usageMetrics).omit({
  id: true,
});

export type InsertUsageMetrics = z.infer<typeof insertUsageMetricsSchema>;
export type UsageMetrics = typeof usageMetrics.$inferSelect;
