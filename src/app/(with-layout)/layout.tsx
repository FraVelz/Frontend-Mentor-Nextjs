import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col font-sans selection:bg-sky-400 selection:text-slate-950",
        "text-foreground bg-radial bg-fixed text-[16px]",
      )}
    >
      <Header />
      {children}
    </div>
  );
}
