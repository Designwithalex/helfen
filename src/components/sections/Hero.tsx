import { Container, ButtonLink } from "../ui";
import { IconWhatsApp, IconShield, IconCheck } from "../icons";
import PhotoSlot from "../PhotoSlot";
import Reveal from "../Reveal";
import { habilitaciones, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Fondo: degradé muy sutil, sin ruido visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-teal-50/80 to-white"
      />

      <Container>
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-teal-700 ring-1 ring-teal-200">
              <IconShield className="size-4.5" />
              Empresa habilitada por el Ministerio de Salud de la Nación
            </p>

            <h1 className="text-[2.5rem] leading-[1.08] font-semibold sm:text-5xl lg:text-[3.5rem]">
              La mejor recuperación
              <br className="hidden sm:block" /> sucede{" "}
              <span className="text-teal-500">en casa</span>.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Cuidados e internación domiciliaria con el mismo estándar
              profesional de un centro de salud. Para niños, adultos, personas
              mayores y personas con discapacidad, en el lugar donde mejor se
              sienten.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={whatsappLink()} external className="w-full sm:w-auto">
                <IconWhatsApp className="size-5" />
                Hablar por WhatsApp
              </ButtonLink>
              <ButtonLink
                href="#servicios"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Conocer servicios
              </ButtonLink>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {[
                "Atención 24 horas",
                "Cobertura por obra social o particular",
                "Personal matriculado",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[0.9375rem] text-ink-soft"
                >
                  <IconCheck className="size-5 shrink-0 text-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <PhotoSlot
              src="/images/cuidadora-acompanando-en-casa.jpg"
              alt="Una cuidadora ayuda a levantarse a una mujer mayor que usa andador, en el living de su casa"
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="aspect-4/5 w-full rounded-[2rem] shadow-[0_24px_60px_-30px_rgba(18,80,122,0.45)] sm:aspect-square lg:aspect-4/5"
            />

            {/* Tarjeta de confianza superpuesta */}
            <div className="mx-auto -mt-12 w-[92%] rounded-2xl border border-line bg-white p-5 shadow-lg sm:absolute sm:-bottom-10 sm:-left-12 sm:mt-0 sm:w-72">
              <p className="text-sm font-semibold tracking-wide text-teal-500 uppercase">
                Habilitaciones oficiales
              </p>
              <ul className="mt-3 space-y-2">
                {habilitaciones.map((h) => (
                  <li key={h.entidad} className="text-sm leading-snug text-ink-soft">
                    <span className="font-medium text-teal-900">{h.entidad}</span>
                    <br />
                    {h.detalle}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
