import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);
  const [isNewVisit, setIsNewVisit] = useState(false);

  useEffect(() => {
    // Get or initialize visit count
    const storedCount = localStorage.getItem("visitCount");
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();

    if (storedCount) {
      setVisitCount(parseInt(storedCount, 10));
    }

    // Check if this is a new visit today
    if (lastVisit !== today) {
      const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount.toString());
      localStorage.setItem("lastVisit", today);
      setIsNewVisit(true);

      // Reset animation after showing
      setTimeout(() => setIsNewVisit(false), 2000);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-20 right-4 z-40
                 hidden lg:block
                 bg-slate-900/90 dark:bg-slate-900/90
                 backdrop-blur-md
                 border border-slate-700/50 dark:border-slate-700/50
                 rounded-xl
                 p-4 shadow-xl
                 transition-all duration-300
                 hover:scale-105 hover:shadow-2xl
                 cursor-default"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={isNewVisit ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl"
        >
          👁️
        </motion.div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider">
            Total Visits
          </p>
          <motion.p
            key={visitCount}
            initial={{ scale: 1.2, color: "#14b8a6" }}
            animate={{ scale: 1, color: "#14b8a6" }}
            className="text-2xl font-bold text-teal-400"
          >
            {visitCount.toLocaleString()}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
