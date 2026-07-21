import Image from "next/image";
import { Section, Eyebrow, SectionTitle, Lead } from "../ui";
import Reveal from "../Reveal";

/**
 * Retratos: dejar la foto en `public/images/equipo/` y completar `foto`.
 * Sin foto se muestra un monograma de marca (nunca un avatar genérico).
 */
const testimonios = [
  {
    nombre: "Dr. Fernando Burgos",
    cargo: "Director Médico",
    iniciales: "FB",
    foto: undefined as string | undefined,
    cita: "La internación domiciliaria bien indicada acorta los tiempos de recuperación y evita complicaciones que se dan dentro del hospital. El paciente descansa mejor, come mejor y responde mejor al tratamiento cuando está en su casa.",
  },
  {
    nombre: "Prof. Patricia García",
    cargo: "Directora Asistencial",
    iniciales: "PG",
    foto: undefined as string | undefined,
    cita: "Seleccionamos y capacitamos a cada prestador con el mismo criterio con el que elegiríamos a quien cuida a nuestra propia familia. La supervisión no termina cuando empieza el servicio: la sostenemos todos los días.",
  },
  {
    nombre: "Alejandro Vidal",
    cargo: "Asesor Comercial",
    iniciales: "AV",
    foto: undefined as string | undefined,
    cita: "Antes de contratar, conviene entender bien qué necesita el paciente y qué cubre su obra social. Nuestro trabajo es ordenar esa información para que la familia tome una decisión tranquila y sin sorpresas.",
  },
];

export default function Testimonios() {
  return (
    <Section id="testimonios" labelledBy="testimonios-titulo" className="bg-white">
      <Reveal className="max-w-3xl">
        <Eyebrow>Testimonios</Eyebrow>
        <SectionTitle id="testimonios-titulo">
          La voz de nuestro equipo
        </SectionTitle>
        <Lead className="mt-6">
          Quienes dirigen el servicio explican, en sus palabras, cómo entendemos
          el cuidado.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonios.map((t, i) => (
          <Reveal key={t.nombre} delay={i * 90}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
              <svg
                viewBox="0 0 24 24"
                className="size-9 text-teal-200"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.6 5.4C6.2 6.9 4 10 4 13.6c0 3 1.9 5 4.4 5 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.8 0-1.1.2.5-1.9 2-3.5 4-4.4l-2.1-1.6Zm9.3 0C15.5 6.9 13.3 10 13.3 13.6c0 3 1.9 5 4.4 5 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.8 0-1.1.2.5-1.9 2-3.5 4-4.4l-2.1-1.6Z" />
              </svg>

              <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-relaxed text-ink-soft">
                {t.cita}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                {t.foto ? (
                  <Image
                    src={t.foto}
                    alt={`Retrato de ${t.nombre}`}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="font-display inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-ocean-600 text-lg font-semibold text-white"
                  >
                    {t.iniciales}
                  </span>
                )}
                <span>
                  <span className="block font-semibold text-teal-900">
                    {t.nombre}
                  </span>
                  <span className="block text-[0.9375rem] text-ink-soft">
                    {t.cargo}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
