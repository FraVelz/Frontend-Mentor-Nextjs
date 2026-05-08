import { HeroTechStack } from "@/components/home/hero-tech-stack";
import { Footer } from "@/components/layout/Footer";
import { ChallengeCard } from "@/components/ui/challenge-card";
import { challenges } from "@/data/challenges-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-10 grid gap-10 lg:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-12 xl:gap-14">
          <div className="lg:max-w-2xl">
            <p
              className={cn(
                "mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-sky-400 uppercase",
                "before:h-0.5 before:w-6 before:rounded-full before:bg-linear-to-r before:from-sky-400 before:to-transparent",
              )}
            >
              Frontend Mentor · Next.js
            </p>
            <h1
              className={cn(
                "mb-3 bg-linear-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold",
                "tracking-tight text-transparent sm:text-5xl",
              )}
            >
              Retos del repositorio
            </h1>
            <p className="w-full text-lg leading-relaxed text-slate-400 sm:text-xl lg:max-w-prose">
              Misma colección de desafíos que en el repo estático, con metadatos extra:{" "}
              <strong className="font-medium text-slate-300">dificultad oficial</strong> (Newbie, Junior, Intermediate…)
              y etiquetas de stack.
            </p>
          </div>
          <HeroTechStack />
        </div>

        <div
          className={cn(
            "mb-10 rounded-xl border border-sky-500/15 bg-slate-900/50 p-4 backdrop-blur-md sm:p-5 lg:mb-12",
            "shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]",
          )}
          role="note"
        >
          <p className="text-sm leading-relaxed text-slate-400">
            ¿Por qué hay dos repos? El directorio clásico en HTML/CSS/JS refuerza fundamentos sin build step. Esta app
            Next.js sirve para practicar rutas, componentes react, datos y despliegue más cercano al día a día
            profesional.{" "}
            <Link
              href="/start"
              className="font-medium text-sky-400 underline decoration-sky-400/35 underline-offset-2 hover:text-sky-300"
            >
              Vuelve al hub de entrada para elegir track o ver capturas
            </Link>
            .
          </p>
        </div>

        <section aria-labelledby="challenges-heading">
          <h2
            id="challenges-heading"
            className="mb-5 text-[0.7rem] font-semibold tracking-[0.14em] text-slate-500 uppercase"
          >
            Proyectos ({challenges.length})
          </h2>
          <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 [&>li]:m-0 [&>li]:p-0">
            {challenges.map((c) => (
              <ChallengeCard key={c.slug} challenge={c} />
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
