import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para obras y refacciones en Ramos Mejía, San Justo, Isidro Casanova, Laferrere, González Catán y resto de La Matanza. Presupuestos sin cargo.",
  alternates: { canonical: "https://chconstruccion.com.ar/contacto" }
};

export default function ContactoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
