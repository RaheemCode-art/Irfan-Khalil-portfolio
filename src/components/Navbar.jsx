export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <a href="#home" className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
        Irfan Khalil<span className="text-[var(--color-accent)]">.</span>
      </a>
      <nav className="flex items-center gap-8 text-sm font-medium text-[var(--color-ink)]">
        <a href="#experience" className="hover:text-[var(--color-accent)]">Experience</a>
        <a href="#contact" className="hover:text-[var(--color-accent)]">Contact</a>
        <a href="/resume.pdf" download className="px-4 py-1.5 rounded-full border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors">
          Resume
        </a>
      </nav>
    </header>
  );
}