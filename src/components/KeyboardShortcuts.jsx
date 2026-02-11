import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shortcuts = [
  { key: "H", description: "Go to Hero section" },
  { key: "A", description: "Go to About section" },
  { key: "S", description: "Go to Skills section" },
  { key: "P", description: "Go to Projects section" },
  { key: "E", description: "Go to Experience section" },
  { key: "C", description: "Go to Contact section" },
  { key: "T", description: "Toggle theme" },
  { key: "Esc", description: "Close shortcuts help" },
];

const sectionMap = {
  h: "hero",
  a: "about",
  s: "skills",
  p: "projects",
  e: "experience",
  c: "contact",
};

export default function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Don't trigger if user is typing in an input
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // Toggle theme
      if (key === "t" && !e.ctrlKey && !e.metaKey) {
        const event = new CustomEvent("toggleTheme");
        window.dispatchEvent(event);
      }

      // Navigate to sections
      if (sectionMap[key]) {
        e.preventDefault();
        const section = document.getElementById(sectionMap[key]);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      // Show/hide help
      if (e.key === "?" || (e.key === "Escape" && showHelp)) {
        setShowHelp((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showHelp]);

  return (
    <AnimatePresence>
      {showHelp && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 backdrop-blur-sm"
          onClick={() => setShowHelp(false)}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full mx-4
                       bg-slate-900 border border-slate-700 rounded-2xl
                       p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-100">
                Keyboard Shortcuts
              </h3>
              <button
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid gap-4">
              {shortcuts.map((shortcut, i) => (
                <motion.div
                  key={shortcut.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-lg
                             bg-slate-800/50 border border-slate-700/50"
                >
                  <span className="text-slate-300">{shortcut.description}</span>
                  <kbd className="px-3 py-1 rounded
                                  bg-slate-700 border border-slate-600
                                  text-teal-400 font-mono text-sm
                                  shadow-lg">
                    {shortcut.key}
                  </kbd>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              Press <kbd className="px-2 py-1 rounded bg-slate-800 text-teal-400">?</kbd> to toggle this help
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
