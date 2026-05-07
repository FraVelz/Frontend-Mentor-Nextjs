# Guía de estilo — Tic Tac Toe Game

Valores alineados con `style.css` del feature y con el `index.css` del proyecto Vite de referencia.

## Layout

- Breakpoints: **tablet** desde `48rem` (768px), **desktop** `90rem`, definidos en `@theme` junto al resto del monorepo (`style.css`).

## Tipografía

- **Outfit** vía `next/font/google` en `page.tsx`.

## Colores (tokens)

| Nombre | HEX | Uso |
| --- | --- | --- |
| `neutral-950` | `#000000` | Overlay / scrim |
| `neutral-0` | `#ffffff` | (reservado FM) |
| `slate-900` | `#1a2a33` | Fondo de página |
| `slate-850` | `#21313b` | Hover en conmutador de marca |
| `slate-800` | `#1f3641` | Celdas, cabecera de turno |
| `slate-300` | `#a8bfc9` | Texto secundario, botón reinicio |
| `slate-100` | `#dbe8ed` | Hover reinicio |
| `amber-400` / `amber-300` | `#f2b137` / `#ffc860` | O, botones ámbar |
| `teal-400` / `teal-300` | `#31c3bd` / `#65e9e4` | X, modo 2 jugadores |

- Sombra inferior de bloques (tipo “inset”): `#10212a` en tablero y panel; `#6b8997` en botón reinicio; sombras de pulsación de botones `#cc8b13`, `#118c87` según componente.

## Iconos y assets

- SVG y favicon en [`../images/`](../images/) (logo, X/O, restart, etc.).
