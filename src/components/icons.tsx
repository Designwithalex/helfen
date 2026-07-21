import type { SVGProps } from "react";

/**
 * Set de íconos lineales propios (stroke 1.5), coherente con la
 * iconografía del material de marca. Decorativos por defecto:
 * `aria-hidden` salvo que se pase un `title`.
 */

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Icon({ title, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const IconHome = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 10.5 12 4l8.5 6.5" />
    <path d="M5.5 9.8V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.8" />
    <path d="M12 20v-4.5" />
    <path d="M9.8 13.2h4.4" />
  </Icon>
);

export const IconHeart = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7.2-4.4-7.2-9.4A3.9 3.9 0 0 1 12 8.2a3.9 3.9 0 0 1 7.2 2.4C19.2 15.6 12 20 12 20Z" />
  </Icon>
);

export const IconShield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5 5 6v5.6c0 4 2.9 7.5 7 8.9 4.1-1.4 7-4.9 7-8.9V6l-7-2.5Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </Icon>
);

export const IconWheelchair = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9.5" cy="4.6" r="1.9" />
    <path d="M9.5 8v4.6h4.2l2.8 4.4" />
    <path d="M20 17.6h-3.5" />
    <circle cx="10.5" cy="16" r="4.2" />
  </Icon>
);

export const IconNurse = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="7.6" r="3.4" />
    <path d="M12 6.2v2.8" />
    <path d="M10.6 7.6h2.8" />
    <path d="M5 20.5a7 7 0 0 1 14 0" />
  </Icon>
);

export const IconStethoscope = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3.5v4.2a3.4 3.4 0 0 0 6.8 0V3.5" />
    <path d="M4.4 3.5H6M11.2 3.5h1.6" />
    <path d="M9.4 11.1v2.6a4.6 4.6 0 0 0 9.2 0v-1.2" />
    <circle cx="18.6" cy="10.4" r="1.9" />
  </Icon>
);

export const IconBrain = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5.2v13.4" />
    <path d="M12 6.4a2.6 2.6 0 0 0-5 .9 2.4 2.4 0 0 0-1.2 4.2A2.7 2.7 0 0 0 7.4 16a2.5 2.5 0 0 0 4.6 1.3" />
    <path d="M12 6.4a2.6 2.6 0 0 1 5 .9 2.4 2.4 0 0 1 1.2 4.2 2.7 2.7 0 0 1-1.6 4.5 2.5 2.5 0 0 1-4.6 1.3" />
  </Icon>
);

export const IconUsers = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9" cy="8.2" r="3.1" />
    <path d="M3.4 19.4a5.8 5.8 0 0 1 11.2 0" />
    <path d="M16.2 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17.6 14.6a5.8 5.8 0 0 1 3 4.8" />
  </Icon>
);

export const IconBuilding = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 20.4V5.6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v14.8" />
    <path d="M13.5 10.4h5a1 1 0 0 1 1 1v9" />
    <path d="M3 20.4h18" />
    <path d="M7.4 8.2h3.2M7.4 12h3.2M7.4 15.8h3.2M16 14h1.4M16 17.4h1.4" />
  </Icon>
);

export const IconSparkle = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.6 13.7 9l5.4 1.7-5.4 1.7L12 17.8l-1.7-5.4L4.9 10.7 10.3 9 12 3.6Z" />
    <path d="M18.4 16.4 19 18.2l1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6.6-1.8Z" />
  </Icon>
);

export const IconMonitor = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4.6" width="18" height="12" rx="1.6" />
    <path d="M8.4 20.4h7.2M12 16.6v3.8" />
    <path d="M6.6 11.4h2.2l1.2-2.4 1.8 4.2 1.3-2.6h3.7" />
  </Icon>
);

export const IconMapPin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s6.6-5.6 6.6-10.4A6.6 6.6 0 0 0 5.4 10.6C5.4 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.4" r="2.4" />
  </Icon>
);

export const IconPhone = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7.6 3.8 9.9 8l-1.7 2a12 12 0 0 0 5.8 5.8l2-1.7 4.2 2.3-.7 2.4a2 2 0 0 1-2.2 1.4C11.4 19.4 4.6 12.6 3.7 6.7A2 2 0 0 1 5.1 4.5l2.5-.7Z" />
  </Icon>
);

export const IconMail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5.4" width="18" height="13.2" rx="2" />
    <path d="m3.8 6.8 8.2 5.8 8.2-5.8" />
  </Icon>
);

export const IconClock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 6.8V12l3.4 2" />
  </Icon>
);

export const IconCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.8 12.4 4.6 4.6 9.8-10.4" />
  </Icon>
);

export const IconScale = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4.4v15.2M7 19.6h10" />
    <path d="M5.2 7.4h13.6" />
    <path d="M8.4 7.6 5.6 13.4h5.6L8.4 7.6ZM15.6 7.6l-2.8 5.8h5.6l-2.8-5.8Z" />
  </Icon>
);

export const IconLeaf = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.6 19.4c-1.4-6 2.6-12 10.4-12.6l4.4-.4c.4 5.4-1.4 13.6-9.4 14a5.4 5.4 0 0 1-5.4-1Z" />
    <path d="M5.6 18.4c2.4-3.4 6-6.4 10.4-8.4" />
  </Icon>
);

export const IconWhatsApp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24a8.19 8.19 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.23 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.9 2.4 1.02 2.56c.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);
