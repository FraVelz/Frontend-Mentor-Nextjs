# Playbook: integrar un reto Frontend Mentor en este monorepo Next.js

**Ubicación:** [`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](FM-CHALLENGE-PLAYBOOK.md) · notas mínimas: [`docs/IA/note.yaml`](note.yaml)

---

## Propósito y alcance (léelo primero)

Este playbook sirve para que **no tengas que pensar en la estructura del repo**: carpetas, copia de assets, datos, registro en el índice y una **ruta interna accesible**.

**Por defecto**, cuando alguien dice «ejecuta el playbook» o «organiza el reto», el asistente debe limitarse a:

- **Organización y scaffolding** (lo que está en la **fase A** del checklist).
- **No** implementar el diseño completo del Frontend Mentor (maquetación fiel al JPG, estados hover, etc.) **salvo que el usuario lo pida de forma explícita** (p. ej. «implementa el reto», «maqueta según el diseño», «haz la solución completa»).

**Tú** codificas el reto en `src/challenges/{slug}/` usando el ZIP en la raíz como referencia. El asistente solo te deja el terreno listo y, si quieres, te ayuda en pasos concretos en otros mensajes.

Si el usuario **no** aclara el modo, asumir **solo fase A (organización)**.

---

## Entrada de datos

- [`note.yaml`](note.yaml) con lo mínimo (`folder_name`, opcional `difficulty`), o **el mismo contenido por chat**.
- El asistente **infiere metadatos** (§1.2) leyendo `/{folder_name}/` y **los muestra** para que puedas corregirlos antes de tocar `challenges.ts`.

Adjunta este playbook + `note.yaml` (o solo el playbook y tu mensaje) y pide **«organiza el reto»** o **«fase A del playbook»** si quieres evitar malentendidos.

---

## Tabla de contenidos

1. [Variables del reto](#1-variables-del-reto)
2. [Convenciones de carpetas](#2-convenciones-de-carpetas-no-cambiar-entre-retos)
3. [Extensión del código compartido](#3-extensión-del-código-compartido-índice-y-tarjetas)
4. [Checklist: fase A (organización) y fase B (opcional)](#4-checklist-fase-a-organización-y-fase-b-opcional)
5. [Qué no hacer](#5-qué-no-hacer-anti-mezcla)
6. [Git y la carpeta del ZIP](#6-git-y-la-carpeta-del-zip)
7. [Flujo rápido para el humano](#7-flujo-rápido-para-el-humano)
8. [Referencias en el repo](#referencias-en-el-repo)

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
| `previewGradient` | `style-guide.md` o neutro. |
| `has_data_json` | Existe `/{folder_name}/data.json`. |
| `primary_font_note` | `style-guide.md` / `assets/fonts/`. |

Antes de escribir en [`src/data/challenges.ts`](../../src/data/challenges.ts), **mostrar** el bloque inferido al usuario.

### 1.3 Estructura esperada de la carpeta del ZIP

Suele parecerse a [`results-summary-component/`](../../results-summary-component/): `README.md`, `style-guide.md`, `preview.jpg`, `design/`, `assets/`, a veces `data.json`, `index.html`, `AGENTS.md`, `CLAUDE.md`.

### 1.4 Campos en TypeScript (`Challenge`)

Ver [`src/data/challenges.ts`](../../src/data/challenges.ts): `slug`, `title`, `shortDescription`, `difficulty`, `tags`, `fmUrl`, `status`, `previewGradient`, `implementationHref?`.

**Convención:** `slug` ≈ `folder_name`. Sufijos tipo `-main`: renombrar o documentar en YAML/chat.

---

## 2. Convenciones de carpetas (no cambiar entre retos)

| Rol | Ubicación |
| --- | --- |
| **Referencia** | `/{folder_name}/` en la raíz (no usar su `index.html` como home de Next). |
| **Assets** | `public/challenges/{slug}/` ← copia de `{folder_name}/assets/`. |
| **JSON** | `src/challenges/{slug}/data.json` si existe en el ZIP (ajustar rutas de `icon` a URLs bajo `/challenges/{slug}/...` si aplica). |
| **Código** | `src/challenges/{slug}/` — aquí trabaja **el humano** (y el asistente solo si piden implementación). |
| **Ruta** | `src/app/challenges/[slug]/page.tsx` + registro de slugs con implementación (stub o completo). |

### Fuentes

- `next/font/local` en `src/challenges/{slug}/` cuando toque; **no** cambiar [`src/app/layout.tsx`](../../src/app/layout.tsx) salvo petición explícita.

---

## 3. Extensión del código compartido (índice y tarjetas)

1. **`Challenge.implementationHref?`** — Rellenar cuando exista una página en `/challenges/{slug}` (aunque sea **solo un stub** de organización).
2. **`ChallengeCard`** — Con `implementationHref`, enlace principal interno + enlace secundario a `fmUrl` ([`src/components/challenge-card.tsx`](../../src/components/challenge-card.tsx)).
3. **Página dinámica** — Validar `slug` y renderizar el componente exportado por `src/challenges/{slug}/` (stub o solución).

---

## 4. Checklist: fase A (organización) y fase B (opcional)

### Fase A — Organización (por defecto)

El asistente ejecuta **solo** esto salvo instrucción contraria del usuario.

1. Comprobar `/{folder_name}/` en la raíz (§1.3). Leer [`note.yaml`](note.yaml) si existe.
2. Inferir metadatos (§1.2) y **mostrarlos** al usuario.
3. Revisar `style-guide.md` y README para **resumir** requisitos (responsive, datos, bonus) en el mensaje; **no** implementarlos aún.
4. Crear `public/challenges/{slug}/` y copiar assets necesarios; indicar omisiones.
5. Si hay `data.json` en el ZIP: copiar a `src/challenges/{slug}/data.json` y **ajustar rutas** de assets a `/challenges/{slug}/...` si hace falta.
6. **Opcional:** esqueleto `fonts.ts` (o comentario en README del folder del reto) si hay fuentes locales; no hace falta usarlos en UI todavía.
7. **Stub de página del reto:** en `src/challenges/{slug}/`, un único componente exportado (p. ej. `{slug}-screen.tsx` o nombre claro) que:
   - Muestre el **título del reto** y **enlaces de referencia** (rutas en el repo: carpeta del ZIP, `design/`, `style-guide.md`, `data.json`, `public/...`).
   - **No** sustituya el trabajo de maquetación del usuario.
8. Registrar el componente en el mapa / imports de [`src/app/challenges/[slug]/page.tsx`](../../src/app/challenges/[slug]/page.tsx) y asegurar `notFound()` para slugs no registrados.
9. Actualizar [`src/data/challenges.ts`](../../src/data/challenges.ts) con la entrada y `implementationHref: "/challenges/{slug}"`.
10. Comprobar tipo `Challenge` y `ChallengeCard` (§3).

**Fin de la fase A.** El usuario abre `/challenges/{slug}` y ve el stub; desde ahí implementa.

### Fase B — Implementación del diseño (solo si el usuario lo pide)

Solo entonces el asistente puede maquetar y completar el reto según JPG / `style-guide.md` (componentes, estilos, accesibilidad, datos dinámicos, etc.).

---

## 5. Qué no hacer (anti-mezcla)

- No volcar assets en `public/` sin `challenges/{slug}/`.
- No mezclar código de dos retos en la misma carpeta.
- No reemplazar [`src/app/page.tsx`](../../src/app/page.tsx) con el HTML del ZIP.
- **En fase A:** no entregar una solución visual “terminada” como si el reto estuviera hecho; como mucho stub + rutas + datos copiados.

---

## 6. Git y la carpeta del ZIP

Versionar `/{folder_name}/` conviene para diseños y guías offline. `.gitignore` puntual solo si hace falta.

---

## 7. Flujo rápido para el humano

1. Descargar el ZIP y colocar la carpeta en la raíz del repo.
2. Rellenar [`note.yaml`](note.yaml) o escribir `folder_name` (y `difficulty`) en el chat.
3. Pedir **«organiza este reto con el playbook»** (fase A).
4. Abrir `/challenges/{slug}` y `src/challenges/{slug}/` y **implementar tú** el diseño.
5. Cuando quieras ayuda puntual (flex, JSON, fuentes), pregunta en mensajes aparte; si quieres que el asistente lo haga entero, pedir **fase B** explícitamente.

---

## Referencias en el repo

- [`src/data/challenges.ts`](../../src/data/challenges.ts)
- [`src/components/challenge-card.tsx`](../../src/components/challenge-card.tsx)
- [`src/app/layout.tsx`](../../src/app/layout.tsx)
- [`README.md`](../../README.md)
