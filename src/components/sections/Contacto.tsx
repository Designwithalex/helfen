"use client";

import { useState, type FormEvent } from "react";
import { Section, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconWhatsApp, IconPhone, IconMail, IconMapPin } from "../icons";
import Reveal from "../Reveal";
import { site, whatsappLink } from "@/lib/site";

const tiposDeServicio = [
  "Cuidador / Acompañante de Salud",
  "Acompañante Terapéutico",
  "Auxiliar de Enfermería",
  "Enfermero Profesional",
  "Cuidados paliativos",
  "Servicios corporativos",
  "No lo sé todavía / Necesito asesoramiento",
];

type Errores = Partial<Record<"nombre" | "telefono" | "servicio", string>>;

/**
 * El sitio es estático (sin backend): el formulario arma un mensaje
 * ordenado y lo envía por WhatsApp, con fallback a email. Si más adelante
 * se agrega un endpoint, reemplazar `handleSubmit` por un `fetch`.
 */
export default function Contacto() {
  const [errores, setErrores] = useState<Errores>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const servicio = String(data.get("servicio") ?? "");
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const nuevos: Errores = {};
    if (nombre.length < 2) nuevos.nombre = "Escriba su nombre y apellido.";
    if (telefono.replace(/\D/g, "").length < 8)
      nuevos.telefono = "Ingrese un teléfono de contacto válido.";
    if (!servicio) nuevos.servicio = "Elija el servicio que necesita.";

    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) {
      const primero = Object.keys(nuevos)[0];
      document.getElementById(primero)?.focus();
      return;
    }

    const texto = [
      `Hola, mi nombre es ${nombre}.`,
      `Teléfono: ${telefono}`,
      `Servicio de interés: ${servicio}`,
      mensaje ? `Consulta: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="contacto" labelledBy="contacto-titulo" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Contacto</Eyebrow>
          <SectionTitle id="contacto-titulo">Solicite una entrevista</SectionTitle>
          <Lead className="mt-6">
            Conversamos sin compromiso, evaluamos el caso y le proponemos la
            alternativa más adecuada. La primera consulta es siempre gratuita.
          </Lead>

          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <IconMapPin className="mt-0.5 size-6 shrink-0 text-teal-500" />
              <span className="text-ink-soft">
                {site.address.street}
                <br />
                {site.address.postalCode} — {site.address.locality}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-4">
              <IconPhone className="mt-0.5 size-6 shrink-0 text-teal-500" />
              <a
                href={site.phone.href}
                className="cursor-pointer text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-teal-700 hover:underline"
              >
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-4">
              <IconWhatsApp className="mt-0.5 size-6 shrink-0 text-teal-500" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-teal-700 hover:underline"
              >
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li className="flex gap-4">
              <IconMail className="mt-0.5 size-6 shrink-0 text-teal-500" />
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer break-all text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-teal-700 hover:underline"
              >
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <iframe
              title={`Mapa con la ubicación de Helfen en ${site.address.street}`}
              src="https://www.google.com/maps?q=Enrique%20Santos%20Discepolo%201859%2C%20CABA%2C%20Argentina&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-line bg-surface p-7 sm:p-10"
          >
            <h3 className="text-xl font-semibold">Déjenos sus datos</h3>
            <p className="mt-2 text-[0.9375rem] text-ink-soft">
              Al enviar se abre WhatsApp con su consulta ya redactada. También
              puede escribirnos a{" "}
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer font-medium text-teal-700 underline underline-offset-4"
              >
                {site.email}
              </a>
              .
            </p>

            <div className="mt-8 space-y-6">
              <Campo
                id="nombre"
                label="Nombre y apellido"
                error={errores.nombre}
                required
              >
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  className={inputClass(errores.nombre)}
                  placeholder="María González"
                  {...a11y("nombre", { error: errores.nombre })}
                />
              </Campo>

              <Campo
                id="telefono"
                label="Teléfono"
                hint="Lo usamos para devolverle el llamado."
                error={errores.telefono}
                required
              >
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputClass(errores.telefono)}
                  placeholder="11 5555 5555"
                  {...a11y("telefono", { error: errores.telefono, hint: true })}
                />
              </Campo>

              <Campo
                id="servicio"
                label="Tipo de servicio"
                error={errores.servicio}
                required
              >
                <select
                  id="servicio"
                  name="servicio"
                  defaultValue=""
                  className={`${inputClass(errores.servicio)} cursor-pointer`}
                  {...a11y("servicio", { error: errores.servicio })}
                >
                  <option value="" disabled>
                    Elija una opción
                  </option>
                  {tiposDeServicio.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Campo>

              <Campo
                id="mensaje"
                label="Mensaje"
                hint="Opcional. Cuéntenos brevemente la situación del paciente."
              >
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className={`${inputClass()} resize-y`}
                  {...a11y("mensaje", { hint: true })}
                  placeholder="Mi papá tuvo una cirugía de cadera y necesita asistencia durante el día…"
                />
              </Campo>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex min-h-13 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-md active:bg-teal-800"
            >
              <IconWhatsApp className="size-5" />
              Enviar consulta por WhatsApp
            </button>

            <p className="mt-4 text-center text-sm text-ink-soft">
              Sus datos se usan únicamente para responder su consulta.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3.5 text-base text-ink transition-colors duration-200 placeholder:text-ink-soft/75 ${
    error ? "border-red-500" : "border-line hover:border-teal-300"
  }`;
}

/** Vincula el campo con su ayuda y su error para lectores de pantalla. */
function a11y(id: string, opts: { error?: string; hint?: boolean } = {}) {
  const described = [
    opts.hint ? `${id}-hint` : null,
    opts.error ? `${id}-error` : null,
  ].filter(Boolean);
  return {
    "aria-invalid": opts.error ? true : undefined,
    "aria-describedby": described.length ? described.join(" ") : undefined,
  } as const;
}

function Campo({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-semibold text-teal-900">
        {label}
        {required && (
          <span className="ml-1 text-teal-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-soft">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
