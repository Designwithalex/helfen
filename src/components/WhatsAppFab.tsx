import { IconWhatsApp } from "./icons";
import { site, whatsappLink } from "@/lib/site";

/** Botón flotante persistente. Mobile-first, siempre alcanzable con el pulgar. */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${site.whatsapp.display}`}
      className="group fixed right-4 bottom-4 z-50 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#0C7A63] p-4 text-white shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-[#09614E] hover:shadow-xl sm:right-6 sm:bottom-6"
      style={{
        paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <IconWhatsApp className="size-7 shrink-0" />
      <span className="hidden pr-1 text-[0.9375rem] font-semibold sm:inline">
        Consultar por WhatsApp
      </span>
    </a>
  );
}
