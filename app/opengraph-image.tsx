import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0A475D 0%, #072E3F 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#0F5E79",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: -0.5,
              color: "#D3E7EE",
            }}
          >
            Clinique ESSAADA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: -1.5,
            }}
          >
            Centre d'hémodialyse
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F2ECE0",
              letterSpacing: -1.5,
            }}
          >
            Sidi Bel Abbès
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 28,
            color: "#A3CEDB",
            fontWeight: 500,
          }}
        >
          <span>37 lits</span>
          <span>·</span>
          <span>Conventionné CNAS · CASNOS</span>
          <span>·</span>
          <span>Patients de passage</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
