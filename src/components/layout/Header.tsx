import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinkClass = cn(
  "rounded-sm text-normal text-zinc-300 transition hover:text-sky-400",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
);

export function Header() {
  return (
    <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "rounded-sm text-lg font-semibold tracking-tight text-zinc-100 transition hover:text-sky-400",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
          )}
        >
          Frontend Mentor{" "}
          <span className="font-normal text-zinc-500">· Next.js</span>
        </Link>
        <nav
          aria-label="Principal"
          className="flex flex-wrap items-center gap-6"
        >
          <Link href="/" className={navLinkClass}>
            Retos
          </Link>
          <Link href="/start" className={navLinkClass}>
            Inicio
          </Link>
        </nav>
      </div>
    </header>
  );
}
