import { motion } from 'framer-motion'

const highlights = [
  { label: 'AWS Certified Cloud Practitioner', category: 'Certification' },
  { label: 'Secretary – Mharo Rajasthan Club', category: 'Leadership' },
  { label: 'PR Lead – VITronix Club', category: 'Leadership' },
  { label: 'State-level Badminton Player', category: 'Sports' },
  { label: 'Contributor: Social Summer of Code', category: 'Open Source' },
  { label: '300+ LeetCode problems solved', category: 'Problem Solving' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-8"
        >
          Experience & Highlights
        </motion.h2>
        <ul className="space-y-4">
          {highlights.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-lg border border-slate-700/50 bg-dark-800/30 hover:border-teal-500/20 transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.label}</span>
              <span className="text-teal-400/90 text-sm font-medium sm:ml-auto">
                {item.category}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
