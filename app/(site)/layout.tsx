import { Navbar } from "@/components/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 64 }}>
        {children}
      </div>
    </>
  );
}
