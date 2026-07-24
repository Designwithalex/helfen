import Image from "next/image";
import { Container, ButtonLink } from "../ui";
import { IconWhatsApp } from "../icons";
import Reveal from "../Reveal";
import { LogoMark } from "../Logo";
import { habilitaciones, whatsappLink } from "@/lib/site";

/**
 * Portada: degradé de marca sobre fotografía, logotipo Helfen + claim,
 * y el sello de habilitaciones oficiales (equivalente al sello del
 * Ministerio en la tapa del brochure).
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Fotografía de fondo con degradé de marca encima */}
      <Image
        src="/images/cuidadora-acompanando-en-casa.jpg"
        alt="Una cuidadora acompaña y toma de las manos a una mujer mayor en el living de su casa"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="bg-brand-gradient-bright absolute inset-0 -z-10 opacity-[0.9]"
      />
      {/* Velo oscuro sobre la columna de texto: lleva el contraste del
          blanco por encima de AA sin apagar el azul de marca. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(0,48,86,0.62)_0%,rgba(0,48,86,0.42)_45%,rgba(0,48,86,0.12)_78%,transparent_100%)]"
      />

      <Container>
        <div className="grid items-center gap-14 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-48 lg:pb-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <LogoMark className="h-16 w-auto shrink-0 sm:h-20" />
              <div>
                <h1 className="font-display text-5xl leading-none font-semibold text-white sm:text-6xl lg:text-7xl">
                  Helfen
                </h1>
                <p className="mt-2 text-sm tracking-[0.18em] text-white/85 uppercase sm:text-base">
                  Global Class Caregiving
                </p>
              </div>
            </div>

            <p className="font-display mt-10 max-w-xl text-3xl leading-[1.15] font-semibold text-white sm:text-4xl lg:text-[2.75rem]">
              La mejor recuperación sucede en casa.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Cuidados e internación domiciliaria con el mismo estándar
              profesional de un centro asistencial. Para niños, adultos,
              personas mayores y personas con discapacidad, en el lugar donde
              mejor se sienten.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={whatsappLink()}
                external
                variant="white"
                className="w-full sm:w-auto"
              >
                <IconWhatsApp className="size-5" />
                Escribinos por WhatsApp
              </ButtonLink>
              <ButtonLink
                href="#internacion-domiciliaria"
                className="w-full bg-white/10 text-white ring-1 ring-white/50 hover:bg-white/20 active:bg-white/25 sm:w-auto"
              >
                Conocer más
              </ButtonLink>
            </div>
          </Reveal>

          {/* Sello de habilitaciones */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white/12 p-7 ring-1 ring-white/30 backdrop-blur-sm sm:p-8">
              <p className="font-display text-lg leading-tight font-semibold text-white sm:text-xl">
                Ministerio de Salud
                <br />
                de la Nación
              </p>
              <div aria-hidden="true" className="my-5 h-px bg-white/30" />
              <ul className="space-y-4">
                {habilitaciones.slice(1).map((h) => (
                  <li key={h.entidad} className="text-[0.9375rem] leading-snug">
                    <span className="block font-semibold text-white">
                      {h.entidad}
                    </span>
                    <span className="text-white/85">{h.detalle}</span>
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
