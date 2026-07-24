import { Section, Eyebrow, SectionTitle, BlockHeading } from "../ui";
import Reveal from "../Reveal";
import { gruposServicios, notasServicios } from "@/lib/content";

/**
 * Servicios: cinco grupos, cada uno con su encabezado en bloque de color
 * y sus ítems como chips, replicando la lámina del brochure.
 */
export default function Servicios() {
  return (
    <Section id="servicios" labelledBy="servicios-titulo">
      <Reveal className="max-w-3xl">
        <Eyebrow>Servicios</Eyebrow>
        <SectionTitle id="servicios-titulo">
          Todo lo que podemos cubrir
        </SectionTitle>
      </Reveal>

      <div className="mt-14 space-y-12">
        {gruposServicios.map((grupo, i) => (
          <Reveal key={grupo.titulo} delay={i * 60}>
            <div>
              <BlockHeading className="mx-auto max-w-xl">
                {grupo.titulo}
              </BlockHeading>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-3">
                {grupo.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-5 py-2.5 text-[0.9375rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 border-t border-line pt-6 text-center text-sm text-ink-muted">
          {notasServicios.map((nota) => (
            <p key={nota}>{nota}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
