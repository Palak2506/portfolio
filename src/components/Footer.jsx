export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6
                       bg-[#0B0F14]
                       border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto
                      flex flex-col sm:flex-row
                      items-center justify-between
                      gap-6">

        {/* Left */}
        <p className="text-slate-500 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Palak Dwivedi. Built with care and clarity.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-400
                       hover:text-teal-300
                       transition-colors"
          >
            Resume
          </a>

          <span className="h-4 w-px bg-slate-700" />

          <a
            href="mailto:dwivedipalak761@gmail.com"
            className="text-sm text-slate-400
                       hover:text-teal-400
                       transition-colors"
          >
            Say hello
          </a>
        </div>
      </div>
    </footer>
  );
}
