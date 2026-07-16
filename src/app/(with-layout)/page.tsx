import type { Metadata } from "next";

import { ChallengeGrid } from "@/components/home/challenge-grid";
import { HeroTechStack } from "@/components/home/hero-tech-stack";
import { Footer } from "@/components/layout/Footer";

import { challenges } from "@/data/challenges-card";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Hub de práctica Frontend Mentor en Next.js: badges honestos, retos gold y atribución de diseño.",
};

export default function HomePage() {
  const goldCount = challenges.filter((c) => c.craftTier === "gold").length;

  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div
          className={cn(
            "mb-10 grid gap-10 lg:mb-14 lg:items-center lg:gap-12 xl:gap-14",
            "lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]",
          )}
        >
          <div className="lg:max-w-2xl">
            <p
              className={cn(
                "mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-sky-400 uppercase",
                "before:h-0.5 before:w-6 before:rounded-full before:bg-linear-to-r before:from-sky-400 before:to-transparent",
              )}
            >
              Practice hub · Frontend Mentor
            </p>
            <h1
              className={cn(
                "mb-3 bg-linear-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold",
                "tracking-tight text-transparent sm:text-5xl",
              )}
            >
              Retos del repositorio
            </h1>
            <p className="w-full text-lg leading-relaxed text-zinc-400 sm:text-xl lg:max-w-prose">
              Entrenamiento de craft front con diseños de{" "}
              <strong className="font-medium text-zinc-300">Frontend Mentor</strong> — no es un design system propio ni
              un producto. Badge <strong className="font-medium text-zinc-300">Gold</strong> solo si el DoD (pixel,
              a11y, test) está verde.
            </p>

            <div
              className={cn(
                "my-10 rounded-xl border border-sky-500/15 bg-zinc-900/50 p-4 backdrop-blur-md sm:p-5 lg:mb-12",
                "shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]",
              )}
              role="note"
            >
              <p className="text-sm leading-relaxed text-zinc-400">
                Hoy: {goldCount} gold · {challenges.length} en el índice. Los retos «en progreso» no se venden como
                listos.{" "}
                <Link
                  href="/start"
                  className={cn(
                    "font-medium text-sky-400 underline decoration-sky-400/35 underline-offset-2",
                    "hover:text-sky-300",
                  )}
                >
                  Onboarding /start
                </Link>{" "}
                explica el propósito del hub.
              </p>
            </div>
          </div>

          <HeroTechStack />
        </div>

        <section aria-labelledby="challenges-heading">
          <h2
            id="challenges-heading"
            className="mb-5 text-[0.7rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase"
          >
            Proyectos ({challenges.length})
          </h2>
          <ChallengeGrid challenges={challenges} />
        </section>
      </main>

      <Footer />
    </>
  );
}
