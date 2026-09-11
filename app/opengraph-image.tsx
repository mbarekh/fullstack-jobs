import { ImageResponse } from "next/og";

export const alt =
  "Fullstack Jobs - developer roles with insight into salary, scope, and stack";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0b1220",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            alignItems: "center",
            background: "#164e63",
            border: "2px solid #67e8f9",
            borderRadius: "16px",
            color: "#cffafe",
            display: "flex",
            fontSize: "34px",
            fontWeight: 700,
            height: "72px",
            justifyContent: "center",
            width: "72px",
          }}
        >
          &lt;/&gt;
        </div>
        <span style={{ color: "#cffafe", fontSize: "34px", fontWeight: 700 }}>
          Fullstack Jobs
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <span style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.08 }}>
          Developer roles with insight.
        </span>
        <span style={{ color: "#cbd5e1", fontSize: "30px", lineHeight: 1.35 }}>
          Explore roles with the salary, scope, and stack details that matter.
        </span>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {["Salary", "Scope", "Stack"].map((label) => (
          <span
            key={label}
            style={{
              background: "#164e63",
              border: "1px solid #22d3ee",
              borderRadius: "999px",
              color: "#cffafe",
              display: "flex",
              fontSize: "22px",
              padding: "12px 20px",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>,
    size,
  );
}
