import Image from "next/image";

/**
 * Marca Helfen: símbolo institucional (cruz + hoja) junto al logotipo
 * y el claim "Global Class Caregiving".
 *
 * El único archivo de marca disponible es el símbolo en blanco sobre
 * transparente, por eso el lockup se usa siempre sobre fondo azul.
 */

export function LogoMark({ className = "size-11" }: { className?: string }) {
  return (
    <Image
      src="/logo-helfen-blanco.png"
      alt=""
      aria-hidden="true"
      width={301}
      height={324}
      className={className}
      priority
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-auto shrink-0 sm:h-11" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
          Helfen
        </span>
        <span className="mt-1.5 text-[0.6875rem] tracking-[0.16em] text-white/80 uppercase">
          Global Class Caregiving
        </span>
      </span>
    </span>
  );
}
