/**
 * Marca Helfen: símbolo (dos figuras — acompañante y persona asistida —
 * contenidas por un arco protector) + logotipo con tagline.
 */

export function LogoMark({
  className = "size-11",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "light";
}) {
  const stroke = tone === "light" ? "#ffffff" : "currentColor";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M6 30.5C6 17.6 14.1 9 24 9s18 8.6 18 21.5"
        fill="none"
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinecap="round"
        opacity={tone === "light" ? 0.55 : 0.32}
      />
      <circle cx="18.4" cy="21.2" r="3.5" fill="none" stroke={stroke} strokeWidth={2.4} />
      <path
        d="M11.6 39.5v-6.2a6.8 6.8 0 0 1 13.6 0v6.2"
        fill="none"
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <circle cx="32.4" cy="24.6" r="2.9" fill="none" stroke={stroke} strokeWidth={2.4} />
      <path
        d="M26.6 39.5v-4.6a5.8 5.8 0 0 1 11.6 0v4.6"
        fill="none"
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "brand",
  className = "",
}: {
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark
        tone={tone}
        className={`size-10 shrink-0 sm:size-11 ${tone === "light" ? "" : "text-teal-500"}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-semibold tracking-tight ${
            tone === "light" ? "text-white" : "text-teal-800"
          }`}
        >
          Helfen
        </span>
        <span
          className={`mt-1 text-[0.6875rem] tracking-[0.16em] uppercase ${
            tone === "light" ? "text-ocean-200" : "text-teal-500"
          }`}
        >
          Global Class Caregiving
        </span>
      </span>
    </span>
  );
}
