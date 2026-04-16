# Claude Code Prompt — Portfolio Website for Rishikesh Gundla

> **Usage**: Copy this entire prompt and paste it into Claude Code. Claude Code will use its available skills (especially `frontend-design`) to build the site. Iterate section by section or ship it all at once.

---

## Role & Context

You are building a world-class, production-grade personal portfolio website for **Rishikesh Gundla** — a **Senior Business Intelligence Engineer at Nutanix** based in Mumbai, India, with **5+ years of experience** in data analytics, BI engineering, and data-driven consulting. This is NOT a template site. It must feel like it was hand-crafted by a seasoned developer with impeccable design taste. The target audience is **hiring managers, recruiters, and engineering leaders** at top-tier tech companies evaluating Rishikesh for **Data Engineer, Analytics Engineer, and Senior BI** roles.

Use the `frontend-design` skill and follow its guidelines rigorously. Avoid all generic "AI slop" aesthetics — no Inter/Roboto/Arial fonts, no purple-on-white gradients, no cookie-cutter hero sections. Every design decision must be intentional and distinctive.

---

## Tech Stack

- **React (single-page app)** with functional components and hooks
- **Tailwind CSS** for utility styling + custom CSS for advanced effects
- **Framer Motion** (or CSS animations if unavailable) for scroll-triggered reveals, staggered entrances, and micro-interactions
- **Fully Responsive**: Must be flawless across all breakpoints:
  - **Mobile**: 320px – 480px (single column, touch-friendly tap targets, hamburger nav, no horizontal scroll)
  - **Tablet**: 768px – 1024px (adaptive grid, collapsible sections, comfortable reading width)
  - **Desktop**: 1280px – 1920px+ (full layout, hover effects, multi-column grids, generous whitespace)
  - Test every section at each breakpoint — no overflow, no cut-off text, no broken layouts
- **Dark theme primary** with a refined accent palette (deep charcoal/navy base, crisp white text, one bold accent color — electric teal, warm amber, or similar)
- No external backend — fully static, deployable on Vercel/Netlify

---

## Design Direction

**Aesthetic**: Editorial + Data-Driven Sophistication
Think: Bloomberg Terminal meets a high-end design portfolio. Clean grids. Data visualization motifs. Subtle animated chart elements or grid patterns in backgrounds. Monospaced accents for technical credibility. A distinctive serif or unique sans-serif display font paired with a clean body font.

**Key Design Principles**:
1. **Bold typography hierarchy** — oversized section titles, refined body text, monospaced code accents
2. **Intentional whitespace** — let content breathe; avoid visual clutter
3. **Micro-interactions** — subtle hover states on cards, smooth scroll transitions, cursor effects
4. **Data motifs** — subtle grid lines, dot patterns, or abstract chart shapes woven into backgrounds (reinforcing the BI/data identity)
5. **One memorable signature element** — e.g., an animated hero section with a "data stream" particle effect, or a live-updating stats ticker showing career metrics
6. **Mobile-first thinking** — every animation and layout must degrade gracefully; disable heavy effects (particles, cursor followers) on mobile for performance

---

## Site Structure & Content

### 1. Navigation Bar
- **Sticky navbar** — transparent on top, solid with subtle blur/shadow on scroll
- Links: About | Experience | Skills | Projects | Education | Contact
- **Mobile**: Hamburger menu with smooth slide-in drawer animation
- **Tablet**: Compact horizontal nav or collapsible menu
- **Desktop**: Full horizontal nav with hover underline effects

