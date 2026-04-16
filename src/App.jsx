import { ThemeProvider } from './hooks/useTheme'
import GlobalBackground from './components/GlobalBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-body transition-colors duration-300"
           style={{ backgroundColor: 'var(--color-base-900)', color: 'var(--color-text-primary)' }}>
        <GlobalBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
