import { HubCard } from "@/components/hub-card";
import { hubTracks } from "@/data/hub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fravelz · Retos Frontend Mentor",
  description:
    "Elige cómo explorar los retos: proyecto vanilla (HTML, CSS, JS) o índice Next.js con metadatos y stack profesional.",
};

export default function MainHubPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl lg:mb-14">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-400 before:h-0.5 before:w-6 before:rounded-full before:bg-gradient-to-r before:from-sky-400 before:to-transparent">
          Portafolio · Frontend Mentor
        </p>
        <h1 className="mb-3 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Dos formas de ver los mismos retos
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-slate-400">
          Practico con desafíos de{" "}
          <a
            href="https://www.frontendmentor.io/"
            className="font-medium text-sky-400 underline decoration-sky-400/35 underline-offset-2 hover:text-sky-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Aquí eliges si entras al índice clásico (HTML, CSS y JavaScript) o al hub en Next.js con el listado
          enriquecido. Sustituye las capturas en{" "}
          <code className="rounded-md bg-sky-500/10 px-1.5 py-0.5 font-mono text-xs text-sky-300">
            public/hub/
          </code>{" "}
          cuando tengas pantallazos reales.
        </p>
      </header>

      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        role="list"
        aria-label="Tracks de proyectos"
      >
        {hubTracks.map((track, index) => (
          <div key={track.title} className="min-w-0" role="listitem">
            <HubCard track={track} imagePriority={index === 0} />
          </div>
        ))}
      </div>
    </main>
  );
}
