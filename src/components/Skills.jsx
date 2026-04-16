import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    title: 'Data Visualization',
    icon: '📊',
    skills: [
      { name: 'Tableau', level: 90, tag: 'Certified' },
      { name: 'Power BI', level: 70, tag: 'Certified' },
      { name: 'Figma', level: 80, tag: 'Dashboard Design' },
    ],
  },
  {
    title: 'Data Engineering',
    icon: '⚙️',
    skills: [
      { name: 'SQL', level: 90, tag: 'Advanced' },
      { name: 'Python', level: 75, tag: 'PySpark' },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    skills: [
      { name: 'Databricks', level: 80 },
      { name: 'Microsoft Fabric', level: 50 },
    ],
  },
  {
    title: 'AI & Productivity',
    icon: '🤖',
    skills: [
      { name: 'Cursor AI', level: 85 },
      { name: 'Claude Code', level: 85 },
    ],
  },
  {
    title: 'Collaboration Tools',
    icon: '🤝',
    skills: [
      { name: 'Jira', level: 90 },
      { name: 'Confluence', level: 80 },
      { name: 'Slack', level: 90 },
      { name: 'Git', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '💡',
    skills: [
      { name: 'Data Storytelling', level: 90 },
      { name: 'Stakeholder Communication', level: 90 },
      { name: 'Cross-functional Collaboration', level: 90 },
      { name: 'Mentoring', level: 80 },
    ],
  },
]

function SkillBar({ name, level, tag, delay }) {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
          {name}
          {tag && (
            <span className="ml-2 text-xs font-mono text-accent/70">{tag}</span>
          )}
        </span>
        <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-surface-border)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
        />
      </div>
    </div>
  )
}

function CategoryCard({ category, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card p-5 sm:p-6 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl">{category.icon}</span>
        <h3 className="font-display text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {category.title}
        </h3>
      </div>
      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} delay={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Tech Stack</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
