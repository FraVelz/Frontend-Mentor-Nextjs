import { cn } from "@/lib/utils";

type FmAttributionProps = {
  challengeUrl: string;
  challengeName: string;
  className?: string;
  /** Light for white challenge UIs; dark for navy boards. */
  variant?: "light" | "dark";
};

/**
 * Visible Frontend Mentor credit — required on every challenge page (DoD / L10-4).
 */
export function FmAttribution({ challengeUrl, challengeName, className, variant = "light" }: FmAttributionProps) {
  const dark = variant === "dark";

  return (
    <aside
      className={cn(
        "border-t px-4 py-3 text-center text-sm",
        dark ? "border-teal-900/40 bg-zinc-900 text-zinc-400" : "border-black/10 bg-zinc-50 text-zinc-600",
        className,
      )}
      aria-label="Atribución del diseño"
    >
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className={cn(
            "font-medium underline underline-offset-2",
            dark
              ? "text-teal-300 decoration-teal-300/30 hover:text-teal-200"
              : "text-sky-700 decoration-sky-700/30 hover:text-sky-900",
          )}
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/FraVelz"
          className={cn(
            "font-medium underline underline-offset-2",
            dark
              ? "text-teal-300 decoration-teal-300/30 hover:text-teal-200"
              : "text-sky-700 decoration-sky-700/30 hover:text-sky-900",
          )}
          rel="noopener noreferrer"
          target="_blank"
        >
          FraVelz
        </a>
        .
      </p>
      <p className={cn("mt-1 text-xs", dark ? "text-zinc-500" : "text-zinc-500")}>
        Design for{" "}
        <a
          href={challengeUrl}
          className={cn(
            "underline underline-offset-2",
            dark ? "decoration-zinc-500/50 hover:text-zinc-300" : "decoration-zinc-400/50 hover:text-zinc-700",
          )}
          rel="noopener noreferrer"
          target="_blank"
        >
          {challengeName}
        </a>{" "}
        — not an original product design.
      </p>
    </aside>
  );
}
