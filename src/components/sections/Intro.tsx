import { Section, SectionTitle } from "../ui";
import { IconWheelchair } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { intro } from "@/lib/content";

/**
 * Introducción institucional. Reproduce el recurso del brochure:
 * bloque de color con el título a la izquierda, cuerpo de texto a la derecha.
 */
export default function Intro() {
  return (
    <Section id="internacion-domiciliaria" labelledBy="internacion-titulo">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <div className="bg-brand-gradient flex h-full flex-col justify-between gap-10 rounded-3xl p-8 sm:p-10">
            <SectionTitle id="internacion-titulo" tone="light">
              {intro.titulo}
            </SectionTitle>
            <IconWheelchair
              className="size-16 text-white/70"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {intro.parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <PhotoSlot
          src="/images/familia-en-casa.jpg"
          alt="Una cuidadora y un hombre mayor miran juntos un álbum de fotos, sentados en el living de la casa"
          sizes="(max-width: 1024px) 92vw, 72rem"
          className="mt-14 aspect-4/3 w-full rounded-3xl sm:aspect-16/9"
        />
      </Reveal>
    </Section>
  );
}
