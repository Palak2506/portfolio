import { motion } from "framer-motion";

export default function About() {
  const statements = [
    {
      text: "I'm a final-year Computer Science student at Vellore Institute of Technology (CGPA: 8.11), building systems that feel simple on the surface but are thoughtfully structured underneath.",
      highlight: false,
    },
    {
      text: "I care deeply about clarity — writing code that not only works today, but still makes sense months later.",
      highlight: true,
    },
    {
      text: "My foundation is in the MERN stack, where I've built full-stack applications with clean APIs, predictable data flow, and real-world deployment considerations.",
      highlight: false,
    },
    {
      text: "I enjoy thinking about how systems behave under real usage. That curiosity pulled me toward cloud infrastructure and deployment — because good UI means very little if the system behind it can't hold.",
      highlight: false,
    },
    {
      text: "Outside of projects, I keep a consistent problem-solving mindset. I've solved 300+ LeetCode problems — not for streaks, but to build discipline and pattern recognition.",
      highlight: false,
    },
    {
      text: "I'm aiming for SDE, Full Stack, and Cloud / DevOps roles where I can ship real features, learn from production systems, and keep improving how I build.",
      highlight: false,
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-32 bg-gradient-to-b from-[#0F172A] via-[#0B0F14] to-[#0F172A]"
    >
      {/* Enhanced background texture */}
      <div className="absolute inset-0 opacity-[0.02] 
                      bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] 
                      bg-[length:40px_40px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 
                      bg-teal-500/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 h-px w-full bg-gradient-to-r 
                     from-transparent via-teal-500/30 to-transparent"
        />

        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
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
              How I Think About Building
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl ml-20">
            Not just code — systems that make sense, scale gracefully, and stay maintainable.
          </p>
        </motion.div>

        {/* Content with staggered reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="space-y-6"
        >
          {statements.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, x: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{ x: 4 }}
              className={`relative pl-6 group ${
                item.highlight
                  ? "border-l-2 border-teal-500/50 bg-teal-500/5 rounded-r-lg py-4 hover:bg-teal-500/10 transition-colors"
                  : "hover:border-l-2 hover:border-teal-500/20 transition-all"
              }`}
            >
              <p
                className={`leading-relaxed ${
                  item.highlight
                    ? "text-slate-200 text-lg font-medium"
                    : "text-slate-300"
                }`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 h-px w-full bg-gradient-to-r 
                     from-transparent via-slate-700/50 to-transparent"
        />
      </div>
    </section>
  );
}
