import { Section, SectionTitle, Card } from "../ui";
import { IconShield, IconUsers, IconScale, IconHeart } from "../icons";
import Reveal from "../Reveal";
import { valores } from "@/lib/content";

const iconos = [
  <IconShield key="shield" className="size-9" />,
  <IconUsers key="users" className="size-9" />,
  <IconScale key="scale" className="size-9" />,
  <IconHeart key="heart" className="size-9" />,
];

export default function Valores() {
  return (
    <Section id="valores" labelledBy="valores-titulo" className="bg-surface">
      <Reveal>
        <SectionTitle id="valores-titulo" className="mx-auto max-w-3xl text-center">
          Cuatro son los valores esenciales que impulsan nuestras decisiones
          cada día:
        </SectionTitle>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {valores.map((v, i) => (
          <Reveal key={v.titulo} delay={i * 80}>
            <Card className="h-full text-center hover:border-brand-300">
              <span
                className="inline-flex text-ink-muted"
                aria-hidden="true"
              >
                {iconos[i]}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-wide text-brand-700">
                {v.titulo}
              </h3>
              <p className="mt-3 text-ink-soft">{v.texto}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
