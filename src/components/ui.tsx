import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------
   Primitivas de layout y de marca compartidas por todas las secciones.
   Lenguaje visual del brochure: bloques de color con texto blanco,
   tarjetas de borde fino, mucho aire vertical.
   --------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-28 py-20 sm:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "light";
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.14em] uppercase ${
        tone === "light" ? "text-brand-50" : "text-brand-700"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 ${tone === "light" ? "bg-white/60" : "bg-brand-300"}`}
      />
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  tone = "dark",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.75rem] ${
        tone === "light" ? "text-white" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * Encabezado en bloque de color — el recurso gráfico característico del
 * brochure ("Servicios Corporativos", "Especialidades", …).
 */
export function BlockHeading({
  id,
  children,
  as: Tag = "h3",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={`bg-brand-gradient rounded-lg px-6 py-3.5 text-center text-xl font-semibold text-white sm:text-2xl ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`text-lg leading-relaxed sm:text-xl ${
        tone === "light" ? "text-white/90" : "text-ink-soft"
      } ${className}`}
    >
      {children}
    </p>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm hover:shadow-md active:bg-brand-900",
  secondary:
    "bg-white text-brand-700 ring-1 ring-brand-600 hover:bg-brand-50 hover:ring-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
  white:
    "bg-white text-brand-700 hover:bg-brand-50 shadow-sm hover:shadow-md",
};

/** CTA táctil: mínimo 48px de alto, transición 200ms, foco visible. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3 text-base font-semibold transition-all duration-200 ${buttonStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Tarjeta base: borde suave, hover contenido, sin sombras pesadas. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-7 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "deep" | "light";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    deep: "bg-brand-100 text-brand-700",
    light: "bg-white/15 text-white",
  };
  return (
    <span
      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
