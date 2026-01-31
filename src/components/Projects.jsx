import { motion } from 'framer-motion'

const projects = [
  {
    name: 'HeritageAI',
    description:
      "AI-powered conversational platform for Rajasthan's cultural heritage. Integrates OpenAI API for natural dialogue and JWT-based authentication on a MERN stack.",
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT'],
    github: '#',
    live: '#',
    liveLabel: 'Coming Soon',
  },
  {
    name: 'TradeUp',
    description:
      'Full-stack trading platform with scalable MERN architecture. Handles transactions and user flows with a clean separation of concerns.',
    tech: ['MERN', 'REST API', 'JWT'],
    github: '#',
    live: '#',
    liveLabel: 'Coming Soon',
  },
  {
    name: 'Job Listing Web Application',
    description:
      'Location-based job search with REST APIs built using Node and Express. Helps users discover roles by geography and filters.',
    tech: ['Node.js', 'Express', 'REST API'],
    github: '#',
    live: '#',
    liveLabel: 'Coming Soon',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-10"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-dark-800/50 p-6 hover:border-teal-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-400 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300"
                >
                  <span>GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-400"
                >
                  <span>{project.liveLabel}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
