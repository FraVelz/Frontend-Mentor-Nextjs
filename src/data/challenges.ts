export type Difficulty = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

export type ChallengeStatus = "ejemplo" | "en-progreso" | "listo";

export interface Challenge {
  slug: string;
  title: string;
  shortDescription: string;
  difficulty: Difficulty;
  /** Etiquetas tipo stack o foco (HTML, CSS, App Router, etc.) */
  tags: string[];
  /** Enlace al reto en frontendmentor.io (puede ser genérico de búsqueda si no tienes URL exacta) */
  fmUrl: string;
  status: ChallengeStatus;
  /** Gradiente CSS para la vista previa cuando no hay imagen */
  previewGradient: string;
}

/** Datos de muestra: sustituye o amplía cuando añadas rutas reales en la app. */
export const challenges: Challenge[] = [
  {
    slug: "qr-code-component",
    title: "QR code component",
    shortDescription: "Tarjeta con código QR y tipografía clara; ideal para practicar sombras y espaciado.",
    difficulty: "newbie",
    tags: ["HTML", "CSS"],
    fmUrl: "https://www.frontendmentor.io/challenges/qr-code-component-Iux_sIO_H",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #312e81 100%)",
  },
  {
    slug: "blog-preview-card",
    title: "Blog preview card",
    shortDescription: "Componente de vista previa con imagen, etiqueta y tipografía fluida.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Responsive"],
    fmUrl: "https://www.frontendmentor.io/challenges/blog-preview-card-ckJV7UC8F",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #14532d 0%, #022c22 45%, #134e4a 100%)",
  },
  {
    slug: "social-links-profile",
    title: "Social links profile",
    shortDescription: "Perfil compacto con enlaces; buen ejercicio de accesibilidad y estados hover.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "A11y"],
    fmUrl: "https://www.frontendmentor.io/challenges/social-links-profile-UG32O9s6mQ",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 50%, #0f172a 100%)",
  },
  {
    slug: "recipe-page",
    title: "Recipe page",
    shortDescription: "Página de receta con listas, tipografía dual y detalle en mobile.",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Tipografía"],
    fmUrl: "https://www.frontendmentor.io/challenges/recipe-page-KiTsD8vKM",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #78350f 0%, #431407 40%, #292524 100%)",
  },
  {
    slug: "product-preview-card",
    title: "Product preview card",
    shortDescription: "Layout producto con precio, descuento y variante responsive (mobile/desktop).",
    difficulty: "newbie",
    tags: ["HTML", "CSS", "Flexbox"],
    fmUrl: "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #134e4a 0%, #042f2e 50%, #0c4a6e 100%)",
  },
  {
    slug: "four-card-feature-section",
    title: "Four card feature section",
    shortDescription: "Grid de características con iconos y jerarquía visual.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "Grid"],
    fmUrl: "https://www.frontendmentor.io/challenges/four-card-feature-section-skK1ZQ4T6K",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #1c1917 0%, #44403c 45%, #0c0a09 100%)",
  },
  {
    slug: "testimonials-grid-section",
    title: "Testimonials grid section",
    shortDescription: "Grid tipo bento con testimonios y fondos diferenciados.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "Grid"],
    fmUrl: "https://www.frontendmentor.io/challenges/testimonials-grid-section-536Nb2j9mq",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 40%, #312e81 100%)",
  },
  {
    slug: "meet-landing-page",
    title: "Meet landing page",
    shortDescription: "Landing con hero, ilustraciones y secciones; salto a layout más complejo.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "Landing"],
    fmUrl: "https://www.frontendmentor.io/challenges/meet-landing-page-rbT62iIeD",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #0e7490 0%, #164e63 35%, #0f172a 100%)",
  },
  {
    slug: "article-preview-component",
    title: "Article preview component",
    shortDescription: "Preview de artículo con interacción de compartir y estados.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "JS"],
    fmUrl: "https://www.frontendmentor.io/challenges/article-preview-component-dYBNaY3Pq",
    status: "ejemplo",
    previewGradient: "linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
  },
];

export const difficultyLabels: Record<Difficulty, string> = {
  newbie: "Newbie",
  junior: "Junior",
  intermediate: "Intermediate",
  advanced: "Advanced",
  guru: "Guru",
};