### 2. Hero / Landing Section
- **Name**: Rishikesh Gundla
- **Title**: Sr. Business Intelligence Engineer
- **Tagline**: *"Turning complex data into strategic clarity"*
- **Subtitle pills/badges**: `Tableau` . Power BI` . `Databricks` · `Microsoft Fabric` · `SQL` · `PySpark`
- **Subtle animated background** — abstract data grid, flowing particles, or minimal generative art canvas (disable on mobile for performance)
- **CTA buttons**: "View My Work" (scrolls to projects) | "Download Resume" (PDF link) | "Let's Connect" (scrolls to contact)
- **Resume PDF**: `YOUR_RESUME_PDF_URL_HERE`
  - Option A: Place your resume at `public/resume.pdf` in the project (the button already points to `/resume.pdf`)
  - Option B: Provide an external URL above (e.g., Google Drive, Dropbox link)
- **Floating badge**: "Currently @ Nutanix" with a subtle glow or pulse animation
- **Mobile**: Stack CTAs vertically, reduce hero font sizes proportionally, simplify background animation

### 3. About Me
- **Profile Picture**: `public/profile.jpeg` ✅ (placed)
- **Professional summary** (use this verbatim, style it beautifully):

  > Senior Business Intelligence Engineer with over five years of experience transforming complex data into strategic, decision-ready insights. At Nutanix, I operate across the full data lifecycle from pipeline engineering and large-scale data transformation to polished, stakeholder-facing analytics that directly influence executive decision-making.
  >
  > My technical practice spans both the analytics and engineering layers of the modern data stack. I leverage Tableau, Power BI, SQL, and Figma to design and standardize dashboard experiences that are analytically rigorous and built for enterprise-wide adoption, while working with Microsoft Fabric, Databricks, and PySpark to build resilient data pipelines and orchestrate transformations at scale.
  >
  > What sets me apart is the ability to think both upstream and downstream engineering robust data infrastructure while understanding how stakeholders interpret and act on that data. I thrive in fast-paced, collaborative environments with a relentless focus on automation, data quality, and scalable design ensuring every pipeline built and every dashboard shipped drives clarity, trust, and measurable business impact.

- **Career stats ticker** (animated count-up on scroll):
  - `5+ Years Experience` | `100+ High-Impact Dashboards` | `4 Companies` | `3 Certifications` | `10+ Data Pipelines Built` | `15+ Data Models Designed`
- **Mobile**: Stats display as a 2×2 grid instead of a horizontal row

### 4. Experience / Career Timeline
- **Interactive vertical timeline** with scroll-triggered reveal animations
- Each entry has: company logo placeholder, role title, duration, location, and expandable bullet points
- **Mobile**: Single-column timeline with left-aligned markers; tap to expand details
- **Tablet**: Alternating left-right timeline layout
- **Desktop**: Full alternating timeline with hover-expand cards

**Entries (in reverse chronological order):**

---

**Nutanix — Senior Business Intelligence Engineer**
*April 2024 – Present (2 years) · Bangalore, India*

- Architect and deliver high-impact dashboards, scalable data models, and end-to-end analytical solutions using Tableau, Power BI, and SQL powering data-driven decision-making across business units
- Design and deploy enterprise-grade BI solutions leveraging Microsoft Fabric, Databricks, and PySpark streamlining reporting workflows and reducing time-to-insight at scale
- Drive automation strategies across the analytics pipeline to enhance data quality, reduce processing latency, and optimize platform performance for near real-time decision-making
- Prototype and standardize dashboard design systems and reusable templates in Figma ensuring visual consistency and enterprise-wide adoption of BI assets
- Partner with cross-functional stakeholders to translate complex business requirements into scalable, insight-driven solutions delivering measurable outcomes
- Produce high-impact analytical reports and data narratives that directly inform strategic initiatives, operational improvements, and revenue growth at the leadership level
- Integrate AI-powered development tools such as Cursor AI and Claude Code into daily workflows to accelerate dashboard prototyping and automate engineering tasks
- Upskill teams in data literacy through training programs and knowledge-sharing initiatives, fostering a culture of analytical self-sufficiency

---

**phData — Analytics Consultant**
*April 2023 – April 2024 (1 year 1 month) · Mumbai, India*

- Delivered project-based consulting engagements, assisting clients in developing analytical requirements through prototyping and visualization
- Managed client expectations by leading weekly status reports; proactively solicited feedback through working sessions
- Created data visualization solutions and analyzed/troubleshot product performance and deployment issues
- Supported backlog development and recommended best practices to optimize data models, reports, and platform architecture

---

**ScatterPie Analytics — Data Analyst**
*January 2022 – April 2023 (1 year 4 months) · Mumbai, India*

- Developed customized Tableau dashboards for clients providing strategic insights to improve business outcomes
- Delivered scalable data automation solutions by designing and monitoring ETL workflows using Alteryx and Tableau Prep
- Generated actionable data insights on large datasets to drive revenue growth through data-driven decisions
- Identified trends and patterns in data and communicated insights through effective visualizations
- Mentored juniors and interns, providing training on Tableau, Alteryx, and data analysis tools

---

**ScatterPie Analytics — Junior Data Analyst**
*August 2021 – January 2022 (6 months) · Mumbai, India*

- Designed Tableau dashboards for clients to deliver strategic insights and drive process improvement
- Generated actionable data insights using analytics frameworks on large datasets to drive revenue impact

---

**Media.net — Research Analyst**
*August 2020 – August 2021 (1 year 1 month) · Mumbai, India*

- Optimized domain names for contextual and programmatic advertising to boost revenue growth
- Conducted research identifying concepts for domain names and websites, analyzed data trends and delivered cross-team solutions
- Monitored and maintained analytics dashboards and reports aligned with company performance goals
- Generated weekly/monthly reports for key metrics, goal tracking, and revenue tracking
- Managed accounts for customers in US, UK, and CA markets across multiple industry verticals

---

### 5. Skills & Tech Stack
- **Visual, interactive skill grid** — not a boring flat list. Use animated cards, tag cloud, or categorized visual blocks
- **Mobile**: 2-column grid or single-column stacked cards
- **Desktop**: Multi-column masonry or bento-box layout

**Categories & Proficiency (edit the percentage numbers below):**

| Category | Skill | Proficiency % | Tag |
|---|---|---|---|
| **Data Visualization** | Tableau | 90 | Certified |
| **Data Visualization** | Power BI | 70 | Certified |
| **Data Visualization** | Figma | 80 | Dashboard Design |
| **Data Engineering** | SQL | 90 | Advanced |
| **Data Engineering** | Python | 75 | PySpark |
| **Cloud Platforms** | Databricks | 80 | |
| **Cloud Platforms** | Microsoft Fabric | 50 | |
| **AI & Productivity** | Cursor AI | 85 | |
| **AI & Productivity** | Claude Code | 85 | |
| **Collaboration Tools** | Jira | 90 | |
| **Collaboration Tools** | Confluence | 80 | |
| **Collaboration Tools** | Slack | 90 | |
| **Collaboration Tools** | Git | 70 | |
| **Soft Skills** | Data Storytelling | 90 | |
| **Soft Skills** | Stakeholder Communication | 90 | |
| **Soft Skills** | Cross-functional Collaboration | 90 | |
| **Soft Skills** | Mentoring | 80 | |

Each skill has a proficiency bar indicator. Edit the percentages above to customize.

### 6. Featured Projects (Portfolio Grid)
- **Filterable card grid** with filter options: All | Tableau | Power BI | SQL | Databricks | Microsoft Fabric
- Each card: thumbnail (abstract data-themed placeholder graphic), title, short description, tech tags
- **Hover effect**: card lifts with shadow, shows "View Details" overlay
- **Click**: Opens modal/expanded view with problem statement, approach, impact, screenshots
- **Mobile**: Single-column card stack, full-width cards, tap to expand
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid with hover tilt effects

**Projects to feature (edit details, links, and thumbnails below):**

#### Project 1: Sales Performance Tracker
- **Description**: Executive sales cockpit with FY comparisons, margin analysis, and geographic insights
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/sales-tracker.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/SalesPerformanceTrackerDashboard/SalesCockpit`
- **Problem**: Leadership needed an executive-level view of sales performance with fiscal year comparisons across products, regions, and business lines.
- **Approach**: Built a sales cockpit with KPI cards tracking total sales ($14.8M), margin, and cost, paired with trend analysis, top-10 product rankings, and a geographic heat map with FY toggle.
- **Impact**: Recognized as Tableau Viz of the Day with 35K+ views and 325+ favorites on Tableau Public.

