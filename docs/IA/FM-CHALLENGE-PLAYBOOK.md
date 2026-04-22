# Playbook: integrar un reto Frontend Mentor en este monorepo Next.js

**Ubicación:** [`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](FM-CHALLENGE-PLAYBOOK.md) · notas mínimas: [`docs/IA/note.yaml`](note.yaml)

---

## Propósito y alcance (léelo primero)

Este playbook sirve para que **no tengas que pensar en la estructura del repo**: carpetas, copia de assets, datos, registro en el índice y una **ruta interna accesible**.

**Por defecto**, cuando alguien dice «ejecuta el playbook» o «organiza el reto», el asistente debe limitarse a:

- **Organización y scaffolding** (lo que está en la **fase A** del checklist).
- **No** implementar el diseño completo del Frontend Mentor (maquetación fiel al JPG, estados hover, etc.) **salvo que el usuario lo pida de forma explícita** (p. ej. «implementa el reto», «maqueta según el diseño», «haz la solución completa»).

**Tú** implementas el reto en `src/features/{folder_name}/` usando el ZIP en la raíz como referencia (incluido su `index.html` como punto de partida en JSX). El asistente solo te deja el terreno listo y, si quieres, te ayuda en pasos concretos en otros mensajes.

Si el usuario **no** aclara el modo, asumir **solo fase A (organización)**.

---

## Entrada de datos

- [`note.yaml`](note.yaml) con lo mínimo (`folder_name`, opcional `difficulty`), o **el mismo contenido por chat**.
- El asistente **infiere metadatos** (§1.2) leyendo `/{folder_name}/` y **los muestra** para que puedas corregirlos antes de tocar `challenges-card.ts`.

Adjunta este playbook + `note.yaml` (o solo el playbook y tu mensaje) y pide **«organiza el reto»** o **«fase A del playbook»** si quieres evitar malentendidos.

---

## Tabla de contenidos

1. [Variables del reto](#1-variables-del-reto)
2. [De `index.html` a `page.tsx`](#2-de-indexhtml-a-pagetsx)
3. [Convenciones de carpetas](#3-convenciones-de-carpetas-no-cambiar-entre-retos)
4. [Extensión del código compartido](#4-extensión-del-código-compartido-índice-y-tarjetas)
5. [Checklist: fase A (organización) y fase B (opcional)](#5-checklist-fase-a-organización-y-fase-b-opcional)
6. [Qué no hacer](#6-qué-no-hacer-anti-mezcla)
7. [Git y la carpeta del ZIP](#7-git-y-la-carpeta-del-zip)
8. [Flujo rápido para el humano](#8-flujo-rápido-para-el-humano)
9. [Referencias en el repo](#referencias-en-el-repo)

---

## 1. Variables del reto

### 1.1 Archivo mínimo (`docs/IA/note.yaml`, opcional)

`folder_name` debe coincidir **exactamente** con la carpeta del challenge en la raíz del repositorio.

```yaml
folder_name: results-summary-component
difficulty: newbie # opcional; newbie | junior | intermediate | advanced | guru
```

**Equivalente por chat:** mismo YAML o «carpeta: `mi-reto`, dificultad: newbie».

**Regla:** si falta un dato, infiérelo del ZIP; si no es posible, default razonable (§1.2) y **comunícalo**.

### 1.2 Qué puede inferir la IA

| Campo | Origen (orden de preferencia) |
| --- | --- |
| `difficulty` | YAML/chat → README → **`newbie`** por defecto + aviso. |
| `slug` | Igual a `folder_name` (kebab-case); excepciones en YAML/chat. |
| `title` | `README.md`. |
| `shortDescription` | README (1–2 frases). |
| `tags` | Stack y foco del enunciado. |
| `fmUrl` | Enlaces en el README o búsqueda; si falla, placeholder + aviso. |
| `status` | `en-progreso` al organizar; `listo` solo si el usuario lo dice. |
| `previewGradient` | `docs/challenges/{folder_name}/style-guide.md` (si existe) o neutro. |
| `has_data_json` | Existe `/{folder_name}/data.json`. |
| `primary_font_note` | `docs/challenges/.../style-guide.md` / `/{folder_name}/assets/fonts/`. |

Antes de escribir en [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts), **mostrar** el bloque inferido al usuario.

### 1.3 Estructura esperada de la carpeta del ZIP

Suele parecerse a [`results-summary-component/`](../../results-summary-component/): `README.md`, `assets/`, a veces `data.json`, **`index.html`**, `AGENTS.md`, `CLAUDE.md`. Al organizar el reto en este repo, **`README-template.md` → `docs/challenges/{folder_name}/readme.md`**, y en la misma carpeta de docs van **`style-guide.md`**, **`preview.jpg`** y **`design/`** (JPGs de referencia), para no mezclarlos con código ni con `public/`.

### 1.4 Campos en TypeScript (`Challenge`)

Ver [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts): `slug`, `title`, `shortDescription`, `difficulty`, `tags`, `status`, `previewGradient`, `implementationHref?`.

**Convención:** `slug` ≈ `folder_name`. Sufijos tipo `-main`: renombrar o documentar en YAML/chat.

---

## 2. De `index.html` a `page.tsx`

Cada ZIP trae un `index.html` en `/{folder_name}/`. **No** se usa como entrada de Next; se **traduce** a un componente de página en la app.

| Parte del HTML | Dónde va en Next |
| --- | --- |
| `<title>`, `favicon`, descripción | Objeto por slug en [`_utils/metadata.ts`](../../src/app/challenges/[slug]/_utils/metadata.ts) (`challengeMetadata`); en [`page.tsx`](../../src/app/challenges/[slug]/page.tsx), `generateMetadata` lee ese mapa por `slug`. |
| Contenido de `<body>` (estructura y texto) | **`src/features/{folder_name}/page.tsx`** — export default del “screen” del reto. |
| Estilos globales del reto | Preferir colocal: `*.module.css`, Tailwind en el mismo árbol, o tokens bajo `src/features/{folder_name}/`. Evita ensuciar [`src/app/globals.css`](../../src/app/globals.css) salvo petición. |
| `<img src="./assets/...">` | Archivos en **`public/{folder_name}/...`** y rutas absolutas `/folder_name/...` en JSX. |

**Registro del slug:** la URL es `/challenges/{slug}` con `slug === folder_name`.

1. Añade una entrada en [`_utils/lazy-imports.ts`](../../src/app/challenges/[slug]/_utils/lazy-imports.ts): `challengePages[slug] = () => import("@/features/{folder_name}/page")` (import dinámico; un reto = un chunk).
2. Añade la misma clave en [`_utils/metadata.ts`](../../src/app/challenges/[slug]/_utils/metadata.ts) dentro de `challengeMetadata` (título, `icons` con favicon bajo `/folder_name/...`, `description` si aplica).
3. [`page.tsx`](../../src/app/challenges/[slug]/page.tsx) del segmento **no** debe acumular mapas: solo llama a los helpers / importa los registros y hace `notFound()` si el slug no existe.

---

## 3. Convenciones de carpetas (no cambiar entre retos)

| Rol | Ubicación |
| --- | --- |
| **Referencia** | `/{folder_name}/` en la raíz (ZIP descomprimido; **no** es código de la app). |
| **Docs del reto (plantilla, guía, previews, JPGs)** | `docs/challenges/{folder_name}/` — `readme.md` (ex-`README-template.md`), `style-guide.md`, `preview.jpg`, `design/`. |
| **Assets estáticos** | `public/{folder_name}/` ← copia de `/{folder_name}/assets/` (imágenes, fuentes servidas por URL, etc.). |
| **JSON / datos** | `src/features/{folder_name}/data.json` (o `.ts`) si existe en el ZIP; rutas públicas de iconos → `/{folder_name}/...`. |
| **Código UI del reto** | `src/features/{folder_name}/` — componentes, hooks, estilos, `page.tsx`. |
| **Imports dinámicos por slug** | [`src/app/challenges/[slug]/_utils/lazy-imports.ts`](../../src/app/challenges/[slug]/_utils/lazy-imports.ts) — mapa `challengePages`. |
| **Metadatos por slug** | [`src/app/challenges/[slug]/_utils/metadata.ts`](../../src/app/challenges/[slug]/_utils/metadata.ts) — mapa `challengeMetadata` (lo consume `generateMetadata` en `page.tsx`). |
| **Orquestación de la ruta** | [`src/app/challenges/[slug]/page.tsx`](../../src/app/challenges/[slug]/page.tsx) — `generateMetadata` + `default` que hace `await challengePages[slug]()` y renderiza el `default` del feature. |

### Fuentes

- `next/font/local` en `src/features/{folder_name}/` cuando toque; **no** cambiar [`src/app/layout.tsx`](../../src/app/layout.tsx) salvo petición explícita.

---

## 4. Extensión del código compartido (índice y tarjetas)

1. **`Challenge.implementationHref?`** — Rellenar cuando exista una página en `/challenges/{slug}` (aunque sea **solo un stub** de organización).
2. **`ChallengeCard`** — Con `implementationHref`, enlace principal interno + enlace secundario a `fmUrl` ([`src/components/challenge-card.tsx`](../../src/components/challenge-card.tsx)).
3. **Página dinámica** — `slug` validado contra `challengePages`; el UI sale del default export de `src/features/{folder_name}/page.tsx`.

---

## 5. Checklist: fase A (organización) y fase B (opcional)

### Fase A — Organización (por defecto)

El asistente ejecuta **solo** esto salvo instrucción contraria del usuario.

1. Comprobar `/{folder_name}/` en la raíz (§1.3). Leer [`note.yaml`](note.yaml) si existe.
2. **Documentación en `docs/challenges/{folder_name}/`:** si vienen en el ZIP, mover (o copiar y eliminar duplicados) `README-template.md` renombrado a **`readme.md`**, más **`style-guide.md`**, **`preview.jpg`** y la carpeta **`design/`**. Ajustar enlaces en `/{folder_name}/README.md` para que sigan siendo válidos.
3. Inferir metadatos (§1.2) y **mostrarlos** al usuario.
4. Revisar `docs/challenges/{folder_name}/style-guide.md` y el README del ZIP (`/{folder_name}/README.md`) para **resumir** requisitos (responsive, datos, bonus) en el mensaje; **no** implementarlos aún.
5. Crear `public/{folder_name}/` y copiar assets necesarios desde el ZIP; indicar omisiones.
6. Si hay `data.json` en el ZIP: copiar a `src/features/{folder_name}/data.json` y **ajustar rutas** de assets a `/{folder_name}/...` si hace falta.
7. **Opcional:** esqueleto `fonts.ts` (o comentario en README del folder del reto) si hay fuentes locales; no hace falta usarlos en UI todavía.
8. **Página del reto:** crear `src/features/{folder_name}/page.tsx` a partir de `index.html` (§2): mismo contenido en JSX; puede ser un **stub** con enlaces de referencia (ZIP, `docs/challenges/{folder_name}/design/`, `style-guide.md` allí, datos, `public/{folder_name}/`) **sin** sustituir la maquetación final.
9. **Registro App Router:** en [`_utils/lazy-imports.ts`](../../src/app/challenges/[slug]/_utils/lazy-imports.ts) añadir el loader del nuevo slug; en [`_utils/metadata.ts`](../../src/app/challenges/[slug]/_utils/metadata.ts) añadir `title` / `icons` / `description` coherentes con el HTML de referencia. No duplicar mapas en [`page.tsx`](../../src/app/challenges/[slug]/page.tsx). Comprobar `notFound()` para slugs no registrados (ya cubierto si solo se usan esos registros).
10. Actualizar [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts) con `implementationHref: "/challenges/{slug}"` (`slug` = `folder_name`).
11. Comprobar tipo `Challenge` y `ChallengeCard` (§4).

**Fin de la fase A.** El usuario abre `/challenges/{slug}` y ve el stub o la conversión mínima del HTML; desde ahí implementa en `src/features/{folder_name}/`.

### Fase B — Implementación del diseño (solo si el usuario lo pide)

Solo entonces el asistente puede maquetar y completar el reto según JPG en `docs/challenges/{folder_name}/design/` y `docs/challenges/{folder_name}/style-guide.md` (componentes, estilos, accesibilidad, datos dinámicos, etc.).

---

## 6. Qué no hacer (anti-mezcla)

- No volcar assets en `public/` sin subcarpeta **`{folder_name}/`** (un reto = un prefijo de URL claro).
- No mezclar código de dos retos en la misma carpeta bajo `src/features/`.
- No meter UI del reto ni componentes del feature dentro de `_utils/`; ahí solo registro de imports y metadatos (o helpers mínimos de eso).
- No reemplazar [`src/app/page.tsx`](../../src/app/page.tsx) con el HTML del ZIP.
- **En fase A:** no entregar una solución visual “terminada” como si el reto estuviera hecho; como mucho stub + rutas + datos copiados + conversión literal del `index.html` si ayuda a arrancar.

---

## 7. Git y la carpeta del ZIP

Versionar `/{folder_name}/` conviene para diseños y guías offline. `.gitignore` puntual solo si hace falta.

---

## 8. Flujo rápido para el humano

1. Descargar el ZIP y colocar la carpeta en la raíz del repo.
2. Rellenar [`note.yaml`](note.yaml) o escribir `folder_name` (y `difficulty`) en el chat.
3. Pedir **«organiza este reto con el playbook»** (fase A).
4. Abrir `/challenges/{slug}` y `src/features/{folder_name}/` y **implementar tú** el diseño (o pedir fase B).
5. Cuando quieras ayuda puntual (flex, JSON, fuentes), pregunta en mensajes aparte.

---

## Referencias en el repo

- [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts)
- [`src/components/challenge-card.tsx`](../../src/components/challenge-card.tsx)
- [`src/app/challenges/[slug]/page.tsx`](../../src/app/challenges/[slug]/page.tsx)
- [`src/app/challenges/[slug]/_utils/lazy-imports.ts`](../../src/app/challenges/[slug]/_utils/lazy-imports.ts)
- [`src/app/challenges/[slug]/_utils/metadata.ts`](../../src/app/challenges/[slug]/_utils/metadata.ts)
- [`src/app/layout.tsx`](../../src/app/layout.tsx)
- [`README.md`](../../README.md)
