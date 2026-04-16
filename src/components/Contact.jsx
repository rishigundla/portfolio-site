import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiMail, HiExternalLink, HiChartBar } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socials = [
  {
    label: 'Email',
    href: 'mailto:gundlarishikesh@gmail.com',
    value: 'gundlarishikesh@gmail.com',
    icon: HiMail,
    color: '#2dd4bf',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rishikeshgundla',
    value: 'linkedin.com/in/rishikeshgundla',
    icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    label: 'Tableau Public',
    href: 'https://public.tableau.com/profile/rishikeshgundla',
    value: 'public.tableau.com/profile/rishikeshgundla',
    icon: HiChartBar,
    color: '#e97627',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rishigundla',
    value: 'github.com/rishigundla',
    icon: FaGithub,
    color: '#888',
  },
]

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="accent-line mx-auto mt-6" />
          <p className="mt-6 max-w-lg mx-auto font-serif italic text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Open to opportunities in Data Engineering, Analytics Engineering, and Senior BI roles.
            Let&apos;s build something meaningful with data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {socials.map((social, i) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 p-4 glass-card hover:border-accent/30 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${social.color}15` }}
                >
                  <Icon size={18} style={{ color: social.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium group-hover:text-accent transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                    {social.label}
                  </div>
                  <div className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>{social.value}</div>
                </div>
                <HiExternalLink className="ml-auto group-hover:text-accent transition-colors shrink-0" style={{ color: 'var(--color-text-muted)' }} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