#### Project 2: Porter Delivery Time Analysis
- **Description**: Mobile-first logistics dashboard tracking delivery times, order volume, and hourly trends
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/porter-delivery.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/PorterDeliveryTimeAnalysisDashboardMobileView/Home`
- **Problem**: Porter's delivery operations lacked a mobile-friendly analytics view for on-the-go performance monitoring.
- **Approach**: Designed a mobile-first dashboard in an app-like interface with delivery time (52.1 min avg), order amount, quantity KPIs, and hourly trend analysis with period-over-period comparisons.
- **Impact**: Most favorited dashboard with 38K+ views and 365+ favorites, demonstrating mobile-first BI design for logistics.

#### Project 3: Financial Consumer Complaint Dashboard
- **Description**: Multi-tab complaint analysis with response rates, dispute tracking, and geographic trends
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/financial-complaints.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/FinancialConsumerComplaintDashboard/OverviewDashboard`
- **Problem**: Financial consumer complaint data across multiple products and channels was difficult to analyze for patterns and resolution outcomes.
- **Approach**: Created a multi-tab dashboard covering overview, geo trends, product trends, and ticket-level detail with KPIs for timely response (98.6%), dispute rate (18.2%), and resolution metrics.
- **Impact**: Enabled quick identification of complaint patterns and resolution bottlenecks with 3.7K+ views on Tableau Public.

#### Project 4: Paid Media Analysis Dashboard
- **Description**: Ad campaign performance tracking with spend efficiency, CTR, and conversion analytics
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/paid-media.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/PaidMediaAnalysisDashboard/Keyrus-PaidMediaAnalysis`
- **Problem**: Paid advertising performance across multiple campaign types lacked a unified analysis view for optimizing spend and conversions.
- **Approach**: Built an interactive dashboard tracking 830M+ impressions, 29M+ clicks, CTR, CPC, and conversion rates with YoY comparisons and campaign-level scatter plot analysis.
- **Impact**: Provided actionable insights into campaign efficiency and cost optimization across campaign types and product lines.

#### Project 5: Social Media Dashboard
- **Description**: Cross-platform social media performance tracker for YouTube, Twitter, and Instagram
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/social-media.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/SocialMediaDashboard_16368961434650/SocialMediaDashboard`
- **Problem**: Social media performance was tracked separately across YouTube, Twitter, and Instagram with no unified view of growth and engagement.
- **Approach**: Designed a dark-themed cross-platform dashboard consolidating subscribers, followers, impressions, and engagement metrics with monthly trend comparisons per platform.
- **Impact**: Consolidated multi-platform social media metrics into a single performance view with 2.7K+ views on Tableau Public.

