import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ritesh Kushwaha - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b1120", color: "#f8fafc", padding: "72px 84px", fontFamily: "Arial" }}>
      <div style={{ color: "#5eead4", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>Software Engineer · Bhopal, India</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -3 }}>Ritesh Kushwaha</div>
        <div style={{ color: "#94a3b8", fontSize: 32 }}>Full-stack development · Machine learning · Applied software</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24 }}><span style={{ color: "#5eead4" }}>↗</span> riteshkushwaha.in</div>
    </div>,
    size,
  );
}
