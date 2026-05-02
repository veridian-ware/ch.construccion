import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] container-edge flex flex-col justify-center pt-32">
      <span className="text-xs uppercase tracking-widest opacity-60">[ 404 ]</span>
      <h1 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.92] tracking-tightest balance">
        Esta página <span className="italic">no fue construida</span>.
      </h1>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-ink/40 pb-1 hover:border-ink transition-colors w-fit"
      >
        Volver al inicio →
      </Link>
    </section>
  );
}