#### Project 6: Customer Demographic Dashboard
- **Description**: Customer segmentation analysis with geographic mapping and demographic breakdowns
- **Tags**: Tableau, Figma
- **Category**: Tableau
- **Thumbnail**: `public/projects/customer-demographics.png` ✅ (placed)
- **Project Link**: `https://public.tableau.com/app/profile/rishikeshgundla/viz/CustomerDemographicDashboard_16826197693670/CustomerDemographicDashboard`
- **Problem**: Customer demographic data across nationality, location, and service preferences was siloed, making segmentation difficult.
- **Approach**: Built a comprehensive dashboard analyzing 6,758 customers with geographic mapping, gender splits, qualification breakdowns, channel analysis, and top product preferences.
- **Impact**: Enabled data-driven customer segmentation and targeted service strategies with clear demographic visibility.

#### Project 7: Employee Attendance Dashboard
- **Description**: Interactive HR analytics dashboard using SVG charts to create a calendar-style attendance tracker with dynamic filtering
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/employee-attendance.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiZWFmNDFhZjAtMTcxMC00M2M2LWI1ZmYtMjJjZmUzZGUzZjEyIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Traditional attendance tracking systems lacked visual, at-a-glance insights into workforce attendance patterns across multiple status categories.
- **Approach**: Built an interactive SVG calendar-style attendance tracker with status indicators for Present, On-site, Remote, On-call, Sick leave, and Vacation with quick-glance metrics and dynamic filtering capabilities.
- **Impact**: Recognized as a next-level intuitive design by the community with 301+ likes and 20+ comments on LinkedIn.

#### Project 8: Ritz Chocolate Sales Analytics Dashboard
- **Description**: Sales analytics dashboard examining business performance including sales, costs, profit metrics, and shipment efficiency
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/ritz-chocolate.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiNzA4NDQ1MjYtMjhkOC00ZmYyLWI4ZGMtYTI0NWUwZmNkM2Y5IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Chocolate business performance data across sales, costs, and shipment operations needed a unified analytical view for identifying improvement areas.
- **Approach**: Designed a sales analytics dashboard with KPI tracking for sales, cost, and profit, individual salesperson performance tracking, product-level insights, and box shipment efficiency analysis with a redesigned UI emphasizing intuitive navigation.
- **Impact**: Delivered clear visibility into salesperson and product-level performance with actionable shipment efficiency insights.

#### Project 9: Electric Vehicle Dashboard
- **Description**: Analytics dashboard exploring electric vehicle adoption trends, market data, and key performance indicators
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/electric-vehicle.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiZmFhOWY2NjEtZDg2MC00ZDExLWE1M2ItNWFmODdkOTUwMjYxIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Electric vehicle market data across manufacturers, regions, and vehicle types lacked a consolidated analytical view for tracking adoption trends and performance.
- **Approach**: Built an interactive dashboard analyzing EV market data with key metrics on vehicle adoption, manufacturer comparisons, regional distribution, and performance indicators with dynamic filtering.
- **Impact**: Provided a comprehensive view of EV market trends enabling data-driven exploration of adoption patterns and manufacturer performance.

#### Project 10: Northwind Traders Performance Dashboard
- **Description**: Sales and performance metrics dashboard with interactive button slicers and custom UX filtering on the Northwind dataset
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/northwind-traders.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiN2ZiZDc2MWUtZWQxYi00MjkwLWJlOWYtNWFiYzkzMzZiZWE4IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Northwind Traders' sales data needed an interactive dashboard with intuitive filtering for managers, countries, and product categories.
- **Approach**: Built a performance dashboard on Maven Analytics' Northwind dataset featuring Manager and Country filtering with the Button Slicer feature, custom UX design for the Category filter, and multiple interactive visualizations.
- **Impact**: Showcased advanced Power BI formatting and slicer capabilities with 121+ likes and 8+ comments on LinkedIn.

#### Project 11: Maven Toys Dashboard — Advanced
- **Description**: Enhanced toy store analytics with advanced drill-through capabilities, deeper KPI analysis, and sophisticated interactive visualizations
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/maven-toys-advanced.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiYmNmNDBmMmYtMjM1ZS00MzgzLWI2MTUtNGViNzUwM2RiMDUwIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: The initial Maven Toys Dashboard needed deeper analytical capabilities and more advanced interactive features for comprehensive store performance analysis.
- **Approach**: Built an enhanced version with advanced drill-through functionality, deeper KPI analysis, custom Power BI visuals, and more sophisticated interactive elements for multi-dimensional toy store performance tracking.
- **Impact**: Demonstrated progression in Power BI proficiency with advanced visualization techniques and custom visual integration.

#### Project 12: Maven Toys Dashboard
- **Description**: Toy store performance dashboard with custom PowerPoint backgrounds, interactive tooltips, and drill-through donut charts
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/maven-toys.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiYjZjNzk2OTgtNTdhOC00MzUzLWEyYTUtMzBjNTY3MzllMWQ1IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Toy store performance metrics needed to be presented with a polished, custom-designed interface beyond standard Power BI defaults.
- **Approach**: Designed a dashboard with custom background created in PowerPoint, interactive custom tooltips and legends for donut charts, drill-through functionality, and integrated custom Power BI visuals for an elevated user experience.
- **Impact**: Received strong community engagement with 103+ likes and 12+ comments on LinkedIn, praised for creative design approach.

