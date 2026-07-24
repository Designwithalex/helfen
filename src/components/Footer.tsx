import { Container } from "./ui";
import { Logo } from "./Logo";
import { IconWhatsApp, IconShield, IconPhone, IconMail } from "./icons";
import { site, nav, habilitaciones, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white/85">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed">
              Cuidados e internación domiciliaria con estándares profesionales
              en CABA y Gran Buenos Aires.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-50"
            >
              <IconWhatsApp className="size-5" />
              Escribinos por WhatsApp
            </a>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="text-base font-semibold text-white">Navegación</h2>
            <ul className="mt-5 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer rounded-md py-2 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-semibold text-white">Contacto</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <IconWhatsApp className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {site.whatsapp.display}
                </a>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <a
                  href={site.phone.href}
                  className="cursor-pointer underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${site.email}`}
                  className="cursor-pointer break-all underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sellos de habilitación */}
        <div className="grid gap-4 border-t border-white/15 py-8 sm:grid-cols-3">
          {habilitaciones.map((h) => (
            <div key={h.entidad} className="flex items-start gap-3">
              <IconShield className="mt-0.5 size-5 shrink-0 text-brand-300" />
              <p className="text-sm leading-snug">
                <span className="block font-semibold text-white">
                  {h.entidad}
                </span>
                {h.detalle}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 py-8 text-sm">
          <p>
            © {new Date().getFullYear()} {site.legalName} — Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
