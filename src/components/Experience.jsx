import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiChevronDown } from 'react-icons/hi'

const experiences = [
  {
    company: 'Nutanix',
    role: 'Senior Business Intelligence Engineer',
    period: 'April 2024 – Present',
    duration: '2 years',
    location: 'Bangalore, India',
    color: '#2dd4bf',
    bullets: [
      'Architect and deliver high-impact dashboards, scalable data models, and end-to-end analytical solutions using Tableau, Power BI, and SQL powering data-driven decision-making across business units',
      'Design and deploy enterprise-grade BI solutions leveraging Microsoft Fabric, Databricks, and PySpark streamlining reporting workflows and reducing time-to-insight at scale',
      'Drive automation strategies across the analytics pipeline to enhance data quality, reduce processing latency, and optimize platform performance for near real-time decision-making',
      'Prototype and standardize dashboard design systems and reusable templates in Figma ensuring visual consistency and enterprise-wide adoption of BI assets',
      'Partner with cross-functional stakeholders to translate complex business requirements into scalable, insight-driven solutions delivering measurable outcomes',
      'Produce high-impact analytical reports and data narratives that directly inform strategic initiatives, operational improvements, and revenue growth at the leadership level',
      'Integrate AI-powered development tools such as Cursor AI and Claude Code into daily workflows to accelerate dashboard prototyping and automate engineering tasks',
      'Upskill teams in data literacy through training programs and knowledge-sharing initiatives, fostering a culture of analytical self-sufficiency',
    ],
  },
  {
    company: 'phData',
    role: 'Analytics Consultant',
    period: 'April 2023 – April 2024',
    duration: '1 year 1 month',
    location: 'Mumbai, India',
    color: '#818cf8',
    bullets: [
      'Delivered project-based consulting engagements, assisting clients in developing analytical requirements through prototyping and visualization',
      'Managed client expectations by leading weekly status reports; proactively solicited feedback through working sessions',
      'Created data visualization solutions and analyzed/troubleshot product performance and deployment issues',
      'Supported backlog development and recommended best practices to optimize data models, reports, and platform architecture',
    ],
  },
  {
    company: 'ScatterPie Analytics',
    role: 'Data Analyst',
    period: 'January 2022 – April 2023',
    duration: '1 year 4 months',
    location: 'Mumbai, India',
    color: '#f59e0b',
    bullets: [
      'Developed customized Tableau dashboards for clients providing strategic insights to improve business outcomes',
      'Delivered scalable data automation solutions by designing and monitoring ETL workflows using Alteryx and Tableau Prep',
      'Generated actionable data insights on large datasets to drive revenue growth through data-driven decisions',
      'Identified trends and patterns in data and communicated insights through effective visualizations',
      'Mentored juniors and interns, providing training on Tableau, Alteryx, and data analysis tools',
    ],
  },
  {
    company: 'ScatterPie Analytics',
    role: 'Junior Data Analyst',
    period: 'August 2021 – January 2022',
    duration: '6 months',
    location: 'Mumbai, India',
    color: '#f59e0b',
    bullets: [
      'Designed Tableau dashboards for clients to deliver strategic insights and drive process improvement',
      'Generated actionable data insights using analytics frameworks on large datasets to drive revenue impact',
    ],
  },
  {
    company: 'Media.net',
    role: 'Research Analyst',
    period: 'August 2020 – August 2021',
    duration: '1 year 1 month',
    location: 'Mumbai, India',
    color: '#ec4899',
    bullets: [
      'Optimized domain names for contextual and programmatic advertising to boost revenue growth',
      'Conducted research identifying concepts for domain names and websites; analyzed data trends and delivered cross-team solutions',
      'Monitored and maintained analytics dashboards and reports aligned with company performance goals',
      'Generated weekly/monthly reports for key metrics, goal tracking, and revenue tracking',
      'Managed accounts for customers in US, UK, and CA markets across multiple industry verticals',
    ],
  },
]

function TimelineEntry({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const [ref, isVisible] = useScrollReveal(0.15)
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline line + dot (mobile: left side) */}
      <div className="flex flex-col items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
        <div
          className="w-3 h-3 rounded-full border-2 mt-2"
          style={{ borderColor: exp.color, backgroundColor: isVisible ? exp.color : 'transparent' }}
        />
        <div className="w-px h-full bg-surface-border md:hidden" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`flex-1 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
      >
        <div
          className="glass-card p-5 sm:p-6 cursor-pointer hover:border-accent/30 transition-colors group"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {exp.company}
              </h3>
              <p className="text-accent text-sm font-medium mt-0.5">{exp.role}</p>
              <p className="font-mono text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {exp.period} · {exp.duration}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{exp.location}</p>
            </div>
            <HiChevronDown
              className={`text-gray-500 shrink-0 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </div>

          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  <span
                    className="w-1 h-1 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: exp.color }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Career Journey</p>
          <h2 className="section-title">
            Experience
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-border" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineEntry key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
