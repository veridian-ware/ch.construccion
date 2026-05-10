"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Cimientos de obra — CH construcción"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/75" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full container-edge flex flex-col justify-between pt-32 pb-10"
      >
        <div className="flex items-start justify-end text-xs uppercase tracking-widest">
          <div className="hidden md:flex flex-col items-end">
            <div className="opacity-60">Buenos Aires</div>
            <div className="mt-1 tabular-nums">{time || "—"}</div>
          </div>
        </div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[min(13vw,16svh)] md:text-[min(9.5vw,15svh)] leading-[0.88] tracking-tightest balance"
          >
            Hacer lugares
            <br />
            <span className="italic font-light">que recuerdan</span>
            <br />
            al oficio.
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <p className="font-display max-w-md text-sm md:text-base leading-[0.88] tracking-tightest opacity-80 balance">
              Somos un grupo que construye cada detalle bajo el mismo techo.
              Construcción, instalaciones eléctricas y herrería, pensadas como
              una sola pieza.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2 text-bone/70"
      >
        <span>Desplazar</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-bone/60"
        />
      </motion.div>
    </section>
  );
}
