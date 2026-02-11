import { motion } from "framer-motion";
import { useState } from "react";

// Image loading component
function ProjectImage({ src, alt, isHovered }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0 : 1 }}
          className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900
                     flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-teal-500/30 border-t-teal-500 rounded-full"
          />
        </motion.div>
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`absolute inset-0 w-full h-full object-cover
                   group-hover:scale-110 transition-transform duration-700
                   ${loaded ? "opacity-100" : "opacity-0"}`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900
                       flex items-center justify-center text-slate-500 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    name: "HeritageAI",
    tagline: "AI × Culture × System Design",
    problem: "How do you make cultural heritage accessible through conversation?",
    solution:
      "A conversational AI platform that lets users explore Rajasthan's cultural heritage through context-aware queries. Built with secure authentication, clean APIs, and scalable data flow.",
    impact: [
      "OpenAI API integration for natural dialogue",
      "JWT-based authentication system",
      "Scalable MERN architecture",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
    tags: ["Full Stack", "AI", "MERN"],
    github: "https://github.com/Palak2506/HeritageAI",
    live: "https://heritageai-black.vercel.app/login",
    image: "/heritageai.png",
  },
  {
    name: "TradeUp",
    tagline: "Scalability-first full-stack architecture",
    problem: "Building a trading platform that can handle real transaction volume.",
    solution:
      "A trading platform that evolved from a frontend prototype into a production-ready MERN application, designed with modular UI components and clean backend architecture.",
    impact: [
      "Modular component architecture",
      "Transaction handling and data integrity",
      "Scalable backend design patterns",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["Full Stack", "MERN", "Trading"],
    github: "https://github.com/Palak2506/Tradeup",
    live: null,
    image: "/tradeup.png",
  },
  {
    name: "Job Listing App",
    tagline: "Real APIs. Real deployment mindset.",
    problem: "Location-based job discovery with fast, reliable filtering.",
    solution:
      "A full-stack job listing application featuring location-based filtering, RESTful APIs, and real-world cloud deployment considerations.",
    impact: [
      "RESTful API design",
      "Location-based search algorithms",
      "Production deployment on Vercel",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    tags: ["Full Stack", "MERN", "API"],
    github: "https://github.com/Palak2506/joblisting-",
    live: "https://joblistingfrontend-pearl.vercel.app/",
    image: "/joblisting.png",
  },
  {
    name: "Dwivedi Printers",
    tagline: "Modern digital presence for traditional business",
    problem: "Bringing a family-run printing business into the digital age.",
    solution:
      "A professional business website built for Dwivedi Printers to showcase printing services, business information, and contact details. Focus on clean UI, accessibility, and presenting a traditional business in a modern digital format.",
    impact: [
      "Clean, accessible UI design",
      "Business information architecture",
      "Modern presentation of traditional services",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    tags: ["Full Stack", "Business", "UI/UX"],
    github: "https://github.com/Palak2506",
    live: null,
    image: "/dwivedi.png",
  },
];

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-[#0B0F14] via-[#0F172A] to-[#0B0F14]"
    >
      {/* Enhanced background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 
                      bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 
                      bg-teal-400/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-teal-500 to-transparent"
            />
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl ml-20">
            Projects that reflect how I think about systems, scalability, and
            building for real-world use.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12 ml-20"
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                         ${
                           selectedTag === tag
                             ? "bg-teal-500 text-[#0B0F14] shadow-lg shadow-teal-500/30"
                             : "bg-slate-900/60 border border-slate-700 text-slate-300 hover:border-teal-500/50 hover:text-teal-400"
                         }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects with enhanced alternating layouts */}
        <motion.div
          layout
          className="space-y-32"
        >
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16 items-center group relative`}
              >
                {/* Project number indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute -left-8 top-0 hidden lg:block"
                >
                  <div className="w-16 h-16 rounded-full
                                  border-2 border-teal-500/30
                                  bg-slate-900/80 backdrop-blur-sm
                                  flex items-center justify-center
                                  group-hover:border-teal-500/60
                                  transition-all duration-300">
                    <span className="text-2xl font-bold text-teal-400">
                      {String(
                        projects.findIndex((p) => p.name === project.name) + 1
                      ).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  {/* Tagline with enhanced styling */}
                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-teal-400 text-sm font-semibold uppercase tracking-wider
                               flex items-center gap-2"
                  >
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="h-px w-8 bg-teal-500/50"
                    />
                    {project.tagline}
                  </motion.p>

                  {/* Project Name with gradient effect */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-100
                               group-hover:text-teal-400 transition-colors duration-300"
                  >
                    {project.name}
                  </motion.h3>

                  {/* Problem Statement */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-300 text-lg font-medium italic
                               border-l-2 border-teal-500/30 pl-4"
                  >
                    {project.problem}
                  </motion.p>

                  {/* Solution */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-400 leading-relaxed"
                  >
                    {project.solution}
                  </motion.p>

                  {/* Impact Points with enhanced styling */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {project.impact.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300
                                   group/item"
                      >
                        <motion.span
                          className="text-teal-400 mt-1.5 text-lg
                                     group-hover/item:scale-125 transition-transform"
                        >
                          ▸
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Enhanced Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-full
                                   border border-slate-700 bg-slate-900/50
                                   text-slate-300 text-xs font-medium
                                   hover:border-teal-500/40 hover:text-teal-400 hover:bg-teal-500/10
                                   transition-all duration-200 cursor-default
                                   backdrop-blur-sm"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 pt-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 py-2.5 rounded-lg
                                 border border-teal-500/50 text-teal-400
                                 hover:bg-teal-500/10 hover:border-teal-500/70
                                 transition-all duration-200
                                 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        GitHub
                        <motion.span
                          className="inline-block ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.a>

                    {project.live ? (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 rounded-lg
                                   bg-teal-500 text-[#0B0F14] font-semibold
                                   hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30
                                   transition-all duration-200"
                      >
                        Live Demo
                      </motion.a>
                    ) : (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2.5 rounded-lg
                                   border border-slate-600 bg-slate-900/50
                                   text-slate-500 cursor-not-allowed
                                   relative group"
                      >
                        Coming Soon
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
                                        px-3 py-1.5 bg-slate-800 border border-slate-700
                                        text-xs text-slate-300 rounded-lg
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity whitespace-nowrap
                                        shadow-lg">
                          Demo in progress
                        </span>
                      </motion.span>
                    )}
                  </motion.div>
                </div>

                {/* Enhanced Visual Anchor with better hover effects */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={isHovered ? { scale: 1.02, y: -8 } : { scale: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 w-full"
                >
                  <div
                    className="relative h-64 md:h-80 lg:h-96 rounded-2xl
                               overflow-hidden
                               bg-gradient-to-br from-teal-500/20 via-slate-900 to-slate-800
                               border border-teal-500/20
                               shadow-2xl shadow-teal-500/10
                               group-hover:border-teal-500/50 group-hover:shadow-teal-500/20
                               transition-all duration-500"
                  >
                    {/* Image with loading state */}
                    <ProjectImage
                      src={project.image}
                      alt={`${project.name} system overview`}
                      isHovered={isHovered}
                    />

                    {/* Enhanced overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t 
                                    from-black/70 via-black/20 to-transparent" />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10
                                 transition-colors duration-500"
                    />
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
