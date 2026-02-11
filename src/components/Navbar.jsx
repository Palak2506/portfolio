import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50
                  transition-all duration-300
                  ${
                    scrolled
                      ? "bg-[#0B0F14]/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20"
                      : "bg-[#0B0F14]/70 backdrop-blur-xl border-b border-white/5"
                  }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                      h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-lg text-slate-100
                     hover:text-teal-400 transition-colors"
        >
          Palak <span className="text-teal-400">Dwivedi</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
          {navLinks.map((link, i) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <a
                  href={link.href}
                  className={`text-sm transition-colors font-medium relative
                             ${
                               isActive
                                 ? "text-teal-400"
                                 : "text-slate-300 hover:text-teal-400"
                             }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-teal-400"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {!isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-0
                                 bg-teal-400 group-hover:w-full
                                 transition-all duration-300"
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile: Theme toggle and menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-slate-300 hover:text-teal-400
                     transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </motion.svg>
        </motion.button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0F14]/98 backdrop-blur-xl 
                       border-t border-slate-800/50 overflow-hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
                closed: {},
              }}
              className="px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block transition-colors py-2 font-medium
                                 ${
                                   isActive
                                     ? "text-teal-400"
                                     : "text-slate-300 hover:text-teal-400"
                                 }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
