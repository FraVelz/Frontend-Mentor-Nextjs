# Cerrar reto Frontend Mentor (doc + remoto)

**Comando Cursor:** **`.cursor/commands/close-challenge.md`** (slash **`/close-challenge`**).

**Relacionado:** [integrate-challenges.md](integrate-challenges.md) (fase A/B y organización); [auto-commit.md](auto-commit.md) (commits genéricos del repo). Comandos en **`.cursor/commands/`**: `/integrate-challenges`, `/close-challenge`, `/auto-commit`, `/update-docs`.

---

## Propósito

Cuando el reto está **listo** (diseño implementado, datos en su sitio, ruta pública comprobada), este checklist evita dejar el índice y la documentación desactualizados y estandariza **commit + push** al remoto. Para el mensaje de commit, seguir [auto-commit.md](auto-commit.md) (Conventional Commits, inglés, sin `Co-authored-by`).

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

## 5. Commit y push

1. Revisa cambios: `git status` y `git diff`.
2. Añade solo lo del cierre: `public/{folder_name}/`, `src/features/{folder_name}/`, `src/data/challenges-card.ts`, metadatos del slug, etc.
3. Mensaje según [auto-commit.md](auto-commit.md) (inglés, Conventional Commits). Ejemplos:

```text
feat(challenges): complete {folder_name} challenge

docs(challenges): update src/features/{folder_name} docs for completed solution
```

4. **`git push`** (o `git push -u origin <rama>` la primera vez). El push es parte de este flujo de cierre; para commits locales sin subir, usar solo **`/auto-commit`**.

---

## 6. Resumen rápido

1. `src/features/{folder_name}/readme.md` y `docs/` coherentes con la solución.
2. `public/{folder_name}/screenshot.png` + `screenshotSrc` + metadatos OG/Twitter si aplica.
3. `challenges-card.ts` con `status: "listo"` y enlaces externos.
4. Commit con [auto-commit.md](auto-commit.md).
5. `git push` al remoto.
