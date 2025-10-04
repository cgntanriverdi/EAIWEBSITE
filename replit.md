# AI Commerce Studio

## Overview
AI Commerce Studio is a full-stack web application designed to empower e-commerce businesses by optimizing their product listings using AI-powered agents. The platform offers various pricing plans and subscription management for AI commerce services, aiming to enhance product visibility, conversion rates, and overall market potential.

## User Preferences
- Currently uses MemStorage for data persistence (DatabaseStorage available for PostgreSQL when database is provisioned)
- Prefers TypeScript for type safety
- Uses modern React patterns with hooks
- Follows Replit environment best practices
- Design aesthetic: Stripe-inspired professional design system
  - Navy blue hero sections (#0A2540) with white text
  - Alternating white and light cream section backgrounds
  - Minimal gradient usage, clean typography
  - Subtle shadows and borders on cards
  - Indigo-600 accent color for CTAs and highlights

## Recent Changes (October 4, 2025)

- **Session Management Bug Fix (Latest)**: Fixed critical multi-account login issue with comprehensive solution
  - **Problem**: After logging out from account A and creating/logging into account B, users were being logged into account A instead of account B
  - **Root Causes** (Two separate issues identified):
    1. **Backend Cookie Clearing**: The logout endpoint was clearing the session cookie without specifying `path: '/'`, causing some browsers to retain old cookies
    2. **Frontend Query Caching**: React Query was caching user data from previous sessions and not invalidating the cache after login/signup
  - **Solutions Applied**:
    1. **Backend Fix**: Added `path: '/'` parameter to `res.clearCookie()` calls in logout and delete account endpoints (`server/routes.ts` lines 134 and 215)
    2. **Frontend Fix**: Added `queryClient.invalidateQueries()` in login and signup success handlers to clear all cached queries and force fresh data fetch (`client/src/pages/LoginPage.tsx` line 36 and `client/src/pages/SignUpPage.tsx` line 34)
  - **Impact**: Sessions now properly clear on logout AND cached user data is invalidated on login/signup, completely preventing cross-account session bleeding
  - ✅ Comprehensive fix addresses both backend and frontend issues
  - 📝 Users can now logout and login to different accounts without any session or cache conflicts

- **Fresh GitHub Import Setup Complete**: Successfully configured project for Replit environment from fresh GitHub clone
  - ✅ Workflow "Start application" configured: `npm run dev` on port 5000 with webview output type
  - ✅ Vite dev server properly configured with `allowedHosts: true` for Replit proxy compatibility (verified in codebase)
  - ✅ Express server running on 0.0.0.0:5000 with trust proxy enabled (verified in codebase)
  - ✅ Using MemStorage for immediate functionality (DatabaseStorage available when database is provisioned)
  - ✅ In-memory storage initialized with 4 default pricing plans (Basic $29, Pro $59, Plus $99, Enterprise custom)
  - ✅ Frontend verified functional: Landing page renders correctly with hero section, navigation, and metrics dashboard
  - ✅ Deployment configuration set up for autoscale deployment target with build and start scripts
  - ✅ Application fully operational and ready for use in Replit environment
  - 📝 Note: To use PostgreSQL, provision a database and switch storage to DatabaseStorage in `server/storage.ts`
  - 📝 SendGrid integration available for email functionality

- **Email-Based Authentication Implementation**: Migrated from username-based to email-based authentication with comprehensive validation
  - ✅ Database migration: Renamed `username` column to `email` in users table
  - ✅ Backend updates:
    - Updated Drizzle schema with email validation (Zod `z.string().email()`)
    - Configured Passport LocalStrategy with `usernameField: 'email'`
    - Updated all storage methods to use `getUserByEmail()` and `createUser()` with email
    - Updated API routes to validate and return email instead of username
  - ✅ Frontend updates:
    - Login and SignUp pages now use email input with HTML5 `type="email"` validation
    - All user display components (Dashboard, Settings, MyProducts) show email
    - Avatar fallbacks derived from email (first 2 characters)
    - Removed username field from Settings page
  - ✅ Architect review confirmed implementation is production-ready
  - ✅ All changes applied via hot module replacement without workflow restart

## Previous Changes (October 3, 2025)
- **Database Migration**: Switched from MemStorage to DatabaseStorage (PostgreSQL) for persistent data storage
- **Authentication Improvements**:
  - Fixed session management by adding `sameSite: "lax"` cookie attribute to prevent intermittent 401 errors
  - Automatic subscription creation: New users now automatically get a Basic plan subscription on registration
  - Improved error handling: Registration fails fast if no pricing plans are available
- **UI/UX Enhancements**:
  - Added shake animation to login card on authentication failure
  - Added on-card error message display for login failures (in addition to toast notifications)
  - Error messages automatically clear when user resubmits the form

## System Architecture
The application is built as a full-stack web application with a React frontend and an Express.js backend, both written in TypeScript.

**UI/UX Decisions:**
The design adheres to a Stripe-inspired professional aesthetic, featuring:
- Navy blue gradient hero sections with realistic UI mockups for agent pages.
- Alternating white and light gray (`#F7F4F0`) backgrounds for sections.
- Minimalistic icon treatments (stroke-only with ring borders).
- Large typographic metrics and generous whitespace.
- Subtle shadows for professional elevation.
- Clear hierarchy in typography and a color palette primarily using Stripe navy (`#0A2540`) and indigo accents (`#4F46E5`).
- Responsive design with dark/light mode support.

**Technical Implementations:**
- **Frontend**: React with TypeScript, Vite for build, Wouter for routing, Shadcn/ui with Tailwind CSS for UI, TanStack Query for server state management, and React Hook Form with Zod for form validation.
- **Backend**: Express.js with TypeScript, supporting API endpoints for pricing plans, leads, and sales inquiries.
- **Storage**: In-memory storage (MemStorage) is the default, with a DatabaseStorage class supporting PostgreSQL via Drizzle ORM and `node-postgres` for persistent data.
- **Feature Specifications**:
    - **AI Agents**: Dedicated pages for Description, Image Generation, Pricing, and Publishing agents, each with unique mockups and features.
    - **Pricing Plans**: Management of Basic, Pro, Plus, and Enterprise plans with subscription tracking.
    - **Contact Forms**: Functionality for lead generation and enterprise sales inquiries.
    - **Real-time Updates**: Achieved through TanStack Query.
    - **Onboarding Tutorial**: Interactive tutorial with rainbow gradient design that appears for new users on their first dashboard visit. Features:
        - Multi-step guided tour with smooth animations
        - Spotlight highlighting of specific dashboard sections
        - Rainbow gradient header animation matching signup page aesthetic
        - Progress indicators and skip functionality
        - Persistent state management via localStorage to prevent repeat displays

**System Design Choices:**
- The application is configured for seamless deployment on Replit, with Node.js v20, npm dependency management, and specific port and host configurations.
- The project structure separates client, server, and shared code for modularity.
- Development uses Hot Module Replacement (HMR) via Vite.

## External Dependencies
- **UI Framework**: Shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Form Management**: React Hook Form
- **Schema Validation**: Zod
- **Database (Optional)**: PostgreSQL
- **ORM (Optional)**: Drizzle ORM (`drizzle-orm`)
- **PostgreSQL Driver (Optional)**: `node-postgres` (`pg`)
- **Build Tool**: Vite