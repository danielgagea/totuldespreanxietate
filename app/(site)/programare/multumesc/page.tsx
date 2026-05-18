import Link from "next/link";

export default function MultumescPage() {
  return (
    <main className="font-work flex min-h-screen items-center justify-center bg-lp-bg px-6 py-16">
      <div className="max-w-[560px] text-center">
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
          <span className="lp-yellow-underline">Mesaj primit</span>.
        </h1>

        <p className="mx-auto mt-5 max-w-[480px] text-base leading-relaxed text-lp-mute md:text-lg">
          Vei fi contactat în maximum{" "}
          <strong className="text-lp-navy">24 de ore</strong>.
        </p>

        <p className="mt-2 text-base leading-relaxed text-lp-mute-soft">
          Până atunci, poți continua să citești despre anxietate.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/atac-de-panica"
            className="lp-cta inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold md:text-base"
          >
            Atacul de panică
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/tipuri/anxietate-sociala"
            className="lp-cta-ghost inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold md:text-base"
          >
            Anxietatea socială
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
