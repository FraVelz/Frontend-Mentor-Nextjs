# Playbook: al completar un reto Frontend Mentor (doc + subida a remoto)

**Relacionado:** [FM-CHALLENGE-PLAYBOOK.md](FM-CHALLENGE-PLAYBOOK.md) (fase A/B y organización) · notas: [note.yaml](note.yaml)

---

## Propósito

Cuando el reto está **listo** (diseño implementado, datos en su sitio, ruta pública comprobada), este checklist evita dejar el índice y la documentación desactualizados y estandariza **commit + push** al remoto, alineado con el historial del repo ([Conventional Commits](https://www.conventionalcommits.org/), en la práctica `feat:`, `docs:`, `fix:`, `refactor:`, etc.).

---

## 1. Actualizar la documentación del reto en `docs/`

Carpeta del reto: `docs/challenges/{folder_name}/` (mismo `folder_name` kebab-case que en `src/features/{folder_name}/`).

| Comprobar / actualizar | Notas |
| --- | --- |
| `readme.md` | Alineado con el enunciado FM; enlace a la solución en vivo si aplica. |
| `style-guide.md` | Colores, tipografías y tokens si el diseño final difiere del stub. |
| `preview.jpg` | Sustituir o regenerar si quieres que el preview del challenge refleje la solución. |
| `design/` | Los JPG de referencia del ZIP; añade los que faltaron en fase A si hace falta. |

Nada de esto reemplaza el código: las **imágenes y SVG** del UI siguen bajo `src/features/{folder_name}/images/` (ver playbook §6).

---

## 2. Metadatos y estado en el proyecto

- En [`src/data/challenges-card.ts`](../../src/data/challenges-card.ts): `status: "listo"`, título, descripción corta, `implementationHref` y demás campos ya definidos en el playbook; revisa coherencia con `readme.md`.
- Si el reto añade o cambia SEO por slug: [`_utils/metadata.ts`](../../src/app/(layout-null)/[slug]/_utils/metadata.ts) y, si aplica, README raíz.

---

## 3. Limpieza local opcional (ZIP)

Si aún tenías la carpeta del ZIP en la raíz, tras la fase A debería estar en `backups/{folder_name}/` (no versionado; ver [FM-CHALLENGE-PLAYBOOK §7](FM-CHALLENGE-PLAYBOOK.md#7-git-y-la-carpeta-del-zip)). Antes de cerrar, confirma que no quedan restos en la raíz que deban ignorarse o moverse.

---

## 4. Commit con estilo del repositorio (Conventional Commits + push)

1. Revisa cambios: `git status` y, si aplica, `git diff`.
2. Añade solo lo del cierre: `git add` archivos puntuales o `git add` por carpetas (`docs/challenges/...`, `src/features/...`, `src/data/challenges-card.ts`, etc.).

**Mensaje de commit** (un solo bloque o varios `tipo: descripción` en la misma línea, como en el log del repo):

- Prefijos habituales: `feat:` (funcionalidad o reto), `docs:` (solo documentación), `fix:`, `refactor:`, `chore:`.
- Ejemplos alineados con el historial local:
  - `feat: complete {folder_name} challenge`
  - `docs: update docs/challenges/{folder_name} for completed solution`
  - `feat: complete {folder_name} docs: refresh preview and style-guide` (un solo commit con varias frases, estilo visto en commits recientes)

3. Sube al remoto:

```bash
git commit -m "feat: complete {folder_name} challenge docs: update docs/challenges/{folder_name}"
git push
```

Sustituye `{folder_name}` y ajusta el mensaje a lo que realmente cambiaste. Si usas rama de trabajo, `git push -u origin <rama>` la primera vez.

---

## 5. Resumen rápido

1. `docs/challenges/{folder_name}/` coherente con la solución.
2. `challenges-card.ts` con `status: "listo"` (y metadatos correctos).
3. Commit con prefijos `feat:` / `docs:` / etc., como en el resto del proyecto.
4. `git push` al remoto.
