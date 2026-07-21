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
              src="/images/manos-acompanamiento.jpg"
              alt="Primer plano de las manos entrelazadas de una persona mayor, apoyadas sobre su regazo"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="aspect-16/10 w-full rounded-[2rem]"
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
