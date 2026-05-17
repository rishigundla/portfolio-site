import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    institution: 'IIIT Bangalore',
    fullName: 'International Institute of Information Technology Bangalore',
    degree: 'Post Graduate Program',
    field: 'Data Science',
    period: 'December 2021 – January 2023',
    color: 'rgb(var(--accent))',
  },
  {
    institution: 'Atharva College of Engineering',
    fullName: 'Atharva College of Engineering',
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Communications Engineering',
    period: '2016 – 2020',
    color: '#818cf8',
  },
]

export default function Education() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Background</p>
          <h2 className="section-title">Education</h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${edu.color}15` }}
              >
                <HiAcademicCap size={20} style={{ color: edu.color }} />
              </div>
              <h3 className="font-display text-base font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                {edu.institution}
              </h3>
              <p className="text-sm text-accent mb-1">{edu.degree}</p>
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>{edu.field}</p>
              <p className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
