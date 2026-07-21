import { Container, Eyebrow, SectionTitle, Lead, IconBadge } from "../ui";
import { IconShield, IconHome, IconClock, IconHeart } from "../icons";
import Reveal from "../Reveal";

const beneficios = [
  {
    icon: <IconShield className="size-6" />,
    title: "Menos tiempo internado",
    body: "Evita internaciones prolongadas y reduce el riesgo de infecciones intrahospitalarias.",
  },
  {
    icon: <IconHome className="size-6" />,
    title: "Volver a su ambiente",
    body: "El paciente vuelve a su casa, con sus cosas y sus tiempos, sin resignar atención profesional.",
  },
  {
    icon: <IconClock className="size-6" />,
    title: "Rutina que se sostiene",
    body: "Mantener los horarios y hábitos de siempre ordena el día y ayuda al equilibrio emocional.",
  },
  {
    icon: <IconHeart className="size-6" />,
    title: "Rodeado de los suyos",
    body: "Estar cerca de la familia y los afectos convierte la recuperación en tiempo de calidad compartido.",
  },
];

export default function Beneficios() {
  return (
    <section
      aria-labelledby="beneficios-titulo"
      className="scroll-mt-28 bg-gradient-to-br from-ocean-800 via-ocean-600 to-ocean-500 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Beneficios</Eyebrow>
          <SectionTitle id="beneficios-titulo" tone="light">
            Por qué la internación domiciliaria cambia la experiencia
          </SectionTitle>
          <Lead tone="light" className="mt-6">
            El hogar no es solo un lugar más cómodo: es un factor concreto en la
            recuperación física y mental del paciente y de su entorno.
          </Lead>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <IconBadge tone="light">{b.icon}</IconBadge>
              <h3 className="mt-5 text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-3 text-ocean-50">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
