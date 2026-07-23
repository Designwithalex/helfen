/**
 * Fuente única de verdad para datos institucionales y de contacto.
 * Cambiar acá se propaga a header, footer, CTAs, JSON-LD y metadata.
 */

export const site = {
  name: "Helfen",
  legalName: "Cuidados Especiales en Salud S.A.",
  tagline: "Global Class Caregiving",
  url: "https://cuidadosespecialesensalud.com",
  description:
    "Cuidados especiales en salud en CABA y GBA: enfermería profesional, acompañamiento terapéutico, cuidadores y cuidados paliativos. Empresa habilitada por el Ministerio de Salud de la Nación.",
  address: {
    street: "Enrique Santos Discépolo 1859, Piso 2",
    locality: "Ciudad Autónoma de Buenos Aires",
    postalCode: "1051",
    country: "Argentina",
  },
  phone: {
    display: "54 11 6019.1111",
    href: "tel:+541160191111",
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
    detalle: "Disposición N° 2943/2016",
  },
  {
    entidad: "Registro Nacional de Prestadores",
    detalle: "Disposición N° 40371/2016",
  },
] as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo Elegirnos", href: "#como-elegir" },
  { label: "Contacto", href: "#contacto" },
] as const;
