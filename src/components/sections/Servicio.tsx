import { Section, Eyebrow, SectionTitle, Lead, Card, IconBadge } from "../ui";
import { IconHome, IconStethoscope, IconScale } from "../icons";
import Reveal from "../Reveal";

const puntos = [
  {
    icon: <IconHome className="size-6" />,
    title: "Atención profesional en el hogar",
    body: "Un equipo matriculado lleva el cuidado a la casa del paciente. Recuperarse en el propio ambiente mejora el ánimo, el descanso y la evolución clínica.",
  },
  {
    icon: <IconStethoscope className="size-6" />,
    title: "Toda la escala de complejidad",
    body: "Desde cuidados básicos de rutina hasta discapacidad, patologías crónicas y cuidados paliativos. El servicio se ajusta a lo que cada paciente necesita.",
  },
  {
    icon: <IconScale className="size-6" />,
    title: "Obra social, prepaga o particular",
    body: "El servicio puede estar cubierto por su obra social o prepaga, o contratarse en forma particular. Le ayudamos a evaluar la mejor alternativa.",
  },
];

export default function Servicio() {
  return (
    <Section id="servicios" labelledBy="servicios-titulo" className="bg-white">
      <Reveal className="max-w-3xl">
        <Eyebrow>Servicios</Eyebrow>
        <SectionTitle id="servicios-titulo">
          Cuidados e internación domiciliaria
        </SectionTitle>
        <Lead className="mt-6">
          Un servicio pensado para que el paciente reciba atención de calidad sin
          salir de su casa, y para que su familia recupere tranquilidad y
          equilibrio.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {puntos.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <Card className="h-full hover:border-teal-200">
              <IconBadge>{p.icon}</IconBadge>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-ink-soft">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
