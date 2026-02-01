import { motion } from "framer-motion";

const highlights = [
  {
    label: "AWS Certified Cloud Practitioner",
    category: "Certification",
  },
  {
    label: "Secretary – Mharo Rajasthan Club",
    category: "Leadership",
  },
  {
    label: "PR Lead – VITronix Club",
    category: "Leadership",
  },
  {
    label: "Contributor – Social Summer of Code",
    category: "Open Source",
  },
  {
    label: "300+ LeetCode problems solved",
    category: "Problem Solving",
  },
  {
    label: "State-level Badminton Player",
    category: "Discipline",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-[#0F172A] to-[#0B0F14]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100">
            Momentum
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            Signals of consistency, leadership, and growth beyond just writing
            code.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 space-y-12">
          {/* vertical line */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-slate-700/50" />

          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* dot */}
              <div
                className="absolute -left-[9px] top-1.5
                           w-3 h-3 rounded-full
                           bg-teal-400"
              />

              <div
                className="ml-4 rounded-xl
                           border border-slate-700/50
                           bg-slate-900/40
                           p-5
                           hover:border-teal-500/30
                           transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-slate-100 font-medium">
                    {item.label}
                  </span>
                  <span className="sm:ml-auto text-sm text-teal-400 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
