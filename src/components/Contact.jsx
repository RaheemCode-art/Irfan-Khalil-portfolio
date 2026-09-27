import Reveal from "@/components/Reveal";

export default function Contact() {
    return (
        <section id="contact" className="bg-[var(--color-dark)]">
            <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                <Reveal>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-bold text-[var(--color-on-dark)] leading-tight">
                        Let&apos;s build something{" "}
                        <span className="font-[family-name:var(--font-accent)] italic text-[var(--color-accent)] font-normal">
                            reliable
                        </span>
                        .
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                        <a href="mailto:itsirfankhalil@gmail.com" className="px-6 py-3 rounded-full bg-[var(--color-on-dark)] text-[var(--color-dark)] text-sm font-semibold hover:opacity-90">
                            Connect
                        </a>
                        <a href="/resume.pdf" download className="px-6 py-3 rounded-full border border-[var(--color-border-dark)] text-[var(--color-on-dark)] text-sm font-semibold hover:bg-[var(--color-dark-soft)]">
                            View Resume
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-10 text-sm text-[var(--color-on-dark-soft)]">
                        <a href="#" className="hover:text-[var(--color-on-dark)]">LinkedIn</a>
                    </div>

                    <p className="text-xs text-[var(--color-on-dark-soft)] mt-10">
                        Available for hire · open to relocate · itsirfankhalil@gmail.com · +92 302 4164478
                    </p>
                </Reveal>
            </div>
        </section>
    );
}