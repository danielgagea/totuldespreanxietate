import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="font-work flex min-h-screen items-center justify-center bg-lp-bg px-6 py-16">
      <div className="w-full max-w-[520px] text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lp-cyan text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="font-work text-4xl font-bold leading-tight tracking-tight text-lp-navy md:text-5xl">
          <span className="lp-yellow-underline">Mulțumesc</span>.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-lp-mute md:text-lg">
          Te-am adăugat pe listă.
        </p>
        <Link
          href="/"
          className="lp-cta-ghost mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold md:text-base"
        >
          Înapoi la pagina principală
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