#### Project 13: Project Management Dashboard
- **Description**: Executive-ready dashboard tracking project costs, benefits, and delivery trends with drill-down functionality
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/project-management.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiMjliZjc4NGYtOWNkMy00YTc1LThiOWYtYjJlYmVkYjY4ZmFjIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Project portfolio data across costs, benefits, and delivery timelines lacked an executive-grade analytical view for data-driven decision-making.
- **Approach**: Built an executive-ready dashboard with cost and benefit tracking across projects, trend analysis by category, drill-down functionality for detailed metrics, KPI cards, and area charts for comprehensive visualization.
- **Impact**: Praised by the community for design quality, insight depth, color coding, and visual consistency with 79+ likes and 8+ comments on LinkedIn.

#### Project 14: Adventure Works Report
- **Description**: KPI tracking dashboard for sales, revenue, profit, and returns with regional and product-level analysis
- **Tags**: Power BI, Figma
- **Category**: Power BI
- **Thumbnail**: `public/projects/adventure-works.png`
- **Project Link**: `https://app.powerbi.com/view?r=eyJrIjoiOGY0N2M1N2QtMDczNC00ZGQ2LWI5ODYtNWMyZGZjYzc1YjI5IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9`
- **Problem**: Adventure Works business data across sales, revenue, profit, and returns needed a unified dashboard for multi-dimensional performance analysis.
- **Approach**: Created a comprehensive KPI tracking dashboard with sales, revenue, profit, and returns metrics, regional performance comparison, product-level trend analysis, and high-value customer identification based on the Maven Analytics course by Chris Dutton and Aaron Parry.
- **Impact**: Strong community reception with 170+ likes and 21+ comments on LinkedIn, demonstrating foundational Power BI proficiency.

#### Project 15: Restaurant Analytics Declarative Pipeline
- **Description**: End-to-end data engineering pipeline for restaurant operations analytics with AI-powered sentiment analysis, processing orders, menu data, and customer feedback through a Medallion architecture
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/restaurant-databricks-declarative-pipeline-project/main/assets/restaurant_dlt_architecture.png`
- **Project Link**: `https://github.com/rishigundla/restaurant-databricks-declarative-pipeline-project`
- **Problem**: Restaurant operations data across orders, menus, and customer reviews existed in siloed raw files with no automated pipeline for real-time analytics or customer sentiment tracking.
- **Approach**: Built a Medallion architecture pipeline using Delta Live Tables and Auto Loader for streaming ingestion into Bronze, AI-powered sentiment classification of customer reviews in Silver using Mosaic AI, and pre-aggregated business KPIs (revenue, average order value, peak hours, sentiment scores) in Gold, orchestrated via Databricks Workflows with an AI/BI Dashboard and Genie for natural language queries.
- **Impact**: Enabled real-time operational insights and customer voice analysis with automatic refresh as new data arrives, demonstrating production-ready declarative pipeline patterns.

#### Project 16: FMCG Sports Analytics Pipeline
- **Description**: Unified analytics pipeline consolidating data from two sports-focused companies into a single star schema for combined performance reporting
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/fmcg-databricks-project/main/assets/fmcg_databricks_project_architecture.png`
- **Project Link**: `https://github.com/rishigundla/fmcg-databricks-project`
- **Problem**: Two sports-focused companies (Atlikon equipment manufacturer and Sportsbar beverage/nutrition company) operated separate data systems, preventing unified cross-company performance analysis and reporting.
- **Approach**: Designed a Medallion architecture pipeline on Databricks with ADLS Gen2 storage — Bronze for raw file ingestion, Silver for cleansing and deduplication, and Gold for a unified Star Schema merging both companies' data into shared fact and dimension tables, with an event-driven Databricks Workflow triggered on daily file arrival.
- **Impact**: Eliminated manual cross-company data processing, enabling near-real-time data freshness and unified business intelligence across both business units through a BI Dashboard.

#### Project 17: Aviation Analytics Declarative Pipeline
- **Description**: Production-ready aviation analytics system processing flight bookings, passenger records, and airport data with SCD Type-2 historical tracking through declarative patterns
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/aviation-databricks-declarative-pipeline-project/main/assets/aviation_dlt_architecture.png`
- **Project Link**: `https://github.com/rishigundla/aviation-databricks-declarative-pipeline-project`
- **Problem**: Aviation data spanning flight bookings, passenger records, airports, and flight schedules needed a reliable, incremental pipeline with full historical tracking of dimension changes.
- **Approach**: Built a Lakehouse Medallion pipeline using Delta Live Tables with Auto Loader streaming ingestion into Bronze, type casting and data quality validations in Silver, and DLT Auto-CDC for automatic SCD Type-2 tracking with versioned records (__START_AT/__END_AT timestamps), culminating in Gold aggregations for total bookings, passengers, flights, and revenue by airline routes.
- **Impact**: Delivered production-ready incremental streaming transformations with complete audit history, ensuring low-latency outputs for BI dashboards and demonstrating enterprise-grade CDC patterns.

