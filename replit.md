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

## Recent Changes (2025-09-29)
- Successfully imported GitHub project to Replit environment
- Installed all npm dependencies (tsx was missing initially)
- Configured workflow to run on port 5000 with webview output type
- Verified backend API endpoints are working (tested /api/test)
- Frontend displaying correctly with AI Commerce Studio landing page
- Backend and frontend integrated on same port with proper routing
- Vite development server pre-configured with allowedHosts: true for Replit proxy support
- Deployment configuration set up for autoscale with build and start commands
- Project fully functional and ready for development

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