import { motion } from "framer-motion";

const highlights = [
  {
    label: "AWS Certified Cloud Practitioner",
    category: "Certification",
    year: "2024",
    description: "Validated understanding of cloud concepts and AWS services.",
    icon: "🏆",
  },
  {
    label: "Secretary – Mharo Rajasthan Club",
    category: "Leadership",
    year: "2023-2024",
    description: "Led event planning and coordination for cultural initiatives.",
    icon: "👥",
  },
  {
    label: "PR Lead – VITronix Club",
    category: "Leadership",
    year: "2023-2024",
    description: "Managed communications and outreach for tech club activities.",
    icon: "📢",
  },
  {
    label: "Contributor – Social Summer of Code",
    category: "Open Source",
    year: "2024",
    description: "Contributed to open-source projects focused on social impact.",
    icon: "💻",
  },
  {
    label: "300+ LeetCode problems solved",
    category: "Problem Solving",
    year: "Ongoing",
    description: "Consistent practice building algorithmic thinking and pattern recognition.",
    icon: "🧩",
  },
  {
    label: "State-level Badminton Player",
    category: "Discipline",
    year: "Competitive",
    description: "Demonstrates commitment, strategic thinking, and resilience.",
    icon: "🏸",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-gradient-to-b from-[#0B0F14] via-[#0F172A] to-[#0B0F14]"
    >
      {/* Enhanced background accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 
                      bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 
                      bg-teal-400/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Momentum
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl ml-20">
            Signals of consistency, leadership, and growth beyond just writing
            code.
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative pl-8 md:pl-12 space-y-8">
          {/* Animated vertical line with gradient */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-2 md:left-4 top-0 bottom-0 w-0.5
                       bg-gradient-to-b from-teal-500 via-teal-500/50 to-transparent"
          />

          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Enhanced animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                className="absolute -left-[18px] md:-left-[22px] top-2
                           w-4 h-4 rounded-full
                           bg-teal-400 border-2 border-[#0B0F14]
                           shadow-lg shadow-teal-500/50
                           group-hover:scale-125 group-hover:shadow-teal-500/70
                           transition-all duration-300
                           z-10"
              />

              {/* Enhanced pulse ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute -left-[22px] md:-left-[26px] top-0
                           w-4 h-4 rounded-full border-2 border-teal-500/30"
              />

              {/* Enhanced content card */}
              <motion.div
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="ml-6 md:ml-8 rounded-xl
                           border border-slate-700/50
                           bg-gradient-to-br from-slate-900/60 to-slate-900/40
                           p-6
                           hover:border-teal-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-teal-500/10
                           transition-all duration-300
                           backdrop-blur-sm
                           group/card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                      className="text-2xl group-hover/card:scale-110 transition-transform"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <div>
                      <h3 className="text-slate-100 font-semibold text-lg mb-1
                                     group-hover/card:text-teal-400 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="text-xs px-3 py-1 rounded-full
                                      bg-teal-500/10 border border-teal-500/30
                                      text-teal-400 font-medium
                                      whitespace-nowrap
                                      group-hover/card:bg-teal-500/20 group-hover/card:border-teal-500/50
                                      transition-all">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
