import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building Scalable MERN Applications",
    excerpt:
      "Lessons learned from building production-ready full-stack applications. Architecture patterns, database design, and deployment strategies.",
    date: "2024",
    readTime: "5 min read",
    category: "Engineering",
    tags: ["MERN", "Architecture", "Backend"],
  },
  {
    title: "Cloud Infrastructure for Beginners",
    excerpt:
      "Getting started with AWS and cloud deployment. From localhost to production, understanding the fundamentals of cloud infrastructure.",
    date: "2024",
    readTime: "7 min read",
    category: "Cloud",
    tags: ["AWS", "DevOps", "Deployment"],
  },
  {
    title: "Problem-Solving Patterns in LeetCode",
    excerpt:
      "Common patterns and strategies I've learned from solving 300+ LeetCode problems. How to approach algorithmic challenges systematically.",
    date: "2024",
    readTime: "6 min read",
    category: "Algorithms",
    tags: ["LeetCode", "Algorithms", "Problem Solving"],
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-32 bg-gradient-to-b from-[#0F172A] via-[#0B0F14] to-[#0F172A]"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 
                      bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-teal-500 to-transparent"
            />
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
              Writing & Thoughts
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl ml-20">
            Sharing insights on engineering, cloud infrastructure, and problem-solving.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl
                         border border-slate-700/50
                         bg-gradient-to-br from-slate-900/60 to-slate-900/40
                         p-6
                         hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10
                         transition-all duration-300
                         cursor-pointer
                         backdrop-blur-sm"
            >
              {/* Category badge */}
              <span className="inline-block px-3 py-1 rounded-full
                               bg-teal-500/10 border border-teal-500/30
                               text-teal-400 text-xs font-medium mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 mb-3
                             group-hover:text-teal-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs
                               bg-slate-800/50 border border-slate-700
                               text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              {/* Hover arrow */}
              <motion.div
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100
                           transition-opacity"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          More articles coming soon...
        </motion.p>
      </div>
    </section>
  );
}
