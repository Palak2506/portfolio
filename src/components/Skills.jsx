import { motion } from "framer-motion";
import { useState } from "react";

const skillGroups = [
  {
    title: "Building Interfaces",
    subtitle: "Calm, responsive, intentional UI",
    description: "Creating interfaces that feel natural and perform consistently across devices.",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    icon: "🎨",
  },
  {
    title: "Designing APIs & Systems",
    subtitle: "Clear data flow and backend structure",
    description: "Architecting backend systems with predictable data flow and maintainable structure.",
    items: ["Node.js", "Express.js", "MongoDB", "SQL"],
    icon: "⚙️",
  },
  {
    title: "Cloud & Deployment",
    subtitle: "Where code actually lives",
    description: "Deploying applications that scale reliably and perform consistently in production.",
    items: ["AWS (Cloud Practitioner)", "Vercel", "Env Configs"],
    icon: "☁️",
  },
  {
    title: "Tools I Trust",
    subtitle: "Simple tools, used well",
    description: "Tools that help me build faster, debug smarter, and collaborate effectively.",
    items: ["Git", "GitHub"],
    icon: "🛠️",
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-[#0F172A] via-[#0B0F14] to-[#0F172A]"
    >
      {/* Enhanced background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 
                      bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 
                      bg-teal-400/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
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
              How I Build
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl ml-20">
            My tools are chosen with intent — clarity over cleverness, structure
            over shortcuts.
          </p>
        </motion.div>

        {/* Enhanced Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl
                           border border-slate-700/50
                           bg-gradient-to-br from-slate-900/60 to-slate-900/40
                           p-6 lg:p-8
                           hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10
                           transition-all duration-300
                           overflow-hidden"
              >
                {/* Enhanced animated glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl
                             bg-gradient-to-br from-teal-500/20 via-teal-500/5 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl mb-4 relative z-10"
                >
                  {group.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-100 mb-2
                                 group-hover:text-teal-400 transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-sm text-teal-400/90 font-medium mb-1">
                    {group.subtitle}
                  </p>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Enhanced Skills */}
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs px-3 py-1.5 rounded-full
                                   border border-slate-700 bg-slate-800/50
                                   text-slate-300
                                   group-hover:border-teal-500/40
                                   group-hover:text-teal-400 group-hover:bg-teal-500/10
                                   transition-all duration-200
                                   cursor-default backdrop-blur-sm"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced corner accent */}
                <motion.div
                  animate={isHovered ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0 }}
                  className="absolute top-0 right-0 w-32 h-32
                              bg-teal-500/10 rounded-bl-full
                              transition-all duration-500" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
