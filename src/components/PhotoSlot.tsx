import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Espacio reservado para fotografía cálida y humana.
 *
 * Cuando exista la foto final: dejarla en `public/images/` y pasar
 * `src="/images/archivo.jpg"` + `alt` descriptivo. Sin `src` se muestra
 * una composición de marca (degradé + ilustración lineal), nunca un
 * placeholder roto. Las proporciones se mantienen en ambos casos para
 * evitar layout shift (CLS).
 */
export default function PhotoSlot({
  src,
  alt,
  illustration,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src?: string;
  alt: string;
  illustration?: ReactNode;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 18%, rgba(1,165,217,0.28), transparent 55%), radial-gradient(circle at 82% 78%, rgba(0,85,150,0.22), transparent 52%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-10 text-brand-600/70">
        {illustration ?? <DefaultIllustration />}
      </div>
    </div>
  );
}

function DefaultIllustration() {
  return (
    <svg
      viewBox="0 0 160 120"
      className="h-full max-h-64 w-full max-w-md"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Persona en silla de ruedas */}
      <circle cx="52" cy="42" r="8" />
      <path d="M52 50v20h18l12 18" />
      <path d="M96 88H82" />
      <circle cx="58" cy="82" r="17" />
      <circle cx="58" cy="82" r="5" />
      {/* Acompañante */}
      <circle cx="108" cy="34" r="9" />
      <path d="M108 43v34" />
      <path d="M96 99V83a12 12 0 0 1 24 0v16" />
      <path d="M99 56 84 66" />
      {/* Techo / hogar */}
      <path d="M18 40 40 22l22 18" opacity="0.5" />
      <path d="M140 30l-14 12" opacity="0.5" />
    </svg>
  );
}
