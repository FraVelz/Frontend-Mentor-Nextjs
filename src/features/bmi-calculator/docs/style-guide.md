# Guía de estilo — Body Mass Index Calculator

Valores alineados con `style.css` del feature (@theme Tailwind v4).

## Layout

- **Breakpoints:** `tablet` 48rem (768px), `desktop` 90rem (1440px), como en el starter FM.

## Tipografía

- **Inter** vía `next/font/google` en `page.tsx` (variable `--font-bmi-inter`).
- Presets de texto en `style.css`: `text-preset-1` … `text-preset-7-regular` (tamaños, pesos y `letter-spacing` del diseño FM).

## Colores (tokens)

| Token | HEX | Uso |
| --- | --- | --- |
| `--color-var-grey-500` | `#5e6e85` | Texto principal / cuerpo |
| `--color-var-grey-300` | `#acc1de` | Texto secundario / placeholders |
| `--color-var-blue-100` | `#e1e7fe` | Fondos claros |
| `--color-var-blue-300` | `#b3d3f1` | Acentos suaves |
| `--color-var-blue-500` | `#345ff6` | Primario / CTAs |
| `--color-var-blue-900` | `#253347` | Fondos oscuros (hero, resultado) |

- Gradiente utilitario `.clr-gradient-1`: `linear-gradient(to right, #d6fcfe, #d6e6fe)` (cabeceras de sección tipo FM).

## Espaciado

- Escala `--spacing-var-*` en rem (desde `--spacing-var-100` 8px hasta `--spacing-var-1800` 144px).

## Assets

- Iconos y patrones SVG en [`../images/`](../images/); favicon FM en [`../images/favicon-32x32.png`](../images/favicon-32x32.png).
