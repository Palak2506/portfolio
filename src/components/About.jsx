import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 bg-gradient-to-b from-[#0B0F14] to-[#0F172A]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* section divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-slate-100 mb-14"
        >
          How I Think About Building
        </motion.h2>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-6 text-slate-300 leading-relaxed"
        >
          {[
            "I’m a final-year Computer Science student at Vellore Institute of Technology with a strong interest in building systems that feel simple on the surface but are thoughtfully designed underneath.",
            "I care deeply about clarity — writing code that not only works today, but still makes sense months later. My foundation is in the MERN stack, where I’ve built full-stack applications with clean APIs and predictable data flow.",
            "I enjoy thinking about how systems behave under real usage. That curiosity pulled me toward cloud infrastructure and deployment — because good UI means very little if the system behind it can’t hold.",
            "Outside of projects, I keep a consistent problem-solving mindset. I’ve solved 300+ LeetCode problems — not for streaks, but to build discipline and pattern recognition.",
            "I’m aiming for SDE, Full Stack, and Cloud / DevOps roles where I can ship real features, learn from production systems, and keep improving how I build."
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
