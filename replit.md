# AI Commerce Studio - E-commerce Listing Automation SaaS

## Overview

AI Commerce Studio is a premium SaaS platform that elevates e-commerce product listings through AI-powered agentic workflows. The platform offers modular AI agents that can work independently or as part of a complete automation workflow, targeting e-commerce sellers who want to create professional, conversion-optimized product listings.

The application provides four core AI agents:
- **Description Agent**: Generates psychology-driven, persuasive product descriptions
- **Pricing Agent**: Analyzes competitors and suggests optimal pricing strategies
- **Image Generation Agent**: Creates hyper-realistic studio-quality model photography
- **Publishing Agent**: Seamlessly publishes listings to platforms like Shopify

Users can either select individual agents for specific needs or deploy the full end-to-end workflow for complete listing automation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with **React + TypeScript** using Vite as the build tool. The architecture follows a modern component-based approach with:

- **UI Framework**: Custom design system built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Design System**: Premium SaaS aesthetic inspired by huly.io, cluely.com, and autods.com with custom brand gradients and sophisticated animations

### Backend Architecture
The server follows a **Node.js + Express** pattern with TypeScript:

- **API Layer**: RESTful API with Express.js handling routing and middleware
- **Data Layer**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Development Setup**: Vite middleware integration for hot module replacement in development

### Database Design
The schema is designed around a subscription-based SaaS model:

- **Users Table**: Basic authentication and user management
- **Pricing Plans Table**: Flexible pricing structure supporting multiple tiers (Basic, Pro, Plus, Enterprise)
- **User Subscriptions Table**: Tracks user plan assignments, credit limits, and subscription status

Key design decisions:
- Credits-based usage model for flexible consumption
- Boolean flags for feature access (API access, contact sales)
- Flexible pricing structure supporting both fixed pricing and custom enterprise deals

### Styling and Design System
The application implements a premium design system with:

- **Color Palette**: Custom brand gradients from deep purple to electric blue with gold accents
- **Typography**: Inter/Satoshi font stack with custom weight hierarchy
- **Component Library**: Comprehensive UI components built on Radix UI primitives
- **Animation System**: Sophisticated hover effects, staggered reveals, and floating particles
- **Responsive Design**: Mobile-first approach with sophisticated layout systems

### Development Environment
The project is configured for modern development workflows:

- **TypeScript**: Strict type checking with path mapping for clean imports
- **Vite**: Fast build tool with HMR and optimized production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Path Aliases**: Clean import structure with @ aliases for components and utilities

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+ with React DOM for the user interface
- **TanStack Query**: Server state management and caching layer
- **Wouter**: Lightweight routing solution for single-page application navigation

### Database and ORM
- **Drizzle ORM**: Type-safe database operations and schema management
- **Neon Database**: PostgreSQL-compatible serverless database (via @neondatabase/serverless)
- **Database Migrations**: Drizzle Kit for schema versioning and migrations

### UI and Design
- **Radix UI**: Comprehensive primitive component library for accessible UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Modern icon library with consistent design language
- **Class Variance Authority**: Type-safe variant handling for component styling

### Forms and Validation
- **React Hook Form**: Performant form management with minimal re-renders
- **Zod**: TypeScript-first schema declaration and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Development and Build Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing and optimization pipeline

### Communication Services
- **SendGrid**: Email delivery service for transactional emails and notifications
- **Connect PG Simple**: PostgreSQL session store for Express sessions

The architecture is designed for scalability, maintainability, and premium user experience, with careful consideration for both individual agent usage and full workflow automation scenarios.