import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL = 'dwivedipalak761@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/palak-dwivedi'
const GITHUB_URL = 'https://github.com/palak-dwivedi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-2"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-8"
        >
          Reach out for internships or collaboration.
        </motion.p>

        {/* Contact form (frontend only) */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 mb-10"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-dark-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-dark-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-dark-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-teal-500 text-dark-950 font-semibold hover:bg-teal-400 transition-colors"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-teal-400 text-sm font-medium">
              Thanks! Your message was received. I'll get back to you soon.
            </p>
          )}
        </motion.form>

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-sm font-medium text-slate-400">Or contact directly:</p>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