#### Project 18: Banking Analytics Declarative Pipeline
- **Description**: Enterprise-grade ETL solution for financial services processing customer and transactional banking data with SCD Type-1/Type-2 and materialized views
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/banking-databricks-declarative-pipeline-project/main/assets/architechure3.png`
- **Project Link**: `https://github.com/rishigundla/banking-databricks-declarative-pipeline-project`
- **Problem**: Banking customer and transactional data required a reliable, declarative pipeline with both current-state and historical dimension tracking for compliance and analytics.
- **Approach**: Designed a modern Medallion pipeline with Auto Loader streaming ingestion at Bronze, continuous Silver transformations deriving business attributes (age, tenure) with hybrid SCD Type-1 and Type-2 logic, and Gold materialized views pre-aggregating metrics for automatic dashboard refresh, orchestrated via Databricks Workflows with an AI/BI Dashboard.
- **Impact**: Combined streaming ingestion with incremental transformations and pre-aggregated materialized views, ensuring near-real-time freshness and optimized dashboard performance for enterprise banking analytics.

#### Project 19: Vehicle Theft Analytics Pipeline
- **Description**: End-to-end ETL pipeline transforming raw vehicle theft records into analytical datasets for theft pattern and recovery analytics
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/vehicletheft-databricks-project/main/assets/Vehicle%20Theft%20Daigram.png`
- **Project Link**: `https://github.com/rishigundla/vehicletheft-databricks-project`
- **Problem**: Raw vehicle theft records stored as CSVs lacked automated processing for identifying theft patterns, recovery rates, and geographic trends.
- **Approach**: Built a Medallion architecture pipeline orchestrated by Azure Data Factory — Bronze ingests raw CSVs into Parquet via ADF, Silver applies PySpark transformations for cleaning and deduplication with standardized formatting, and Gold produces aggregated datasets supporting KPI dashboards, all governed by Unity Catalog on ADLS Gen2.
- **Impact**: Automated the full data lifecycle from raw sources to BI-ready tables, enabling actionable insights on theft patterns and vehicle recovery analytics with a scalable architecture supporting future schema evolution.

#### Project 20: NYC Taxi Analytics Pipeline
- **Description**: Comprehensive data engineering pipeline on NYC Yellow Taxi dataset with multi-layer governance and Delta Lake time travel capabilities
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/nyctaxi-databricks-project/main/assets/Architecture.drawio.png`
- **Project Link**: `https://github.com/rishigundla/nyctaxi-databricks-project`
- **Problem**: NYC Yellow Taxi trip data needed a governed, scalable pipeline to transform raw Parquet files into multi-granularity analytics aggregations.
- **Approach**: Designed a four-layer pipeline — Landing for raw Parquet in Databricks Volumes, Bronze for unprocessed tables with basic validation, Silver for cleaned and enriched data with joined dimensions via PySpark and SQL, and Gold for aggregated analytics tables at daily, weekly, monthly, and quarterly granularity, leveraging Delta Lake time travel and Unity Catalog governance on ADLS Gen2.
- **Impact**: Demonstrated enterprise-grade data platform capabilities including multi-layer governance, automated ingestion, Delta Lake optimization, and business metrics generation from raw transportation data.

#### Project 21: Superstore Analytics Pipeline
- **Description**: End-to-end ETL pipeline showcasing advanced Delta Lake features including liquid clustering, deletion vectors, and time travel with interactive BI dashboards
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/superstore-databricks-project/main/assets/Databricks%20Diagram.drawio%20(1).png`
- **Project Link**: `https://github.com/rishigundla/superstore-databricks-project`
- **Problem**: Superstore retail data required an analytics pipeline that demonstrates modern Delta Lake optimization techniques beyond basic Medallion architecture patterns.
- **Approach**: Built a Medallion pipeline on Azure Databricks with ADLS Gen2 — Bronze for raw ingestion, Silver for validation and deduplication, and Gold for business-ready aggregations, showcasing advanced Delta Lake capabilities including time travel, table cloning, vacuum operations, liquid clustering, and deletion vectors, with Unity Catalog governance and a Databricks BI Dashboard.
- **Impact**: Delivered interactive BI dashboards with total sales, profit, and quantity KPIs with regional filtering and temporal analysis, while demonstrating modern Delta Lake optimization techniques for production workloads.

#### Project 22: Amazon Retail Analytics Pipeline
- **Description**: Production-ready retail ETL pipeline with hybrid data integration from Azure SQL Database and REST APIs orchestrated by Azure Data Factory
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/amazonretail-databricks-project/main/assets/Untitled%20Diagram-Copy%20of%20Databricks%20End%20to%20End%20Project%20Diagram.drawio.png`
- **Project Link**: `https://github.com/rishigundla/amazonretail-databricks-project`
- **Problem**: Retail transaction, product, and customer data from multiple source systems (SQL databases and REST APIs) needed a unified pipeline for consolidated business intelligence.
- **Approach**: Designed a Medallion architecture orchestrated by Azure Data Factory with hybrid ingestion — Bronze pulls from Azure SQL Database tables and REST API JSON responses, Silver applies PySpark data cleaning and validation, and Gold produces business-ready aggregations, all stored on ADLS Gen2 with Delta Lake and governed by Unity Catalog.
- **Impact**: Demonstrated production-ready multi-source data integration patterns, combining structured SQL and semi-structured JSON data into a unified analytics layer for retail business intelligence.

