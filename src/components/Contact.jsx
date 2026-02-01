import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAIL = "dwivedipalak761@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/palak-dwivedi1/";
const GITHUB_URL = "https://github.com/Palak2506";

// EmailJS config
const SERVICE_ID = "service_b1su8ec";
const TEMPLATE_ID = "template_6gmlgta";
const PUBLIC_KEY = "i4_yucSs0K84-kzMT";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 bg-gradient-to-b from-[#0B0F14] to-[#0F172A]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-slate-100 mb-3"
        >
          Let’s build something meaningful.
        </motion.h2>

        <p className="text-slate-400 mb-10">
          Have an idea, opportunity, or just want to talk engineering?  
          I’d love to hear from you.
        </p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5 mb-12"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-slate-900 border border-slate-700
                       text-slate-100 placeholder-slate-500
                       focus:border-teal-500 focus:ring-1 focus:ring-teal-500
                       outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-slate-900 border border-slate-700
                       text-slate-100 placeholder-slate-500
                       focus:border-teal-500 focus:ring-1 focus:ring-teal-500
                       outline-none transition"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-slate-900 border border-slate-700
                       text-slate-100 placeholder-slate-500
                       focus:border-teal-500 focus:ring-1 focus:ring-teal-500
                       outline-none transition resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3 rounded-lg
                       bg-teal-500 text-[#0B0F14] font-semibold
                       hover:bg-teal-400
                       disabled:opacity-60
                       transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-teal-400 font-medium">
              Thanks! Your message has been sent.Palak will get back to you soon!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        {/* Direct links */}
        <div className="space-y-3 text-sm">
          <p className="text-slate-400">Or reach me directly:</p>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="block text-teal-400 hover:text-teal-300">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block text-teal-400 hover:text-teal-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
