"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-40 md:pt-56 pb-12 container-edge">
        <span className="text-xs uppercase tracking-widest opacity-60">
          [ Contacto ]
        </span>
        <h1 className="mt-6 font-display text-6xl md:text-[9vw] leading-[0.92] tracking-tightest balance">
          Contanos qué <span className="italic">querés construir</span>.
        </h1>
      </section>

      <section className="container-edge pb-24 md:pb-32 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 flex flex-col gap-10 text-sm">
          <div className="border-t border-ink/15 pt-4">
            <div className="text-[11px] uppercase tracking-widest opacity-60">
              Dirección
            </div>
            <div className="mt-2 font-display text-2xl tracking-tighter leading-tight">
              Gdor. Bruno M. de Zabala 6430
              <br />
              Villa Dorrego, Gonzalez Catán
            </div>
          </div>
          <div className="border-t border-ink/15 pt-4">
            <div className="text-[11px] uppercase tracking-widest opacity-60">
              Hablemos
            </div>
            <a
              href="mailto:hola@chconstruccion.com"
              className="mt-2 block font-display text-2xl tracking-tighter hover:text-ochre transition-colors"
            >
              hola@chconstruccion.com
            </a>
            <a
              href="tel:+541100000000"
              className="mt-1 block font-display text-2xl tracking-tighter hover:text-ochre transition-colors"
            >
              +54 11 2706 0258
            </a>
          </div>
          <div className="border-t border-ink/15 pt-4">
            <div className="text-[11px] uppercase tracking-widest opacity-60">
              Horario
            </div>
            <div className="mt-2 font-display text-2xl tracking-tighter leading-tight">
              Lunes a viernes
              <br />
              9:00 — 18:00
            </div>
          </div>
        </aside>

        <div className="md:col-span-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-ink/15 p-10 md:p-16"
            >
              <div className="text-xs uppercase tracking-widest opacity-60">
                Recibido
              </div>
              <p className="mt-6 font-display text-4xl md:text-5xl tracking-tighter balance">
                Gracias. Respondemos en menos de 48 horas hábiles.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-8"
            >
              <Field label="Nombre" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Teléfono (opcional)" name="phone" />

              <div className="border-b border-ink/30 pb-3">
                <div className="text-[11px] uppercase tracking-widest opacity-60 mb-3">
                  Tipo de proyecto
                </div>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <label
                      key={s.slug}
                      className="cursor-pointer text-sm border border-ink/20 px-3 py-1.5 rounded-full hover:border-ink transition-colors has-[:checked]:bg-ink has-[:checked]:text-bone has-[:checked]:border-ink"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={s.slug}
                        className="sr-only"
                      />
                      {s.name}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-ink/30 pb-3">
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-widest opacity-60"
                >
                  Contanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-transparent font-display text-2xl tracking-tighter leading-tight outline-none resize-none placeholder:opacity-40"
                  placeholder="Espacio, plazo aproximado, lo que ya tenés..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-between border-t border-b border-ink py-6 px-2 hover:bg-ink hover:text-bone transition-colors duration-500 ease-smooth"
              >
                <span className="font-display text-3xl md:text-4xl tracking-tightest">
                  Enviar mensaje
                </span>
                <span
                  aria-hidden
                  className="text-2xl transition-transform group-hover:translate-x-2"
                >
                  →
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text"
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="border-b border-ink/30 pb-3">
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-widest opacity-60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-transparent font-display text-2xl md:text-3xl tracking-tighter outline-none"
      />
    </div>
  );
}
