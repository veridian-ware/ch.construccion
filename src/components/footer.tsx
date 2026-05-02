import Link from "next/link";
import { navLinks, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-ink text-bone overflow-hidden">
      <div className="container-edge pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[0.95] balance">
              Construimos lugares que recuerdan al oficio. Hablemos del próximo.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-widest border-b border-bone/40 pb-1 hover:border-bone transition-colors"
            >
              Iniciar un proyecto
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest opacity-60 mb-5">
              Navegar
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-ochre transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest opacity-60 mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="hover:text-ochre transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/15 flex flex-col md:flex-row gap-6 md:items-end md:justify-between text-xs uppercase tracking-widest opacity-60">
          <div className="flex flex-col gap-1 not-italic">
            <span>CH construcción</span>
            <span>Buenos Aires, Argentina</span>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <a
              href="mailto:chconstruccion.com"
              className="hover:text-ochre transition-colors"
            >
              contacto@chconstruccion.com
            </a>
            <span>+54 11 2706 0258</span>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <span>© {new Date().getFullYear()} — Todos los derechos</span>
            <span>
              Sitio creado por{" "}
              <a
                href="https://landing-git-main-veridianware-8799s-projects.vercel.app"                                                                           
                target="_blank"                                                                                                                                  
                rel="noopener noreferrer"                                                                                                                        
                className="text-bone/90 font-medium tracking-wider hover:text-ochre transition-colors"                                                           
              >                                                                                                                                                  
                Veridian.                                                                                                                                            
              </a> 
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="font-display tracking-tightest text-bone/[0.04] text-[28vw] leading-[0.8] -mb-[6vw] select-none pointer-events-none"
      >
        ch.
      </div>
    </footer>
  );
}
