import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiX, HiExternalLink } from 'react-icons/hi'

const projects = [
  {
    title: 'Sales Performance Tracker',
    description: 'Executive sales cockpit with FY comparisons, margin analysis, and geographic insights',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/sales-tracker.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/SalesPerformanceTrackerDashboard/SalesCockpit',
    problem: 'Leadership needed an executive-level view of sales performance with fiscal year comparisons across products, regions, and business lines.',
    approach: 'Built a sales cockpit with KPI cards tracking total sales ($14.8M), margin, and cost, paired with trend analysis, top-10 product rankings, and a geographic heat map with FY toggle.',
    impact: 'Recognized as Tableau Viz of the Day with 35K+ views and 325+ favorites on Tableau Public.',
    color: '#2dd4bf',
  },
  {
    title: 'Porter Delivery Time Analysis',
    description: 'Mobile-first logistics dashboard tracking delivery times, order volume, and hourly trends',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/porter-delivery.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/PorterDeliveryTimeAnalysisDashboardMobileView/Home',
    problem: 'Porter\'s delivery operations lacked a mobile-friendly analytics view for on-the-go performance monitoring.',
    approach: 'Designed a mobile-first dashboard in an app-like interface with delivery time (52.1 min avg), order amount, quantity KPIs, and hourly trend analysis with period-over-period comparisons.',
    impact: 'Most favorited dashboard with 38K+ views and 365+ favorites, demonstrating mobile-first BI design for logistics.',
    color: '#818cf8',
  },
  {
    title: 'Financial Consumer Complaint Dashboard',
    description: 'Multi-tab complaint analysis with response rates, dispute tracking, and geographic trends',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/financial-complaints.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/FinancialConsumerComplaintDashboard/OverviewDashboard',
    problem: 'Financial consumer complaint data across multiple products and channels was difficult to analyze for patterns and resolution outcomes.',
    approach: 'Created a multi-tab dashboard covering overview, geo trends, product trends, and ticket-level detail with KPIs for timely response (98.6%), dispute rate (18.2%), and resolution metrics.',
    impact: 'Enabled quick identification of complaint patterns and resolution bottlenecks with 3.7K+ views on Tableau Public.',
    color: '#f59e0b',
  },
  {
    title: 'Paid Media Analysis Dashboard',
    description: 'Ad campaign performance tracking with spend efficiency, CTR, and conversion analytics',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/paid-media.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/PaidMediaAnalysisDashboard/Keyrus-PaidMediaAnalysis',
    problem: 'Paid advertising performance across multiple campaign types lacked a unified analysis view for optimizing spend and conversions.',
    approach: 'Built an interactive dashboard tracking 830M+ impressions, 29M+ clicks, CTR, CPC, and conversion rates with YoY comparisons and campaign-level scatter plot analysis.',
    impact: 'Provided actionable insights into campaign efficiency and cost optimization across campaign types and product lines.',
    color: '#ec4899',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Cross-platform social media performance tracker for YouTube, Twitter, and Instagram',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/social-media.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/SocialMediaDashboard_16368961434650/SocialMediaDashboard',
    problem: 'Social media performance was tracked separately across YouTube, Twitter, and Instagram with no unified view of growth and engagement.',
    approach: 'Designed a dark-themed cross-platform dashboard consolidating subscribers, followers, impressions, and engagement metrics with monthly trend comparisons per platform.',
    impact: 'Consolidated multi-platform social media metrics into a single performance view with 2.7K+ views on Tableau Public.',
    color: '#2dd4bf',
  },
  {
    title: 'Customer Demographic Dashboard',
    description: 'Customer segmentation analysis with geographic mapping and demographic breakdowns',
    tags: ['Tableau', 'Figma'],
    category: 'Tableau',
    thumbnail: '/projects/customer-demographics.png',
    projectLink: 'https://public.tableau.com/app/profile/rishikeshgundla/viz/CustomerDemographicDashboard_16826197693670/CustomerDemographicDashboard',
    problem: 'Customer demographic data across nationality, location, and service preferences was siloed, making segmentation difficult.',
    approach: 'Built a comprehensive dashboard analyzing 6,758 customers with geographic mapping, gender splits, qualification breakdowns, channel analysis, and top product preferences.',
    impact: 'Enabled data-driven customer segmentation and targeted service strategies with clear demographic visibility.',
    color: '#818cf8',
  },
  {
    title: 'Employee Attendance Dashboard',
    description: 'Interactive HR analytics dashboard using SVG charts to create a calendar-style attendance tracker with dynamic filtering',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/employee-attendance.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiZWFmNDFhZjAtMTcxMC00M2M2LWI1ZmYtMjJjZmUzZGUzZjEyIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Traditional attendance tracking systems lacked visual, at-a-glance insights into workforce attendance patterns across multiple status categories.',
    approach: 'Built an interactive SVG calendar-style attendance tracker with status indicators for Present, On-site, Remote, On-call, Sick leave, and Vacation with quick-glance metrics and dynamic filtering capabilities.',
    impact: 'Recognized as a next-level intuitive design by the community with 301+ likes and 20+ comments on LinkedIn.',
    color: '#f59e0b',
  },
  {
    title: 'Ritz Chocolate Sales Analytics Dashboard',
    description: 'Sales analytics dashboard examining business performance including sales, costs, profit metrics, and shipment efficiency',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/ritz-chocolate.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiNzA4NDQ1MjYtMjhkOC00ZmYyLWI4ZGMtYTI0NWUwZmNkM2Y5IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Chocolate business performance data across sales, costs, and shipment operations needed a unified analytical view for identifying improvement areas.',
    approach: 'Designed a sales analytics dashboard with KPI tracking for sales, cost, and profit, individual salesperson performance tracking, product-level insights, and box shipment efficiency analysis with a redesigned UI emphasizing intuitive navigation.',
    impact: 'Delivered clear visibility into salesperson and product-level performance with actionable shipment efficiency insights.',
    color: '#ec4899',
  },
  {
    title: 'Electric Vehicle Dashboard',
    description: 'Analytics dashboard exploring electric vehicle adoption trends, market data, and key performance indicators',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/electric-vehicle.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiZmFhOWY2NjEtZDg2MC00ZDExLWE1M2ItNWFmODdkOTUwMjYxIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Electric vehicle market data across manufacturers, regions, and vehicle types lacked a consolidated analytical view for tracking adoption trends and performance.',
    approach: 'Built an interactive dashboard analyzing EV market data with key metrics on vehicle adoption, manufacturer comparisons, regional distribution, and performance indicators with dynamic filtering.',
    impact: 'Provided a comprehensive view of EV market trends enabling data-driven exploration of adoption patterns and manufacturer performance.',
    color: '#2dd4bf',
  },
  {
    title: 'Northwind Traders Performance Dashboard',
    description: 'Sales and performance metrics dashboard with interactive button slicers and custom UX filtering on the Northwind dataset',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/northwind-traders.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiN2ZiZDc2MWUtZWQxYi00MjkwLWJlOWYtNWFiYzkzMzZiZWE4IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Northwind Traders\' sales data needed an interactive dashboard with intuitive filtering for managers, countries, and product categories.',
    approach: 'Built a performance dashboard on Maven Analytics\' Northwind dataset featuring Manager and Country filtering with the Button Slicer feature, custom UX design for the Category filter, and multiple interactive visualizations.',
    impact: 'Showcased advanced Power BI formatting and slicer capabilities with 121+ likes and 8+ comments on LinkedIn.',
    color: '#818cf8',
  },
  {
    title: 'Maven Toys Dashboard — Advanced',
    description: 'Enhanced toy store analytics with advanced drill-through capabilities, deeper KPI analysis, and sophisticated interactive visualizations',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/maven-toys-advanced.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiYmNmNDBmMmYtMjM1ZS00MzgzLWI2MTUtNGViNzUwM2RiMDUwIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'The initial Maven Toys Dashboard needed deeper analytical capabilities and more advanced interactive features for comprehensive store performance analysis.',
    approach: 'Built an enhanced version with advanced drill-through functionality, deeper KPI analysis, custom Power BI visuals, and more sophisticated interactive elements for multi-dimensional toy store performance tracking.',
    impact: 'Demonstrated progression in Power BI proficiency with advanced visualization techniques and custom visual integration.',
    color: '#f59e0b',
  },
  {
    title: 'Maven Toys Dashboard',
    description: 'Toy store performance dashboard with custom PowerPoint backgrounds, interactive tooltips, and drill-through donut charts',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/maven-toys.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiYjZjNzk2OTgtNTdhOC00MzUzLWEyYTUtMzBjNTY3MzllMWQ1IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Toy store performance metrics needed to be presented with a polished, custom-designed interface beyond standard Power BI defaults.',
    approach: 'Designed a dashboard with custom background created in PowerPoint, interactive custom tooltips and legends for donut charts, drill-through functionality, and integrated custom Power BI visuals for an elevated user experience.',
    impact: 'Received strong community engagement with 103+ likes and 12+ comments on LinkedIn, praised for creative design approach.',
    color: '#ec4899',
  },
  {
    title: 'Project Management Dashboard',
    description: 'Executive-ready dashboard tracking project costs, benefits, and delivery trends with drill-down functionality',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/project-management.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiMjliZjc4NGYtOWNkMy00YTc1LThiOWYtYjJlYmVkYjY4ZmFjIiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Project portfolio data across costs, benefits, and delivery timelines lacked an executive-grade analytical view for data-driven decision-making.',
    approach: 'Built an executive-ready dashboard with cost and benefit tracking across projects, trend analysis by category, drill-down functionality for detailed metrics, KPI cards, and area charts for comprehensive visualization.',
    impact: 'Praised by the community for design quality, insight depth, color coding, and visual consistency with 79+ likes and 8+ comments on LinkedIn.',
    color: '#2dd4bf',
  },
  {
    title: 'Adventure Works Report',
    description: 'KPI tracking dashboard for sales, revenue, profit, and returns with regional and product-level analysis',
    tags: ['Power BI', 'Figma'],
    category: 'Power BI',
    thumbnail: '/projects/adventure-works.png',
    projectLink: 'https://app.powerbi.com/view?r=eyJrIjoiOGY0N2M1N2QtMDczNC00ZGQ2LWI5ODYtNWMyZGZjYzc1YjI5IiwidCI6IjU4ZGI2MjM5LWViOTUtNDQ1YS04MTgxLWQ3OGUwYTNlZjA3OCJ9',
    problem: 'Adventure Works business data across sales, revenue, profit, and returns needed a unified dashboard for multi-dimensional performance analysis.',
    approach: 'Created a comprehensive KPI tracking dashboard with sales, revenue, profit, and returns metrics, regional performance comparison, product-level trend analysis, and high-value customer identification based on the Maven Analytics course.',
    impact: 'Strong community reception with 170+ likes and 21+ comments on LinkedIn, demonstrating foundational Power BI proficiency.',
    color: '#818cf8',
  },
  {
    title: 'Restaurant Analytics Declarative Pipeline',
    description: 'End-to-end data engineering pipeline for restaurant operations analytics with AI-powered sentiment analysis, processing orders, menu data, and customer feedback through a Medallion architecture',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/restaurant-databricks-declarative-pipeline-project/main/assets/restaurant_dlt_architecture.png',
    projectLink: 'https://github.com/rishigundla/restaurant-databricks-declarative-pipeline-project',
    problem: 'Restaurant operations data across orders, menus, and customer reviews existed in siloed raw files with no automated pipeline for real-time analytics or customer sentiment tracking.',
    approach: 'Built a Medallion architecture pipeline using Delta Live Tables and Auto Loader for streaming ingestion into Bronze, AI-powered sentiment classification of customer reviews in Silver using Mosaic AI, and pre-aggregated business KPIs (revenue, average order value, peak hours, sentiment scores) in Gold, orchestrated via Databricks Workflows with an AI/BI Dashboard and Genie for natural language queries.',
    impact: 'Enabled real-time operational insights and customer voice analysis with automatic refresh as new data arrives, demonstrating production-ready declarative pipeline patterns.',
    color: '#f59e0b',
  },
  {
    title: 'FMCG Sports Analytics Pipeline',
    description: 'Unified analytics pipeline consolidating data from two sports-focused companies into a single star schema for combined performance reporting',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/fmcg-databricks-project/main/assets/fmcg_databricks_project_architecture.png',
    projectLink: 'https://github.com/rishigundla/fmcg-databricks-project',
    problem: 'Two sports-focused companies (Atlikon equipment manufacturer and Sportsbar beverage/nutrition company) operated separate data systems, preventing unified cross-company performance analysis and reporting.',
    approach: 'Designed a Medallion architecture pipeline on Databricks with ADLS Gen2 storage — Bronze for raw file ingestion, Silver for cleansing and deduplication, and Gold for a unified Star Schema merging both companies\' data into shared fact and dimension tables, with an event-driven Databricks Workflow triggered on daily file arrival.',
    impact: 'Eliminated manual cross-company data processing, enabling near-real-time data freshness and unified business intelligence across both business units through a BI Dashboard.',
    color: '#ec4899',
  },
  {
    title: 'Aviation Analytics Declarative Pipeline',
    description: 'Production-ready aviation analytics system processing flight bookings, passenger records, and airport data with SCD Type-2 historical tracking through declarative patterns',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/aviation-databricks-declarative-pipeline-project/main/assets/aviation_dlt_architecture.png',
    projectLink: 'https://github.com/rishigundla/aviation-databricks-declarative-pipeline-project',
    problem: 'Aviation data spanning flight bookings, passenger records, airports, and flight schedules needed a reliable, incremental pipeline with full historical tracking of dimension changes.',
    approach: 'Built a Lakehouse Medallion pipeline using Delta Live Tables with Auto Loader streaming ingestion into Bronze, type casting and data quality validations in Silver, and DLT Auto-CDC for automatic SCD Type-2 tracking with versioned records (__START_AT/__END_AT timestamps), culminating in Gold aggregations for total bookings, passengers, flights, and revenue by airline routes.',
    impact: 'Delivered production-ready incremental streaming transformations with complete audit history, ensuring low-latency outputs for BI dashboards and demonstrating enterprise-grade CDC patterns.',
    color: '#2dd4bf',
  },
  {
    title: 'Banking Analytics Declarative Pipeline',
    description: 'Enterprise-grade ETL solution for financial services processing customer and transactional banking data with SCD Type-1/Type-2 and materialized views',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/banking-databricks-declarative-pipeline-project/main/assets/architechure3.png',
    projectLink: 'https://github.com/rishigundla/banking-databricks-declarative-pipeline-project',
    problem: 'Banking customer and transactional data required a reliable, declarative pipeline with both current-state and historical dimension tracking for compliance and analytics.',
    approach: 'Designed a modern Medallion pipeline with Auto Loader streaming ingestion at Bronze, continuous Silver transformations deriving business attributes (age, tenure) with hybrid SCD Type-1 and Type-2 logic, and Gold materialized views pre-aggregating metrics for automatic dashboard refresh, orchestrated via Databricks Workflows with an AI/BI Dashboard.',
    impact: 'Combined streaming ingestion with incremental transformations and pre-aggregated materialized views, ensuring near-real-time freshness and optimized dashboard performance for enterprise banking analytics.',
    color: '#818cf8',
  },
  {
    title: 'Vehicle Theft Analytics Pipeline',
    description: 'End-to-end ETL pipeline transforming raw vehicle theft records into analytical datasets for theft pattern and recovery analytics',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/vehicletheft-databricks-project/main/assets/Vehicle%20Theft%20Daigram.png',
    projectLink: 'https://github.com/rishigundla/vehicletheft-databricks-project',
    problem: 'Raw vehicle theft records stored as CSVs lacked automated processing for identifying theft patterns, recovery rates, and geographic trends.',
    approach: 'Built a Medallion architecture pipeline orchestrated by Azure Data Factory — Bronze ingests raw CSVs into Parquet via ADF, Silver applies PySpark transformations for cleaning and deduplication with standardized formatting, and Gold produces aggregated datasets supporting KPI dashboards, all governed by Unity Catalog on ADLS Gen2.',
    impact: 'Automated the full data lifecycle from raw sources to BI-ready tables, enabling actionable insights on theft patterns and vehicle recovery analytics with a scalable architecture supporting future schema evolution.',
    color: '#f59e0b',
  },
  {
    title: 'NYC Taxi Analytics Pipeline',
    description: 'Comprehensive data engineering pipeline on NYC Yellow Taxi dataset with multi-layer governance and Delta Lake time travel capabilities',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/nyctaxi-databricks-project/main/assets/Architecture.drawio.png',
    projectLink: 'https://github.com/rishigundla/nyctaxi-databricks-project',
    problem: 'NYC Yellow Taxi trip data needed a governed, scalable pipeline to transform raw Parquet files into multi-granularity analytics aggregations.',
    approach: 'Designed a four-layer pipeline — Landing for raw Parquet in Databricks Volumes, Bronze for unprocessed tables with basic validation, Silver for cleaned and enriched data with joined dimensions via PySpark and SQL, and Gold for aggregated analytics tables at daily, weekly, monthly, and quarterly granularity, leveraging Delta Lake time travel and Unity Catalog governance on ADLS Gen2.',
    impact: 'Demonstrated enterprise-grade data platform capabilities including multi-layer governance, automated ingestion, Delta Lake optimization, and business metrics generation from raw transportation data.',
    color: '#ec4899',
  },
  {
    title: 'Superstore Analytics Pipeline',
    description: 'End-to-end ETL pipeline showcasing advanced Delta Lake features including liquid clustering, deletion vectors, and time travel with interactive BI dashboards',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/superstore-databricks-project/main/assets/Databricks%20Diagram.drawio%20(1).png',
    projectLink: 'https://github.com/rishigundla/superstore-databricks-project',
    problem: 'Superstore retail data required an analytics pipeline that demonstrates modern Delta Lake optimization techniques beyond basic Medallion architecture patterns.',
    approach: 'Built a Medallion pipeline on Azure Databricks with ADLS Gen2 — Bronze for raw ingestion, Silver for validation and deduplication, and Gold for business-ready aggregations, showcasing advanced Delta Lake capabilities including time travel, table cloning, vacuum operations, liquid clustering, and deletion vectors, with Unity Catalog governance and a Databricks BI Dashboard.',
    impact: 'Delivered interactive BI dashboards with total sales, profit, and quantity KPIs with regional filtering and temporal analysis, while demonstrating modern Delta Lake optimization techniques for production workloads.',
    color: '#2dd4bf',
  },
  {
    title: 'Amazon Retail Analytics Pipeline',
    description: 'Production-ready retail ETL pipeline with hybrid data integration from Azure SQL Database and REST APIs orchestrated by Azure Data Factory',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/amazonretail-databricks-project/main/assets/Untitled%20Diagram-Copy%20of%20Databricks%20End%20to%20End%20Project%20Diagram.drawio.png',
    projectLink: 'https://github.com/rishigundla/amazonretail-databricks-project',
    problem: 'Retail transaction, product, and customer data from multiple source systems (SQL databases and REST APIs) needed a unified pipeline for consolidated business intelligence.',
    approach: 'Designed a Medallion architecture orchestrated by Azure Data Factory with hybrid ingestion — Bronze pulls from Azure SQL Database tables and REST API JSON responses, Silver applies PySpark data cleaning and validation, and Gold produces business-ready aggregations, all stored on ADLS Gen2 with Delta Lake and governed by Unity Catalog.',
    impact: 'Demonstrated production-ready multi-source data integration patterns, combining structured SQL and semi-structured JSON data into a unified analytics layer for retail business intelligence.',
    color: '#818cf8',
  },
  {
    title: 'Adventure Works Analytics Pipeline',
    description: 'Medallion architecture data engineering pipeline processing seven CSV datasets covering products, regions, sales, and salespeople with Unity Catalog governance',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/adventureworks-databricks-project/main/assets/Databricks%20Diagram.drawio%20(1).png',
    projectLink: 'https://github.com/rishigundla/adventureworks-databricks-project',
    problem: 'Adventure Works retail data across seven CSV source files (products, regions, resellers, sales, salespeople, regional assignments, and targets) needed a structured pipeline for analytics-ready transformation.',
    approach: 'Built a Medallion architecture pipeline on Azure Databricks — Bronze for raw CSV ingestion from ADLS Gen2, Silver for data cleaning and standardization, and Gold for business-level aggregations and analytics-ready tables, with Unity Catalog for security and governance and Delta Lake for reliable storage.',
    impact: 'Delivered a complete data engineering workflow from raw CSVs to analytics-ready tables, demonstrating foundational medallion architecture, Unity Catalog configuration, and Delta Lake optimization ready for BI tool integration.',
    color: '#f59e0b',
  },
  {
    title: 'Citi Bike Trip Analytics',
    description: 'Large-scale exploratory analytics on 6M+ Citi Bike trip records using Databricks SQL and Delta Lakehouse for rider behavior and usage pattern analysis',
    tags: ['Databricks', 'PySpark'],
    category: 'Databricks',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/citi-bike-trip-analytics-databricks/main/assets/Screenshot%202025-10-21%20132530.png',
    projectLink: 'https://github.com/rishigundla/citi-bike-trip-analytics-databricks',
    problem: 'Citi Bike\'s 6M+ trip records needed exploratory analysis to identify peak usage patterns, popular stations, and differences between customer and subscriber riding behavior.',
    approach: 'Built a Delta Lakehouse foundation with Databricks SQL for large-scale exploratory analysis covering peak ride hours, top station rankings, customer vs. subscriber behavior segmentation, and ride duration distribution patterns, with Unity Catalog governance and Tableau for interactive dashboard visualization.',
    impact: 'Transformed 6M+ raw trip records into actionable insights on urban mobility patterns, enabling data-driven exploration of station popularity, temporal usage trends, and rider segment behavior through interactive Tableau dashboards.',
    color: '#ec4899',
  },
  {
    title: 'SQL Projects Portfolio',
    description: 'Comprehensive SQL portfolio featuring 13 real-world projects across 8 industries with 1M+ row datasets, advanced analytics, and 75+ daily SQL challenges spanning MySQL, PostgreSQL, and Databricks SQL',
    tags: ['SQL'],
    category: 'SQL',
    thumbnail: 'https://raw.githubusercontent.com/rishigundla/sql-projects/main/SQL%20Projects.png',
    projectLink: 'https://github.com/rishigundla/sql-projects',
    problem: 'SQL proficiency across multiple dialects and industries needed a structured portfolio demonstrating advanced querying techniques on real-world datasets ranging from small to 1M+ rows.',
    approach: 'Built 13 end-to-end SQL projects spanning E-Commerce (Apple Stores, Amazon), Retail (Target, Walmart), Finance, Healthcare, Public Health (COVID-19), Gaming, Marketing, and Automotive using advanced techniques including window functions (ROW_NUMBER, RANK, LAG, LEAD), CTEs, recursive queries, multi-table joins, PIVOT operations, and cloud-native Databricks SQL with Delta Lake, complemented by 75+ daily SQL challenges for progressive skill development.',
    impact: 'Demonstrated production-level SQL proficiency across MySQL, PostgreSQL, and Databricks SQL with diverse industry applications, from analyzing 1M+ Apple Store records with correlation and time-series queries to cloud-native retail analytics on Delta Lake.',
    color: '#2dd4bf',
  },
]

