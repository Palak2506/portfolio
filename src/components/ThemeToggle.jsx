import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Listen for custom toggle event from keyboard shortcuts
    const handleToggle = () => toggleTheme();
    window.addEventListener("toggleTheme", handleToggle);
    return () => window.removeEventListener("toggleTheme", handleToggle);
  }, [toggleTheme]);


  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full
                 bg-slate-700
                 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                 focus:ring-offset-[#0B0F14]"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}. Click to switch to ${theme === "dark" ? "light" : "dark"}`}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full
                   bg-white
                   shadow-lg"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <motion.svg
            className="w-full h-full p-1 text-slate-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </motion.svg>
        ) : (
          <motion.svg
            className="w-full h-full p-1 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: -360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </motion.svg>
        )}
      </motion.div>
    </motion.button>
  );
}
