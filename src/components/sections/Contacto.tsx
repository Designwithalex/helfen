"use client";

import { useRef, useState, type FormEvent } from "react";
import { Container, Eyebrow, SectionTitle, Lead } from "../ui";
import { IconWhatsApp, IconMail, IconMapPin, IconCheck } from "../icons";
import Reveal from "../Reveal";
import { site, whatsappLink } from "@/lib/site";
import { serviciosFormulario } from "@/lib/content";

type Campo = "nombre" | "telefono" | "email" | "servicio" | "mensaje";
type Errores = Partial<Record<Campo, string>>;
type Estado = "inactivo" | "enviando" | "enviado" | "error";

/* Estilos compartidos por los campos, sobre el fondo turquesa profundo. */
const campoBase =
  "w-full rounded-xl border bg-white/95 px-4 py-3.5 text-base text-ink placeholder:text-ink-muted transition-colors duration-200 focus:bg-white";
const campoOk = "border-white/40 hover:border-white/70";
const campoError = "border-red-300 bg-red-50";

function Etiqueta({
  htmlFor,
  children,
  opcional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  opcional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.9375rem] font-semibold text-white"
    >
      {children}
      {opcional && (
        <span className="ml-1.5 font-normal text-white/70">(opcional)</span>
      )}
    </label>
  );
}

function MensajeError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-100">
      {children}
    </p>
  );
}

/**
 * Contacto: formulario que envía la consulta por email a la casilla de
 * Helfen (vía `/api/contacto`), más los datos directos de la empresa.
 * Si el envío falla, siempre queda WhatsApp como alternativa visible.
 */
