import { motion } from 'framer-motion'
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'
import { HiUser } from 'react-icons/hi'

const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'High-Impact Dashboards', value: 100, suffix: '+' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Certifications', value: 3, suffix: '' },
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
              Senior Business Intelligence Engineer with over five years of experience transforming
              complex data into strategic, decision-ready insights. At Nutanix, I operate across the
              full data lifecycle from pipeline engineering and large-scale data transformation to
              polished, stakeholder-facing analytics that directly influence executive decision-making.
            </p>
            <p>
              My technical practice spans both the analytics and engineering layers of the modern data
              stack. I leverage Tableau, Power BI, SQL, and Figma to design and standardize dashboard
              experiences that are analytically rigorous and built for enterprise-wide adoption, while
              working with Microsoft Fabric, Databricks, and PySpark to build resilient data pipelines
              and orchestrate transformations at scale.
            </p>
            <p>
              What sets me apart is the ability to think both upstream and downstream engineering
              robust data infrastructure while understanding how stakeholders interpret and act on that
              data. I thrive in fast-paced, collaborative environments with a relentless focus on
              automation, data quality, and scalable design ensuring every pipeline built and every
              dashboard shipped drives clarity, trust, and measurable business impact.
            </p>
          </div>
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
