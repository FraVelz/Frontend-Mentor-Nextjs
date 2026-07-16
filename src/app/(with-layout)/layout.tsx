import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

function SkipToMain() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]",
        "focus:inline-flex focus:items-center focus:rounded-md focus:bg-zinc-900",
        "focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-zinc-50 focus:shadow-lg",
        "focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-950",
        "focus:outline-none",
      )}
    >
      Saltar al contenido
    </a>
  );
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col font-sans selection:bg-sky-400 selection:text-zinc-950",
        "text-foreground bg-radial bg-fixed text-[16px]",
      )}
    >
      <SkipToMain />
      <Header />
      <div id="main-content" className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
