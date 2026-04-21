import Link from "next/link";

const navLinkClass =
  "text-sm text-slate-300 transition hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded-sm";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/main"
          className="text-sm font-semibold tracking-tight text-slate-100 transition hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 rounded-sm"
        >
          Frontend Mentor <span className="font-normal text-slate-500">· Next.js</span>
        </Link>
        <nav aria-label="Principal" className="flex flex-wrap items-center gap-6">
          <Link href="/main" className={navLinkClass}>
            Inicio
          </Link>
          <Link href="/" className={navLinkClass}>
            Proyectos
          </Link>
        </nav>
      </div>
    </header>
  );
}
