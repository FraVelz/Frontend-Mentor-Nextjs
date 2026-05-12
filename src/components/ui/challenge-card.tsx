// * Imports ************************************************************************************ //
import type { Challenge } from "@/data/challenges-card";
import { difficultyLabels } from "@/data/challenges-card";

import { githubFeatureTreeUrl, resolveLivePreview } from "@/lib/challenge-external-urls";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// * Styles ************************************************************************************ //
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

const linkButtonClass = cn(
  "inline-flex w-full items-center justify-center rounded-lg border border-sky-400/35",
  "bg-sky-500/10 px-3 py-2.5 text-center text-sm font-semibold text-sky-100",
  "shadow-sm transition",
  "hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-white",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  "focus-visible:outline-sky-400",
);

// * Components ********************************************************************************* //
function PreviewHeader({ challenge }: { challenge: Challenge }) {
  if (!challenge.screenshotSrc) {
    return (
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
    );
  }

  const src = challenge.screenshotSrc;

  const image = (
    <Image
      src={src}
      alt={`Captura del reto: ${challenge.title}`}
      fill
      className="object-cover object-top"
      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
    />
  );

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/80">
      {challenge.implementationHref ? (
        <Link href={challenge.implementationHref} className="relative block h-full min-h-[10rem] w-full">
          {image}
        </Link>
      ) : (
        <span className="relative block h-full min-h-[10rem] w-full">{image}</span>
      )}
    </div>
  );
}

// * CardBody *********************************************************************************** //
export function CardBody({ challenge }: { challenge: Challenge }) {
  const live = resolveLivePreview(challenge);
  const githubUrl = challenge.sourceCodeUrl ?? githubFeatureTreeUrl(challenge.slug);
  const fmHref = challenge.fmSolutionUrl ?? challenge.fmChallengeUrl;
  const fmTitle =
    challenge.fmSolutionUrl || !challenge.fmChallengeUrl
      ? undefined
      : "Página del reto en Frontend Mentor (añade fmSolutionUrl cuando publiques tu solución)";
  const titleContent = (
    <span className="block text-base font-semibold tracking-tight text-slate-100">{challenge.title}</span>
  );

  return (
    <>
      <PreviewHeader challenge={challenge} />
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
            {challenge.implementationHref ? (
              <Link
                href={challenge.implementationHref}
                className={cn(
                  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  "focus-visible:outline-sky-400",
                )}
              >
                {titleContent}
              </Link>
            ) : (
              titleContent
            )}
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{challenge.shortDescription}</p>
            <span className="mt-2 block truncate font-mono text-xs font-medium text-sky-400/95">
              /{challenge.slug}/
            </span>
            <ul className="mt-3 flex list-none flex-wrap gap-1.5 [&>li]:m-0 [&>li]:p-0">
              {challenge.tags.map((tag) => (
                <li key={tag}>
                  <span
                    className={cn(
                      "inline-block rounded-md bg-white/5 px-2 py-0.5 text-[0.7rem] text-slate-400",
                      "ring-1 ring-white/10",
                    )}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {challenge.implementationHref ? (
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
          ) : null}
        </div>

        <div className={cn("flex flex-col gap-2 border-t border-white/10 pt-3 text-left")}>
          <p className="text-[0.65rem] font-semibold tracking-wide text-slate-500 uppercase">Enlaces</p>
          <ul className="flex list-none flex-col gap-2 [&>li]:m-0 [&>li]:p-0">
            {fmHref ? (
              <li>
                <a href={fmHref} target="_blank" rel="noopener noreferrer" className={linkButtonClass} title={fmTitle}>
                  Solución en FM
                </a>
              </li>
            ) : null}
            {live ? (
              <li>
                {live.external ? (
                  <a href={live.href} target="_blank" rel="noopener noreferrer" className={linkButtonClass}>
                    Vista previa en vivo
                  </a>
                ) : (
                  <Link href={live.href} className={linkButtonClass}>
                    Vista previa en vivo
                  </Link>
                )}
              </li>
            ) : null}
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkButtonClass}>
                Código en GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
