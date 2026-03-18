import { LeadCaptureCard } from "@/components/sections/LeadCaptureCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <LeadCaptureCard
        pageKey="landing-1"
        title="Titlu Principal"
        description="Descriere scurtă aici"
        ctaLabel="Vreau să aflu mai multe"
      />
    </div>
  );
}