#### Project 23: Adventure Works Analytics Pipeline
- **Description**: Medallion architecture data engineering pipeline processing seven CSV datasets covering products, regions, sales, and salespeople with Unity Catalog governance
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/adventureworks-databricks-project/main/assets/Databricks%20Diagram.drawio%20(1).png`
- **Project Link**: `https://github.com/rishigundla/adventureworks-databricks-project`
- **Problem**: Adventure Works retail data across seven CSV source files (products, regions, resellers, sales, salespeople, regional assignments, and targets) needed a structured pipeline for analytics-ready transformation.
- **Approach**: Built a Medallion architecture pipeline on Azure Databricks — Bronze for raw CSV ingestion from ADLS Gen2, Silver for data cleaning and standardization, and Gold for business-level aggregations and analytics-ready tables, with Unity Catalog for security and governance and Delta Lake for reliable storage.
- **Impact**: Delivered a complete data engineering workflow from raw CSVs to analytics-ready tables, demonstrating foundational medallion architecture, Unity Catalog configuration, and Delta Lake optimization ready for BI tool integration.

#### Project 24: Citi Bike Trip Analytics
- **Description**: Large-scale exploratory analytics on 6M+ Citi Bike trip records using Databricks SQL and Delta Lakehouse for rider behavior and usage pattern analysis
- **Tags**: Databricks, PySpark
- **Category**: Databricks
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/citi-bike-trip-analytics-databricks/main/assets/Screenshot%202025-10-21%20132530.png`
- **Project Link**: `https://github.com/rishigundla/citi-bike-trip-analytics-databricks`
- **Problem**: Citi Bike's 6M+ trip records needed exploratory analysis to identify peak usage patterns, popular stations, and differences between customer and subscriber riding behavior.
- **Approach**: Built a Delta Lakehouse foundation with Databricks SQL for large-scale exploratory analysis covering peak ride hours, top station rankings, customer vs. subscriber behavior segmentation, and ride duration distribution patterns, with Unity Catalog governance and Tableau for interactive dashboard visualization.
- **Impact**: Transformed 6M+ raw trip records into actionable insights on urban mobility patterns, enabling data-driven exploration of station popularity, temporal usage trends, and rider segment behavior through interactive Tableau dashboards.

#### Project 25: SQL Projects Portfolio
- **Description**: Comprehensive SQL portfolio featuring 13 real-world projects across 8 industries with 1M+ row datasets, advanced analytics, and 75+ daily SQL challenges spanning MySQL, PostgreSQL, and Databricks SQL
- **Tags**: SQL
- **Category**: SQL
- **Thumbnail**: `https://raw.githubusercontent.com/rishigundla/sql-projects/main/SQL%20Projects.png`
- **Project Link**: `https://github.com/rishigundla/sql-projects`
- **Problem**: SQL proficiency across multiple dialects and industries needed a structured portfolio demonstrating advanced querying techniques on real-world datasets ranging from small to 1M+ rows.
- **Approach**: Built 13 end-to-end SQL projects spanning E-Commerce (Apple Stores, Amazon), Retail (Target, Walmart), Finance, Healthcare, Public Health (COVID-19), Gaming, Marketing, and Automotive using advanced techniques including window functions (ROW_NUMBER, RANK, LAG, LEAD), CTEs, recursive queries, multi-table joins, PIVOT operations, and cloud-native Databricks SQL with Delta Lake, complemented by 75+ daily SQL challenges for progressive skill development.
- **Impact**: Demonstrated production-level SQL proficiency across MySQL, PostgreSQL, and Databricks SQL with diverse industry applications, from analyzing 1M+ Apple Store records with correlation and time-series queries to cloud-native retail analytics on Delta Lake.

### 7. Certifications
- Display as polished badge/card layout with subtle hover animations
- **Mobile**: Vertical stacked cards
- **Desktop**: Horizontal scrolling row or grid

**Certifications (edit badge images and verification links below):**

1. **Tableau Desktop Specialist** — Tableau
   - Badge Image: `public/badges/tableau-desktop-specialist-badge.png` ✅ (placed)
   - Verification Link: `https://www.credly.com/badges/137c8743-d119-4b9d-9eb5-a04a8810221f/public_url `

2. **Microsoft Certified: Power BI Data Analyst Associate** — Microsoft
   - Badge Image: `public/badges/microsoft-certified-associate-badge.svg` ✅ (placed)
   - Verification Link: `https://learn.microsoft.com/api/credentials/share/en-us/RishikeshGundla/BF2A40096A5439D?sharingId=111EB2EB6A833489`

