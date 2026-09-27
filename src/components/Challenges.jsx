import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const challenges = [
  {
    tags: ["Commissioning", "PSM", "HAZOP"],
    company: "Engro Polymer & Chemicals Ltd",
    title: "Executing safe commissioning of a new HPO plant.",
    description:
      "Led erection, pre-commissioning, and commissioning of the Hydrogen Peroxide plant per P&IDs and technical specs, running full equipment inspections and functional testing before startup.",
    stat: "0",
    statLabel: "HSE incidents during startup",
  },
  {
    tags: ["Emergency Response", "Risk Prevention"],
    company: "Engro Polymer & Chemicals Ltd",
    title: "Catching a nitric acid leak before it became a crisis.",
    description:
      "Identified a nitric acid leakage in the chemical warehouse early and ensured safe handling, preventing a potential safety incident and plant shutdown.",
    stat: "2",
    statLabel: "Achievement awards for incident prevention",
  },
  {
    tags: ["Operations", "Process Control"],
    company: "Descon Oxychem & Engro Polymer",
    title: "Running Hydrogen Peroxide plants around the clock.",
    description:
      "Operated Anthraquinone Auto-Oxidation process equipment — hydrogenation, oxidation, extraction, and working solution regeneration — maintaining stable, high-quality H₂O₂ production.",
    stat: "14+",
    statLabel: "Years of hands-on plant operations",
  },
];

export default function Challenges() {
  return (
    <section id="experience" className="bg-[var(--color-cream-soft)] border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-16">
            Challenges solved on the{" "}
            <span className="font-[family-name:var(--font-accent)] italic text-[var(--color-accent)] font-normal">
              plant floor
            </span>
            .
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {challenges.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-cream-soft)] border border-[var(--color-border)] text-[var(--color-ink-soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] max-w-xl mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-[var(--color-ink-soft)] font-medium">
                    {item.company}
                  </p>
                </div>
                <div className="text-center md:text-right shrink-0 md:pl-8 md:border-l md:border-[var(--color-border)]">
                  <p className="font-[family-name:var(--font-accent)] italic text-5xl text-[var(--color-accent)]">
                    <Counter value={item.stat} />
                  </p>
                  <p className="text-xs text-[var(--color-ink-soft)] max-w-[140px] mt-2 mx-auto md:mx-0">
                    {item.statLabel}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}