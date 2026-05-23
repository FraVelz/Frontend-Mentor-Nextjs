# Playbook: integrar un reto Frontend Mentor en este monorepo Next.js

**Comando Cursor:** este playbook es **`.cursor/commands/integrate-challenges.md`** (slash **`/integrate-challenges`**). Los datos del reto se pasan **por el mensaje** (no hay `note.yaml` ni otro fichero auxiliar en el repo).

---

## Propósito y alcance (léelo primero)

Este playbook sirve para que **no tengas que pensar en la estructura del repo**: carpetas, copia de assets, datos, registro en el índice y una **ruta interna accesible**.

**Por defecto**, cuando alguien dice «ejecuta el playbook» o «organiza el reto», el asistente debe limitarse a:

- **Organización y scaffolding** (lo que está en la **fase A** del checklist).
- **No** hacer **`git commit`** ni **`git push`** al cerrar la fase A: solo se está **configurando** el inicio del reto; el commit lo hace el humano cuando quiera (salvo que pida explícitamente «commit», «sube los cambios», etc.).
- **No** implementar el diseño completo del Frontend Mentor (maquetación fiel al JPG, estados hover, etc.) **salvo que el usuario lo pida de forma explícita** (p. ej. «implementa el reto», «maqueta según el diseño», «haz la solución completa»).

**Tú** implementas el reto en `src/features/{folder_name}/` usando el ZIP en la raíz como referencia (incluido su `index.html` como punto de partida en JSX). El asistente solo te deja el terreno listo y, si quieres, te ayuda en pasos concretos en otros mensajes.

Si el usuario **no** aclara el modo, asumir **solo fase A (organización)**.

---

## Entrada de datos

- En el chat: **nombre de carpeta del ZIP** (`folder_name`, kebab-case) y, si quieres, **`difficulty`**. Opcionalmente pega un bloque YAML/JSON con esos campos (es solo texto en el mensaje; no se guarda ningún archivo).
- El asistente **infiere metadatos** (§1.2) leyendo `/{folder_name}/` y **los muestra** para que puedas corregirlos antes de tocar `challenges-card.ts`.

Invoca **`/integrate-challenges`** (o adjunta este `.md`) y pide **«organiza el reto»** o **«fase A del playbook»** si quieres evitar malentendidos.

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

### 1.1 Datos mínimos (siempre por chat)

`folder_name` debe coincidir **exactamente** con la carpeta del challenge en la raíz del repositorio.

Ejemplo de lo que puedes **pegar en el mensaje** (no hace falta crear ningún archivo):

```yaml
folder_name: results-summary-component
difficulty: newbie # opcional; newbie | junior | intermediate | advanced | guru
```

**Equivalente:** «carpeta: `mi-reto`, dificultad: newbie» o solo el nombre de la carpeta si ya está en la raíz del repo.

**Regla:** si falta un dato, infiérelo del ZIP; si no es posible, default razonable (§1.2) y **comunícalo**.

### 1.2 Qué puede inferir la IA

| Campo | Origen (orden de preferencia) |
| --- | --- |
| `difficulty` | Mensaje/chat → README → **`newbie`** por defecto + aviso. |
| `slug` | Igual a `folder_name` (kebab-case); excepciones si las indicas en el chat. |
| `title` | `README.md`. |
| `shortDescription` | README (1–2 frases). |
| `tags` | Stack y foco del enunciado. |
| `fmUrl` | Enlaces en el README o búsqueda; si falla, placeholder + aviso. |
| `status` | `en-progreso` al organizar; `listo` solo si el usuario lo dice. |
| `previewGradient` | `src/features/{folder_name}/docs/style-guide.md` (si existe) o neutro. |
| `has_data_json` | Existe `data.json` (o equivalente) en el ZIP; en el repo puede vivir como `data.json` o `data.ts` bajo el feature. |
| `primary_font_note` | `src/features/.../docs/style-guide.md` / `/{folder_name}/assets/fonts/`. |

Antes de escribir en [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts), **mostrar** el bloque inferido al usuario.

### 1.3 Estructura esperada de la carpeta del ZIP

Suele parecerse a [`results-summary-component/`](../../results-summary-component/): `README.md`, `assets/`, a veces `data.json`, **`index.html`**, `AGENTS.md`, `CLAUDE.md`. Al organizar el reto en este repo, **`README-template.md` → `src/features/{folder_name}/readme.md`**, y el material de referencia FM (**`style-guide.md`**, **`preview.jpg`**, **`design/`**) va en **`src/features/{folder_name}/docs/`**, para no mezclarlo con código (`page.tsx`, componentes) ni con `public/`.

### 1.4 Campos en TypeScript (`Challenge`)

Ver [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts): `slug`, `title`, `shortDescription`, `difficulty`, `tags`, `status`, `previewGradient`, `implementationHref?`.

