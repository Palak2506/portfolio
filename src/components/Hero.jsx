import { motion } from 'framer-motion'

const RESUME_PATH = '/resume.pdf'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 pt-24 pb-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-xl shadow-teal-500/10 ring-2 ring-slate-700/50">
          <img
            src="/photo.jpg"
            alt="Palak Dwivedi"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=PD&backgroundColor=14b8a6'
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-2">
          Palak Dwivedi
        </h1>
        <p className="text-teal-400 font-medium text-lg md:text-xl mb-3">
          SDE Intern · Full Stack Intern · DevOps / Cloud Intern (AWS)
        </p>
        <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8">
          Building scalable products with clean code and a strong MERN foundation. Final-year CSE @ VIT.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-teal-500 text-dark-950 font-semibold hover:bg-teal-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-slate-300 hover:text-teal-400 border border-slate-600 hover:border-teal-500/50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}
