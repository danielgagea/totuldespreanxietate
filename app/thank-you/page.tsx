import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <main className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Mulțumesc!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Te-am adăugat pe listă.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          Înapoi la pagina principală
        </Link>
      </main>
    </div>
  );
}
