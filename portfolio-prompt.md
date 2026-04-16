# Portfolio Website for Rishikesh Gundla (Senior BI Engineer)

## Role & Context

You are building a world-class, production-grade personal portfolio website for **Rishikesh Gundla** — a **Senior BI Engineer at Nutanix** based in Bangalore, India. This is not a template site. It must feel like it was hand-crafted by a seasoned developer with impeccable design taste. The target audience is **hiring managers, recruiters, and engineering leaders** at top-tier tech companies evaluating Rishikesh for **Data Engineer / Analytics Engineer / Senior BI Engineer** roles.

Use the `frontend-design` skill or any other relevant skills you have avialable as an when required and follow its guidelines rigorously. Avoid all generic "AI slop" aesthetics — no Inter font, no purple-on-white gradients, no cookie-cutter hero sections.

---

## Tech Stack

- **React (single-page app)** with functional components and hooks
- **Tailwind CSS** for utility styling + custom CSS for advanced effects
- **Framer Motion** (or CSS animations if unavailable) for scroll-triggered reveals, staggered entrances, and micro-interactions
- **Responsive**: Must be flawless on mobile, tablet, and desktop
- **Dark theme primary** with a refined accent palette (think: deep charcoal/navy base, crisp white text, one bold accent — electric teal, warm amber, or similar)
- No external backend — fully static, deployable on Vercel/Netlify

---

## Design Direction

**Aesthetic**: Editorial + Data-Driven Sophistication
Think: Bloomberg Terminal meets a high-end design portfolio. Clean grids. Data visualization motifs. Subtle animated chart elements or grid patterns in backgrounds. Monospaced accents for technical credibility. A serif or distinctive sans-serif display font paired with a clean body font.

**Key Design Principles**:
1. **Bold typography hierarchy** — oversized section titles, refined body text, monospaced code accents
2. **Intentional whitespace** — let content breathe; avoid visual clutter
3. **Micro-interactions** — subtle hover states on cards, smooth scroll transitions, cursor effects
4. **Data motifs** — subtle grid lines, dot patterns, or abstract chart shapes woven into backgrounds (reinforcing the BI/data identity)
5. **One memorable signature element** — e.g., an animated hero section with a "data stream" particle effect, or a live-updating stats ticker showing career metrics

---

## Site Structure & Sections

### 1. Hero / Landing Section
- **Name**: Rishikesh Gundla
- **Title**: Senior BI Engineer · Data Storyteller · Dashboard Architect
- **One-liner tagline**: *"Turning complex data into strategic clarity"*
- **Subtle animated background** — abstract data grid, flowing particles, or a minimal generative art canvas
- **CTA buttons**: "View My Work" (scrolls to projects) | "Download Resume" (PDF link) | "Let's Connect" (scrolls to contact)
- **Small floating badge/pill**: "Currently @ Nutanix" with a subtle glow or pulse

### 2. About Me
- Brief professional narrative (3–4 sentences max, written in first person):
  - Senior BI Engineer at Nutanix with expertise in transforming raw data into executive-grade dashboards and analytics solutions
  - Core stack: Tableau, SQL, Figma (for data design systems), Power BI, Microsoft Fabric, Databricks, PySpark
  - Passionate about bridging the gap between data engineering and business intelligence
- **Career stats ticker** (animated count-up on scroll):
  - `2+ Year at Nutanix` | `6+ High-Impact Dashboards` | `3+ Cross-Functional Teams` | `10+ Stakeholders Served`
  *(Rishikesh: update these numbers with your actuals)*

### 3. Skills & Tech Stack
- **Visual skill grid or interactive tag cloud** — not a boring list
- Group into categories:
  - **Core**: Tableau (Expert), SQL (Advanced), Figma (Dashboard Design)
  - **Upskilling**: Power BI, Microsoft Fabric, Databricks, PySpark, Azure Data Factory
  - **Tools & Workflows**: Jira, Confluence, Slack, Git
  - **Soft Skills**: Data Storytelling, Stakeholder Communication, Cross-functional Collaboration
- Each skill could have a subtle proficiency indicator (bar, dot scale, or radial chart — keeping it tasteful, not gimmicky)

### 4. Experience / Career Timeline
- **Interactive vertical timeline** with scroll-triggered reveal animations
- **Nutanix — Senior BI Engineer** (Current)
  - Highlight key workstreams:
    - CX Dashboard Suite
    - BizTech Project Velocity Dashboard
    - NAI Dashboard Suite
    - xGPT Feature-Level Analytics
    - Tableau Cloud POC
    - NetSuite 2.0 Testing
  - Key achievements:
    - Built comprehensive Tableau style guide & reusable design system
    - Delivered Supply Chain SSOT, RevOps BSC, NC2, Project Progress, True North dashboards
    - Led Tableau Admin responsibilities
    - Recognized by leadership for impact on high-visibility analytics
  *(Rishikesh: Add prior roles here if applicable — internships, freelance, etc.)*

