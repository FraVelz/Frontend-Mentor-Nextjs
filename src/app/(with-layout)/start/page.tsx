import { HubCard } from "@/components/ui/hub-card";
import { hubTracks } from "@/data/hub";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fravelz · Retos Frontend Mentor",
  description: "Practice hub: desafíos Frontend Mentor en vanilla o Next.js. Diseños de FM — no producto original.",
};

export default function MainHubPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl lg:mb-14">
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-sky-400 uppercase",
            "before:h-0.5 before:w-6 before:rounded-full before:bg-linear-to-r before:from-sky-400 before:to-transparent",
          )}
        >
          Practice hub · Frontend Mentor
        </p>
        <h1
          className={cn(
            "mb-3 bg-linear-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent",
            "sm:text-4xl",
          )}
        >
          Dos formas de ver los mismos retos
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-zinc-400">
          Practico craft front con desafíos de{" "}
          <a
            href="https://www.frontendmentor.io/"
            className="font-medium text-sky-400 underline decoration-sky-400/35 underline-offset-2 hover:text-sky-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Los diseños son de FM (atribución obligatoria); este repo no es un producto ni un design system propio.
          Elige el índice clásico (HTML/CSS/JS) o el hub Next.js con badges honestos y retos gold.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8" aria-label="Tracks de proyectos">
        {hubTracks.map((track, index) => (
          <li key={track.title} className="min-w-0">
            <HubCard track={track} imagePriority={index === 0} />
          </li>
        ))}
      </ul>
    </main>
  );
}
