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

Abre [http://localhost:3000](http://localhost:3000) para el índice de retos. El hub de entrada está en [`/main`](src/app/main/page.tsx).

Otros comandos útiles: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm format`.

---

## Estructura del repo

| Ruta | Uso |
|------|-----|
| `src/app/` | Rutas y layout de la app (índice en `/`, hub en `/main`) |
| `src/components/` | Componentes compartidos (cabecera, tarjetas, etc.) |
| `src/data/` | Datos del índice (`challenges.ts`, `hub.ts`) |
| `public/` | Estáticos globales; por convención, assets por reto bajo `public/challenges/{slug}/` |
| `docs/IA/` | Playbook y `note.yaml` para integrar retos con asistente |
| `*/` en la raíz | Carpetas descargadas del ZIP de Frontend Mentor (referencia: diseños, `style-guide.md`, etc.) |

---

## Añadir un nuevo reto (playbook)

1. Descomprime el challenge y coloca la carpeta en la **raíz del repo** (suele parecerse a `results-summary-component/`).
2. Lee la guía **[`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](docs/IA/FM-CHALLENGE-PLAYBOOK.md)**: convenciones de carpetas, checklist para el asistente y metadatos.
3. Opcional: rellena lo mínimo en [`docs/IA/note.yaml`](docs/IA/note.yaml) **o** pasa `folder_name` y `difficulty` por el chat; el resto puede inferirse del README del ZIP.

El playbook describe rutas tipo `src/challenges/{slug}/`, páginas bajo `src/app/challenges/[slug]/` y actualización de `src/data/challenges.ts`. **Por defecto** el asistente solo **organiza** (assets, datos, stub, índice); la maquetación del reto la haces tú salvo que pidas explícitamente la «fase B» (implementación completa) en el playbook.

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