### 5. Featured Projects (Portfolio Grid)
- **Filterable card grid** (filter by: Tableau | SQL | Design System | Analytics)
- Each card shows:
  - Project thumbnail/mockup (placeholder image or abstract graphic if no screenshot)
  - Project title
  - Short description (1–2 lines)
  - Tech tags (e.g., Tableau, SQL, Figma)
  - Hover effect: card lifts, shows "View Details" overlay
- Clicking a card opens a **modal or expanded view** with:
  - Problem statement
  - Approach / methodology
  - Key metrics / impact
  - Screenshots or embedded Tableau Public links (if available)
- **Suggested projects to feature** *(Rishikesh: flesh these out with your details)*:
  1. **CX Dashboard Suite** — End-to-end customer experience analytics
  2. **Supply Chain SSOT Dashboard** — Single source of truth for supply chain ops
  3. **RevOps Balanced Scorecard** — Executive-level revenue operations visibility
  4. **Tableau Style Guide & Design System** — Reusable component library for org-wide BI standardization
  5. **xGPT Feature-Level Analytics** — AI product analytics dashboard
  6. **Project Velocity Dashboard** — BizTech project tracking and delivery metrics

### 6. Certifications & Learning *(optional but recommended)*
- Any Tableau, SQL, Azure, Databricks certifications
- Courses completed or in-progress
- Presented as subtle badge/card layout
*(Rishikesh: add your certifications here)*

### 7. Testimonials / Recognition *(optional)*
- Manager recognition quote from Anshu Bhatnagar (if comfortable sharing publicly)
- Could be styled as a subtle pull-quote with attribution
*(Rishikesh: add if desired)*

### 8. Blog / Insights *(optional, future-proof)*
- Placeholder section for future articles
- Could link to Medium, LinkedIn posts, or be a simple "Coming Soon" teaser
- Keeps the site extensible

### 9. Contact Section
- **Clean contact form** (name, email, message) — can use Formspree or similar for handling
- **Direct links**: Email, LinkedIn, GitHub (if applicable)
- **Closing line**: *"Open to opportunities in Data Engineering, Analytics Engineering, and Senior BI roles. Let's build something meaningful with data."*
- Subtle animated background element to close the page with visual polish

### 10. Footer
- Minimal: Name, © 2026, social links (LinkedIn, GitHub, Email)
- Optional: "Built with React & deployed on Vercel" credit line
- Optional: Dark/light theme toggle

---

## Interactions & Animations

- **Page load**: Staggered fade-in/slide-up of hero elements (name → title → tagline → CTAs)
- **Scroll reveals**: Each section fades/slides in on scroll using Intersection Observer or Framer Motion
- **Navbar**: Sticky, minimal, transparent → solid on scroll. Smooth scroll to sections.
- **Project cards**: 3D tilt effect on hover (subtle), lift shadow
- **Stats counter**: Animated count-up triggered on scroll into view
- **Timeline**: Progressive reveal as user scrolls down
- **Cursor**: Optional custom cursor effect (dot follower) for desktop — skip on mobile
- **Page transitions**: Smooth, no jarring layout shifts

---

## Performance & Best Practices

- Lazy load images and heavy sections
- Semantic HTML for accessibility (proper heading hierarchy, alt text, ARIA labels)
- SEO meta tags (title, description, Open Graph tags for social sharing)
- Fast initial paint — critical CSS inlined, non-essential deferred
- Lighthouse score target: 90+ across all categories

---

## Placeholder Content Note

For any content marked with *(Rishikesh: ...)*, use realistic placeholder text that I can easily find-and-replace later. For project thumbnails, generate abstract data-themed placeholder graphics (e.g., stylized chart mockups, gradient mesh cards) rather than using generic stock images.

---

## Final Checklist Before Shipping

- [ ] All sections render correctly on mobile (320px), tablet (768px), desktop (1440px+)
- [ ] Animations are smooth and don't cause layout shifts
- [ ] No horizontal scroll on any viewport
- [ ] All links work (placeholder `#` is fine for now)
- [ ] Color contrast meets WCAG AA standards
- [ ] Resume download link is wired up (placeholder PDF for now)
- [ ] Contact form submits correctly (or has clear placeholder)
- [ ] Lighthouse audit: 90+ Performance, Accessibility, Best Practices, SEO
