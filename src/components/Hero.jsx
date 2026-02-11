import { motion } from "framer-motion";

const RESUME_PATH = "/resume.pdf";

// Staggered role animation
const roles = ["SDE Intern", "Full Stack", "DevOps / Cloud"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden
                 bg-gradient-to-b from-[#0B0F14] via-[#0F172A] to-[#0B0F14]"
    >
      {/* Enhanced ambient depth layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background glow with animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] 
                      bg-teal-500/8 blur-[140px] rounded-full" 
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] 
                      bg-teal-400/5 blur-[120px] rounded-full" 
        />
        
        {/* Grid pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02] 
                        bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] 
                        bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                      pt-32 pb-20 md:pt-40">
        
        {/* Asymmetric split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Name with gradient effect */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold 
                           tracking-tight leading-[1.1]"
              >
                <span className="text-slate-100">Palak</span>
                <br />
                <motion.span
                  className="text-teal-400 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 
                             bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0%", "200%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Dwivedi
                </motion.span>
              </motion.h1>
            </div>

            {/* Animated roles with better styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 items-center"
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-1.5 rounded-full
                             bg-teal-500/10 border border-teal-500/30
                             text-teal-400 text-sm font-medium
                             backdrop-blur-sm
                             hover:bg-teal-500/20 hover:border-teal-500/50
                             transition-all duration-200
                             shadow-lg shadow-teal-500/10"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Powerful headline with better typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-200 leading-relaxed
                         max-w-xl font-light"
            >
              I build things that work{" "}
              <span className="text-teal-400 font-medium">quietly</span>, scale{" "}
              <span className="text-teal-400 font-medium">well</span>, and don't fall apart under{" "}
              <span className="text-teal-400 font-medium">pressure</span>.
            </motion.p>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed"
            >
              Clean UI on the surface, solid systems underneath. Final-year CSE student exploring full-stack engineering and cloud systems.
            </motion.p>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3.5 rounded-xl
                           bg-teal-500 text-[#0B0F14] font-semibold
                           shadow-lg shadow-teal-500/30
                           hover:bg-teal-400 hover:shadow-teal-500/50
                           transition-all duration-200
                           overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl
                           border-2 border-teal-500/40 text-teal-400
                           hover:bg-teal-500/10 hover:border-teal-500/60
                           transition-all duration-200
                           backdrop-blur-sm"
              >
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl
                           border border-slate-600 text-slate-300
                           hover:border-teal-500/50 hover:text-teal-400 hover:bg-slate-800/50
                           transition-all duration-200"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Enhanced scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:flex items-center gap-2 text-sm text-slate-500 pt-8"
            >
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                Scroll to explore
              </motion.span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.1 }}
                className="text-teal-400 text-lg"
              >
                ↓
              </motion.span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Enhanced photo with creative integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-12"
          >
            {/* Animated layered glows */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[400px] h-[400px] rounded-full 
                              bg-teal-500/20 blur-[100px]" />
            </motion.div>
            
            {/* Photo container with enhanced effects */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated outer glow ring */}
              <motion.div
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 rounded-3xl 
                            bg-gradient-to-br from-teal-500/30 via-teal-400/20 to-transparent
                            blur-xl"
              />
              
              {/* Photo frame with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden
                              border-2 border-teal-500/40
                              shadow-2xl shadow-teal-500/30
                              bg-gradient-to-br from-slate-800 to-slate-900
                              transform rotate-2 hover:rotate-0 transition-transform duration-500
                              group">
                
                {/* Animated mask overlay for depth */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.5, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-t 
                              from-black/40 via-transparent to-transparent z-10" 
                />
                
                {/* Photo with parallax effect */}
                <motion.img
                  src="/photo.jpeg"
                  alt="Palak Dwivedi"
                  className="w-full h-full object-cover
                             brightness-105 contrast-110
                             scale-110 group-hover:scale-100 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=PD&backgroundColor=14b8a6';
                  }}
                />
              </div>

              {/* Enhanced decorative corner accent */}
              <motion.div
                animate={{
                  rotate: [12, 15, 12],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-8 w-28 h-28
                            border-2 border-teal-500/30 rounded-2xl
                            rotate-12"
              />
              
              {/* Additional corner accent */}
              <motion.div
                animate={{
                  rotate: [-8, -12, -8],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-6 -left-6 w-20 h-20
                            border border-teal-500/20 rounded-xl
                            -rotate-12"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
