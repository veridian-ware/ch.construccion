export type Service = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  image: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "construccion",
    index: "01",
    name: "Construcción",
    tagline: "Obra integral, llave en mano.",
    description:
      "Desde el primer trazo hasta la entrega final. Diseñamos y ejecutamos viviendas, locales comerciales y reformas con un enfoque artesanal y un control milimétrico de obra.",
    capabilities: [
      "Obra nueva residencial",
      "Refacciones y ampliaciones",
      "Locales comerciales",
      "Detalles de terminación"
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
  },
  {
    slug: "instalaciones-electricas",
    index: "02",
    name: "Instalaciones eléctricas",
    tagline: "Energía pensada con precisión.",
    description:
      "Proyectos eléctricos certificados, domótica y sistemas inteligentes. Cada cable, cada interruptor, cada escena de luz se diseña para que la casa responda al ritmo de quien la habita.",
    capabilities: [
      "Tableros y certificación",
      "Domótica e iluminación",
      "Calefacción eléctrica",
      "Instalaciones normalizadas ENRE",
      "Mantenimiento preventivo",
      "Eficiencia energética"
    ],
    image: "/instalaciones-electricas.jpg"
  },
  {
    slug: "herreria",
    index: "03",
    name: "Herrería",
    tagline: "Hierro forjado, dibujo cuidado.",
    description:
      "Trabajamos el hierro desde el dibujo hasta la última soldadura. Estructuras, escaleras y piezas a medida pensadas para sostener y para mostrarse: cada cordón es parte del oficio.",
    capabilities: [
      "Estructuras metálicas",
      "Escaleras y barandas",
      "Rejas y portones",
      "Mobiliario en hierro",
      "Soldadura y forja"
    ],
    image:
      "https://images.unsplash.com/photo-1752440838734-1968cdf682a7?auto=format&fit=crop&w=1800&q=80"
  }
];

export const projects: Project[] = [
  {
    slug: "casa-roble",
    title: "Casa Roble",
    client: "Familia Linares",
    location: "San Isidro, Buenos Aires",
    year: "2025",
    category: "Vivienda",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    blurb:
      "Una casa que se ordena alrededor de un patio central de roble. 320 m² de obra integral con domótica embebida en cada cuarto."
  },
  {
    slug: "loft-pampa",
    title: "Loft Pampa",
    client: "Estudio Mauro Bercovich",
    location: "Palermo, CABA",
    year: "2024",
    category: "Reforma",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    blurb:
      "Refacción profunda de un galpón de 1920. Estructura metálica vista, carpintería de cedro y un sistema lumínico que convierte el espacio según la hora."
  },
  {
    slug: "atelier-noma",
    title: "Atelier Noma",
    client: "Noma Estudio",
    location: "Recoleta, CABA",
    year: "2023",
    category: "Comercial",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
    blurb:
      "Showroom de 180 m² con un sistema eléctrico oculto en la junta del piso. Toda la luz nace desde los rincones."
  },
  {
    slug: "casa-pedregal",
    title: "Casa Pedregal",
    client: "Familia Quiroga",
    location: "Tigre, Buenos Aires",
    year: "2023",
    category: "Vivienda",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    blurb:
      "Casa de fin de semana con cubierta verde y revestimiento de piedra local. Eficiencia energética como punto de partida del proyecto."
  },
];

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  // { href: "/proyectos", label: "Proyectos" }, // oculto temporalmente — re-activar cuando esté listo
  // { href: "/estudio", label: "Estudio" }, // oculto temporalmente — re-activar cuando esté listo
  { href: "/contacto", label: "Contacto" }
];
