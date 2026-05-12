import type { HubTrack } from "@/data/hub";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

const cardShell = cn(
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]",
  "shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200",
  "hover:border-sky-400/35 hover:bg-white/[0.06]",
  "hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_16px_48px_rgba(0,0,0,0.35)]",
);

const focusRing = cn(
  "flex h-full flex-col rounded-2xl",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
);

export function HubCard({ track, imagePriority = false }: { track: HubTrack; imagePriority?: boolean }) {
  const body = (
    <>
      <div className="relative aspect-1200/750 w-full overflow-hidden bg-slate-900/80">
        <Image
          src={track.imageSrc}
          alt={track.imageAlt}
          fill
          className="object-cover object-top transition duration-300 group-hover:opacity-95"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={imagePriority}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h2 className="text-lg font-semibold tracking-tight text-slate-100 sm:text-xl">{track.title}</h2>
        <p className="flex-1 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]">{track.description}</p>

        <div className="pt-1">
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-lg bg-sky-500/20 px-4 py-2.5",
              "text-sm font-semibold text-sky-300",
              "ring-1 ring-sky-400/30 transition group-hover:bg-sky-500/30 group-hover:text-sky-200",
            )}
          >
            {track.labelCta}
          </span>
        </div>
      </div>
    </>
  );

  if (track.href.startsWith("/")) {
    return (
      <article className={cardShell}>
        <Link href={track.href} className={focusRing}>
          {body}
        </Link>
      </article>
    );
  }

  return (
    <article className={cardShell}>
      <a href={track.href} target="_blank" rel="noopener noreferrer" className={focusRing}>
        {body}
      </a>
    </article>
  );
}
