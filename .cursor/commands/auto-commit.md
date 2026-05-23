# Autocommit — Frontend Mentor Next.js (hub de retos)

Usar cuando el usuario pida **hacer commit** del trabajo actual (cambios generales del repo). Mensajes **Conventional Commits**, coherentes con `git log`. **No** hacer `git push` salvo petición explícita.

**No confundir con cerrar un reto:** el checklist doc + screenshot + índice + push al cerrar un challenge está en **[close-challenge.md](./close-challenge.md)** (`/close-challenge`). Usa **`/auto-commit`** para commits locales habituales (hub, CI, cursor, refactors, etc.).

## Cuándo ejecutar

- Invocación de **`/auto-commit`** o petición explícita de **commit** / **autocommit**.
- **No** commitear si el usuario no lo pidió.

## Antes de commitear

1. `git status` — staged y unstaged.
2. `git diff` — qué entra en el commit.
3. `git log -15 --oneline` — tono reciente.

**No** incluir `.env`, `backups/` (ZIP local en `.gitignore`) ni `.next/` salvo petición explícita.

## Ámbitos (`scope`) habituales en este repo

`challenges`, `hub`, `hero`, `layout`, `slug`, `challenge-card`, `metadata`, `readme`, `cursor`, `ci`, `deps`, `og`.

Rutas de referencia: `src/app/(with-layout)/`, `src/app/(layout-null)/[slug]/`, `src/features/{slug}/`, `src/data/challenges-card.ts`, `public/{slug}/screenshot.png`, `README.md` / `README.en.md`, `.cursor/commands/`.

## Formas de mensaje

### A) Formato lista — varias áreas

```text
feat(challenges): complete bmi-calculator challenge UI

docs(readme): document slash commands in bilingual README
chore(cursor): add close-challenge and standardize auto-commit
```

### B) Formato clásico — un tema

```text
fix(layout): restore hub route after projects path change
```

## Tipos

| Tipo | Uso aquí |
| --- | --- |
| `feat` | Nuevo reto, hub, UI de tarjetas |
| `fix` | Rutas, layout, OG |
| `docs` | README, `src/features/*/readme.md`, comandos Cursor |
| `chore` | react-doctor, lockfile, cursor |
| `refactor` | App router, lazy imports por slug |
| `ci` | Workflows |

**Evitar** tipos sueltos `update:`; preferir `chore:` o `docs:`.

## Commit

```bash
git commit -m "$(cat <<'EOF'
chore(cursor): add close-challenge workflow and project-scoped auto-commit

docs(readme): list integrate-challenges and update-docs commands
EOF
)"
```

## Reglas

- Mensaje en **inglés**; respuesta al chat en **español**.
- Cumplir `.cursor/rules/git-commits.mdc` (sin coautoría IA).
- Hook rechazado → nuevo commit; sin `--no-verify` salvo petición explícita.
- Enmendar si aparece `Co-authored-by: Cursor` (commit no publicado).

## Comandos relacionados

- Organizar reto (fase A): **`/integrate-challenges`**.
- Cerrar reto listo (doc + `challenges-card` + **push**): **`/close-challenge`**.
- Documentación: **`/update-docs`**.
