# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- **Supabase Integration**:
    - Configured `@supabase/ssr` and client/server utilities.
    - Set up Authentication Middleware.
    - Applied Database Schema for `posts` and `leads` (RLS policies enabled).
- **Application Scaffolding**:
    - Restructured `src/app` into Route Groups: `(marketing)`, `(admin)`, and `(auth)`.
    - Created Admin Dashboard layout with authentication protection.
    - Implemented Login page connected to Supabase Auth.
- **Documentation**:
    - Created `implementation_plan.md` for tracking progress.

## [2026-02-09]

### Changed

- **Brand Identity**:
    - Updated brand color palette to blue/navy scheme (brand-25 to brand-950).
    - Updated theme color from purple (#7f56d9) to blue (#2D5DC6).
    - Set light mode as the default theme for the entire site.

### Added

- **Marketing Website**:
    - Created Hero Section with:
        - Fintivio logo and navigation header.
        - "UAE's #1 Wealth Management Platform" badge.
        - Main headline: "Your Wealth's Reliable OS".
        - Supporting description text.
        - Two CTA buttons: "Schedule a Demo" and "Watch Demo".
        - Laptop mockup image showcasing the dashboard.
        - Dotted background pattern (theme-aware for light/dark modes).
    - Created Features Section with:
        - "All-in-One Administration" subtitle.
        - Three interactive feature boxes:
            - Manage Family Members
            - Manage Multiple Entities
            - Manage Providers and Contacts
        - Lottie animation placeholders for each feature.
        - Smooth transitions between features.
    - Implemented responsive header navigation:
        - Logo and main navigation links.
        - Product mega-menu dropdown with 9 feature items across 3 categories.
        - Resources mega-menu dropdown with Blog, Customer Stories, Press, About, and Careers.
        - Mobile-responsive hamburger menu.
        - Hover interactions with proper dropdown switching.

- **UI Components**:
    - Integrated `lottie-react` for animations.
    - Created placeholder Lottie animations:
        - Family Members (rotating circles).
        - Multiple Entities (pulsing squares).
        - Providers & Contacts (bouncing people figures).

### Changed

- **Authentication**:
    - Refactored Login page using Untitled UI components (Button, Input).
    - Applied new brand colors to login interface.
    - Wrapped login form in Suspense boundary for SSR compatibility.

### Added

- **Assets**:
    - Added Fintivio logo SVG.
    - Added hero mockup image.
    - Added hero background pattern SVG.
    - Added favicon.ico.
    - Added ISO 27001 and SOC 2 Type 2 certification badges.

- **Footer**:
    - Created responsive footer component with dark background (always appears dark regardless of theme):
        - Newsletter subscription section with email input and Subscribe button.
        - Four-column link navigation (Product, Resources, Legal, Fintivio).
        - Company logo and tagline.
        - ISO 27001 and SOC 2 Type 2 certification badges.
        - Social media links (X, LinkedIn, Facebook, Instagram).
        - Copyright notice and responsive layout for mobile/desktop.
        - Fixed dark mode colors: Deep navy background (#0E2145) with white/gray text.

- **Pain Points Section**:
    - Created new section highlighting common family office challenges:
        - Section headline: "Managing wealth shouldn't require 12 spreadsheets, 5 custodian logins, and a full weekend".
        - Supporting subtitle about disconnected tools and manual processes.
        - Three feature cards with Untitled UI icons:
            - Fragmented Data (file-minus-02 icon)
            - Manual Reporting (zap-off icon)
            - No Single View (laptop-01 icon)
        - Light blue background (#F0F7FF) with white cards.
        - Responsive grid layout (3 columns desktop, 1 column mobile).

- **Unified Platform Section**:
    - Created new section showcasing the unified dashboard experience:
        - Badge: "Manage Everything in One Place".
        - Headline: "Never go back-and-forth between apps again".
        - Description about importing financial data from multiple sources.
        - iPad mockup image showing the Fintivio dashboard (placeholder for future Lottie animation).
        - Three selectable asset type sections with interactive states:
            - Public Portfolio
            - Private Investments
            - Lifestyle Assets
        - Left border indicator shows active selection (blue when active).
        - Smooth transitions and hover effects on all asset types.
        - Light gray background with centered content layout.
        - Responsive design (3 columns desktop, 1 column mobile).

- **Testimonials Section**:
    - Created customer testimonial section with:
        - Deep blue background (#16326C) for visual contrast.
        - Company logo (Wildcrafted) at top.
        - Large testimonial quote about saving 40+ hours of manual work quarterly.
        - Customer avatar image (Amélie Laurent).
        - Name and title: "Portfolio Manager, Wildcrafted".
        - Motion animation on scroll into view.
        - Centered layout optimized for both desktop and mobile.

- **FAQ Section**:
    - Created comprehensive FAQ section with accordion functionality:
        - Section heading: "Frequently asked questions".
        - Subtitle: "Everything you need to know about the product and billing".
        - Six expandable FAQ items covering:
            - Free trial availability
            - Plan changes
            - Cancellation policy
            - Invoice customization
            - Billing process
            - Account email changes
        - Expand/collapse with Plus/Minus icons.
        - Smooth animation transitions when opening/closing.
        - First FAQ item open by default.
        - "Still have questions?" CTA section at bottom with:
            - Avatar group image of team members.
            - Contact prompt and "Get in touch" button.
        - Responsive design with centered layout.

- **CTA Section (Final)**:
    - Created final call-to-action section to convert visitors:
        - Headline: "Join the new wave of wealth management with Fintivio".
        - Three benefit checkmarks:
            - Discovery without Commitment
            - Personalized onboarding
            - Access to all features
        - "Schedule a Demo" primary button.
        - Large dashboard mockup image showcasing the Fintivio interface.
        - Light blue background (bg-brand-25) for visual appeal.
        - Two-column layout on desktop (content left, image right).
        - Stacked layout on mobile with full-width button.

## Next Steps

- **Build Main Website**: Implement the marketing pages (Home, About, etc.) in the `(marketing)` route group.
- **Content Management**: Implement Blog Post creation and editing in the Admin Dashboard.
- **Animations**: Replace placeholder Lottie animations with production-ready animations.
