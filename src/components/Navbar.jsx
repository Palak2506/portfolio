import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50
                       bg-[#0B0F14]/70 backdrop-blur-xl
                       border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6
                      h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold text-slate-100
                     hover:text-teal-400 transition"
        >
          Palak Dwivedi
        </a>

        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-teal-400 transition"
              >
                {link.label}
              </a>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0
                               bg-teal-400 group-hover:w-full
                               transition-all" />
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0B0F14]/95 border-t border-white/5"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-slate-300 hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
