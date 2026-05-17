import { motion } from 'framer-motion'

const techBadges = ['Tableau', 'Power BI', 'Databricks', 'Microsoft Fabric', 'SQL', 'PySpark']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="section-container relative z-10 text-center py-32 sm:py-40">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent">Currently @ Nutanix</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Rishikesh
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
            Gundla
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-mono text-sm sm:text-base mb-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Sr. Business Intelligence Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-serif text-lg sm:text-xl italic mb-8"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          &ldquo;Turning complex data into strategic clarity&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-surface-border)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent font-semibold text-sm hover:bg-accent-light transition-colors"
            style={{ color: 'var(--color-base-900)' }}
          >
            View My Work
          </a>
          <a
            href="/Rishikesh_Gundla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-xl border font-medium text-sm hover:border-accent/50 transition-colors"
            style={{ borderColor: 'var(--color-surface-border)', color: 'var(--color-text-secondary)' }}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-xl border font-medium text-sm hover:border-accent/50 transition-colors"
            style={{ borderColor: 'var(--color-surface-border)', color: 'var(--color-text-secondary)' }}
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
             style={{ borderColor: 'var(--color-text-muted)' }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}
