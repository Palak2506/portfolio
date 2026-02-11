import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import PerformanceMetrics from './components/PerformanceMetrics'
import VisitCounter from './components/VisitCounter'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <KeyboardShortcuts />
      <PerformanceMetrics />
      <VisitCounter />
    </ThemeProvider>
  )
}

export default App
