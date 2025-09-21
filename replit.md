# Overview

A modern, professional portfolio website for Rathwa Balavant Trikam Bhai showcasing his profile as an aspiring Computer Engineer and AI Enthusiast. The application features an interactive single-page design with 3D animations, smooth scrolling sections, and responsive layouts built using React, TypeScript, and modern web technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Animations**: GSAP for complex animations and Three.js for 3D effects
- **State Management**: React Query for server state and React hooks for local state

## Design System
- **Component Library**: Comprehensive UI components using Radix UI primitives
- **Theme System**: Dark/light theme support with CSS custom properties
- **Typography**: Inter and Space Grotesk fonts for modern typography
- **Color Palette**: Professional color scheme with primary cyan and secondary purple
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Layer**: RESTful API structure with modular route registration
- **Middleware**: Request logging, JSON parsing, and error handling
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Development**: Hot reload with Vite integration in development mode

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database
- **Schema**: User management schema with UUID primary keys
- **Validation**: Zod schemas for runtime type checking
- **Migrations**: Drizzle migrations for database schema management

## Development Tooling
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Checking**: Strict TypeScript configuration across client, server, and shared code
- **Code Organization**: Monorepo structure with shared types and schemas
- **Path Aliases**: Clean imports with @ and @shared path mapping

# External Dependencies

## UI and Animation Libraries
- **Radix UI**: Accessible headless UI components for complex interactions
- **GSAP**: Professional animation library for scroll triggers and complex animations
- **Three.js**: 3D graphics library for interactive background elements
- **Lucide React**: Modern icon library for consistent iconography

## Database and Hosting
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management tools

## Development and Deployment
- **Replit Integration**: Specialized Vite plugins for Replit environment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **React Hook Form**: Form management with validation
- **React Query**: Server state management and caching