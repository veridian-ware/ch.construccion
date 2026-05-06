"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  const phrases = [
    "Diseño y obra como un solo gesto.",
    "Materiales que envejecen con dignidad.",
    "Detalles que premian la mirada cercana.",
    "El oficio, antes que la moda."
  ];

  return (
    <section
      ref={ref}
      className="relative bg-bone text-ink py-32 md:py-48 overflow-hidden"
    >
      <div className="container-edge grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-widest opacity-60">
            [ 2025 — {new Date().getFullYear()} ]
          </span>
        </div>
        <div className="md:col-span-8 space-y-10">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] balance">
            CH construcción está en La Matanza y desde acá llegamos a cada obra.{" "} Construimos
            casas, locales y muebles que entienden el tiempo en el que viven.
          </p>
        </div>
      </div>

      <motion.div
        style={{ x }}
        className="mt-32 md:mt-48 flex gap-16 whitespace-nowrap font-display text-[14vw] md:text-[10vw] tracking-tightest leading-[0.9]"
      >
        {[...phrases, ...phrases].map((p, i) => (
          <span key={i} className={i % 2 === 1 ? "italic font-light" : ""}>
            {p} <span className="text-ochre">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
