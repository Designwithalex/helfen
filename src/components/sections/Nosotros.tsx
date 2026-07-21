import { Section, Eyebrow, SectionTitle, Lead, Card } from "../ui";
import { IconShield, IconUsers, IconSparkle, IconHeart, IconCheck } from "../icons";
import Reveal from "../Reveal";

const valores = [
  {
    icon: <IconShield className="size-6" />,
    title: "Integridad",
    body: "Siempre hacer lo correcto.",
  },
  {
    icon: <IconUsers className="size-6" />,
    title: "Respeto",
    body: "Todo el mundo lo merece.",
  },
  {
    icon: <IconSparkle className="size-6" />,
    title: "Compromiso",
    body: "Superar las expectativas cada día.",
  },
  {
    icon: <IconHeart className="size-6" />,
    title: "Cuidado",
    body: "Poner el corazón en el trabajo.",
  },
];

const compromiso = [
  "Puntualidad en cada turno acordado.",
  "Trato respetuoso con el paciente y con su familia.",
  "Confidencialidad absoluta sobre la información del paciente.",
  "Respuesta inmediata ante una emergencia, activando el 911 cuando corresponde.",
  "Nunca dejar al paciente desatendido.",
  "Profesionalismo constante, dentro y fuera del domicilio.",
];

export default function Nosotros() {
  return (
    <Section id="nosotros" labelledBy="nosotros-titulo" className="bg-white">
      <Reveal className="max-w-3xl">
        <Eyebrow>Sobre nosotros</Eyebrow>
        <SectionTitle id="nosotros-titulo">
          Los valores que sostienen cada visita
        </SectionTitle>
        <Lead className="mt-6">
          Cuidar a alguien es un acto de confianza. Estos principios son la base
          de cómo seleccionamos, formamos y acompañamos a nuestros prestadores.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {valores.map((v, i) => (
          <Reveal key={v.title} delay={i * 80}>
            <Card className="h-full border-teal-100 bg-teal-50/50 text-center">
              <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-white text-teal-500">
                {v.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-ink-soft">{v.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-16 rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <h3 className="text-2xl font-semibold sm:text-3xl">Nuestro compromiso</h3>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Lo que toda familia puede esperar de un prestador de Helfen, sin
            excepciones.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {compromiso.map((c) => (
              <li key={c} className="flex gap-3.5">
                <IconCheck className="mt-1 size-5 shrink-0 text-teal-500" />
                <span className="text-ink-soft">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
