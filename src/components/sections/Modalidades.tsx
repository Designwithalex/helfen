import { Section, Eyebrow, SectionTitle, Lead, Card, IconBadge } from "../ui";
import { IconBuilding, IconUsers, IconHome, IconNurse } from "../icons";
import Reveal from "../Reveal";

const bloques = [
  {
    icon: <IconBuilding className="size-6" />,
    title: "Servicios corporativos",
    items: [
      "Clínicas, sanatorios y centros de rehabilitación",
      "Geriátricos",
      "Prepagas y obras sociales",
      "Compañías de seguros",
      "ONGs e instituciones educativas",
      "Clubes y gimnasios",
      "Countries y barrios privados",
    ],
  },
  {
    icon: <IconUsers className="size-6" />,
    title: "Servicios particulares",
    items: [
      "Niños",
      "Adultos y personas mayores",
      "Personas con discapacidad",
      "Incapacidades temporales",
      "Lesionados",
      "Pacientes post-quirúrgicos",
    ],
  },
  {
    icon: <IconHome className="size-6" />,
    title: "Tipos de servicio",
    items: [
      "Cuidados e internación domiciliaria",
      "Cuidados en centro asistencial",
      "Cuidados paliativos",
    ],
  },
  {
    icon: <IconNurse className="size-6" />,
    title: "Especialidades",
    items: [
      "Enfermería profesional",
      "Auxiliares en enfermería",
      "Acompañantes terapéuticos",
      "Cuidadores",
      "Kinesiología",
      "Fonoaudiología",
      "Psicología",
    ],
  },
];

export default function Modalidades() {
  return (
    <Section labelledBy="modalidades-titulo" className="bg-white">
      <Reveal className="max-w-3xl">
        <Eyebrow>A quién acompañamos</Eyebrow>
        <SectionTitle id="modalidades-titulo">
          Modalidades y especialidades
        </SectionTitle>
        <Lead className="mt-6">
          Trabajamos con familias e instituciones, con equipos formados para cada
          tipo de necesidad.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {bloques.map((b, i) => (
          <Reveal key={b.title} delay={i * 80}>
            <Card className="h-full bg-surface hover:border-teal-200">
              <IconBadge>{b.icon}</IconBadge>
              <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
              <ul className="mt-4 space-y-2">
                {b.items.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
