"use client";

import { Reveal } from "./reveal";

const stats = [
  { n: "180+", label: "Proyectos entregados" },
  { n: "16", label: "Años de oficio" },
  { n: "9", label: "Manos en obra" },
  { n: "100%", label: "Obras certificadas" }
];

export function Numbers() {
  return (
    <section className="relative bg-ink text-bone py-24 md:py-32">
      <div className="container-edge grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-t border-bone/20 pt-6">
              <div className="font-display text-5xl md:text-7xl tracking-tightest leading-none tabular-nums">
                {s.n}
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest opacity-70">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
