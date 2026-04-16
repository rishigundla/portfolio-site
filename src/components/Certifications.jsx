import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiExternalLink, HiShieldCheck } from 'react-icons/hi'

const certifications = [
  {
    title: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    color: '#2dd4bf',
    badgeImage: '/badges/tableau-desktop-specialist-badge.png',
    verifyLink: 'https://www.credly.com/badges/137c8743-d119-4b9d-9eb5-a04a8810221f/public_url',
  },
  {
    title: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    color: '#818cf8',
    badgeImage: '/badges/microsoft-certified-associate-badge.svg',
    verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/RishikeshGundla/BF2A40096A5439D?sharingId=111EB2EB6A833489',
  },
  {
    title: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    color: '#38bdf8',
    badgeImage: '/badges/microsoft-certified-fundamentals-badge.svg',
    verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/RishikeshGundla/C2679E5CF2676082?sharingId=111EB2EB6A833489',
  },
]

export default function Certifications() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="accent-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert, index, isVisible }) {
  const [imgError, setImgError] = useState(false)

  const CardWrapper = cert.verifyLink ? 'a' : 'div'
  const linkProps = cert.verifyLink
    ? { href: cert.verifyLink, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardWrapper
        {...linkProps}
        className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1 block cursor-pointer"
      >
        {/* Badge Image */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden flex items-center justify-center"
             style={{ backgroundColor: `${cert.color}10` }}>
          {!imgError ? (
            <img
              src={cert.badgeImage}
              alt={`${cert.title} badge`}
              className="w-full h-full object-contain p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <HiShieldCheck size={40} style={{ color: cert.color }} />
          )}
        </div>

        <h3 className="font-display text-sm font-semibold mb-1 group-hover:text-accent transition-colors"
            style={{ color: 'var(--color-text-primary)' }}>
          {cert.title}
        </h3>
        <p className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>{cert.issuer}</p>

        {cert.verifyLink && (
          <div className="mt-3 inline-flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Verify <HiExternalLink size={12} />
          </div>
        )}

        <div
          className="w-8 h-0.5 rounded-full mx-auto mt-4 opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: cert.color }}
        />
      </CardWrapper>
    </motion.div>
  )
}
