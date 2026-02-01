import { motion } from "framer-motion";

const RESUME_PATH = "/resume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden
                 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                 from-teal-500/10 via-[#0B0F14] to-[#0B0F14]"
    >
      {/* ambient glows */}
      <div className="absolute -top-40 right-1/4 w-[28rem] h-[28rem] bg-teal-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-teal-400/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                      pt-28 pb-20 flex flex-col-reverse md:flex-row
                      items-center gap-16 md:gap-24">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl
                         font-bold tracking-tight text-slate-100">
            Palak <span className="text-teal-400">Dwivedi</span>
          </h1>

          <p className="mt-5 text-teal-400 font-medium text-lg">
            Software Engineer · Full Stack · Cloud / DevOps
          </p>

          <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto md:mx-0">
            I build systems that stay calm under pressure —
            elegant interfaces backed by dependable infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl
                         bg-teal-500 text-[#0B0F14]
                         font-semibold
                         shadow-lg shadow-teal-500/30
                         hover:bg-teal-400 hover:scale-[1.03]
                         transition-all"
            >
              View Projects
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl
                         border border-teal-500/40
                         text-teal-400
                         hover:bg-teal-500/10
                         transition"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl
                         border border-slate-600
                         text-slate-300
                         hover:border-teal-500/50
                         hover:text-teal-400
                         transition"
            >
              Contact
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hidden md:block mt-16 text-sm text-slate-500"
          >
            Scroll to explore ↓
          </motion.div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-teal-500/20 blur-2xl" />
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72
                          rounded-3xl overflow-hidden
                          border border-teal-500/30
                          shadow-2xl shadow-teal-500/20">
            <img
              src="/photo.jpeg"
              alt="Palak Dwivedi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
