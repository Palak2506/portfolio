import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    label: "LeetCode Problems Solved",
    value: 300,
    suffix: "+",
    icon: "🧩",
    description: "Consistent problem-solving practice",
  },
  {
    label: "Projects Built",
    value: 4,
    suffix: "",
    icon: "🚀",
    description: "Full-stack applications",
  },
  {
    label: "Years of Experience",
    value: 3,
    suffix: "+",
    icon: "💼",
    description: "Building with MERN stack",
  },
  {
    label: "Certifications",
    value: 1,
    suffix: "",
    icon: "🏆",
    description: "AWS Cloud Practitioner",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B0F14] via-[#0F172A] to-[#0B0F14]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-96 h-96 bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-teal-500 to-transparent"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              By The Numbers
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-l from-teal-500 to-transparent"
            />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Metrics that reflect my commitment to continuous learning and building.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative rounded-2xl
                         border border-slate-700/50
                         bg-gradient-to-br from-slate-900/60 to-slate-900/40
                         p-6 text-center
                         hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10
                         transition-all duration-300
                         backdrop-blur-sm"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                className="text-4xl mb-3"
              >
                {stat.icon}
              </motion.div>

              {/* Value */}
              <motion.div
                className="text-4xl md:text-5xl font-bold text-teal-400 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>

              {/* Label */}
              <p className="text-sm text-slate-300 font-medium mb-1">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-500">
                {stat.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16
                              bg-teal-500/5 rounded-bl-full
                              opacity-0 hover:opacity-100
                              transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
