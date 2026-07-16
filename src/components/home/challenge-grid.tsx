"use client";

import { useMemo, useState } from "react";

import type { Challenge, Difficulty } from "@/data/challenges-card";
import { difficultyLabels, sortChallengesForHub } from "@/data/challenges-card";
import { CardBody } from "@/components/ui/challenge-card";
import { cn } from "@/lib/utils";

type StatusFilter = "all" | Challenge["status"] | "gold";
type DifficultyFilter = "all" | Difficulty;

const statusFilters: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "gold", label: "Gold" },
  { id: "listo", label: "Listo" },
  { id: "en-progreso", label: "En progreso" },
  { id: "ejemplo", label: "Ejemplo" },
];

const difficultyFilters: { id: DifficultyFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  ...(Object.keys(difficultyLabels) as Difficulty[]).map((d) => ({
    id: d as DifficultyFilter,
    label: difficultyLabels[d],
  })),
];

function filterToggleClass(active: boolean) {
  return cn(
    "rounded-md px-2.5 py-1.5 text-xs font-medium ring-1 ring-inset transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
    active
      ? "bg-sky-500/20 text-sky-100 ring-sky-400/40"
      : "bg-white/5 text-zinc-400 ring-white/10 hover:bg-white/10 hover:text-zinc-200",
  );
}

export function ChallengeGrid({ challenges }: { challenges: Challenge[] }) {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");

  const filtered = useMemo(() => {
    const next = challenges.filter((c) => {
      if (status === "gold") {
        if (c.craftTier !== "gold") return false;
      } else if (status !== "all" && c.status !== status) {
        return false;
      }
      if (difficulty !== "all" && c.difficulty !== difficulty) return false;
      return true;
    });
    return sortChallengesForHub(next);
  }, [challenges, status, difficulty]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <fieldset className="min-w-0">
          <legend className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
            Estado
          </legend>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por estado">
            {statusFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={status === f.id}
                className={filterToggleClass(status === f.id)}
                onClick={() => setStatus(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="min-w-0">
          <legend className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
            Dificultad
          </legend>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por dificultad">
            {difficultyFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={difficulty === f.id}
                className={filterToggleClass(difficulty === f.id)}
                onClick={() => setDifficulty(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-white/15 bg-zinc-900/40 px-4 py-8 text-center text-sm text-zinc-400">
          No hay retos con estos filtros. Prueba «Todos» o quita un filtro de dificultad.
        </p>
      ) : (
        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 [&>li]:m-0 [&>li]:p-0">
          {filtered.map((c) => (
            <li key={c.slug}>
              <article
                className={cn(
                  "group flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]",
                  "shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200",
                  "hover:border-sky-400/35 hover:bg-white/[0.09]",
                  "hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_16px_48px_rgba(0,0,0,0.35)]",
                  "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2",
                  "focus-within:outline-sky-400",
                  "motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                )}
              >
                <CardBody challenge={c} />
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
