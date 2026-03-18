"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { submitLead } from "@/lib/leads";

type Props = {
  pageKey: string;
  title: string;
  description: string;
  inputPlaceholder?: string;
  ctaLabel: string;
};

export function LeadCaptureCard({
  pageKey,
  title,
  description,
  inputPlaceholder = "adresa@email.com",
  ctaLabel,
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitLead({ email, page: pageKey });
      router.push("/thank-you");
    } catch {
      setError("Ceva nu a mers. Încearcă din nou.");
      setLoading(false);
    }
  }

  return (
    <main className="w-full max-w-md text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-600">{description}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder={inputPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gray-900 px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Se trimite..." : ctaLabel}
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </main>
  );
}

