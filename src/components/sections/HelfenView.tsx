import { Container, Eyebrow, SectionTitle } from "../ui";
import { IconMonitor } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { tecnologia } from "@/lib/content";

/**
 * Tecnología — Helfen View®. Bloque destacado sobre degradé de marca,
 * equivalente a las láminas de color pleno del brochure.
 */
export default function HelfenView() {
  return (
    <section
      id="tecnologia"
      aria-labelledby="tecnologia-titulo"
      className="bg-brand-gradient scroll-mt-28 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">Tecnología</Eyebrow>
            <SectionTitle id="tecnologia-titulo" tone="light">
              {tecnologia.titulo}
            </SectionTitle>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/90">
              {tecnologia.parrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <PhotoSlot
              src="/images/tecnologia-seguimiento-remoto.jpg"
              alt="Dos profesionales de la salud analizan datos de un paciente en la pantalla de una computadora"
              sizes="(max-width: 1024px) 92vw, 34rem"
              className="aspect-4/3 w-full rounded-3xl ring-1 ring-white/25"
            />
          </Reveal>
        </div>

        {/* Sistema propietario */}
        <Reveal delay={80}>
          <div className="mt-14 rounded-3xl bg-white p-8 sm:p-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <span
                className="bg-brand-gradient-bright inline-flex size-14 shrink-0 items-center justify-center rounded-2xl text-white"
                aria-hidden="true"
              >
                <IconMonitor className="size-7" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-brand-700 sm:text-3xl">
                  Helfen View<span className="align-super text-base">®</span>
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {tecnologia.destacado}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
