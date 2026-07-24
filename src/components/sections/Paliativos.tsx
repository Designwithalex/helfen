import { Section, Eyebrow, SectionTitle, ButtonLink } from "../ui";
import { IconWhatsApp } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { paliativos } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export default function Paliativos() {
  return (
    <Section id="paliativos" labelledBy="paliativos-titulo">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PhotoSlot
            src="/images/manos-sosteniendo.jpg"
            alt="Dos personas sostienen sus manos entrecruzadas, en un gesto de acompañamiento"
            sizes="(max-width: 1024px) 92vw, 34rem"
            className="aspect-4/3 w-full rounded-3xl"
          />
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>Acompañamiento</Eyebrow>
          <SectionTitle id="paliativos-titulo">
            {paliativos.titulo}
          </SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
            {paliativos.texto}
          </p>
          <ButtonLink
            href={whatsappLink(
              "Hola, necesito orientación sobre cuidados paliativos a domicilio.",
            )}
            external
            className="mt-9"
          >
            <IconWhatsApp className="size-5" />
            Hablar con nosotros
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
}
