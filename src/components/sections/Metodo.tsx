import { Section, SectionTitle } from "../ui";
import { IconSparkle, IconShield } from "../icons";
import Reveal from "../Reveal";
import { capacitacion, tranquilidad } from "@/lib/content";

/**
 * Capacitación permanente y el método Helfen: dos bloques breves de
 * respaldo institucional, antes del cierre de cuidados paliativos.
 */
export default function Metodo() {
  return (
    <Section id="metodo" labelledBy="tranquilidad-titulo" className="bg-surface">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <article className="h-full rounded-3xl border border-line bg-white p-8 sm:p-10">
            <span
              className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"
              aria-hidden="true"
            >
              <IconSparkle className="size-7" />
            </span>
            <SectionTitle
              className="mt-6 !text-2xl sm:!text-3xl"
              id="capacitacion-titulo"
            >
              {capacitacion.titulo}
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {capacitacion.texto}
            </p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="bg-brand-gradient h-full rounded-3xl p-8 sm:p-10">
            <span
              className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white"
              aria-hidden="true"
            >
              <IconShield className="size-7" />
            </span>
            <SectionTitle
              id="tranquilidad-titulo"
              tone="light"
              className="mt-6 !text-2xl sm:!text-3xl"
            >
              {tranquilidad.titulo}
            </SectionTitle>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-white/90">
              {tranquilidad.parrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
