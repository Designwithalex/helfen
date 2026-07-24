import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Helfen — Cuidados especiales en salud en Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen para redes sociales, generada en tiempo de build. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #01A5D9 0%, #018AC1 50%, #005596 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
            Helfen
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#D5EEFA",
              marginTop: 8,
            }}
          >
            Global Class Caregiving
          </div>
        </div>

        <div
          style={{
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: -1.5,
          }}
        >
          La mejor recuperación sucede en casa.
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 26 }}>
          <div style={{ color: "#EEF8FD" }}>
            Cuidados especiales en salud · CABA y GBA
          </div>
          <div style={{ color: "#A9DCF4", fontSize: 22, marginTop: 10 }}>
            {`WhatsApp ${site.whatsapp.display} · Tel. ${site.phone.display}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
