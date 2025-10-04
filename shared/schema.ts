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

// Workflow Data Schemas (Client-side only - backend in AWS)

// Image data schema for workflow
export const workflowImageSchema = z.object({
  url: z.string().url(),
  pose: z.string().optional(),
  angle: z.string().optional(),
});

// Product option schema for workflow
export const productOptionSchema = z.object({
  name: z.string(),
  values: z.array(z.string()),
});

// Language enum
export const languageEnum = z.enum([
  'English',
  'Turkish',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Chinese'
]);

// AI Model Gender enum
export const aiModelGenderEnum = z.enum(['female', 'male', 'non-binary', 'auto']);

// Quality Level enum
export const qualityLevelEnum = z.enum(['standard', 'enhanced', 'premium', 'enterprise']);

// Tone/Persona enum
export const tonePersonaEnum = z.enum(['professional', 'casual', 'luxury', 'friendly', 'technical', 'creative']);

// Image Prompt Directives schema
export const imagePromptDirectivesSchema = z.object({
  lighting: z.enum(['natural', 'studio', 'golden-hour', 'dramatic', 'soft']).optional(),
  mood: z.enum(['bright', 'warm', 'cool', 'vibrant', 'minimalist', 'elegant']).optional(),
  cameraAngle: z.enum(['front', 'side', 'angled', 'top-down', 'close-up', 'full-body']).optional(),
  style: z.enum(['realistic', 'artistic', 'lifestyle', 'editorial', 'commercial']).optional(),
});

// Variant Pricing schema
export const variantPricingSchema = z.object({
  price: z.number().optional(),
  compareAtPrice: z.number().optional(),
  currency: z.string().default('USD'),
});

// Workflow Data Schema
export const workflowDataSchema = z.object({
  productTitle: z.string().min(1, "Product title is required"),
  productDetails: z.string().optional(),
  language: languageEnum,
  aiModelGender: aiModelGenderEnum,
  qualityLevel: qualityLevelEnum,
  tonePersona: tonePersonaEnum.optional(),
  imagePromptDirectives: imagePromptDirectivesSchema.optional(),
  variantPricing: variantPricingSchema.optional(),
  publishingPlatforms: z.array(z.string()).default([]),
  autoPublishShopify: z.boolean(),
  images: z.array(workflowImageSchema),
  productOptions: z.array(productOptionSchema),
  currentStep: z.number().int().min(0),
});

// Insert schema for WorkflowData (same as the main schema for client-side data)
export const insertWorkflowDataSchema = workflowDataSchema;

// Types
export type WorkflowImage = z.infer<typeof workflowImageSchema>;
export type ProductOption = z.infer<typeof productOptionSchema>;
export type Language = z.infer<typeof languageEnum>;
export type AIModelGender = z.infer<typeof aiModelGenderEnum>;
export type QualityLevel = z.infer<typeof qualityLevelEnum>;
export type TonePersona = z.infer<typeof tonePersonaEnum>;
export type ImagePromptDirectives = z.infer<typeof imagePromptDirectivesSchema>;
export type VariantPricing = z.infer<typeof variantPricingSchema>;
export type WorkflowData = z.infer<typeof workflowDataSchema>;
export type InsertWorkflowData = z.infer<typeof insertWorkflowDataSchema>;
