import { ImageResponse } from "next/og";

export const alt =
  "Fullstack Jobs - developer roles with salary, work setup, and stack insights";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        backgroundColor: "#05070d",
        backgroundImage:
          "linear-gradient(rgba(148, 163, 184, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.09) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        color: "#e2e8f0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        padding: "52px 64px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(34, 211, 238, 0.20), rgba(14, 165, 233, 0))",
          borderRadius: "50%",
          height: "510px",
          position: "absolute",
          right: "-130px",
          top: "-250px",
          width: "510px",
        }}
      />

      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        <div
          style={{
            alignItems: "center",
            background: "#083344",
            border: "2px solid #67e8f9",
            borderRadius: "10px",
            color: "#a5f3fc",
            display: "flex",
            fontFamily: "monospace",
            fontSize: "28px",
            fontWeight: 700,
            height: "58px",
            justifyContent: "center",
            width: "58px",
          }}
        >
          &lt;/&gt;
        </div>
        <span style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          Fullstack Jobs
        </span>
      </div>

      <div
        style={{ display: "flex", flex: 1, gap: "58px", paddingTop: "52px" }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#67e8f9",
              display: "flex",
              fontFamily: "monospace",
              fontSize: "18px",
              fontWeight: 700,
              gap: "12px",
              letterSpacing: "1px",
            }}
          >
            <span
              style={{ background: "#22d3ee", height: "2px", width: "40px" }}
            />
            THE SIGNAL, NOT THE NOISE
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "62px",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.04,
              marginTop: "22px",
            }}
          >
            <span>Find work that</span>
            <span>fits your craft.</span>
          </div>
          <div
            style={{
              color: "#cbd5e1",
              fontSize: "25px",
              lineHeight: 1.4,
              marginTop: "20px",
              maxWidth: "570px",
            }}
          >
            Clear compensation, work setup, scope, and tech-stack insight for
            every role.
          </div>
        </div>

        <div
          style={{
            alignSelf: "center",
            background: "rgba(11, 18, 32, 0.92)",
            border: "1px solid rgba(103, 232, 249, 0.4)",
            borderRadius: "12px",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            width: "410px",
          }}
        >
          <span
            style={{
              color: "#67e8f9",
              fontFamily: "monospace",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            FEATURED ROLE
          </span>
          <span
            style={{
              color: "#f8fafc",
              fontSize: "29px",
              fontWeight: 700,
              marginTop: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Senior Fullstack Engineer
          </span>
          <span
            style={{ color: "#94a3b8", fontSize: "19px", marginTop: "8px" }}
          >
            Product team · Remote
          </span>
          <div
            style={{
              background: "rgba(148, 163, 184, 0.2)",
              height: "1px",
              margin: "22px 0",
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "13px" }}
          >
            {[
              ["COMPENSATION", "$160k – $210k"],
              ["STACK", "TypeScript · React · Node"],
              ["WORK SETUP", "Remote-friendly"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    color: "#64748b",
                    fontFamily: "monospace",
                    fontSize: "13px",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    color: "#cbd5e1",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        {["SALARY", "SCOPE", "STACK"].map((label) => (
          <span
            key={label}
            style={{
              border: "1px solid rgba(148, 163, 184, 0.35)",
              color: "#cbd5e1",
              display: "flex",
              fontFamily: "monospace",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "1px",
              padding: "10px 14px",
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
