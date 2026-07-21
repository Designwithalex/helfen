import { Container, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconStethoscope, IconMapPin, IconClock, IconMonitor } from "../icons";
import Reveal from "../Reveal";

const capacidades = [
  {
    icon: <IconStethoscope className="size-6" />,
    title: "Registro de signos vitales",
    body: "Cada control queda asentado y disponible para el equipo tratante y la familia.",
  },
  {
    icon: <IconMapPin className="size-6" />,
    title: "Geopresencia",
    body: "Confirmación de la presencia efectiva del prestador en el domicilio.",
  },
  {
    icon: <IconClock className="size-6" />,
    title: "Seguimiento en tiempo real",
    body: "Estado actualizado del servicio, del prestador y del paciente durante la jornada.",
  },
  {
    icon: <IconMonitor className="size-6" />,
    title: "Monitoreo visual y auditivo",
    body: "Disponible únicamente con autorización expresa del responsable del paciente.",
  },
];

export default function HelfenView() {
  return (
    <section
      aria-labelledby="helfenview-titulo"
      className="scroll-mt-28 bg-teal-900 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="light">Tecnología propia</Eyebrow>
            <SectionTitle id="helfenview-titulo" tone="light">
              Helfen View<sup className="ml-0.5 text-xl align-super">®</sup>
            </SectionTitle>
            <Lead tone="light" className="mt-6">
              Nuestro sistema de seguimiento remoto le permite a la familia saber,
              en todo momento, cómo está evolucionando el cuidado.
            </Lead>
            <p className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 text-ocean-100">
              El contacto humano presencial es siempre lo óptimo. La tecnología
              acompaña y da transparencia:{" "}
              <strong className="font-semibold text-white">
                es un complemento, nunca un reemplazo
              </strong>
              .
            </p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {capacidades.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-teal-100">
                  {c.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-ocean-100">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
