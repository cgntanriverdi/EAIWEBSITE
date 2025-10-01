# AI Commerce Studio

## Overview
This is a full-stack web application for an AI Commerce Studio that helps e-commerce businesses optimize their product listings using AI-powered agents. The application provides pricing plans and subscription management for various AI commerce services.

## Project Architecture
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Routing**: Wouter for client-side routing
- **UI**: Shadcn/ui components with Tailwind CSS
- **State Management**: TanStack Query for server state
- **Storage**: In-memory storage (MemStorage) for development
- **Forms**: React Hook Form with Zod validation

## Recent Changes (2025-10-01)
- Fresh GitHub import successfully configured for Replit environment
- All npm dependencies properly installed and verified (Node.js 20)
- Configured workflow "Start application" to run on port 5000 with webview output type
- Verified backend API endpoints are working correctly:
  - /api/test returns proper JSON response
  - /api/pricing-plans returning 4 pricing plans (Basic, Pro, Plus, Enterprise)
  - /api/leads endpoint for email signups
  - /api/contact-sales endpoint for enterprise inquiries
  - All API routes tested and functional
- Frontend displaying correctly with AI Commerce Studio landing page
- Tested multiple pages successfully:
  - Landing page with hero section and email signup
  - Pricing page with plan comparison
  - Products page with AI agents showcase
- Backend and frontend integrated on same port (5000) with proper routing
- Vite development server configured with allowedHosts: true for Replit proxy support (already in codebase)
- Server properly binding to 0.0.0.0:5000 for Replit environment
- HMR (Hot Module Replacement) working correctly
- Deployment configuration set up for autoscale:
  - Build: npm run build (Vite + esbuild)
  - Start: npm start (production mode)
  - Target: autoscale (suitable for stateless web applications)
- No LSP diagnostics errors found - code is clean
- Project fully functional and ready for development and deployment
- Import process completed successfully

### Description Agent Page Redesign (October 1, 2025) ✨
- Complete redesign matching Stripe.com Terminal aesthetics, inspired by provided Stripe Terminal screenshot
- **Hero Section**: Navy blue gradient (#0A2540 → #1e3a5f → #0F172A) with realistic editor mockup
- **Editor Mockup**:
  - Browser chrome with macOS-style dots and address bar
  - Product Descriptions toolbar with Edit/Generate buttons
  - Live stats: "1,423 Created today", "94% Quality score", "0.8s Avg. time"
  - Product description cards showing "Ready" and "Generating..." states
  - Floating KPI cards: "+140% Conversion rate", "1.8M+ Descriptions written"
- **Stripe-Aligned Design**:
  - Minimal icon treatments with ring borders (no filled backgrounds)
  - Large typographic metrics without heavy card chrome
  - Subtle shadows (shadow-xl/lg) for professional elevation
  - Generous whitespace (py-32 sections)
  - Alternating white/gray-50 backgrounds
- **Sections**:
  - Navy gradient hero with realistic editor UI mockup
  - 6-feature grid with minimal stroke-only icons
  - Before/After comparison with interactive category selector
  - Quantitative metrics showing word count, engagement, conversion improvements
  - "How It Works" with 3-step visual workflow (input → AI processing → output)
  - Clean metrics display (300%, 2.4x, 85%)
  - Navy gradient CTA section with full navigation
- **CTA Functionality**: All CTAs properly wrapped in Link components
  - "Start writing" → /pricing
  - "See examples" → smooth scroll to examples section
  - "Try it now" → /pricing
  - "Start writing today" → /pricing
- **Color Palette**: Stripe navy (#0A2540), indigo accents (#4F46E5)
- **Typography**: Clear hierarchy matching Stripe's product pages
- Architect-reviewed and approved - production ready

### Image Generation Agent Page Redesign (October 1, 2025)
- Complete redesign matching Stripe.com Terminal and Payments page aesthetics
- **Critical Fix**: Resolved hero visibility issue (z-index layering) - content now properly visible on navy gradient
- **Hero Section**: Deep navy gradient (#0A2540 → #1e3a5f → #0F172A) with realistic dashboard mockup
- **Dashboard Mockup**: 
  - Browser chrome with macOS-style dots and address bar
  - Product Images toolbar with Upload/Generate buttons  
  - Live stats: "2,847 Generated today", "98% Quality score", "1.2s Avg. time"
  - 6-image grid showing "Done" and "Processing..." states
  - Floating KPI cards: "2.5M+ Images generated"
- **Stripe-Aligned Design**:
  - Minimal icon treatments with ring borders (no filled backgrounds)
  - Large typographic metrics without heavy card chrome
  - Subtle shadows only on mockups
  - Generous whitespace (py-32 sections)
  - Alternating white/gray-50 backgrounds
- **Sections**: 
  - Navy gradient hero with realistic UI mockup
  - 6-feature grid with minimal monochrome icons
  - "How It Works" with 3-step visual workflow
  - Clean metrics display (300%, 150%, 80%)
  - Mobile section with iPhone mockup
  - Navy gradient CTA section
- **Color Palette**: Stripe navy (#0A2540), indigo accents (#4F46E5)
- **Typography**: Clear hierarchy matching Stripe's product pages
- Architect-reviewed and approved - production ready

## Previous Changes (2025-09-30)
- Comprehensive redesign of all four agent pages to match Stripe.com aesthetic (September 30, 2025):
  - **Hero Sections**: Dark navy blue background (#0A2540) with clean white text and eyebrow labels
  - **Section Backgrounds**: Alternating white (#FFFFFF) and light cream (#F7F4F0) sections
  - **Cards & Components**: Simplified white backgrounds with subtle gray borders and shadows
  - **Typography**: Removed all gradient text effects, using gray-900 for headings and gray-600 for body text
  - **Color Scheme**: Navy blue primary, indigo-600 accent, minimal gradient usage
  - **Design Philosophy**: Clean, professional, trustworthy aesthetic matching Stripe's design system
  - Pages redesigned: DescriptionAgentPage, ImageGenerationAgentPage, PricingAgentPage, PublishingAgentPage
  - All functionality, animations, and interactive elements preserved
  - No LSP errors - code is clean and production-ready

## Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities and query client
│   │   └── App.tsx      # Main app component
│   └── index.html       # HTML template
├── server/           # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Storage interface and implementation
│   └── vite.ts          # Vite development setup
├── shared/           # Shared types and schemas
│   └── schema.ts        # Drizzle schemas and types
└── package.json      # Dependencies and scripts
```

## User Preferences
- Uses in-memory storage for development
- Prefers TypeScript for type safety
- Uses modern React patterns with hooks
- Follows Replit environment best practices
- Design aesthetic: Stripe-inspired professional design system
  - Navy blue hero sections (#0A2540) with white text
  - Alternating white and light cream section backgrounds
  - Minimal gradient usage, clean typography
  - Subtle shadows and borders on cards
  - Indigo-600 accent color for CTAs and highlights

## Key Features
- Pricing plans management (Basic, Pro, Plus, Enterprise)
- User subscription tracking
- Contact sales form for enterprise plans
- Responsive design with dark/light mode support
- Real-time updates with TanStack Query

## Development
- Run `npm run dev` to start the development server
- Backend and frontend served on port 5000
- Hot module replacement enabled via Vite
- Proper host configuration for Replit proxy support