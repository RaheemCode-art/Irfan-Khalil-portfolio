import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f5f1e8",
        }}
      >
        <div style={{ fontSize: 28, color: "#3d4fe0", fontWeight: 600, marginBottom: 24 }}>
          PROCESS & OPERATIONS ENGINEER
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1 }}>
          Irfan Khalil
        </div>
        <div style={{ fontSize: 32, color: "#6b6b63", marginTop: 24 }}>
          14+ years operating Hydrogen Peroxide plants
        </div>
      </div>
    ),
    { ...size }
  );
}