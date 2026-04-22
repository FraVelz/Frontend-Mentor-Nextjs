import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const class_ =
    "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.18),transparent_55%)," +
    "radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(167,139,250,0.1),transparent_45%)," +
    "linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)]";

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col font-sans selection:bg-sky-400 selection:text-slate-950",
        class_,
        "bg-foreground text-foreground bg-fixed text-[16px]",
      )}
    >
      <Header />
      {children}
    </div>
  );
}
