import { motion } from 'framer-motion'
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'
import { HiUser } from 'react-icons/hi'

const whatIDo = [
  'Build scalable ETL and ELT pipelines on Azure Databricks with Spark, PySpark, SQL',
  'Design Lakehouse architectures with Medallion layers, Delta Lake, and Unity Catalog governance',
  'Deliver batch and streaming ingestion with Auto Loader, change data capture, and Lakeflow',
  'Model data into dimensional models and a governed metrics layer for self service analytics',
  'Enable AI powered analytics with Genie Agents, AI/BI Dashboards, and natural language querying',
  'Ship executive and self service dashboards in Power BI and Tableau',
  'Drive requirement gathering, stakeholder management, and cross team collaboration',
]

const knownFor = [
  'Owning the full path from raw data to the KPI leadership acts on',
  'Turning fragmented data sources into one governed source of truth',
  'Building data quality, lineage, and access control into the pipeline',
  'Asking the right questions before building the solution',
  'Creating dashboards that leadership actually uses',
]

function FocusList({ title, items }) {
  return (
    <div className="glass-card p-5 sm:p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="w-1 h-1 rounded-full mt-2.5 shrink-0 bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const stats = [
  { label: 'Years Experience', value: 6, suffix: '+' },
  { label: 'High-Impact Dashboards', value: 100, suffix: '+' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Certifications', value: 5, suffix: '' },
  { label: 'Data Pipelines Built', value: 10, suffix: '+' },
  { label: 'Data Models Designed', value: 15, suffix: '+' },
]

function StatCard({ label, value, suffix }) {
  const [ref, count] = useCountUp(value, 1800)
  return (
    <div ref={ref} className="text-center p-4 sm:p-6">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-1">
        {count}{suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
        {label}
      </div>
    </div>
  )
}

function ProfilePicture() {
  return (
    <div className="relative shrink-0">
      <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-accent shadow-xl shadow-accent/10">
        <img
          src="/profile.jpeg"
          alt="Rishikesh Gundla"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div
          className="w-full h-full items-center justify-center hidden"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <HiUser size={64} className="text-accent/30" />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-subtitle mb-4">About Me</p>
          <h2 className="section-title mb-6">
            Data-Driven
            <br />
            <span className="text-accent">Problem Solver</span>
          </h2>
          <div className="accent-line mb-10" />
        </motion.div>

        {/* Profile + Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-10 items-start"
        >
          <ProfilePicture />

          <div className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              I am a Senior BI Engineer with 6+ years of experience building enterprise data platforms
              and analytics ecosystems. I specialize in blending Data Engineering, Business
              Intelligence, and AI driven automation on Databricks to help organizations make smarter,
              faster, and more trusted decisions.
            </p>
            <p>
              My core strength is end to end ownership. I understand the business question, translate
              it into modern data architecture, and deliver pipelines, data models, and dashboards
              that are reliable, governed, and ready for AI.
            </p>
          </div>
        </motion.div>

        {/* What I Do + What I Am Known For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FocusList title="What I Do" items={whatIDo} />
            <FocusList title="What I Am Known For" items={knownFor} />
          </div>
          <p className="mt-8 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            While I work across the stack, I stay hands on in architecture decisions, complex
            transformations, and performance tuning.
          </p>
        </motion.div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">Career Highlights</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 glass-card p-4 sm:p-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
