import { motion } from "framer-motion";

const projects = [
  {
    name: "HeritageAI",
    tagline: "AI × Culture × System Design",
    description:
      "A conversational AI platform that lets users explore Rajasthan’s cultural heritage through context-aware queries. Built with a focus on secure authentication, clean APIs, and scalable data flow.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
    github: "https://github.com/Palak2506/heritage-ai",
    live: "https://heritageai-black.vercel.app/login",
  },
  {
    name: "TradeUp",
    tagline: "Scalability-first full-stack architecture",
    description:
      "A trading platform that evolved from a frontend prototype into a production-ready MERN application, designed with modular UI components and clean backend architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Palak2506/tradeup",
    live: null,
  },
  {
    name: "Job Listing App",
    tagline: "Real APIs. Real deployment mindset.",
    description:
      "A full-stack job listing application featuring location-based filtering, RESTful APIs, and real-world cloud deployment considerations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    github: "https://github.com/Palak2506/job-listing-app",
    live: "https://joblistingfrontend-pearl.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-[#0B0F14] to-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100">
            Selected Work
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            Projects that reflect how I think about systems, scalability, and
            building for real-world use.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                } gap-14 items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <p className="text-teal-400 text-sm font-medium mb-2">
                    {project.tagline}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-semibold text-slate-100 mb-5">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 leading-relaxed max-w-xl mb-6">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full
                                   border border-slate-700
                                   text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg
                                 border border-teal-500/50
                                 text-teal-400
                                 hover:bg-teal-500/10
                                 transition"
                    >
                      GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg
                                   bg-teal-500 text-[#0B0F14]
                                   font-semibold
                                   hover:bg-teal-400
                                   transition"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="px-5 py-2.5 rounded-lg
                                   border border-slate-600
                                   text-slate-500
                                   cursor-not-allowed"
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Visual Anchor */}
                <div className="flex-1 w-full">
                  <div
                    className="relative h-64 md:h-80 rounded-2xl
                               bg-gradient-to-br from-teal-500/20 to-transparent
                               border border-teal-500/20
                               backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 flex items-center justify-center
                                    text-xs tracking-widest text-teal-300">
                      SYSTEM OVERVIEW
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
