import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { serviciosFormulario } from "@/lib/content";

/**
 * Endpoint del formulario de contacto.
 *
 * La consulta se envía por email a la casilla de Helfen usando la API REST
 * de Resend (sin dependencias: sólo `fetch`). La API key vive únicamente en
 * el servidor, nunca llega al bundle del cliente.
 *
 * Variables de entorno (ver `.env.example`):
 *   RESEND_API_KEY   — obligatoria. Sin ella el endpoint responde 503 y el
 *                      formulario ofrece WhatsApp como alternativa.
 *   CONTACTO_TO      — destinatario. Por defecto, el email del sitio.
 *   CONTACTO_FROM    — remitente verificado en Resend.
 *
 * Para cambiar de proveedor (Formspree, Web3Forms, SMTP…) basta con
 * reemplazar `enviarEmail`: la validación y el contrato con el cliente
 * quedan igual.
 */

export const runtime = "nodejs";

const SERVICIOS: readonly string[] = serviciosFormulario;

type Campo = "nombre" | "telefono" | "email" | "servicio" | "mensaje";
type Errores = Partial<Record<Campo, string>>;

const LIMITES: Record<Campo, number> = {
  nombre: 120,
  telefono: 40,
  email: 160,
  servicio: 80,
  mensaje: 2000,
};

function texto(valor: unknown): string {
  return typeof valor === "string" ? valor.trim() : "";
}

/** Evita que un valor inyectado rompa el encabezado o el cuerpo del mail. */
function escaparHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validar(body: Record<string, unknown>) {
  const datos = {
    nombre: texto(body.nombre),
    telefono: texto(body.telefono),
    email: texto(body.email),
    servicio: texto(body.servicio),
    mensaje: texto(body.mensaje),
  };

  const errores: Errores = {};

  if (datos.nombre.length < 2)
    errores.nombre = "Escribí tu nombre y apellido.";
  if (datos.telefono.replace(/\D/g, "").length < 8)
    errores.telefono = "Ingresá un teléfono de contacto válido.";
  if (datos.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(datos.email))
    errores.email = "Revisá el email: no parece válido.";
  if (!SERVICIOS.includes(datos.servicio))
    errores.servicio = "Elegí el servicio que necesitás.";

  for (const campo of Object.keys(LIMITES) as Campo[]) {
    if (datos[campo].length > LIMITES[campo])
      errores[campo] = "El texto es demasiado largo.";
  }

  return { datos, errores };
}

async function enviarEmail(datos: Record<Campo, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false as const, motivo: "sin-configurar" };

  const to = process.env.CONTACTO_TO ?? site.email;
  const from = process.env.CONTACTO_FROM ?? "Helfen <onboarding@resend.dev>";

  const filas: [string, string][] = [
    ["Nombre", datos.nombre],
    ["Teléfono", datos.telefono],
    ["Email", datos.email || "—"],
    ["Servicio", datos.servicio],
    ["Consulta", datos.mensaje || "—"],
  ];

  const html = `
    <h2 style="font-family:sans-serif;color:#2e7b82">Nueva consulta desde helfensalud.com</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${filas
        .map(
          ([k, v]) =>
            `<tr>
               <td style="padding:6px 16px 6px 0;vertical-align:top;color:#64707a">${k}</td>
               <td style="padding:6px 0;color:#26332f"><strong>${escaparHtml(v).replace(/\n/g, "<br>")}</strong></td>
             </tr>`,
        )
        .join("")}
    </table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Consulta de ${datos.nombre} — ${datos.servicio}`,
      html,
      // Responder al remitente va directo al consultante.
      ...(datos.email ? { reply_to: datos.email } : {}),
    }),
  });

  if (!res.ok) {
    const detalle = await res.text().catch(() => "");
    console.error("[contacto] Resend respondió", res.status, detalle);
    return { ok: false as const, motivo: "proveedor" };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Formato de solicitud inválido." },
      { status: 400 },
    );
  }

  // Honeypot: un bot completa el campo oculto; una persona no.
  if (texto(body.empresa)) return NextResponse.json({ ok: true });

  const { datos, errores } = validar(body);
  if (Object.keys(errores).length > 0) {
    return NextResponse.json({ ok: false, errores }, { status: 422 });
  }

  const envio = await enviarEmail(datos);

  if (!envio.ok) {
    const sinConfigurar = envio.motivo === "sin-configurar";
    if (sinConfigurar) {
      console.error(
        "[contacto] Falta RESEND_API_KEY: la consulta no se envió por email.",
      );
    }
    return NextResponse.json(
      {
        ok: false,
        error:
          "No pudimos enviar la consulta en este momento. Escribinos por WhatsApp y te respondemos enseguida.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
