import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiMail, HiChartBar } from 'react-icons/hi'

const links = [
  { href: 'https://linkedin.com/in/rishikeshgundla', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://github.com/rishigundla', icon: FaGithub, label: 'GitHub' },
  { href: 'https://public.tableau.com/profile/rishikeshgundla', icon: HiChartBar, label: 'Tableau Public' },
  { href: 'mailto:gundlarishikesh@gmail.com', icon: HiMail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-surface-border)' }} className="py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Rishikesh Gundla &middot; &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:text-accent transition-all"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <Icon size={14} />
              </a>
            )
          })}
        </div>

        <p className="text-xs" style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>Built with React</p>
      </div>
    </footer>
  )
}
