import { Section, Eyebrow, SectionTitle, Lead, ButtonLink } from "../ui";
import { IconWhatsApp } from "../icons";
import Reveal from "../Reveal";
import { whatsappLink } from "@/lib/site";

const checklist = [
  {
    title: "Verifique la matrícula habilitante",
    body: "La empresa debe estar habilitada por el Ministerio de Salud de la Nación. Pida el número y contrástelo.",
  },
  {
    title: "Confirme que le pagan en tiempo y forma a sus prestadores",
    body: "Una empresa que no paga regularmente rota personal todo el tiempo, y esa rotación la sufre el paciente.",
  },
  {
    title: "Exija indemnidad formal y por escrito",
    body: "Ante un reclamo laboral o civil, usted debe quedar cubierto por escrito. Un acuerdo verbal no lo protege.",
  },
  {
    title: "Revise los antecedentes reales de la razón social",
    body: "No alcanza con la marca: verifique la trayectoria concreta de la sociedad que efectivamente presta el servicio.",
  },
];

export default function ComoElegir() {
  return (
    <Section id="como-elegir" labelledBy="elegir-titulo" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Cómo elegirnos</Eyebrow>
          <SectionTitle id="elegir-titulo">
            Cuatro cosas que conviene verificar antes de contratar
          </SectionTitle>
          <Lead className="mt-6">
            Aunque no nos elija a nosotros, hágale estas preguntas a cualquier
            empresa de cuidados domiciliarios. Es la mejor manera de proteger a su
            familiar.
          </Lead>
          <ButtonLink
            href={whatsappLink(
              "Hola, quisiera consultar por las habilitaciones y el servicio de Helfen.",
            )}
            external
            className="mt-9"
          >
            <IconWhatsApp className="size-5" />
            Consultar nuestras habilitaciones
          </ButtonLink>
        </Reveal>

        <ol className="grid gap-4">
          {checklist.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} as="li">
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="font-display inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-semibold text-white"
                >
                  {i + 1}
                </span>
                <span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-ink-soft">{item.body}</p>
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
