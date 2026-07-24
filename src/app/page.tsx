import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Beneficios from "@/components/sections/Beneficios";
import Niveles from "@/components/sections/Niveles";
import Servicios from "@/components/sections/Servicios";
import Valores from "@/components/sections/Valores";
import HelfenView from "@/components/sections/HelfenView";
import Metodo from "@/components/sections/Metodo";
import Paliativos from "@/components/sections/Paliativos";
import Contacto from "@/components/sections/Contacto";
import { site, habilitaciones } from "@/lib/site";
import { gruposServicios } from "@/lib/content";

/** Datos estructurados para SEO local. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.name,
  legalName: site.legalName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: site.phone.display,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
  ],
  hasCredential: habilitaciones.map((h) => `${h.entidad} — ${h.detalle}`),
  medicalSpecialty: ["Nursing", "PalliativeCare", "Physiotherapy", "Psychiatric"],
  availableService: gruposServicios
    .find((g) => g.titulo === "Tipos de Servicio")
    ?.items.map((item) => ({ "@type": "MedicalTherapy", name: item })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <Beneficios />
      <Niveles />
      <Servicios />
      <Valores />
      <HelfenView />
      <Metodo />
      <Paliativos />
      <Contacto />
    </>
  );
}
