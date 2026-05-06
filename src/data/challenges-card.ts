export type Difficulty = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

export type ChallengeStatus = "ejemplo" | "en-progreso" | "listo";

export interface Challenge {
  slug: string;
  title: string;
  shortDescription: string;
  difficulty: Difficulty;
  /** Etiquetas tipo stack o foco (HTML, CSS, App Router, etc.) */
  tags: string[];
  status: ChallengeStatus;
  /** Gradiente CSS para la vista previa cuando no hay captura */
  previewGradient: string;
  /** Ruta pública: archivo en `public/{slug}/screenshot.png` → `/${slug}/screenshot.png` */
  screenshotSrc?: string;
  /** Ruta interna cuando el reto está implementado en la app, p. ej. /{slug} */
  implementationHref?: string;
  /** Tu solución publicada en FM (si existe, se prioriza sobre la página del reto). */
  fmSolutionUrl?: string;
  /** Página del challenge en frontendmentor.io (enunciado). Usada para «Solución en FM» si no hay `fmSolutionUrl`. */
  fmChallengeUrl?: string;
  /** Deploy público (Vercel, etc.). Si se omite y existe `NEXT_PUBLIC_SITE_URL`, se construye con `implementationHref`. */
  livePreviewUrl?: string;
  /** Carpeta del feature en GitHub; por defecto `…/tree/main/src/features/{slug}`. */
  sourceCodeUrl?: string;
}

/** Datos de muestra: sustituye o amplía cuando añadas rutas reales en la app. */
export const challenges: Challenge[] = [
  {
    slug: "ecommerce-product-page",
    title: "E-commerce product page",
    shortDescription:
      "Página de producto con galería/lightbox, selector de cantidad, carrito y menú mobile; mobile y desktop 1440px.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "JS", "TailwindCSS", "React", "Next"],
    status: "listo",
    previewGradient:
      "linear-gradient(135deg, hsl(26, 100%, 55%) 0%, hsl(220, 13%, 13%) 50%, hsl(219, 9%, 45%) 100%)",
    screenshotSrc: "/ecommerce-product-page/screenshot.png",
    implementationHref: "/ecommerce-product-page",
    fmChallengeUrl: "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6",
  },
  

];

export const difficultyLabels: Record<Difficulty, string> = {
  newbie: "Newbie",
  junior: "Junior",
  intermediate: "Intermediate",
  advanced: "Advanced",
  guru: "Guru",
};

/*
{
    slug: "results-summary-component",
    title: "Results summary component",
    shortDescription:
      "Resumen de puntuación con gradiente, filas por categoría y datos desde JSON; layout responsive.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "JSON", "App Router"],
    status: "en-progreso",
    previewGradient:
      "linear-gradient(135deg, hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 100%)",
    implementationHref: "/results-summary-component",
  },
  {
    slug: "qr-code-component",
    title: "QR code component",
    shortDescription: "Tarjeta con código QR y tipografía clara; ideal para practicar sombras y espaciado.",
    difficulty: "newbie",
    tags: ["HTML", "CSS"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #312e81 100%)",
  },
  {
    slug: "blog-preview-card",
    title: "Blog preview card",
    shortDescription: "Componente de vista previa con imagen, etiqueta y tipografía fluida.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Responsive"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #14532d 0%, #022c22 45%, #134e4a 100%)",
  },
  {
    slug: "social-links-profile",
    title: "Social links profile",
    shortDescription: "Perfil compacto con enlaces; buen ejercicio de accesibilidad y estados hover.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "A11y"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 50%, #0f172a 100%)",
  },
  {
    slug: "recipe-page",
    title: "Recipe page",
    shortDescription: "Página de receta con listas, tipografía dual y detalle en mobile.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Tipografía"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #78350f 0%, #431407 40%, #292524 100%)",
  },
  {
    slug: "product-preview-card",
    title: "Product preview card",
    shortDescription: "Layout producto con precio, descuento y variante responsive (mobile/desktop).",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Flexbox"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #134e4a 0%, #042f2e 50%, #0c4a6e 100%)",
  },
  {
    slug: "four-card-feature-section",
    title: "Four card feature section",
    shortDescription: "Grid de características con iconos y jerarquía visual.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "Grid"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #1c1917 0%, #44403c 45%, #0c0a09 100%)",
  },
  {
    slug: "testimonials-grid-section",
    title: "Testimonials grid section",
    shortDescription: "Grid tipo bento con testimonios y fondos diferenciados.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "Grid"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 40%, #312e81 100%)",
  },
  {
    slug: "meet-landing-page",
    title: "Meet landing page",
    shortDescription: "Landing con hero, ilustraciones y secciones; salto a layout más complejo.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "Landing"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #0e7490 0%, #164e63 35%, #0f172a 100%)",
  },
  {
    slug: "article-preview-component",
    title: "Article preview component",
    shortDescription: "Preview de artículo con interacción de compartir y estados.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "JS"],
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
  },
*/