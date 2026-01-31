# SubSentry - Subscription Management App

## Project Overview
Build SubSentry — a beautiful, polished subscription management web app that helps users track recurring charges, visualize spending, and never get caught off-guard by forgotten free trials. This needs to look like a premium, VC-funded SaaS product.

## Design Direction (CRITICAL)
**Aesthetic:** Premium fintech meets modern dashboard. Clean, trustworthy, aspirational. Think "Notion meets Wealthfront."

**Color Palette:**
- Primary: Deep Trust Blue #1e3a5f (navy, professional)
- Accent: Warm Gold #f59e0b (alerts, CTAs, highlights)
- Success: Emerald #10b981 (savings, positive)
- Danger: Rose #f43f5e (cancellations, warnings)
- Background: Slate #f8fafc (clean, airy)
- Surface: White #ffffff (cards)
- Text: Slate-900 for headings, Slate-600 for body

**Typography:**
- Headings: Inter or Geist (modern, clean sans-serif)
- Body: Inter or system-ui
- Numbers: Tabular figures for alignment

**Visual Language:**
- Soft shadows (0 4px 6px -1px rgba(0,0,0,0.1))
- Rounded corners (rounded-xl, rounded-2xl)
- Subtle gradients (bg-gradient-to-br from-slate-50 to-slate-100)
- Micro-interactions on every interactive element
- Glassmorphism for modals/overlays

## Sections Required

### 1. Landing Page (Marketing)
- Hero: Large headline "Guard your wallet from subscription creep" with animated gradient text
- Subheadline explaining value prop
- CTA button: "Start Tracking Free"
- Feature grid with icons (3-4 features with illustrations)
- Social proof section (testimonial cards)
- Final CTA section

### 2. Dashboard (Main App)
- **Header:** Logo, navigation (Dashboard, Subscriptions, Settings), user avatar
- **Stats Cards Row:**
  - Total Monthly Spend (large number, trend indicator)
  - Active Subscriptions count
  - Upcoming Renewals (next 7 days)
  - Potential Annual Savings
- **Spending Chart:** Recharts bar chart or area chart showing monthly spend over 6 months
- **Subscriptions List:**
  - Card-based layout (not table)
  - Each card: Logo/icon, name, cost, billing cycle, next renewal date
  - Color-coded by category (Entertainment, Productivity, etc.)
  - Edit/Delete actions on hover
  - "Add Subscription" FAB or prominent button

### 3. Add/Edit Subscription Modal
- Clean form with fields:
  - Name (text input)
  - Cost (currency input with $ prefix)
  - Billing Cycle (dropdown: Monthly, Yearly, Weekly)
  - Category (dropdown with icons)
  - Next Renewal Date (date picker)
  - Notes (optional textarea)
- Save/Cancel buttons
- Smooth modal animation (scale + fade)

### 4. Settings Page
- Export data button
- Preferences (currency, notifications)
- Clear all data option
- About section

## Animations & Interactions (CRITICAL)

### Page Load
- Staggered fade-in for dashboard cards (0.1s delay each)
- Numbers count up from 0 to actual value
- Chart draws in with animation

### Hover States
- Cards lift up (translateY -4px) with shadow increase
- Buttons scale slightly (1.02) with glow
- List items highlight background

### Micro-interactions
- Button press: scale down to 0.98
- Success toast: slide in from top with checkmark
- Modal: backdrop blur + content scale in
- Deletion: confirm dialog + item fades out

### Scroll Animations
- Sections fade in as user scrolls
- Parallax on hero background

## Technical Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS with custom config
- shadcn/ui components (Button, Card, Dialog, Input, Select)
- Recharts for data visualization
- Framer Motion for animations
- Lucide React icons
- LocalStorage for data persistence

## Data Structure
```typescript
interface Subscription {
  id: string;
  name: string;
  cost: number;
  billingCycle: 'monthly' | 'yearly' | 'weekly';
  category: string;
  nextRenewal: Date;
  notes?: string;
}
```

## Responsive Design
- Mobile-first approach
- Dashboard: stack cards vertically on mobile
- Modal: full-screen on mobile, centered on desktop
- Navigation: hamburger menu on mobile

## File Structure
```
src/
├── app/
│   ├── page.tsx (landing)
│   ├── dashboard/page.tsx
│   ├── settings/page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── landing/
│   ├── dashboard/
│   └── shared/
├── hooks/
│   └── use-subscriptions.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## Deliverables
- Production-ready Next.js app
- Static export configured
- All animations smooth at 60fps
- Mobile responsive
- Looks like a real commercial product
- README with setup instructions

## Success Criteria
- UI looks premium and polished
- Animations feel native and smooth
- User can add/edit/delete subscriptions
- Dashboard shows useful insights
- App feels fast and responsive
- Design would pass for a funded startup's MVP
