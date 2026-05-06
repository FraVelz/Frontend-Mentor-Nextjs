import type { StaticImageData } from "next/image";

/**
 * Convierte un import de imagen (Next `StaticImageData`) a string `src` para `<img>`.
 * Útil con tipos estrictos en el reto.
 */
export function imgSrc(asset: string | StaticImageData): string {
  return typeof asset === "string" ? asset : asset.src;
}
