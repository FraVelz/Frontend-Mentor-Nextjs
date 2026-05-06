/**
 * Base raw de GitHub bajo `public/` (rama `main`). Para OG/Twitter los crawlers
 * necesitan URL HTTPS absoluta accesible; `blob/main/...?raw=true` no es fiable para embeds.
 * Opcional: `NEXT_PUBLIC_OG_FALLBACK_RAW_BASE` sin barra final, p.ej.
 * `https://raw.githubusercontent.com/Org/repo/main/public`
 */
const DEFAULT_GITHUB_RAW_PUBLIC_BASE =
  "https://raw.githubusercontent.com/FraVelz/Frontend-Mentor-Nextjs/main/public";

/**
 * URL absoluta para `openGraph.images` / `twitter.images`.
 * Prioridad: `NEXT_PUBLIC_SITE_URL` + ruta bajo `public`; si no hay sitio, fallback raw GitHub.
 */
export function ogImageAbsoluteUrl(publicImagePath: string): string {
  const path = publicImagePath.startsWith("/")
    ? publicImagePath
    : `/${publicImagePath}`;
  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (site) {
    return `${site}${path}`;
  }
  const base =
    process.env.NEXT_PUBLIC_OG_FALLBACK_RAW_BASE?.replace(/\/$/, "") ??
    DEFAULT_GITHUB_RAW_PUBLIC_BASE;
  return `${base}${path}`;
}
