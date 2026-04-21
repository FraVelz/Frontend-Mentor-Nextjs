/**
 * Configuración del hub en `/main`: enlaces y textos de cada track.
 * Sustituye `vanilla.href` por tu URL de GitHub Pages cuando la tengas.
 */
export type HubTrack = {
  title: string;
  description: string;
  /** URL absoluta (GitHub Pages, repo) o ruta interna (p. ej. `/`) */
  href: string;
  labelCta: string;
  imageSrc: string;
  imageAlt: string;
};

export const hubVanilla: HubTrack = {
  title: "Frontend Mentor (HTML, CSS, JS)",
  description:
    "Índice estático con un reto por carpeta: refuerza fundamentos, layout, accesibilidad y JavaScript en el navegador sin framework. Ideal para dominar la base antes de subir de nivel.",
  // TODO: cambia por tu GitHub Pages del repo vanilla, p. ej. https://fravelz.github.io/Frontend-Mentor/
  href: "https://github.com/FraVelz/Frontend-Mentor",
  labelCta: "Ver repositorio e índice",
  imageSrc: "/hub/vanilla-index.png",
  imageAlt: "Vista previa del índice de retos en el proyecto vanilla (HTML, CSS y JavaScript)",
};

export const hubNextjs: HubTrack = {
  title: "Frontend Mentor · Next.js",
  description:
    "La misma línea de desafíos en una app Next.js: índice enriquecido con dificultad y etiquetas, y espacio para migrar cada reto con App Router, componentes y un flujo más cercano al profesional.",
  href: "/",
  labelCta: "Ver índice de retos",
  imageSrc: "/hub/next-index.png",
  imageAlt: "Vista previa del índice de retos en la aplicación Next.js",
};

export const hubTracks: HubTrack[] = [hubVanilla, hubNextjs];
