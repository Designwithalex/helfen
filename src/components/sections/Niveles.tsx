import { Section, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconHome, IconBrain, IconNurse, IconStethoscope } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { niveles } from "@/lib/content";

const iconos = [
  <IconHome key="home" className="size-7" />,
  <IconBrain key="brain" className="size-7" />,
  <IconNurse key="nurse" className="size-7" />,
  <IconStethoscope key="stetho" className="size-7" />,
];

/**
 * Niveles de atención presentados de forma escalonada: cada rol incluye
 * lo anterior y suma capacidades, tal como los describe el brochure.
 */
export default function Niveles() {
  return (
    <Section id="tareas" labelledBy="tareas-titulo" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>Nuestro equipo</Eyebrow>
          <SectionTitle id="tareas-titulo">Tareas típicas</SectionTitle>
          <Lead className="mt-6">
            Cuatro niveles de atención, cada uno construido sobre el anterior.
            Definimos con la familia cuál corresponde según la necesidad del
            paciente.
          </Lead>
        </Reveal>

        <Reveal delay={100}>
          <PhotoSlot
            src="/images/equipo-profesional-salud.jpg"
            alt="Una profesional de la salud conversa con una paciente durante una consulta"
            sizes="(max-width: 1024px) 92vw, 30rem"
            className="aspect-4/3 w-full rounded-3xl"
          />
        </Reveal>
      </div>

      <ol className="mt-14 space-y-5">
        {niveles.map((n, i) => (
          <Reveal key={n.rol} delay={i * 70}>
            <li className="rounded-2xl border border-line bg-white p-7 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <span
                  className="bg-brand-gradient-bright inline-flex size-14 shrink-0 items-center justify-center rounded-2xl text-white"
                  aria-hidden="true"
                >
                  {iconos[i]}
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.14em] text-brand-500 uppercase">
                    Nivel {i + 1}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">
                    {n.rol}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{n.texto}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
