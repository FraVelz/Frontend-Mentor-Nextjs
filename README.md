# Frontend Mentor · Next.js

[English version](README.en.md)

Monorepo para practicar varios retos de [Frontend Mentor](https://www.frontendmentor.io/) con **Next.js** (App Router), manteniendo cada challenge aislado (assets, código y rutas) para que no se mezclen recursos entre proyectos.

![Vista del hub Next.js](public/hub/next-index.png)

---

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Estructura del repo](#estructura-del-repo)
- [Añadir un nuevo reto (playbook)](#añadir-un-nuevo-reto-playbook)
- [Documentación](#documentación)
- [Contribución](#contribución)
- [Contacto](#contacto)

---

## Requisitos

- Node.js compatible con Next.js 16
- Gestor de paquetes: el repo usa **pnpm** (también puedes usar `npm` o `yarn` adaptando los comandos)

---

## Puesta en marcha

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para el índice de retos. El hub de entrada está en [`/start`](src/app/(with-layout)/start/page.tsx).

Otros comandos útiles: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm format`.

---

## Estructura del repo

| Ruta | Uso |
|------|-----|
| `src/app/` | Rutas y layout de la app (índice en `/`, hub en `/main`) |
| `src/components/` | Componentes compartidos (cabecera, tarjetas, etc.) |
| `src/data/` | Datos del índice (`challenges.ts`, `hub.ts`) |
| `src/features/{slug}/` | Código de cada reto: componentes, `page.tsx`, **`readme.md`**, material FM en **`docs/`** (`style-guide`, `design/`, `preview.jpg`), e **imágenes y SVG de la UI** en **`images/`** (vía `import`, no bajo `public/`) |
| `public/` | Estáticos globales (p. ej. `public/hub/`). Por reto, solo lo que requiera URL fija, p. ej. **`public/{slug}/fonts/`**; no volcar allí la galería o iconos de la maquetación (van en el feature) |
| `docs/IA/` | Playbook y `note.yaml` para integrar retos con asistente |
| `backups/` | Archivo **local** del ZIP original (ver [§7 del playbook](docs/IA/FM-CHALLENGE-PLAYBOOK.md#7-git-y-la-carpeta-del-zip)); está en `.gitignore` |
| `*/` en la raíz | Solo mientras integras: carpeta del ZIP; **después** conviene moverla a `backups/` |

---

## Añadir un nuevo reto (playbook)

1. Descomprime el challenge y coloca la carpeta en la **raíz del repo** (suele parecerse a `results-summary-component/`).
2. Lee la guía **[`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](docs/IA/FM-CHALLENGE-PLAYBOOK.md)**: convenciones de carpetas, checklist para el asistente y metadatos.
3. Opcional: rellena lo mínimo en [`docs/IA/note.yaml`](docs/IA/note.yaml) **o** pasa `folder_name` y `difficulty` por el chat; el resto puede inferirse del README del ZIP.
4. **Cuando la fase A esté hecha** (o tú mismo hayas copiado lo necesario a `src/features/{folder_name}/` — **`readme.md`**, **`docs/`** y **`images/`** para recursos gráficos —, y a `public/{folder_name}/` **solo** si aplica p. ej. fuentes u otros con URL fija), **mueve la carpeta del ZIP fuera de la raíz** a `backups/{folder_name}/` para no dejar duplicados en el repo. Detalle: [§7 del playbook](docs/IA/FM-CHALLENGE-PLAYBOOK.md#7-git-y-la-carpeta-del-zip).

El playbook describe `src/features/{slug}/`, registro en `src/app/(layout-null)/[slug]/_utils/` y actualización de [`src/data/challenges-card.ts`](src/data/challenges-card.ts). **Por defecto** el asistente solo **organiza** (assets, datos, stub, índice); la maquetación del reto la haces tú salvo que pidas explícitamente la «fase B» (implementación completa) en el playbook.

---

## Documentación

- Integración de retos: [`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](docs/IA/FM-CHALLENGE-PLAYBOOK.md)
- Notas mínimas por reto: [`docs/IA/note.yaml`](docs/IA/note.yaml)

---

## Contribución

1. Haz un fork del repositorio
2. Crea una rama para tu cambio (`git checkout -b feature/nombre-claro`)
3. Haz commit de tus cambios (`git commit -m 'Descripción breve'`)
4. Push a la rama (`git push origin feature/nombre-claro`)
5. Abre un Pull Request

---

## Contacto

Para sugerencias o reportes de bugs, abre un issue en el repositorio de GitHub.

---

**Desarrollo:** Fravelz
