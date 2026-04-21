import Link from "next/link";

export default function MainInfoPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
          Documentación breve
        </p>
        <h1 className="mb-4 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Sobre estos repositorios
        </h1>
        <p className="text-base leading-relaxed text-slate-400">
          Aquí se resume qué es{" "}
          <a
            href="https://www.frontendmentor.io/"
            className="text-sky-400 underline decoration-sky-400/35 underline-offset-2 hover:text-sky-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          , qué contiene cada carpeta del curso y por qué conviven un repo «vanilla» y otro en Next.js.
        </p>
      </header>

      <div className="flex flex-col gap-10 text-sm leading-relaxed text-slate-400">
        <section aria-labelledby="what-is-fm">
          <h2 id="what-is-fm" className="mb-3 text-lg font-semibold text-slate-100">
            Qué es Frontend Mentor
          </h2>
          <p>
            Es una plataforma de retos front-end con diseños y assets listos: implementas maquetas
            reales, comparas con la comunidad y subes tu solución. Cada reto suele indicar nivel de
            dificultad (por ejemplo Newbie, Junior o Intermediate), lo que ayuda a planificar el
            aprendizaje.
          </p>
        </section>

        <section aria-labelledby="repos">
          <h2 id="repos" className="mb-3 text-lg font-semibold text-slate-100">
            Los dos repositorios en este curso
          </h2>
          <ul className="list-none space-y-4 [&>li]:m-0 [&>li]:p-0">
            <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <h3 className="text-base font-semibold text-slate-100">frontend-mentor (vanilla)</h3>
              <p className="mt-2">
                Un proyecto por carpeta con <strong className="font-medium text-slate-300">HTML, CSS y JavaScript</strong>{" "}
                donde tocas el metal: layout, cascada, accesibilidad y JS del navegador sin capa de
                framework. El <code className="font-mono text-xs text-sky-300">index.html</code> en la raíz
                actúa como índice para abrir cada reto (por ejemplo en GitHub Pages).
              </p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <h3 className="text-base font-semibold text-slate-100">frontend-mentor-nextjs</h3>
              <p className="mt-2">
                Misma familia de retos, pero el índice y las futuras soluciones viven en{" "}
                <strong className="font-medium text-slate-300">Next.js</strong> (App Router, componentes
                React, datos tipados). Está pensado para reforzar un stack más habitual en equipos
                profesionales: rutas, composición de UI, build, pruebas y despliegue.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="why-next">
          <h2 id="why-next" className="mb-3 text-lg font-semibold text-slate-100">
            Por qué existe la versión Next.js
          </h2>
          <p>
            El HTML estático es insustituible para dominar fundamentos. Next añade práctica en{" "}
            <strong className="font-medium text-slate-300">arquitectura front</strong>: páginas y layouts,
            reutilización de componentes, optimización de fuentes e imágenes, y flujos de integración
            continua. No sustituye al repo vanilla; lo complementa cuando quieras acercarte a cómo se
            entregan productos en muchas empresas.
          </p>
        </section>

        <section aria-labelledby="routes">
          <h2 id="routes" className="mb-3 text-lg font-semibold text-slate-100">
            Rutas en esta app
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-slate-600">
            <li>
              <Link href="/" className="text-sky-400 hover:text-sky-300">
                /
              </Link>{" "}
              — Índice de proyectos con tarjetas enriquecidas (dificultad, etiquetas, enlace al reto).
            </li>
            <li>
              <Link href="/main" className="text-sky-400 hover:text-sky-300">
                /main
              </Link>{" "}
              — Esta página: contexto de los repos y de Frontend Mentor.
            </li>
          </ul>
        </section>

        <p className="text-slate-500">
          <Link
            href="/"
            className="font-medium text-sky-400 underline decoration-sky-400/35 underline-offset-2 hover:text-sky-300"
          >
            ← Volver al índice de proyectos
          </Link>
        </p>
      </div>
    </main>
  );
}
