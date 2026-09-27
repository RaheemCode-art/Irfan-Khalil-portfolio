import Image from "next/image";

const companies = ["Engro Polymer", "Descon Oxychem", "Nimir Industrial", "Rupafil"];

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-ink-soft)] mb-6">
        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        PROCESS &amp; OPERATIONS ENGINEER
      </p>
      <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl font-bold text-[var(--color-ink)] leading-tight max-w-4xl mx-auto">
        An engineer who keeps plants{" "}
        <span className="font-[family-name:var(--font-accent)] italic text-[var(--color-accent)] font-normal">
          running
        </span>
        .
      </h1>
      <p className="text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto mt-6">
        Hi, I&apos;m Irfan. 14+ years of hands-on Hydrogen Peroxide plant operations across commissioning, process safety, and optimization.
      </p>

      <p className="text-xs font-semibold tracking-widest text-[var(--color-ink-soft)] mt-12 mb-4">
        OPERATED ACROSS
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {companies.map((company) => (
          <span key={company} className="text-sm px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-ink)]">
            {company}
          </span>
        ))}
      </div>

      <div className="relative mx-auto mt-14 w-[280px] sm:w-[320px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest text-[var(--color-ink-soft)]">IK-14</span>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)]" />
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[var(--color-ink)]">
          <Image
            src="/images/irfan.jpg"
            alt="IrfanKhalil"
            fill
            sizes="560px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}