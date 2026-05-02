import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Servicios — CH construcción"
};

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 container-edge">
        <span className="text-xs uppercase tracking-widest opacity-60">
          [ Servicios ]
        </span>
        <h1 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.92] tracking-tightest balance">
          Una mano <span className="italic">para cada</span> oficio.
        </h1>
        <p className="mt-10 max-w-xl text-base opacity-80">
          Trabajamos como un solo equipo: arquitectos, electricistas y
          carpinteros sentados a la misma mesa de obra. Eso significa una sola
          dirección, una sola entrega y un mismo estándar.
        </p>
      </section>

      <section className="container-edge pb-32">
        <div className="flex flex-col gap-24 md:gap-40">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                className={`grid md:grid-cols-12 gap-8 md:gap-14 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-7">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest opacity-60 mb-4">
                    {s.index}
                  </div>
                  <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[0.95]">
                    {s.name}
                  </h2>
                  <p className="mt-6 italic font-display text-xl md:text-2xl text-ochre">
                    {s.tagline}
                  </p>
                  <p className="mt-6 text-base opacity-80">{s.description}</p>
                  <ul className="mt-8 grid grid-cols-1 gap-2 text-sm">
                    {s.capabilities.map((c) => (
                      <li
                        key={c}
                        className="border-t border-ink/15 pt-2 flex items-baseline gap-3"
                      >
                        <span className="opacity-50 text-xs">+</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-ink/40 pb-1 hover:border-ink transition-colors"
                  >
                    Ver detalle
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
