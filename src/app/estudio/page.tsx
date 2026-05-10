import Image from "next/image";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Estudio — CH construcción"
};

const team = [
  { name: "Carlos Heredia", role: "Director — Arquitecto" },
  { name: "Mariela Quiroga", role: "Dirección de obra" },
  { name: "Sebastián Ortiz", role: "Instalaciones eléctricas" },
  { name: "Ana Fernández", role: "Diseño de interiores" }
];

const milestones = [
  { year: "2008", text: "Carlos abre el primer estudio en Caballito." },
  { year: "2013", text: "Sumamos área de instalaciones eléctricas certificadas." },
  { year: "2017", text: "Mudanza al estudio actual en Villa Crespo." },
  { year: "2025", text: "Tres disciplinas, un solo equipo." }
];

export default function EstudioPage() {
  return (
    <>
      <section className="pt-40 md:pt-56 pb-24 container-edge">
        <span className="text-xs uppercase tracking-widest opacity-60">
          [ Estudio ]
        </span>
        <h1 className="mt-6 font-display text-6xl md:text-[9vw] leading-[0.92] tracking-tightest balance">
          Un equipo que <span className="italic">dibuja, construye y termina</span>.
        </h1>
        <p className="mt-10 max-w-xl text-base opacity-80">
          CH es un estudio fundado en 2008. Diseñamos arquitectura, ejecutamos
          obra e instalamos sistemas. Esa integración no es operativa: es
          cultural.
        </p>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
            alt="Estudio CH construcción"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest opacity-60">
              [ Manera de hacer ]
            </div>
          </div>
          <div className="md:col-span-8 grid gap-12">
            {[
              {
                t: "Una sola dirección",
                d: "Quien dibuja firma la obra. Quien firma la obra está en la última visita. Sin tercerizaciones que diluyan responsabilidad."
              },
              {
                t: "Detalle visible",
                d: "Diseñamos las juntas, los herrajes y los embellecedores con la misma intensidad que la planta general."
              },
              {
                t: "Materiales con biografía",
                d: "Elegimos maderas, piedras y metales que envejecen bien. Preferimos lo que cambia con el tiempo."
              },
              {
                t: "Equipo propio",
                d: "Ejecutar con nuestro propio equipo nos permite resolver lo que otros no pueden cotizar."
              }
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <div className="border-t border-ink/15 pt-6 grid md:grid-cols-3 gap-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tighter">
                    {p.t}
                  </h3>
                  <p className="md:col-span-2 text-base opacity-80 max-w-xl">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-edge">
          <div className="text-xs uppercase tracking-widest opacity-60 mb-12">
            [ Equipo ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.06}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tighter">
                    {m.name}
                  </h3>
                  <div className="mt-2 text-xs uppercase tracking-widest opacity-60">
                    {m.role}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest opacity-60">
              [ Línea de tiempo ]
            </div>
          </div>
          <ol className="md:col-span-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.04}>
                <li className="grid grid-cols-12 gap-4 border-t border-ink/15 py-6 last:border-b">
                  <span className="col-span-3 md:col-span-2 font-display text-2xl tabular-nums">
                    {m.year}
                  </span>
                  <span className="col-span-9 md:col-span-10 font-display text-2xl md:text-3xl tracking-tighter">
                    {m.text}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
