import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Building Interfaces",
    subtitle: "Calm, responsive, intentional UI",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Designing APIs & Systems",
    subtitle: "Clear data flow and backend structure",
    items: ["Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    title: "Cloud & Deployment",
    subtitle: "Where code actually lives",
    items: ["AWS (Cloud Practitioner)", "Vercel", "Env Configs"],
  },
  {
    title: "Tools I Trust",
    subtitle: "Simple tools, used well",
    items: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-[#0F172A] to-[#0B0F14]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100">
            How I Build
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            My tools are chosen with intent — clarity over cleverness, structure
            over shortcuts.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl
                         border border-slate-700/50
                         bg-slate-900/40
                         p-6
                         hover:border-teal-500/40
                         transition"
            >
              {/* glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl
                           opacity-0 group-hover:opacity-100
                           bg-gradient-to-br from-teal-500/10 to-transparent
                           transition"
              />

              <h3 className="relative text-lg font-semibold text-slate-100">
                {group.title}
              </h3>

              <p className="relative mt-1 text-sm text-slate-400 mb-5">
                {group.subtitle}
              </p>

              <ul className="relative flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full
                               border border-slate-700
                               text-slate-300
                               hover:border-teal-500/40
                               hover:text-teal-400
                               transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