export default function Contacto() {
  const [errores, setErrores] = useState<Errores>({});
  const [estado, setEstado] = useState<Estado>("inactivo");
  const [errorGeneral, setErrorGeneral] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nombre: String(data.get("nombre") ?? "").trim(),
      telefono: String(data.get("telefono") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      servicio: String(data.get("servicio") ?? ""),
      mensaje: String(data.get("mensaje") ?? "").trim(),
      empresa: String(data.get("empresa") ?? ""), // honeypot
    };

    // Validación en el cliente: respuesta inmediata, sin round-trip.
    const nuevos: Errores = {};
    if (payload.nombre.length < 2)
      nuevos.nombre = "Escribí tu nombre y apellido.";
    if (payload.telefono.replace(/\D/g, "").length < 8)
      nuevos.telefono = "Ingresá un teléfono de contacto válido.";
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email))
      nuevos.email = "Revisá el email: no parece válido.";
    if (!payload.servicio) nuevos.servicio = "Elegí el servicio que necesitás.";

    setErrores(nuevos);
    setErrorGeneral("");

    if (Object.keys(nuevos).length > 0) {
      document.getElementById(Object.keys(nuevos)[0])?.focus();
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setEstado("enviado");
        form.reset();
        return;
      }
      if (res.status === 422 && json.errores) {
        setErrores(json.errores);
        setEstado("inactivo");
        document.getElementById(Object.keys(json.errores)[0])?.focus();
        return;
      }
      setEstado("error");
      setErrorGeneral(
        json.error ??
          "No pudimos enviar la consulta. Escribinos por WhatsApp y te respondemos enseguida.",
      );
    } catch {
      setEstado("error");
      setErrorGeneral(
        "No pudimos enviar la consulta. Revisá tu conexión o escribinos por WhatsApp.",
      );
    }
  }

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
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Formulario */}
          <Reveal>
            {estado === "enviado" ? (
              <div
                role="status"
                className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center"
              >
                <span
                  className="bg-brand-gradient inline-flex size-16 items-center justify-center rounded-full text-white"
                  aria-hidden="true"
                >
                  <IconCheck className="size-8" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-brand-700">
                  Recibimos tu consulta
                </h3>
                <p className="mt-3 max-w-sm text-ink-soft">
                  Te vamos a responder a la brevedad. Si preferís una respuesta
                  inmediata, escribinos por WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setEstado("inactivo")}
                  className="mt-7 cursor-pointer rounded-full px-5 py-2.5 font-semibold text-brand-700 underline-offset-4 transition-colors duration-200 hover:bg-brand-50 hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Etiqueta htmlFor="nombre">Nombre y apellido</Etiqueta>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!errores.nombre}
                      aria-describedby={errores.nombre ? "err-nombre" : undefined}
                      className={`${campoBase} ${errores.nombre ? campoError : campoOk}`}
                      placeholder="María González"
                    />
                    <MensajeError id="err-nombre">{errores.nombre}</MensajeError>
                  </div>

                  <div>
                    <Etiqueta htmlFor="telefono">Teléfono</Etiqueta>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      required
                      aria-invalid={!!errores.telefono}
                      aria-describedby={
                        errores.telefono ? "err-telefono" : undefined
                      }
                      className={`${campoBase} ${errores.telefono ? campoError : campoOk}`}
                      placeholder="11 5555 5555"
                    />
                    <MensajeError id="err-telefono">
                      {errores.telefono}
                    </MensajeError>
                  </div>
                </div>

                <div className="mt-5">
                  <Etiqueta htmlFor="email" opcional>
                    Email
                  </Etiqueta>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errores.email}
                    aria-describedby={errores.email ? "err-email" : undefined}
                    className={`${campoBase} ${errores.email ? campoError : campoOk}`}
                    placeholder="maria@ejemplo.com"
                  />
                  <MensajeError id="err-email">{errores.email}</MensajeError>
                </div>

                <div className="mt-5">
                  <Etiqueta htmlFor="servicio">¿Qué servicio necesitás?</Etiqueta>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    defaultValue=""
                    aria-invalid={!!errores.servicio}
                    aria-describedby={
                      errores.servicio ? "err-servicio" : undefined
                    }
                    className={`${campoBase} ${errores.servicio ? campoError : campoOk} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Elegí una opción
                    </option>
                    {serviciosFormulario.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <MensajeError id="err-servicio">
                    {errores.servicio}
                  </MensajeError>
                </div>

                <div className="mt-5">
                  <Etiqueta htmlFor="mensaje" opcional>
                    Contanos brevemente el caso
                  </Etiqueta>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    maxLength={2000}
                    className={`${campoBase} ${campoOk} resize-y`}
                    placeholder="Edad, situación actual, si tiene cobertura médica…"
                  />
                </div>

                {/* Honeypot anti-spam: invisible para personas. */}
                <div aria-hidden="true" className="absolute -left-[9999px]">
                  <label htmlFor="empresa">No completar</label>
                  <input id="empresa" name="empresa" type="text" tabIndex={-1} />
                </div>

                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="mt-8 inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-700 shadow-lg transition-all duration-200 hover:bg-brand-50 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
                >
                  {estado === "enviando" ? "Enviando…" : "Enviar consulta"}
                </button>

                {errorGeneral && (
                  <div
                    role="alert"
                    className="mt-5 rounded-2xl bg-white/15 p-5 ring-1 ring-white/40"
                  >
                    <p className="text-white">{errorGeneral}</p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50"
                    >
                      <IconWhatsApp className="size-5" />
                      Escribinos por WhatsApp
                    </a>
                  </div>
                )}
              </form>
            )}
          </Reveal>

          {/* Datos directos */}
          <Reveal delay={100}>
            <div className="lg:pl-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white/15 px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/50 transition-colors duration-200 hover:bg-white/25"
              >
                <IconWhatsApp className="size-6" />
                Escribinos por WhatsApp
              </a>
              <p className="mt-4 text-center text-white/85">
                ¿Preferís hablar ahora? Te respondemos al instante.
              </p>

              <ul className="mt-10 space-y-5">
                <li className="flex gap-4">
                  <IconWhatsApp className="mt-0.5 size-6 shrink-0 text-white/80" />
                  <span>
                    <span className="block text-sm tracking-wide text-white/70 uppercase">
                      WhatsApp
                    </span>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-semibold text-white underline-offset-4 hover:underline"
                    >
                      {site.whatsapp.display}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <IconMail className="mt-0.5 size-6 shrink-0 text-white/80" />
                  <span>
                    <span className="block text-sm tracking-wide text-white/70 uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="cursor-pointer font-semibold break-words text-white underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <IconMapPin className="mt-0.5 size-6 shrink-0 text-white/80" />
                  <span>
                    <span className="block text-sm tracking-wide text-white/70 uppercase">
                      Domicilio
                    </span>
                    <span className="font-semibold text-white">
                      {site.address.street}
                      <br />
                      {site.address.locality}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
