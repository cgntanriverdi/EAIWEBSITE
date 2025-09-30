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

## Recent Changes (2025-09-30)
- Re-imported GitHub project to Replit environment and verified setup
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
- Vite development server configured with allowedHosts: true for Replit proxy support
- HMR (Hot Module Replacement) working correctly
- Deployment configuration verified and set up for autoscale:
  - Build: npm run build (Vite + esbuild)
  - Start: npm start (production mode)
  - Target: autoscale (suitable for stateless web applications)
- No LSP diagnostics errors found - code is clean
- Project fully functional and ready for development and deployment
- Import process completed successfully
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