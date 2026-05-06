import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 · Página no encontrada",
  description: "La ruta que buscas no existe en este sitio.",
};

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col font-sans selection:bg-sky-400 selection:text-slate-950",
        "bg-radial text-foreground bg-fixed text-[16px]",
      )}
    >
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={cn(
              "mb-3 inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.14em] text-sky-400 uppercase",
              "before:h-0.5 before:w-6 before:rounded-full before:bg-linear-to-r before:from-sky-400 before:to-transparent",
            )}
          >
            Error 404
          </p>
          <h1
            className={cn(
              "mb-4 bg-linear-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold",
              "tracking-tight text-transparent sm:text-5xl leading-tight",
            )}
          >
            Página no encontrada
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-slate-400 sm:text-xl">
            Esa ruta no existe o fue movida. Puedes volver al listado de retos
            o al hub de entrada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className={cn(
                "inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-lg px-5 text-sm font-semibold",
                "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
              )}
            >
              Ver retos
            </Link>
            <Link
              href="/start"
              className={cn(
                "inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-semibold",
                "text-slate-200 transition hover:border-sky-400/40 hover:text-sky-400",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
              )}
            >
              Ir a inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
