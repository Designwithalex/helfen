import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Beneficios from "@/components/sections/Beneficios";
import Valores from "@/components/sections/Valores";
import Metodo from "@/components/sections/Metodo";
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
      <Intro />
      <Beneficios />
      <Valores />
      <Metodo />
      <Contacto />
    </>
  );
}
