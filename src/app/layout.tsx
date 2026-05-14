import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const SITE_URL = "https://chconstruccion.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CH Construcción · Refacciones, eléctrica y herrería en La Matanza",
    template: "%s · CH Construcción"
  },
  description:
    "Construcción integral, instalaciones eléctricas y herrería en La Matanza: Ramos Mejía, San Justo, Isidro Casanova, Laferrere, González Catán y Lomas del Mirador. Presupuestos sin cargo.",
  keywords: [
    "construcción La Matanza",
    "constructor Ramos Mejía",
    "albañil San Justo",
    "refacciones Isidro Casanova",
    "electricista Ramos Mejía",
    "electricista San Justo",
    "electricista Laferrere",
    "herrería Ramos Mejía",
    "herrería San Justo",
    "obra integral La Matanza",
    "refacciones González Catán",
    "constructor zona oeste"
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "CH Construcción",
    title: "CH Construcción · La Matanza, Zona Oeste",
    description:
      "Construcción, instalaciones eléctricas y herrería en Ramos Mejía, San Justo, Isidro Casanova, Laferrere y alrededores.",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "CH Construcción" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CH Construcción · La Matanza, Zona Oeste",
    description:
      "Construcción, instalaciones eléctricas y herrería en La Matanza.",
    images: ["/hero.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "CH Construcción",
  url: SITE_URL,
  image: `${SITE_URL}/hero.jpg`,
  telephone: "+54-11-2706-0258",
  email: "contacto@chconstruccion.com.ar",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Buenos Aires",
    addressCountry: "AR"
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Partido de La Matanza, Buenos Aires, Argentina"
    },
    { "@type": "City", name: "Ramos Mejía" },
    { "@type": "City", name: "San Justo" },
    { "@type": "City", name: "Isidro Casanova" },
    { "@type": "City", name: "Gregorio de Laferrere" },
    { "@type": "City", name: "González Catán" },
    { "@type": "City", name: "Lomas del Mirador" },
    { "@type": "City", name: "Villa Madero" },
    { "@type": "City", name: "La Tablada" },
    { "@type": "City", name: "Tapiales" }
  ],
  knowsAbout: [
    "Construcción",
    "Refacciones",
    "Instalaciones eléctricas",
    "Herrería"
  ],
  sameAs: []
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable}`}>
      <body className="relative font-sans antialiased">
        <SmoothScroll />
        <Nav />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