**Convención:** `slug` ≈ `folder_name`. Sufijos tipo `-main`: renombrar o documentar en el chat.

---

## 2. De `index.html` a `page.tsx`

Cada ZIP trae un `index.html` en `/{folder_name}/`. **No** se usa como entrada de Next; se **traduce** a un componente de página en la app.

| Parte del HTML | Dónde va en Next |
| --- | --- |
| `<title>`, `favicon`, descripción | Objeto por slug en [`_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) (`challengeMetadata`); en [`page.tsx`](../../src/app/(layout-null)/[slug]/page.tsx), `generateMetadata` lee ese mapa por `slug`. Favicon: **importar** el PNG desde `src/features/{folder_name}/images/` (misma carpeta que el resto de assets del reto) y usar p. ej. `icon: favicon.src` en `icons`. |
| Contenido de `<body>` (estructura y texto) | **`src/features/{folder_name}/page.tsx`** — export default del “screen” del reto. |
| Estilos globales del reto | Preferir colocal: `*.module.css`, Tailwind en el mismo árbol, o tokens bajo `src/features/{folder_name}/`. Evita ensuciar [`src/app/global.css`](../../src/app/global.css) salvo petición. |
| `<img src="./assets/...">` (fotos, ilustraciones, **SVG**) | Colocar archivos en **`src/features/{folder_name}/images/`** y referenciarlos con **`import`** en el componente (ruta publicada por el bundler). **No** volcar imágenes ni SVG de la UI en `public/`. (Fuentes u otros recursos que deban servirse con URL fija: `public/{folder_name}/` — p. ej. `fonts/`.) |

**Registro del slug (este monorepo):** la URL pública es `/{slug}` con `slug === folder_name` (ruta dinámica en [`(layout-null)/[slug]`](../../src/app/(layout-null)/[slug]/page.tsx)).

1. Añade una entrada en [`_utils/lazy-imports.ts`](../../src/app/(layout-null)/[slug]/_utils/lazy-imports.ts): `challengePages[slug] = () => import("@/features/{folder_name}/page")` (import dinámico; un reto = un chunk).
2. Añade la misma clave en [`_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) dentro de `challengeMetadata` (título, `icons` con favicon importado desde `@/features/{folder_name}/images/...`, `description` si aplica).
3. [`page.tsx`](../../src/app/(layout-null)/[slug]/page.tsx) del segmento **no** debe acumular mapas: solo llama a los helpers / importa los registros y hace `notFound()` si el slug no existe.

---

## 3. Convenciones de carpetas (no cambiar entre retos)

