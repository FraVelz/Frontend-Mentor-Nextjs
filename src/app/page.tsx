import { ChallengeCard } from "@/components/challenge-card";
import { challenges } from "@/data/challenges";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-2xl lg:mb-14">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-400 before:h-0.5 before:w-6 before:rounded-full before:bg-gradient-to-r before:from-sky-400 before:to-transparent">
          Frontend Mentor · Next.js
        </p>
        <h1 className="mb-3 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Retos del repositorio
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-slate-400">
          Misma colección de desafíos que en el repo estático, con metadatos extra:{" "}
          <strong className="font-medium text-slate-300">dificultad oficial</strong> (Newbie, Junior,
          Intermediate…), etiquetas de stack y acceso rápido al enunciado en Frontend Mentor. Las tarjetas
          de abajo son <strong className="font-medium text-slate-300">ejemplos de datos</strong> para
          maquetar el índice; sustituye o amplía en{" "}
          <code className="rounded-md bg-sky-500/10 px-1.5 py-0.5 font-mono text-xs text-sky-300">
            src/data/challenges.ts
          </code>
          .
        </p>
      </header>

      <div
        className="mb-10 rounded-xl border border-sky-500/15 bg-slate-900/50 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-5 lg:mb-12"
        role="note"
      >
        <p className="text-sm leading-relaxed text-slate-400">
          ¿Por qué hay dos repos? El directorio clásico en HTML/CSS/JS refuerza fundamentos sin build
          step. Esta app Next.js sirve para practicar rutas, componentes, datos y despliegue más cercano
          al día a día profesional.{" "}
          <Link
            href="/main"
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
          className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500"
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
  );
}
