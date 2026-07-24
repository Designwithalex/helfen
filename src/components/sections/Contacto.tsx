import { Container, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconWhatsApp, IconMail, IconMapPin } from "../icons";
import Reveal from "../Reveal";
import { site, whatsappLink } from "@/lib/site";

/**
 * Contacto mínimo: un CTA grande de WhatsApp más teléfono y email.
 * Sin formulario — la consulta llega por el canal que la familia ya usa.
 */
export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-brand-gradient scroll-mt-28 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">Contacto</Eyebrow>
          <SectionTitle id="contacto-titulo" tone="light">
            Contactanos
          </SectionTitle>
          <Lead tone="light" className="mt-6">
            Contanos qué necesita tu ser querido y te orientamos sin
            compromiso. Respondemos todos los días.
          </Lead>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-700 shadow-lg transition-all duration-200 hover:bg-brand-50 hover:shadow-xl sm:w-auto"
          >
            <IconWhatsApp className="size-6" />
            Escribinos por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full cursor-pointer flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/20"
              >
                <IconWhatsApp className="size-6 text-white" />
                <span className="text-sm tracking-wide text-white/80 uppercase">
                  WhatsApp
                </span>
                <span className="font-semibold text-white">
                  {site.whatsapp.display}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex h-full cursor-pointer flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/20"
              >
                <IconMail className="size-6 text-white" />
                <span className="text-sm tracking-wide text-white/80 uppercase">
                  Email
                </span>
                <span className="text-sm font-semibold break-words text-white">
                  {site.email}
                </span>
              </a>
            </li>
            <li className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/25">
              <IconMapPin className="size-6 text-white" />
              <span className="text-sm tracking-wide text-white/80 uppercase">
                Domicilio
              </span>
              <span className="text-sm leading-snug font-semibold text-white">
                {site.address.street}
                <br />
                {site.address.locality}
              </span>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