3. **Microsoft Certified: Azure Data Fundamentals** — Microsoft
   - Badge Image: `public/badges/microsoft-certified-fundamentals-badge.svg` ✅ (placed)
   - Verification Link: `https://learn.microsoft.com/api/credentials/share/en-us/RishikeshGundla/C2679E5CF2676082?sharingId=111EB2EB6A833489`

### 8. Education
- Clean card layout or subtle timeline
- **Mobile**: Stacked cards

**Entries:**
1. **International Institute of Information Technology Bangalore (IIIT-B)**
   Post Graduate Program — Data Science · December 2021 – January 2023

2. **Atharva College of Engineering**
   Bachelor of Engineering — Electronics and Communications Engineering · 2016 – 2020

### 10. Contact Section
- **Direct links with icons**:
  - Email: gundlarishikesh@gmail.com
  - LinkedIn: linkedin.com/in/rishikeshgundla
  - Tableau Public: public.tableau.com/profile/rishikeshgundla
  - GitHub: github.com/rishigundla
- **Closing line**: *"Open to opportunities in Data Engineering, Analytics Engineering, and Senior BI roles. Let's build something meaningful with data."*
- **Mobile**: Single-column stacked social links
- **Desktop**: 2-column centered grid of social links

### 11. Footer
- Minimal: "Rishikesh Gundla · © 2026" + social icon links (LinkedIn, GitHub, Tableau Public, Email)
- Optional: "Built with React" credit line
- Optional: Dark/light theme toggle

---

## Responsive Design Checklist (CRITICAL)

This website MUST be fully responsive. Test and ensure the following at every breakpoint:

### Mobile (320px – 480px)
- Single-column layout throughout
- Hamburger navigation with smooth drawer animation
- Touch-friendly tap targets (minimum 44px × 44px)
- Font sizes scale down proportionally (hero title ~28–32px, body ~14–16px)
- No horizontal scrolling anywhere
- Disable heavy animations (particles, cursor effects) for performance
- Cards stack vertically with full width
- Stats ticker displays as 2×2 grid
- Timeline is single-column, left-aligned
- Images and thumbnails scale to container width

### Tablet (768px – 1024px)
- 2-column grid for project cards, skills, certifications
- Alternating timeline layout
- Nav can be compact horizontal or collapsible
- Comfortable reading width with adequate padding
- Moderate animations enabled

### Desktop (1280px – 1920px+)
- Full multi-column layouts (3-col project grid, bento skill grid)
- All hover effects, tilt animations, cursor effects active
- Generous whitespace and padding
- Max content width capped at ~1400px with centered layout
- Full alternating timeline with hover-expand cards

### Cross-Breakpoint Rules
- Use CSS `clamp()` for fluid typography where possible
- All images must have `max-width: 100%` and proper aspect ratios
- No fixed pixel widths on containers — use percentage, max-width, or viewport units
- Test on real devices or DevTools device emulation
- Ensure no content is hidden or inaccessible on any viewport

---

## Interactions & Animations

- **Page load**: Staggered fade-in/slide-up of hero elements (name → title → tagline → CTAs)
- **Scroll reveals**: Each section fades/slides in on scroll (Intersection Observer or Framer Motion)
- **Navbar**: Transparent → solid on scroll with backdrop blur
- **Project cards**: 3D tilt on hover (desktop), lift shadow
- **Stats counter**: Animated count-up triggered on scroll into view
- **Timeline**: Progressive reveal as user scrolls
- **Cursor**: Optional custom cursor dot-follower on desktop — disabled on mobile/tablet
- **Smooth scrolling**: All anchor links use smooth scroll behavior
- **No layout shifts**: All animations must not cause CLS issues

---

## Performance & Best Practices

- Lazy load images and heavy sections
- Semantic HTML (proper heading hierarchy h1→h6, alt text, ARIA labels)
- SEO meta tags: title, description, Open Graph tags for social sharing previews
- Fast initial paint — critical CSS inlined, non-essential deferred
- Lighthouse score target: **90+ across Performance, Accessibility, Best Practices, SEO**
- Preload key fonts to avoid FOIT/FOUT
- Use `srcset` or responsive images where applicable

---

## Final Checklist Before Shipping

- [ ] All sections render correctly on mobile (320px), tablet (768px), desktop (1440px+)
- [ ] Hamburger nav works smoothly on mobile with no content overlap
- [ ] Animations are smooth, don't cause layout shifts, and are disabled/simplified on mobile
- [ ] No horizontal scroll on any viewport
- [ ] All links work (email mailto, LinkedIn, GitHub, Tableau Public)
- [ ] Color contrast meets WCAG AA standards
- [ ] Resume download link is wired up (placeholder PDF for now)
- [ ] Contact form submits correctly (or has clear placeholder)
- [ ] All text is readable — no truncation, overlap, or overflow
- [ ] Lighthouse audit: 90+ across all four categories
- [ ] Touch targets are minimum 44px on mobile
- [ ] All project cards, timeline entries, and certification badges are responsive