const filters = ['All', 'Tableau', 'Power BI', 'SQL', 'Databricks', 'Microsoft Fabric']

function ProjectCard({ project, onClick, index = 0 }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className="glass-card overflow-hidden cursor-pointer group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Thumbnail */}
      <div
        className="h-40 sm:h-48 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
        }}
      >
        {!imgError ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <>
            <div className="absolute inset-0 data-grid-bg opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 rounded-2xl border-2 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ borderColor: project.color }}
              />
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-sm font-medium text-white flex items-center gap-2">
            View Details <HiExternalLink />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold mb-2 group-hover:text-accent transition-colors"
            style={{ color: 'var(--color-text-primary)' }}>
          {project.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ backgroundColor: 'var(--color-surface-border)', color: 'var(--color-text-muted)', opacity: 0.7 }}
            >
              {tag}
            </span>
          ))}
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-accent text-xs font-semibold hover:bg-accent-light transition-colors shrink-0"
              style={{ color: '#0a0a0f' }}
            >
              View Project <HiExternalLink size={12} />
            </a>
          ) : (
            <span
              className="ml-auto inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold shrink-0"
              style={{ backgroundColor: 'var(--color-surface-border)', color: 'var(--color-text-muted)' }}
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'var(--color-overlay)' }} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
          aria-label="Close modal"
        >
          <HiX size={20} />
        </button>

        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ backgroundColor: project.color }}
        />

        <h3 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
          {project.title}
        </h3>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>

        <div className="space-y-5">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">Problem</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">Approach</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.approach}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">Impact</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.impact}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6 pt-6" style={{ borderTop: '1px solid var(--color-surface-border)' }}>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent font-semibold text-sm hover:bg-accent-light transition-colors"
              style={{ color: '#0a0a0f' }}
            >
              View Project <HiExternalLink size={14} />
            </a>
          )}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{ border: '1px solid var(--color-surface-border)', color: 'var(--color-text-secondary)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.1)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter))

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle mb-4">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                activeFilter === filter
                  ? 'bg-accent font-medium'
                  : 'hover:bg-surface'
              }`}
              style={{
                color: activeFilter === filter ? '#0a0a0f' : 'var(--color-text-muted)',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
