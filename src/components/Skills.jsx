import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (Certified Cloud Practitioner)'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-8"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-slate-700/50 bg-dark-800/30 p-5"
            >
              <h3 className="text-teal-400 font-semibold mb-3">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 text-sm"
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
  )
}
