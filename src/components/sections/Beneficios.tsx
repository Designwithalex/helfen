import { Container, Eyebrow, SectionTitle, IconBadge } from "../ui";
import { IconShield, IconHome, IconClock, IconHeart } from "../icons";
import Reveal from "../Reveal";
import { beneficios } from "@/lib/content";

const iconos = [
  <IconShield key="shield" className="size-6" />,
  <IconHome key="home" className="size-6" />,
  <IconClock key="clock" className="size-6" />,
  <IconHeart key="heart" className="size-6" />,
];

export default function Beneficios() {
  return (
    <section
      aria-labelledby="beneficios-titulo"
      className="bg-brand-gradient scroll-mt-28 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Beneficios</Eyebrow>
          <SectionTitle id="beneficios-titulo" tone="light">
            Algunos beneficios de la internación domiciliaria
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((texto, i) => (
            <Reveal key={texto} delay={i * 80}>
              <IconBadge tone="light">{iconos[i]}</IconBadge>
              <p className="mt-5 text-lg leading-relaxed text-white">{texto}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
