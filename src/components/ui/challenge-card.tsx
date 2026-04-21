import type { Challenge } from "@/data/challenges-card";
import { difficultyLabels } from "@/data/challenges-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const difficultyStyles: Record<Challenge["difficulty"], string> = {
  newbie: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/25",
  junior: "bg-sky-500/15 text-sky-300 ring-sky-400/25",
  intermediate: "bg-amber-500/15 text-amber-200 ring-amber-400/25",
  advanced: "bg-orange-500/15 text-orange-200 ring-orange-400/25",
  guru: "bg-rose-500/15 text-rose-200 ring-rose-400/25",
};

const statusStyles: Record<Challenge["status"], string> = {
  ejemplo: "bg-violet-500/10 text-violet-200 ring-violet-400/20",
  "en-progreso": "bg-amber-500/10 text-amber-200 ring-amber-400/20",
  listo: "bg-emerald-500/10 text-emerald-200 ring-emerald-400/20",
};

const statusLabels: Record<Challenge["status"], string> = {
  ejemplo: "Ejemplo / plantilla",
  "en-progreso": "En progreso",
  listo: "Listo",
};

const cardSurfaceClass = cn(
  "group flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]",
  "shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200",
  "hover:border-sky-400/35 hover:bg-white/[0.09]",
  "hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_16px_48px_rgba(0,0,0,0.35)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
  "motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
);

function CardBody({ challenge }: { challenge: Challenge }) {
  return (
    <>
      <div
        className="relative aspect-[16/10] overflow-hidden bg-slate-900/80"
        style={{ backgroundImage: challenge.previewGradient }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="text-lg font-semibold tracking-tight text-white/90 drop-shadow-md sm:text-xl">
            {challenge.title}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide uppercase ring-1 ring-inset",
              difficultyStyles[challenge.difficulty],
            )}
          >
            {difficultyLabels[challenge.difficulty]}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-0.5 text-[0.65rem] font-medium ring-1 ring-inset",
              statusStyles[challenge.status],
            )}
          >
            {statusLabels[challenge.status]}
          </span>
        </div>
        <div className="flex flex-1 items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="block text-base font-semibold tracking-tight text-slate-100">
              {challenge.title}
            </span>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              {challenge.shortDescription}
            </p>
            <span className="mt-2 block truncate font-mono text-xs font-medium text-sky-400/95">
              /{challenge.slug}/
            </span>
            <ul className="mt-3 flex list-none flex-wrap gap-1.5 [&>li]:m-0 [&>li]:p-0">
              {challenge.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-block rounded-md bg-white/5 px-2 py-0.5 text-[0.7rem] text-slate-400 ring-1 ring-white/10">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-lg bg-sky-500/15 text-sky-400 transition",
              "motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:bg-sky-500/25 motion-reduce:group-hover:translate-x-0",
            )}
            aria-hidden
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  if (challenge.implementationHref) {
    return (
      <li>
        <Link href={challenge.implementationHref} className={cardSurfaceClass}>
          <CardBody challenge={challenge} />
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className={cardSurfaceClass}>
        <CardBody challenge={challenge} />
      </div>
    </li>
  );
}
