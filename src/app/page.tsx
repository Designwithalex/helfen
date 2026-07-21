import Hero from "@/components/sections/Hero";
import Servicio from "@/components/sections/Servicio";
import Beneficios from "@/components/sections/Beneficios";
import Niveles from "@/components/sections/Niveles";
import Modalidades from "@/components/sections/Modalidades";
import ValorAgregado from "@/components/sections/ValorAgregado";
import HelfenView from "@/components/sections/HelfenView";
import Nosotros from "@/components/sections/Nosotros";
import Paliativos from "@/components/sections/Paliativos";
import Testimonios from "@/components/sections/Testimonios";
import ComoElegir from "@/components/sections/ComoElegir";
import Contacto from "@/components/sections/Contacto";
import { site, habilitaciones } from "@/lib/site";

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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Servicio />
      <Beneficios />
      <Niveles />
      <Modalidades />
      <ValorAgregado />
      <HelfenView />
      <Nosotros />
      <Paliativos />
      <Testimonios />
      <ComoElegir />
      <Contacto />
    </>
  );
}
