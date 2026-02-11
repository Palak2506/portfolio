import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    interactions: 0,
  });

  useEffect(() => {
    // Measure page load time
    if (typeof window !== "undefined" && window.performance) {
      const perfData = window.performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      const renderTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        interactions: 0,
      });
    }

    // Track interactions
    let interactionCount = 0;
    const trackInteraction = () => {
      interactionCount++;
      setMetrics((prev) => ({ ...prev, interactions: interactionCount }));
    };

    window.addEventListener("click", trackInteraction);
    window.addEventListener("keydown", trackInteraction);

    return () => {
      window.removeEventListener("click", trackInteraction);
      window.removeEventListener("keydown", trackInteraction);
    };
  }, []);

  const performanceData = [
    {
      label: "Page Load",
      value: `${(metrics.loadTime / 1000).toFixed(2)}s`,
      status: metrics.loadTime < 2000 ? "good" : metrics.loadTime < 4000 ? "ok" : "slow",
      description: "Time to fully load",
    },
    {
      label: "Render Time",
      value: `${(metrics.renderTime / 1000).toFixed(2)}s`,
      status: metrics.renderTime < 1500 ? "good" : metrics.renderTime < 3000 ? "ok" : "slow",
      description: "Time to interactive",
    },
    {
      label: "Interactions",
      value: metrics.interactions.toString(),
      status: "good",
      description: "User interactions tracked",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-40
                 hidden lg:block
                 bg-slate-900/90 dark:bg-slate-900/90
                 backdrop-blur-md
                 border border-slate-700/50 dark:border-slate-700/50
                 rounded-xl
                 p-4 shadow-xl
                 transition-colors duration-300"
    >
      <h4 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
        Performance
      </h4>
      <div className="space-y-2">
        {performanceData.map((item, i) => (
          <div key={item.label} className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="text-sm font-semibold text-teal-400">{item.value}</p>
            </div>
            <div
              className={`w-2 h-2 rounded-full ${
                item.status === "good"
                  ? "bg-green-500"
                  : item.status === "ok"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
