import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 sm:px-6
                       bg-gradient-to-b from-[#0B0F14] to-[#020617]
                       border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col sm:flex-row
                        items-center justify-between
                        gap-8 mb-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <p className="text-slate-500 text-sm mb-2">
              © {currentYear} Palak Dwivedi
            </p>
            <p className="text-slate-600 text-xs">
              Built with care and clarity
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2
                         text-sm text-teal-400
                         hover:text-teal-300
                         transition-colors"
            >
              <span>Resume</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>

            <span className="h-4 w-px bg-slate-700" />

            <a
              href="mailto:dwivedipalak761@gmail.com"
              className="text-sm text-slate-400
                         hover:text-teal-400
                         transition-colors"
            >
              Say hello
            </a>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-full bg-gradient-to-r 
                     from-transparent via-slate-700/50 to-transparent mb-8"
        />

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs text-slate-600"
        >
          Open to opportunities in SDE, Full Stack, and DevOps roles
        </motion.p>
      </div>
    </footer>
  );
}
