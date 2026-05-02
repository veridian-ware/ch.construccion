"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";

export function ServicesPreview() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="relative bg-bone text-ink py-24 md:py-40">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-widest opacity-60">
              [ Servicios ]
            </span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter max-w-2xl text-right balance">
              Cuatro disciplinas, <span className="italic">una misma mano</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute right-0 top-0 w-[44%] aspect-[4/5] overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
              {hover !== null && (
                <motion.div
                  key={services[hover].slug}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[hover].image}
                    alt={services[hover].name}
                    fill
                    sizes="44vw"
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <ul className="lg:w-[60%]">
            {services.map((s, i) => (
              <li
                key={s.slug}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="border-t border-ink/15 last:border-b"
              >
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group grid grid-cols-12 items-center gap-4 py-6 md:py-10"
                >
                  <span className="col-span-2 md:col-span-1 text-xs md:text-sm opacity-50 tabular-nums">
                    {s.index}
                  </span>
                  <span className="col-span-8 md:col-span-7 font-display text-3xl md:text-5xl lg:text-6xl tracking-tightest leading-none">
                    <span className="inline-block transition-transform duration-700 ease-expo group-hover:translate-x-3">
                      {s.name}
                    </span>
                  </span>
                  <span className="col-span-12 md:col-span-3 text-sm opacity-70 hidden md:block">
                    {s.tagline}
                  </span>
                  <span
                    aria-hidden
                    className="col-span-2 md:col-span-1 text-right text-xl transition-transform duration-700 ease-expo group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
