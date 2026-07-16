export type Difficulty = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

type ChallengeStatus = "ejemplo" | "en-progreso" | "listo";

/** Craft tier: only set `gold` when DoD in docs/DOD-template.md is green. */
export type CraftTier = "gold";

export interface Challenge {
  slug: string;
  title: string;
  shortDescription: string;
  difficulty: Difficulty;
  /** Etiquetas tipo stack o foco (HTML, CSS, App Router, etc.) */
  tags: string[];
  status: ChallengeStatus;
  /** Presentable as interview craft sample — requires DoD (pixel + a11y ≥90 + test). */
  craftTier?: CraftTier;
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

/**
 * Hub metadata — badges must match reality.
 * `listo` + `craftTier: "gold"` only after DoD (see docs/DOD-template.md).
 */
export const challenges: Challenge[] = [
  {
    slug: "bmi-calculator",
    title: "Body Mass Index Calculator",
    shortDescription:
      "Calculadora IMC con métrico/imperial, clasificación y rango de peso saludable; layout responsive.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "JS", "React", "Next", "TailwindCSS"],
    status: "listo",
    craftTier: "gold",
    previewGradient:
      "linear-gradient(135deg, hsl(215, 100%, 93%) 0%, hsl(216, 100%, 97%) 50%, hsl(177, 61%, 87%) 100%)",
    screenshotSrc: "/bmi-calculator/screenshot.png",
    implementationHref: "/bmi-calculator",
    fmChallengeUrl: "https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T",
  },
  {
    slug: "tic-tac-toe-game",
    title: "Tic Tac Toe game",
    shortDescription: "Tres en raya FM: menú, vs CPU o dos jugadores, marcador y modales; Outfit y layout responsive.",
    difficulty: "junior",
    tags: ["HTML", "CSS", "JS", "React", "Next", "TailwindCSS"],
    status: "listo",
    craftTier: "gold",
    previewGradient: "linear-gradient(145deg, hsl(200, 42%, 21%) 0%, hsl(188, 61%, 53%) 55%, hsl(40, 93%, 61%) 100%)",
    screenshotSrc: "/tic-tac-toe-game/screenshot.png",
    implementationHref: "/tic-tac-toe-game",
    fmChallengeUrl: "https://www.frontendmentor.io/challenges/tic-tac-toe-game-re7zf_e2v",
  },
  {
    slug: "ecommerce-product-page",
    title: "E-commerce product page",
    shortDescription:
      "Página de producto con galería/lightbox, selector de cantidad, carrito y menú mobile; aún sin DoD gold.",
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "JS", "TailwindCSS", "React", "Next"],
    status: "en-progreso",
    previewGradient: "linear-gradient(135deg, hsl(26, 100%, 55%) 0%, hsl(220, 13%, 13%) 50%, hsl(219, 9%, 45%) 100%)",
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

const statusRank: Record<ChallengeStatus, number> = {
  listo: 0,
  "en-progreso": 1,
  ejemplo: 2,
};

/** Gold first, then listo, in-progress, ejemplo; stable by title. */
export function sortChallengesForHub(list: Challenge[]): Challenge[] {
  return [...list].sort((a, b) => {
    const goldA = a.craftTier === "gold" ? 0 : 1;
    const goldB = b.craftTier === "gold" ? 0 : 1;
    if (goldA !== goldB) return goldA - goldB;
    if (statusRank[a.status] !== statusRank[b.status]) return statusRank[a.status] - statusRank[b.status];
    return a.title.localeCompare(b.title);
  });
}
