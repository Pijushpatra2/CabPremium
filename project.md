# DayNightCab Taxi Booking Website

A premium, modern Taxi Booking Website built on Next.js 15 (App Router), TypeScript, Tailwind CSS (v4), Framer Motion, and Resend.

---

## 🛠️ Technology Stack

- **Core Framework**: Next.js 15 (App Router, React 19)
- **Typing**: TypeScript
- **Styling**: Tailwind CSS v4 (configured inside `src/app/globals.css` using theme variables)
- **Animations**: Framer Motion (hover states, scroll reveals, timeline indicators)
- **Forms & Validation**: React Hook Form with Zod Resolvers
- **Email Delivery**: Resend (API route dispatch using HTML styled templates)
- **Icons**: Lucide React

---

## 📂 Directory Map & Purpose

```
/
├── src/
│   ├── app/                          # App Router pages and configurations
│   │   ├── api/                      # Backend dispatch API endpoints
│   │   │   ├── book/route.ts         # Handles Taxi Booking submissions and emails
│   │   │   └── contact/route.ts      # Handles contact inquiries and notifications
│   │   ├── about/page.tsx            # Company history and stats subpage
│   │   ├── services/page.tsx         # In-depth list of taxi ride plans
│   │   ├── fleet/page.tsx            # Technical fleet sheets (Sedan/SUV/Luxury)
│   │   ├── routes/page.tsx           # Kilometer rates catalog and map lanes
│   │   ├── pricing/page.tsx          # Per-km pricing lists and packages
│   │   ├── faq/page.tsx              # Interactive search-friendly FAQ catalog
│   │   ├── contact/page.tsx          # Contact form with Zod validations
│   │   ├── globals.css               # CSS styling sheet containing custom theme config
│   │   ├── layout.tsx                # Header/Footer layout wrapping Toast context
│   │   ├── page.tsx                  # Home Page containing layout sections
│   │   ├── robots.ts                 # Search crawler dynamic configuration
│   │   └── sitemap.ts                # Dynamical crawler sitemap XML generator
│   ├── components/
│   │   ├── layout/                   # Global layout pieces
│   │   │   ├── Header.tsx            # Navigation and mobile side drawer menu
│   │   │   └── Footer.tsx            # Contacts, social channels, and sitemap links
│   │   ├── home/                     # Homepage subpage sections
│   │   │   ├── HeroSection.tsx       # Big text headline, buttons, and floating designs
│   │   │   ├── QuickBookingForm.tsx  # Interactive booking inputs and dispatch handler
│   │   │   ├── WhyChooseUs.tsx       # Six benefit cards with hover transformations
│   │   │   ├── ServicesSection.tsx   # Six core ride plans using custom images
│   │   │   ├── FleetSection.tsx      # Vehicle lists and passenger count limits
│   │   │   ├── BookingProcess.tsx    # Four step vertical/horizontal timeline
│   │   │   ├── PopularRoutes.tsx     # Direct outstation cards leaving Kolkata
│   │   │   ├── StatisticsSection.tsx # Count animation indicators
│   │   │   ├── Testimonials.tsx      # Slide review carousel
│   │   │   ├── FAQSection.tsx        # Framer-height collapsible accordion
│   │   │   └── CTASection.tsx        # Full-width green banner callouts
│   │   ├── shared/                   # Custom animated components
│   │   │   ├── ScrollReveal.tsx      # Scroll scrollview reveal animator wrapper
│   │   │   └── Counter.tsx           # requestAnimationFrame stats counter
│   │   └── ui/                       # Theme controls
│   │       └── Toast.tsx             # Custom Toast alert stack provider and hook
│   ├── lib/
│   │   ├── emails.ts                 # Professional HTML email templates for Resend
│   │   ├── schema.ts                 # Zod validation schema parameters
│   │   └── utils.ts                  # Classname merging utility function (ShadCN style)
├── project.md                        # Project layout summary (this file)
└── tsconfig.json                     # Compilation rules
```

---

## 🚦 Integration Details

### 1. Form Validation & Submissions
All forms utilize `react-hook-form` coupled with the `@hookform/resolvers/zod` helper matching validators defined in `src/lib/schema.ts`.
- **Taxi Bookings**: Submitted to `POST /api/book`. Upon Zod success, it assigns a booking ID (format: `CP-XXXXXX`) and dispatches two emails:
  1. *Customer Confirmation*: Copy of travel coordinates, scheduled hours, and passenger instructions.
  2. *Admin Alert*: Full log of vehicle selection, customer phone/email, and route specifications.
- **Inquiries**: Submitted to `POST /api/contact`. Zod success fires general message logs to the admin.

*Fallback Logic*: If `RESEND_API_KEY` is not present in `.env.local`, the APIs log details directly to stdout inside the Node console, ensuring full mock-testing capability during development.

### 2. Styling System
Tailwind CSS v4 is configured directly in `src/app/globals.css` inside the `@theme` directive, implementing:
- Primary Color (`#0B5D48`) -> `--color-primary`
- Secondary Color (`#16855D`) -> `--color-secondary`
- Accent Color (`#20C589`) -> `--color-accent`
- Dark Green Background (`#031410`) -> `--color-dark-bg`
We also declare custom keyframes for float animations and custom CSS helper classes for glassmorphic navbar and cards.

### 3. SEO Configurations
- Automated `sitemap.xml` mapping via `sitemap.ts`
- Automated `robots.txt` instructions via `robots.ts`
- Rich JSON-LD LocalBusiness & TaxiService schema injected in the homepage `src/app/page.tsx`
- Search spider friendly tag mapping in layouts.
