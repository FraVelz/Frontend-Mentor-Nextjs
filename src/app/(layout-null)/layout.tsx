import Link from "next/link";

import { cn } from "@/lib/utils";

/* Enlace al inicio solo relevante con teclado: oculto hasta que recibe foco (Tab). */
function SrOnlyHomeLink() {
  return (
    <Link
      href="/"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]",
        "focus:inline-flex focus:items-center focus:rounded-md focus:bg-slate-900",
        "focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-slate-50 focus:shadow-lg",
        "focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950",
        "focus:outline-none",
      )}
    >
      Ir al inicio
    </Link>
  );
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SrOnlyHomeLink />
      {children}
    </>
  );
}
