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
      router.push("/programare/multumesc");
    } catch {
      setError("Ceva nu a mers. Te rog încearcă din nou.");
      setLoading(false);
    }
  }

  return (
    <main className="prog-page">
      <style>{styles}</style>
      <div className="prog-container">
        <div className="prog-header">
          <h1>Trimite un mesaj</h1>
          <p>
            Nu trebuie să explici tot. Poți scrie doar câteva cuvinte.
            Ședințele sunt online, în ritmul tău, fără presiune.
          </p>
          <p className="prog-author">Daniel Gagea, psiholog clinician, psihoterapeut</p>
        </div>

        <form onSubmit={handleSubmit} className="prog-form">
          <div className="prog-row">
            <div className="prog-field">
              <label htmlFor="nume">Nume *</label>
              <input
                id="nume"
                type="text"
                required
                value={form.nume}
                onChange={(e) => update("nume", e.target.value)}
                placeholder=""
              />
            </div>
            <div className="prog-field">
              <label htmlFor="prenume">Prenume *</label>
              <input
                id="prenume"
                type="text"
                required
                value={form.prenume}
                onChange={(e) => update("prenume", e.target.value)}
                placeholder=""
              />
            </div>
          </div>

          <div className="prog-row">
            <div className="prog-field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder=""
              />
            </div>
            <div className="prog-field">
              <label htmlFor="telefon">Telefon *</label>
              <input
                id="telefon"
                type="tel"
                required
                value={form.telefon}
                onChange={(e) => update("telefon", e.target.value)}
                placeholder=""
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="prog-field">
            <label htmlFor="mesaj">Mesaj *</label>
            <textarea
              id="mesaj"
              required
              rows={4}
              value={form.mesaj}
              onChange={(e) => update("mesaj", e.target.value)}
            />
          </div>

          <p className="prog-gdpr">
            Prin înregistrare, confirmi că ești de acord cu Termenii și Condițiile și cu Politica de Confidențialitate, precum și cu primirea de notificări pentru evenimente viitoare. Îți poți retrage oricând consimțământul, dezabonându-te.
          </p>

          <button type="submit" disabled={loading} className="prog-submit">
            {loading ? "Se trimite..." : "Trimite mesajul"}
          </button>

          {error && <p className="prog-error">{error}</p>}
        </form>
      </div>
    </main>
  );
}

export default function ProgramarePage() {
  return (
    <Suspense>
      <ProgramareForm />
    </Suspense>
  );
}

const styles = `
.prog-page {
  min-height: 100vh;
  background: var(--color-background, #F5F0E8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
}

.prog-container {
  width: 100%;
  max-width: 600px;
}

.prog-header {
  text-align: center;
  margin-bottom: 40px;
}

.prog-header h1 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 36px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.prog-header p {
  font-size: 17px;
  color: var(--color-text-secondary, #5A5A5A);
  line-height: 1.6;
}

.prog-author {
  font-size: 13px !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary, #5A5A5A) !important;
  margin-top: 16px;
}

.prog-form {
  background: var(--color-background-white, #FDFAF5);
  border: 1px solid var(--color-border, #DDD8CE);
  border-radius: 12px;
  padding: 32px;
  box-shadow: var(--shadow-md, 0 4px 12px rgba(0,0,0,0.08));
}

.prog-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.prog-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.prog-row .prog-field {
  margin-bottom: 0;
}

.prog-field label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 6px;
}

.prog-field input,
.prog-field textarea {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 16px;
  padding: 12px 16px;
  border: 1px solid var(--color-border, #DDD8CE);
  border-radius: 8px;
  background: #ffffff;
  color: var(--color-text, #2C2C2C);
  transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
  outline: none;
}

.prog-field input::placeholder,
.prog-field textarea::placeholder {
  color: #A0A0A0;
}

.prog-field input:focus,
.prog-field textarea:focus {
  border-color: var(--color-secondary, #5C7A6A);
  box-shadow: 0 0 0 3px rgba(92, 122, 106, 0.12);
}

.prog-field textarea {
  resize: vertical;
  min-height: 100px;
}

.prog-gdpr {
  font-size: 12px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 24px;
}

.prog-submit {
  width: 100%;
  padding: 14px 24px;
  background: var(--color-secondary, #5C7A6A);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}

.prog-submit:hover {
  background: #4A6858;
  transform: translateY(-1px);
}

.prog-submit:active {
  transform: translateY(0);
}

.prog-submit:focus-visible {
  outline: 2px solid var(--color-secondary, #5C7A6A);
  outline-offset: 2px;
}

.prog-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.prog-error {
  margin-top: 12px;
  color: #c0392b;
  font-size: 14px;
  text-align: center;
}

@media (max-width: 600px) {
  .prog-row {
    grid-template-columns: 1fr;
  }
  .prog-form {
    padding: 24px 20px;
  }
  .prog-header h1 {
    font-size: 28px;
  }
}
`;
