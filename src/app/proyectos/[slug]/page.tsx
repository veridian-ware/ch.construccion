import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — CH construcción` : "Proyecto" };
}

export default async function ProyectoDetalle({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/80" />
        <div className="absolute inset-0 container-edge flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-widest opacity-70">
            {project.category} · {project.year}
          </div>
          <h1 className="mt-4 font-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tightest balance">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col gap-8 text-sm">
            {[
              ["Cliente", project.client],
              ["Locación", project.location],
              ["Año", project.year],
              ["Categoría", project.category]
            ].map(([k, v]) => (
              <div key={k} className="border-t border-ink/15 pt-3">
                <div className="text-[11px] uppercase tracking-widest opacity-60">
                  {k}
                </div>
                <div className="mt-1 font-display text-xl tracking-tighter">
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.05] balance">
              {project.blurb}
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-8 md:col-start-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="66vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:mt-32">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32 border-t border-ink/15">
        <Link href={`/proyectos/${next.slug}`} className="group block">
          <div className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Siguiente proyecto
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-5xl md:text-8xl tracking-tightest">
              {next.title}
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
