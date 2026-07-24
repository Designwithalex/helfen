/**
 * Fuente única de verdad para datos institucionales y de contacto.
 * Cambiar acá se propaga a header, footer, CTAs, JSON-LD y metadata.
 */

export const site = {
  name: "Helfen",
  legalName: "Cuidados Especiales en Salud S.A.",
  tagline: "Global Class Caregiving",
  url: "https://helfensalud.com",
  description:
    "Cuidados e internación domiciliaria en CABA y GBA: enfermería profesional, acompañamiento terapéutico, cuidadores y cuidados paliativos. Empresa habilitada por el Ministerio de Salud de la Nación.",
  /* Domicilio comercial. ⚠️ Proviene del sitio anterior de Helfen: el
     brochure no incluye dirección en ninguna de sus 15 páginas.
     Confirmar con el cliente antes de publicar. */
  address: {
    street: "Enrique Santos Discépolo 1859, Piso 2",
    locality: "Ciudad Autónoma de Buenos Aires",
    postalCode: "1051",
    country: "Argentina",
    /** Una línea, para mostrar en contacto y footer. */
    display:
      "Enrique Santos Discépolo 1859, Piso 2 — Ciudad Autónoma de Buenos Aires",
  },
  whatsapp: {
    display: "+54 9 11 3299-0001",
    number: "5491132990001",
  },
  email: "info@cuidadosespecialesensalud.com",
} as const;

/** Deep link de WhatsApp con mensaje prellenado. */
export function whatsappLink(
  message = "Hola, quisiera más información sobre los servicios de Helfen.",
) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const habilitaciones = [
  {
    entidad: "Ministerio de Salud de la Nación",
    detalle: "Empresa habilitada",
  },
  {
    entidad: "Gobierno de la Ciudad de Buenos Aires",
    detalle: "Habilitación — Disposición N° 2943/2016",
  },
  {
    entidad: "Registro Nacional de Prestadores",
    detalle: "Disposición N° 40371/2016",
  },
] as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Valores", href: "#valores" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Contacto", href: "#contacto" },
] as const;
