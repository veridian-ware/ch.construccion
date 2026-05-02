"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal } from "./reveal";

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="relative bg-cream text-ink py-24 md:py-40">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-widest opacity-60">
              [ Proyectos seleccionados ]
            </span>
            <Link
              href="/proyectos"
              className="text-xs uppercase tracking-widest border-b border-ink/30 pb-1 hover:border-ink transition-colors"
            >
              Archivo completo →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-20 md:gap-y-28">
          {featured.map((p, i) => {
            const layout = [
              "md:col-span-7 md:col-start-1",
              "md:col-span-5 md:col-start-8 md:mt-32",
              "md:col-span-6 md:col-start-2",
              "md:col-span-5 md:col-start-8 md:mt-24"
            ][i];

            return (
              <Reveal key={p.slug} delay={(i % 2) * 0.1} className={layout}>
                <Link href={`/proyectos/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                        {p.category} · {p.year}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tighter">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="text-xl transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
