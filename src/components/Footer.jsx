export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Palak Dwivedi. All rights reserved.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </footer>
  )
}
