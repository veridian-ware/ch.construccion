"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const categories = ["Todos", "Vivienda", "Reforma", "Mueble a medida", "Comercial"];

export default function ProyectosPage() {
  const [filter, setFilter] = useState("Todos");

  const list = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <section className="pt-40 md:pt-56 pb-16 md:pb-20 container-edge">
        <span className="text-xs uppercase tracking-widest opacity-60">
          [ Archivo ]
        </span>
        <h1 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.92] tracking-tightest balance">
          Cada obra <span className="italic">cuenta</span> algo.
        </h1>
      </section>

      <section className="container-edge sticky top-16 md:top-20 z-20 bg-bone/85 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14 border-y border-ink/10">
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs uppercase tracking-widest">
          <span className="opacity-50 mr-2">Filtrar</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full border transition-colors ${
                filter === c
                  ? "bg-ink text-bone border-ink"
                  : "border-ink/20 hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20"
          >
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/proyectos/${p.slug}`}
                  className={`group block ${
                    i % 4 === 1 || i % 4 === 2 ? "md:mt-24" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest opacity-60 mb-1">
                        {p.category} · {p.location} · {p.year}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl tracking-tighter">
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
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}
