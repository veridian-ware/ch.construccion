"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overDarkHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ease-smooth ${
          scrolled || open
            ? "bg-bone/80 backdrop-blur-md text-ink"
            : pathname === "/"
              ? "bg-gradient-to-b from-ink/45 to-transparent text-bone"
              : "bg-transparent text-ink"
        }`}
      >
        <div className="container-edge flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            className="font-display text-xl md:text-2xl tracking-tightest leading-none"
            onClick={() => setOpen(false)}
          >
            CH<span className="text-ochre">.</span>construcción
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm">
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative py-1 group"
              >
                <span>{l.label}</span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-px w-0 transition-all duration-500 ease-smooth group-hover:w-full ${
                    overDarkHero ? "bg-bone" : "bg-ink"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] w-7 items-end"
            aria-label="Menú"
          >
            <span
              className={`h-px transition-all duration-500 ease-smooth ${
                overDarkHero ? "bg-bone" : "bg-ink"
              } ${open ? "w-7 translate-y-[6px] rotate-45" : "w-7"}`}
            />
            <span
              className={`h-px transition-all duration-500 ease-smooth ${
                overDarkHero ? "bg-bone" : "bg-ink"
              } ${open ? "w-7 -translate-y-[1px] -rotate-45" : "w-5"}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-30 bg-bone md:hidden"
          >
            <div className="container-edge pt-32 pb-10 h-full flex flex-col justify-between">
              <ul className="flex flex-col gap-2">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-5xl tracking-tightest block py-2"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="text-xs uppercase tracking-widest opacity-70">
                Buenos Aires
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
