import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b shadow-lg'
            : 'bg-transparent'
        }`}
        style={scrolled ? {
          backgroundColor: theme === 'dark' ? 'rgba(10,10,15,0.8)' : 'rgba(248,249,250,0.85)',
          borderColor: 'var(--color-surface-border)',
          boxShadow: theme === 'dark' ? '0 4px 30px rgba(0,0,0,0.2)' : '0 4px 30px rgba(0,0,0,0.06)',
        } : {}}
      >
        <div className="section-container flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-sm sm:text-base font-medium hover:text-accent transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
          >
            RG<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-4 py-2 text-sm hover:text-accent transition-colors group"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg hover:bg-surface transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(10,10,15,0.98)' : 'rgba(248,249,250,0.98)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-display font-medium hover:text-accent transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
