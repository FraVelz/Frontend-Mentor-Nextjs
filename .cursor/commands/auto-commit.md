# Cerrar reto Frontend Mentor (doc + remoto)

**Comando Cursor:** **`.cursor/commands/auto-commit.md`** (slash **`/auto-commit`**).

**Relacionado:** [integrate-challenges.md](integrate-challenges.md) (fase A/B y organización); ambos están en **`.cursor/commands/`** (`/integrate-challenges`, `/auto-commit`).

---

## Propósito

Cuando el reto está **listo** (diseño implementado, datos en su sitio, ruta pública comprobada), este checklist evita dejar el índice y la documentación desactualizados y estandariza **commit + push** al remoto, alineado con el historial del repo ([Conventional Commits](https://www.conventionalcommits.org/), en la práctica `feat:`, `docs:`, `fix:`, `refactor:`, etc.).

---

## 1. Actualizar la documentación del reto en el feature

Carpeta del reto: `src/features/{folder_name}/` (mismo `folder_name` kebab-case que el slug). Ahí van **`readme.md`** en la raíz del feature y el material de referencia bajo **`docs/`**.

| Comprobar / actualizar | Ubicación | Notas |
| --- | --- | --- |
| `readme.md` | `src/features/{folder_name}/readme.md` | Alineado con el enunciado FM; enlace a la solución en vivo si aplica. |
| `style-guide.md` | `src/features/{folder_name}/docs/style-guide.md` | Colores, tipografías y tokens si el diseño final difiere del stub. |
| `preview.jpg` | `src/features/{folder_name}/docs/preview.jpg` | Sustituir o regenerar si quieres que el preview del challenge refleje la solución. |
| `design/` | `src/features/{folder_name}/docs/design/` | Los JPG de referencia del ZIP; añade los que faltaron en fase A si hace falta. |

Nada de esto reemplaza el código: las **imágenes y SVG** del UI siguen bajo `src/features/{folder_name}/images/` (ver [integrate-challenges §6](integrate-challenges.md#6-qué-no-hacer-anti-mezcla)).

---

## 2. Captura para tarjeta del índice, SEO y convención `public/{folder_name}/`

**Ubicación fija (versionada en Git):** `public/{folder_name}/screenshot.png` — en la app equivale a la URL **`/{folder_name}/screenshot.png`**.

| Acción | Notas |
| --- | --- |
| Colocar o actualizar la captura | Exporta un PNG (p. ej. viewport desktop) de la solución y guárdalo con ese nombre. Si la captura está **en la raíz del repo** o con nombre tipo `{folder_name}-screenshot.png`, **mueve o renómbrala** a `public/{folder_name}/screenshot.png` para que coincida la convención. |
| [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts) | Añade `screenshotSrc: "/{folder_name}/screenshot.png"` en la entrada del reto para que el **ChallengeCard** muestre la imagen (si omites el campo, se usa solo el gradiente). |
| [`src/app/(layout-null)/[slug]/_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) | Open Graph / Twitter: usa URLs **absolutas** para las imágenes (ver [`ogImageAbsoluteUrl`](../../src/lib/og-image-url.ts)). Con **`NEXT_PUBLIC_SITE_URL`** las capturas salen desde tu dominio; sin variable, fallback **`raw.githubusercontent.com`**, no enlaces tipo `github.com/.../blob/main/...?raw=true` (los crawlers sociales fallan). Opcional: `NEXT_PUBLIC_OG_FALLBACK_RAW_BASE` apuntando a `https://raw.githubusercontent.com/Usuario/repo/RAMA/public`. [`metadataBase`](../../src/app/layout.tsx) debe ser tu URL pública cuando despliegues. |

**Enlaces en la tarjeta** (mismos campos en `challenges-card.ts`):

- **`fmChallengeUrl`**: página del **reto** en Frontend Mentor (enunciado). Si no hay `fmSolutionUrl`, el botón «Solución en FM» enlaza aquí (y conviene añadir después `fmSolutionUrl`).
- **`fmSolutionUrl`**: URL de tu solución publicada en FM. Si existe, tiene prioridad sobre `fmChallengeUrl` para el mismo botón.
- **`livePreviewUrl`**: URL del deploy (Vercel, etc.). Si se omite y existe `NEXT_PUBLIC_SITE_URL`, se usa automáticamente **`SITE_URL` + `implementationHref`**. Si tampoco hay variable, «Vista previa en vivo» apunta a la **ruta interna** del proyecto en esta app.
- **`sourceCodeUrl`**: URL al código en GitHub; por defecto se usa `…/tree/main/src/features/{folder_name}` (ver [`src/lib/challenge-external-urls.ts`](../../src/lib/challenge-external-urls.ts)).

Variable opcional en `.env` local o en el proveedor de hosting: `NEXT_PUBLIC_SITE_URL=https://tudominio.com` (sin barra final). Sin ella, las imágenes OG del código usan el **raw de GitHub** bajo `public/` para que previews en redes no apunten a `localhost`.

---

## 3. Metadatos y estado en el proyecto

- En [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts): `status: "listo"`, título, descripción corta, `implementationHref`, `screenshotSrc` y enlaces externos según la sección 2; revisa coherencia con `readme.md`.
- Si el reto añade o cambia SEO por slug: [`_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) (descripción, favicon, **Open Graph / Twitter** si hay captura) y, si aplica, README raíz.

---

## 4. Limpieza local opcional (ZIP)

Si aún tenías la carpeta del ZIP en la raíz, tras la fase A debería estar en `backups/{folder_name}/` (no versionado; ver [integrate-challenges §7](integrate-challenges.md#7-git-y-la-carpeta-del-zip)). Antes de cerrar, confirma que no quedan restos en la raíz que deban ignorarse o moverse.

---

## 5. Commit con estilo del repositorio (Conventional Commits + push)

1. Revisa cambios: `git status` y, si aplica, `git diff`.
2. Añade solo lo del cierre: `git add` archivos puntuales o `git add` por carpetas (`public/{folder_name}/`, `src/features/{folder_name}/readme.md`, `src/features/{folder_name}/docs/`, `src/data/challenges-card.ts`, `_utils/metadata.ts`, etc.).

**Mensaje de commit** (un solo bloque o varios `tipo: descripción` en la misma línea, como en el log del repo):

- Prefijos habituales: `feat:` (funcionalidad o reto), `docs:` (solo documentación), `fix:`, `refactor:`, `chore:`.
- Ejemplos alineados con el historial local:
  - `feat: complete {folder_name} challenge`
  - `docs: update src/features/{folder_name} docs for completed solution`
  - `feat: complete {folder_name} docs: refresh preview and style-guide` (un solo commit con varias frases, estilo visto en commits recientes)

3. Sube al remoto:

```bash
git commit -m "feat: complete {folder_name} challenge docs: update src/features/{folder_name}"
git push
```

Sustituye `{folder_name}` y ajusta el mensaje a lo que realmente cambiaste. Si usas rama de trabajo, `git push -u origin <rama>` la primera vez.

---

## 6. Resumen rápido

1. `src/features/{folder_name}/readme.md` y `src/features/{folder_name}/docs/` coherentes con la solución.
2. `public/{folder_name}/screenshot.png` + `screenshotSrc` en la tarjeta + metadatos OG/Twitter si aplica.
3. `challenges-card.ts` con `status: "listo"` y enlaces (FM / vista previa / GitHub) según corresponda.
4. Commit con prefijos `feat:` / `docs:` / etc., como en el resto del proyecto.
5. `git push` al remoto.
