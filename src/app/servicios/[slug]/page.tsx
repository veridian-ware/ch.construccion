import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { CapabilityItem } from "@/components/capability-item";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Servicio" };
  return {
    title: `${s.name} en La Matanza`,
    description: `${s.description} Servicio en Ramos Mejía, San Justo, Isidro Casanova, Laferrere y alrededores (La Matanza, Zona Oeste).`,
    alternates: { canonical: `https://chconstruccion.com.ar/servicios/${s.slug}` },
    openGraph: {
      title: `${s.name} · CH Construcción`,
      description: s.tagline,
      images: [s.image]
    }
  };
}

export default async function ServicioDetalle({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const next =
    services[(services.findIndex((s) => s.slug === slug) + 1) % services.length];

  return (
    <>
      <section className="relative h-[80svh] min-h-[600px] w-full overflow-hidden bg-ink text-bone">
        <Image
          src={service.image}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/80" />
        <div className="absolute inset-0 container-edge flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-widest opacity-70">
            Servicio · {service.index}
          </div>
          <h1 className="mt-4 font-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tightest">
            {service.name}
          </h1>
          <p className="mt-6 max-w-xl italic font-display text-2xl md:text-3xl">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="container-edge py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest opacity-60">
              [ Sobre este servicio ]
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.1] balance">
              {service.description}
            </p>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest opacity-60">
              [ Capacidades ]
            </div>
          </div>
          <div className="md:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
              {service.capabilities.map((c, i) => (
                <CapabilityItem key={c} label={c} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proyectos relacionados — oculto temporalmente
      <section className="bg-cream py-24 md:py-32">
        <div className="container-edge">
          <div className="flex items-baseline justify-between mb-12">
            <span className="text-xs uppercase tracking-widest opacity-60">
              [ Proyectos relacionados ]
            </span>
            <Link
              href="/proyectos"
              className="text-xs uppercase tracking-widest border-b border-ink/30 pb-1 hover:border-ink transition-colors"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-widest opacity-60">
                    {p.category}
                  </div>
                  <h3 className="font-display text-2xl tracking-tighter mt-1">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="container-edge py-24 md:py-32 border-t border-ink/15">
        <Link href={`/servicios/${next.slug}`} className="group block">
          <div className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Siguiente servicio
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-5xl md:text-8xl tracking-tightest">
              {next.name}
            </h3>
            <span
              aria-hidden
              className="text-3xl transition-transform duration-700 ease-expo group-hover:translate-x-2"
            >
              →
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
