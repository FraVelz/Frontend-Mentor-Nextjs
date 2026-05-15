import type { Challenge } from "@/data/challenges-card";

/** Repo remoto (rama `main`). Cambia si el fork o la rama por defecto difieren. */
const GITHUB_REPO_TREE =
  "https://github.com/FraVelz/Frontend-Mentor-Nextjs/tree/main";

export function githubFeatureTreeUrl(slug: string): string {
  return `${GITHUB_REPO_TREE}/src/features/${slug}`;
}

/** URL absoluta del deploy + ruta del reto; útil si `NEXT_PUBLIC_SITE_URL` está definida. */
function deployedChallengeUrl(implementationHref: string): string | undefined {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!base) return undefined;

  return `${base}${implementationHref}`;
}

export type LivePreviewResolved = { href: string; external: boolean };

/** Vista previa en vivo: URL explícita, o deploy + slug, o ruta interna. */
export function resolveLivePreview(challenge: Challenge): LivePreviewResolved | null {
  const explicit = challenge.livePreviewUrl?.trim();

  if (explicit) {
    return { href: explicit, external: true };
  }

  const deployed =
    challenge.implementationHref &&
    deployedChallengeUrl(challenge.implementationHref);

  if (deployed) {
    return { href: deployed, external: true };
  }

  if (challenge.implementationHref) {
    return { href: challenge.implementationHref, external: false };
  }

  return null;
}
