import { Section, Eyebrow, SectionTitle, Lead } from "../ui";
import {
  IconSparkle,
  IconLeaf,
  IconHome,
  IconMonitor,
  IconMapPin,
  IconWheelchair,
  IconScale,
  IconHeart,
  IconUsers,
} from "../icons";
import Reveal from "../Reveal";

const servicios = [
  { icon: IconSparkle, label: "Peluquería" },
  { icon: IconSparkle, label: "Manicuría y pedicuría" },
  { icon: IconHome, label: "Limpieza integral del hogar" },
  { icon: IconMonitor, label: "Monitoreo con sistema propio" },
  { icon: IconMapPin, label: "Traslados" },
  { icon: IconLeaf, label: "Paseos" },
  { icon: IconWheelchair, label: "Aparatología e insumos" },
  { icon: IconScale, label: "Asesoramiento legal" },
  { icon: IconHeart, label: "Eldering" },
  { icon: IconUsers, label: "Acompañamiento a la familia" },
];

export default function ValorAgregado() {
  return (
    <Section labelledBy="valor-titulo" className="bg-surface">
      <Reveal className="max-w-3xl">
        <Eyebrow>Valor agregado</Eyebrow>
        <SectionTitle id="valor-titulo">
          Todo lo que hace falta, resuelto en un solo lugar
        </SectionTitle>
        <Lead className="mt-6">
          Además del cuidado clínico, coordinamos los servicios que sostienen el
          día a día en casa. <strong className="font-semibold text-teal-800">Eldering</strong>{" "}
          es nuestro abordaje integral de las necesidades del adulto en el hogar.
        </Lead>
      </Reveal>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 40} as="li">
            <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-colors duration-200 hover:border-teal-200">
              <Icon className="size-6 shrink-0 text-teal-500" />
              <span className="font-medium text-teal-900">{label}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
