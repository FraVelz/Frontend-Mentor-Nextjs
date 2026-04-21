import { cn } from "@/lib/utils";

const footerNavLinkClass = cn(
  "text-slate-300 transition hover:text-sky-400",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80 backdrop-blur-sm">
      <div
        className={cn(
          "mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:px-8",
          "lg:flex-row lg:items-start lg:justify-between lg:gap-10",
        )}
      >
        <div className="max-w-md">
          <p className="text-sm font-semibold text-slate-200">(FV) Fravelz</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Versión Next.js de la colección de retos. Pensada para practicar App
            Router, componentes react y despliegues más cercanos a un entorno
            profesional.
          </p>
        </div>

        <nav aria-label="Enlaces">
          <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Enlaces
          </p>
          <ul className="mt-3 flex list-none flex-col gap-2 text-sm [&>li]:m-0 [&>li]:p-0">
            <li>
              <a
                className={footerNavLinkClass}
                href="https://www.frontendmentor.io/profile/FraVelz"
                rel="noopener noreferrer"
                target="_blank"
              >
                Perfil en Frontend Mentor
              </a>
            </li>
            <li>
              <a
                className={footerNavLinkClass}
                href="https://github.com/FraVelz"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub — FraVelz
              </a>
            </li>
            <li>
              <a
                className={footerNavLinkClass}
                href="https://www.frontendmentor.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Frontend Mentor
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-xs text-slate-500">
          © {year} Fravelz ·{" "}
          <a
            className="text-sky-500/90 underline decoration-sky-500/30 underline-offset-2 hover:text-sky-400"
            href="https://www.frontendmentor.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </p>
      </div>
    </footer>
  );
}
