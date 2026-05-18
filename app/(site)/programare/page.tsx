"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { submitContact } from "@/lib/leads";

function ProgramareForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sursa = searchParams.get("din") || "direct";
  const [form, setForm] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    mesaj: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitContact({ ...form, pagina: sursa });

      try {
        const consent = JSON.parse(
          localStorage.getItem("cookie-consent") || "{}",
        );
        if (consent.analytics && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "conversion",
            event_label: sursa,
          });
        }
        if (consent.marketing && typeof window.fbq === "function") {
          window.fbq("track", "Lead", { content_name: sursa });
        }
      } catch {
        // consent tracking failed silently
      }

      router.push("/programare/multumesc");
    } catch {
      setError("Ceva nu a mers. Te rog încearcă din nou.");
      setLoading(false);
    }
  }

  return (
    <main className="font-work min-h-screen bg-lp-bg px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">
        <div className="text-center">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cabinet · Sibiu · Online
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl">
            <span className="lp-yellow-underline">Trimite-mi</span> un mesaj.
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-lp-mute md:text-lg">
            Nu trebuie să explici tot. Poți scrie doar câteva cuvinte. Ședințele
            sunt online, în ritmul tău, fără presiune.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-lp-mute-soft">
            Daniel Gagea, psiholog clinician, psihoterapeut
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-md border border-lp-border bg-white p-7 shadow-[0_4px_24px_rgba(8,29,61,0.05)] md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              id="nume"
              label="Nume"
              value={form.nume}
              onChange={(v) => update("nume", v)}
              required
            />
            <Field
              id="prenume"
              label="Prenume"
              value={form.prenume}
              onChange={(v) => update("prenume", v)}
              required
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              required
            />
            <Field
              id="telefon"
              label="Telefon"
              type="tel"
              autoComplete="tel"
              value={form.telefon}
              onChange={(v) => update("telefon", v)}
              required
            />
          </div>

          <div className="mt-4 flex flex-col">
            <label
              htmlFor="mesaj"
              className="mb-2 text-sm font-semibold text-lp-navy"
            >
              Mesaj <span className="text-lp-cyan-dark">*</span>
            </label>
            <textarea
              id="mesaj"
              required
              rows={5}
              value={form.mesaj}
              onChange={(e) => update("mesaj", e.target.value)}
              className="lp-input resize-y"
              style={{ minHeight: 120 }}
            />
          </div>

          <p className="mt-6 text-xs leading-relaxed text-lp-mute-soft">
            Prin înregistrare, confirmi că ești de acord cu Termenii și
            Condițiile și cu Politica de Confidențialitate, precum și cu
            primirea de notificări pentru evenimente viitoare. Îți poți retrage
            oricând consimțământul, dezabonându-te.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="lp-cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60 md:text-lg"
          >
            {loading ? "Se trimite..." : "Trimite mesajul"}
            {!loading && <span aria-hidden>→</span>}
          </button>

          {error && (
            <p className="mt-4 text-center text-sm font-medium text-red-600">
              {error}
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-sm text-lp-mute-soft">
          Răspund personal la fiecare mesaj, de obicei în 24-48 de ore.
        </p>
      </div>
    </main>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-sm font-semibold text-lp-navy">
        {label}
        {required && <span className="text-lp-cyan-dark"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="lp-input"
      />
    </div>
  );
}

export default function ProgramarePage() {
  return (
    <Suspense>
      <ProgramareForm />
    </Suspense>
  );
}
