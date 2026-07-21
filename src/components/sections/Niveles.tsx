import { Section, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconCheck } from "../icons";
import Reveal from "../Reveal";

/**
 * Niveles de atención. Se usa <details>/<summary> nativo: accesible por
 * teclado y funcional sin JavaScript.
 */
const niveles = [
  {
    n: "01",
    title: "Cuidador / Acompañante de Salud",
    resumen: "Asistencia en las actividades de la vida diaria.",
    tareas: [
      "Higiene personal y confort",
      "Movilización dentro del hogar",
      "Acompañamiento en traslados",
      "Cocina sencilla y asistencia en la alimentación",
      "Administración de medicación por vía oral, con prescripción médica",
    ],
  },
  {
    n: "02",
    title: "Acompañante Terapéutico",
    resumen: "Suma apoyo cognitivo y contención emocional.",
    tareas: [
      "Todas las tareas del nivel anterior",
      "Estimulación y apoyo de las funciones cognitivas",
      "Contención psicológica del paciente",
      "Trabajo articulado con el terapeuta tratante",
    ],
  },
  {
    n: "03",
    title: "Auxiliar de Enfermería",
    resumen: "Suma prácticas de enfermería de baja complejidad.",
    tareas: [
      "Todas las tareas de los niveles anteriores",
      "Administración de medicación intramuscular",
      "Control de tensión arterial y glucemia",
      "Curaciones simples",
    ],
  },
  {
    n: "04",
    title: "Enfermero Profesional",
    resumen: "Suma maniobras invasivas y alta complejidad.",
    tareas: [
      "Todas las tareas de los niveles anteriores",
      "Colocación y manejo de vía endovenosa",
      "Colocación y control de sondas",
      "Cateterismo",
    ],
  },
];

export default function Niveles() {
  return (
    <Section labelledBy="niveles-titulo" className="bg-surface">
      <Reveal className="max-w-3xl">
        <Eyebrow>Niveles de atención</Eyebrow>
        <SectionTitle id="niveles-titulo">
          El nivel exacto que cada paciente necesita
        </SectionTitle>
        <Lead className="mt-6">
          Cada nivel incorpora las tareas del anterior. Evaluamos el caso y
          proponemos la configuración adecuada, que puede ajustarse a medida que
          el cuadro evoluciona.
        </Lead>
      </Reveal>

      <div className="mt-14 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {niveles.map((nivel, i) => (
          <details key={nivel.n} open={i === 0} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-6 transition-colors duration-200 hover:bg-teal-50/60 sm:px-8">
              <span className="font-display text-sm font-semibold text-teal-600 tabular-nums">
                {nivel.n}
              </span>
              <span className="flex-1">
                <span className="block text-lg font-semibold text-teal-900 sm:text-xl">
                  {nivel.title}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-ink-soft">
                  {nivel.resumen}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-transform duration-300 group-open:rotate-45"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-8 sm:px-8 sm:pl-[4.25rem]">
              <ul className="grid gap-3 sm:grid-cols-2">
                {nivel.tareas.map((t) => (
                  <li key={t} className="flex gap-3 text-ink-soft">
                    <IconCheck className="mt-1 size-5 shrink-0 text-teal-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
