import { Container, Eyebrow, SectionTitle, ButtonLink } from "../ui";
import { IconWhatsApp } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { whatsappLink } from "@/lib/site";

export default function Paliativos() {
  return (
    <section
      aria-labelledby="paliativos-titulo"
      className="scroll-mt-28 bg-teal-50/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PhotoSlot
              alt="Manos de un cuidador acompañando con calidez a un paciente"
              className="aspect-16/10 w-full rounded-[2rem]"
              illustration={
                <svg
                  viewBox="0 0 160 100"
                  className="h-full max-h-52 w-full max-w-sm"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M32 62c-6-4-10-9-10-15a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 6-4 11-10 15" />
                  <path d="M46 62c8 2 14 6 18 11" />
                  <path d="M118 34c8 0 14 6 14 14 0 12-14 22-30 30-16-8-30-18-30-30 0-8 6-14 14-14 7 0 12 4 16 9 4-5 9-9 16-9Z" />
                  <path d="M12 88h136" opacity="0.4" />
                </svg>
              }
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Cuidados paliativos</Eyebrow>
            <SectionTitle id="paliativos-titulo">
              Acompañar también es cuidar
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              En las etapas finales de la vida, nuestro equipo acompaña al paciente
              y a su familia con presencia, contención y manejo del confort. El
              objetivo es simple y humano: que el proceso sea lo más llevadero
              posible, en casa y entre los suyos.
            </p>
            <p className="mt-5 text-ink-soft">
              Trabajamos junto al médico tratante y sostenemos también a quienes
              acompañan, porque la familia necesita cuidado tanto como el paciente.
            </p>
            <ButtonLink
              href={whatsappLink(
                "Hola, quisiera hablar con alguien de Helfen sobre cuidados paliativos.",
              )}
              external
              className="mt-9"
            >
              <IconWhatsApp className="size-5" />
              Hablar con un asesor
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
