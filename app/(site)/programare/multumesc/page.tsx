import Link from "next/link";

export default function MultumescPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--color-background, #F5F0E8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--color-secondary, #5C7A6A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading), 'Fraunces', serif",
            fontSize: 36,
            fontWeight: 400,
            color: "var(--color-primary, #1B2B4B)",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Mesajul tău a fost trimis
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "var(--color-text-secondary, #5A5A5A)",
            lineHeight: 1.7,
            marginBottom: 8,
          }}
        >
          Vei fi contactat în maximum <strong style={{ color: "var(--color-primary, #1B2B4B)" }}>24 de ore</strong>.
        </p>

        <p
          style={{
            fontSize: 16,
            color: "var(--color-text-secondary, #5A5A5A)",
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Până atunci, poți continua să citești despre anxietate.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/tipuri/anxietate-sociala"
            style={{
              padding: "12px 24px",
              border: "1px solid var(--color-border, #DDD8CE)",
              borderRadius: 8,
              color: "var(--color-primary, #1B2B4B)",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              transition: "background 0.2s",
            }}
          >
            Anxietatea socială
          </Link>
          <Link
            href="/atac-de-panica"
            style={{
              padding: "12px 24px",
              border: "1px solid var(--color-border, #DDD8CE)",
              borderRadius: 8,
              color: "var(--color-primary, #1B2B4B)",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              transition: "background 0.2s",
            }}
          >
            Atacul de panică
          </Link>
        </div>
      </div>
    </main>
  );
}