| Rol | Ubicación |
| --- | --- |
| **Referencia (ZIP original)** | Al descargar: `/{folder_name}/` en la raíz. **Tras la fase A,** ver [§7](#7-git-y-la-carpeta-del-zip): mover a `backups/{folder_name}/` (recomendado; **no** es código de la app). |
| **Docs del reto (plantilla, guía, previews, JPGs)** | **`src/features/{folder_name}/readme.md`** (ex-`README-template.md`) y **`src/features/{folder_name}/docs/`** — `style-guide.md`, `preview.jpg`, `design/`. |
| **Imágenes y SVG (UI del reto)** | **`src/features/{folder_name}/images/`** — copia desde `/{folder_name}/assets/` (o equivalente). Uso: `import` en componentes. |
| **`screenshot.png` (hub / redes, al cerrar el reto)** | `public/{folder_name}/screenshot.png` — ver [**close-challenge** §2](close-challenge.md#2-captura-para-tarjeta-del-índice-seo-y-convención-publicfolder_name). No sustituye a `images/` del feature. |
| **Fuentes y otros en `public/` (opcional)** | `public/{folder_name}/` también para lo que deba servirse con URL fija bajo el prefijo (p. ej. **`fonts/`**). **No** mezclar aquí imágenes ni SVG de la maquetación del **UI** del reto. |
| **JSON / datos** | `src/features/{folder_name}/data.json` o **`data.ts`** si conviene: para iconos/rutas a assets, preferir **imports** desde `./images/...` en TypeScript (evita depender de `public/`). |
| **Código UI del reto** | `src/features/{folder_name}/` — componentes, hooks, estilos, `page.tsx`. |
| **Imports dinámicos por slug** | [`src/app/(layout-null)/[slug]/_utils/lazy-imports.ts`](../../src/app/(layout-null)/[slug]/_utils/lazy-imports.ts) — mapa `challengePages`. |
| **Metadatos por slug** | [`src/app/(layout-null)/[slug]/_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) — mapa `challengeMetadata` (lo consume `generateMetadata` en `page.tsx`). |
| **Orquestación de la ruta** | [`src/app/(layout-null)/[slug]/page.tsx`](../../src/app/(layout-null)/[slug]/page.tsx) — `generateMetadata` + `default` que hace `await challengePages[slug]()` y renderiza el `default` del feature. |

### Fuentes

- `next/font/local` en `src/features/{folder_name}/` cuando toque; **no** cambiar [`src/app/layout.tsx`](../../src/app/layout.tsx) salvo petición explícita.

---

## 4. Extensión del código compartido (índice y tarjetas)

1. **`Challenge.implementationHref?`** — Rellenar cuando exista una página en `/{slug}` (aunque sea **solo un stub** de organización).
2. **`ChallengeCard`** — Con `implementationHref`, enlace principal a la ruta interna ([`src/components/ui/challenge-card.tsx`](../../src/components/ui/challenge-card.tsx)).
3. **Página dinámica** — `slug` validado contra `challengePages`; el UI sale del default export de `src/features/{folder_name}/page.tsx`.

---

## 5. Checklist: fase A (organización) y fase B (opcional)

### Fase A — Organización (por defecto)

El asistente ejecuta **solo** esto salvo instrucción contraria del usuario.

1. Comprobar `/{folder_name}/` en la raíz (§1.3) y que coincide con lo indicado en el chat (§1.1).
2. **Documentación en el feature:** si vienen en el ZIP, mover (o copiar y eliminar duplicados) `README-template.md` como **`src/features/{folder_name}/readme.md`**, y **`style-guide.md`**, **`preview.jpg`** y la carpeta **`design/`** bajo **`src/features/{folder_name}/docs/`**. Ajustar enlaces en `/{folder_name}/README.md` (ZIP) y en `readme.md` del feature (`./docs/...`) para que sigan siendo válidos.
3. Inferir metadatos (§1.2) y **mostrarlos** al usuario.
4. Revisar `src/features/{folder_name}/docs/style-guide.md` y el README del ZIP (`/{folder_name}/README.md`) para **resumir** requisitos (responsive, datos, bonus) en el mensaje; **no** implementarlos aún.
5. Crear **`src/features/{folder_name}/images/`** y copiar **imágenes y SVG** del ZIP; **no** poner esos archivos en `public/`. Si hace falta, crear **`public/{folder_name}/fonts/`** (u otra subcarpeta) solo para fuentes u otros recursos con URL fija; indicar omisiones.
6. Si hay `data.json` en el ZIP: copiar a `src/features/{folder_name}/` y, si los datos apuntan a iconos, convertir a **`data.ts`** con `import` desde `./images/...` (o ajustar referencias) para no depender de `public/`.
7. **Opcional:** esqueleto `fonts.ts` (o comentario en README del folder del reto) si hay fuentes locales; no hace falta usarlos en UI todavía.
8. **Página del reto:** crear `src/features/{folder_name}/page.tsx` a partir de `index.html` (§2): mismo contenido en JSX; puede ser un **stub** con enlaces de referencia (ZIP, `src/features/{folder_name}/docs/design/`, `src/features/{folder_name}/docs/style-guide.md`, datos, `src/features/{folder_name}/images/`, `public/{folder_name}/` solo si aplica p. ej. fuentes) **sin** sustituir la maquetación final.
9. **Registro App Router:** en [`_utils/lazy-imports.ts`](../../src/app/(layout-null)/[slug]/_utils/lazy-imports.ts) añadir el loader del nuevo slug; en [`_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) añadir `title` / `icons` / `description` coherentes con el HTML de referencia. No duplicar mapas en [`page.tsx`](../../src/app/(layout-null)/[slug]/page.tsx). Comprobar `notFound()` para slugs no registrados (ya cubierto si solo se usan esos registros).
10. Actualizar [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts) con `implementationHref: "/{slug}"` (`slug` = `folder_name`, misma ruta pública).
11. Comprobar tipo `Challenge` y `ChallengeCard` (§4).
12. **Carpeta del ZIP (recomendado en este monorepo):** mover `/{folder_name}/` a **`backups/{folder_name}/`** para dejar la raíz limpia. Ver [§7](#7-git-y-la-carpeta-del-zip). Si el asistente no puede (permisos, carpeta ya movida, etc.), indicarlo al usuario.

**Fin de la fase A.** El usuario abre `/{slug}` y ve el stub o la conversión mínima del HTML; desde ahí implementa en `src/features/{folder_name}/`.

**Commit / push:** no forman parte de la fase A por defecto (ver arriba). Para versionar el trabajo recién organizado, usa tu propio flujo (`git status`, `git add`, mensaje con Conventional Commits) cuando te convenga; el cierre completo con documentación y remoto va en [**close-challenge**](close-challenge.md).

### Fase B — Implementación del diseño (solo si el usuario lo pide)

Solo entonces el asistente puede maquetar y completar el reto según JPG en `src/features/{folder_name}/docs/design/` y `src/features/{folder_name}/docs/style-guide.md` (componentes, estilos, accesibilidad, datos dinámicos, etc.).

---

## 6. Qué no hacer (anti-mezcla)

- No colocar **imágenes ni SVG** del UI del reto en `public/`: van en **`src/features/{folder_name}/images/`**. En `public/{folder_name}/` solo subcarpetas que lo requieran (p. ej. `fonts/`) y, al publicar la solución, **`screenshot.png`** para el índice y metadatos (ver [**close-challenge** §2](close-challenge.md#2-captura-para-tarjeta-del-índice-seo-y-convención-publicfolder_name)); nunca la galería de imágenes del feature mezclada sin convención.
- No mezclar código de dos retos en la misma carpeta bajo `src/features/`.
- No meter UI del reto ni componentes del feature dentro de `_utils/`; ahí solo registro de imports y metadatos (o helpers mínimos de eso).
- No reemplazar [`src/app/page.tsx`](../../src/app/page.tsx) con el HTML del ZIP.
- **En fase A:** no entregar una solución visual “terminada” como si el reto estuviera hecho; como mucho stub + rutas + datos copiados + conversión literal del `index.html` si ayuda a arrancar.
- **En fase A (playbook por defecto):** no ejecutar **`git commit`** ni **`git push`** automáticamente; el asistente no debe “anunciar” el reto en Git al solo organizarlo.

---

## 7. Git y la carpeta del ZIP

Lo habitual al **solo** ejecutar este playbook (fase A) es **no** crear commit ni push; cúmplese lo indicado al inicio de la **§5** (fase A) y en la **§6**. El flujo de commit con mensajes convencionales y subida al remoto corresponde a [**close-challenge**](close-challenge.md) cuando cierres el reto, o a tu criterio si versionas el scaffolding antes.

En este repositorio, **`backups/`** está en [`.gitignore`](../../.gitignore): no se sube a Git. Sirve para **guardar en local** la carpeta del ZIP **después** de completar la fase A, sin dejar un duplicado en la raíz.

**Recomendación:** cuando ya estén copiados `src/features/{folder_name}/readme.md`, `src/features/{folder_name}/docs/`, `src/features/{folder_name}/images/`, y —solo si aplica— `public/{folder_name}/` (p. ej. fuentes) junto con el código bajo `src/features/{folder_name}/`:

```bash
mkdir -p backups
mv "{folder_name}" "backups/{folder_name}"
```

- **Así** la referencia “oficial” en el repo es la documentación junto al feature (`readme.md` + `docs/`) + imágenes/SVG de la UI bajo `src/features/{folder_name}/images/` (versionables) + `public/{folder_name}/` solo si hay fuentes u otros no gráficos, y tú sigues pudiendo abrir el ZIP completo bajo `backups/…` sin ensuciar la raíz.
- Si quieres **versionar** el directorio del ZIP en Git, deja `/{folder_name}/` en la raíz (o quita `backups/` del `.gitignore` solo si tu equipo acuerda otra política; puede subir el tamaño del repo).

---

## 8. Flujo rápido para el humano

1. Descargar el ZIP y colocar la carpeta en la raíz del repo.
2. Escribir en el chat `folder_name` (y opcionalmente `difficulty`) o pegar el bloque de ejemplo del §1.1 — **recordatorio:** gráficos de la UI en `src/features/{folder_name}/images/`; `public/{folder_name}/` solo p. ej. para fuentes u otros con URL fija.
3. Pedir **«organiza este reto con el playbook»** (fase A).
4. **Mover** la carpeta del ZIP a `backups/{folder_name}/` (o pedir al asistente que lo haga) una vez hechos los copiados; ver [§7](#7-git-y-la-carpeta-del-zip).
5. Abrir `/{slug}` y `src/features/{folder_name}/` y **implementar tú** el diseño (o pedir fase B).
6. Cuando quieras ayuda puntual (flex, JSON, fuentes), pregunta en mensajes aparte.

---

## Referencias en el repo

- [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts)
- [`src/components/ui/challenge-card.tsx`](../../src/components/ui/challenge-card.tsx)
- [`src/app/(layout-null)/[slug]/page.tsx`](../../src/app/(layout-null)/[slug]/page.tsx)
- [`src/app/(layout-null)/[slug]/_utils/lazy-imports.ts`](../../src/app/(layout-null)/[slug]/_utils/lazy-imports.ts)
- [`src/app/(layout-null)/[slug]/_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts)
- [`src/lib/og-image-url.ts`](../../src/lib/og-image-url.ts) — URLs absolutas OG/Twitter para capturas bajo `public/`
- [`src/app/layout.tsx`](../../src/app/layout.tsx)
- [`README.md`](../../README.md)
