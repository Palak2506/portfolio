import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-6"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4 text-slate-300 leading-relaxed"
        >
          <p>
            I'm a final-year Computer Science student at Vellore Institute of Technology, with a CGPA of 8.11. I enjoy turning ideas into products that feel simple to use but solid under the hood.
          </p>
          <p>
            I care about writing code that not only works, but still makes sense months later. My foundation is in the MERN stack—I've built full-stack apps with React, Node, Express, and MongoDB—and I'm interested in real-world, scalable products. Currently exploring the intersection of full-stack development and cloud infrastructure.
          </p>
          <p>
            I'm curious about systems, cloud, and performance, and I keep a consistent problem-solving mindset—I've solved 300+ LeetCode problems. I'm aiming for SDE, Full Stack, and DevOps/Cloud intern roles where I can ship features and learn from production systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
