# Autocommit — Frontend Mentor Next.js (hub de retos)

Usar cuando el usuario pida **hacer commit** del trabajo actual (cambios generales del repo). Mensajes **Conventional
Commits**, coherentes con `git log`. **No** hacer `git push` salvo petición explícita.

**No confundir con cerrar un reto:** el checklist doc + screenshot + índice + push al cerrar un challenge está en
**[close-challenge.md](./close-challenge.md)** (`/close-challenge`). Usa **`/auto-commit`** para commits locales
habituales (hub, CI, cursor, refactors, lint de docs, etc.).

## Cuándo ejecutar

- Invocación de **`/auto-commit`** o petición explícita de **commit** / **autocommit**.
- **No** commitear si el usuario no lo pidió.

## Antes de commitear

1. `git status` — staged y unstaged.
2. `git diff` — qué entra en el commit.
3. `git log -15 --oneline` — tono reciente.
4. **Respetar borrados:** si el diff elimina líneas o archivos, **no restaurarlos** ni "arreglar" el contenido antes del commit salvo petición explícita del usuario. Un borrado suele ser intencional.

**No** incluir `.env`, `backups/` (ZIP local en `.gitignore`) ni `.next/` salvo petición explícita.

## Ámbitos (`scope`) habituales en este repo

`challenges`, `hub`, `hero`, `layout`, `slug`, `challenge-card`, `metadata`, `readme`, `cursor`, `ci`, `deps`, `og`,
`lint`, `md`, `markdown`.

Rutas de referencia: `src/app/(with-layout)/`, `src/app/(layout-null)/[slug]/`, `src/features/{slug}/`,
`src/data/challenges-card.ts`, `public/{slug}/screenshot.png`, `README.md` / `README.en.md`, `.cursor/commands/`,
`.markdownlint.json`, `.markdownlint-cli2.jsonc`.

## Formas de mensaje

### A) Formato lista — varias áreas (preferido frente a varios tipos en una línea)

```text
feat(challenges): complete bmi-calculator challenge UI

docs(readme): document slash commands in bilingual README
chore(lint): add markdownlint-cli2 with 120-char line cap
chore(cursor): add close-challenge and standardize auto-commit
```

### B) Formato clásico — un tema

```text
fix(layout): restore hub route after projects path change
```

**Evitar** una sola línea con varios `feat:` / `docs:` pegados; separar por líneas o commits atómicos.

## Tipos

| Tipo       | Uso aquí                                            |
| ---------- | --------------------------------------------------- |
| `feat`     | Nuevo reto, hub, UI de tarjetas                     |
| `fix`      | Rutas, layout, OG                                   |
| `docs`     | README, `src/features/*/readme.md`, comandos Cursor |
| `chore`    | react-doctor, lockfile, cursor, markdownlint        |
| `refactor` | App router, lazy imports por slug                   |
| `ci`       | Workflows                                           |

**Evitar** tipos sueltos `update:`; preferir `chore:` o `docs:`.

## Commit

```bash
git commit -m "$(cat <<'EOF'
chore(lint): add markdownlint-cli2 and fix challenge readmes

docs(readme): list integrate-challenges and update-docs commands
chore(cursor): align auto-commit with portfolio command style
EOF
)"
```

## Push (solo si el usuario lo pide)

1. Tras un commit limpio: `git push` o `git push -u origin <rama>` la primera vez.
2. Si el remoto rechaza (non-fast-forward): informar; **no** hacer `push --force` en `main`/`master` sin permiso
   explícito.
3. El push **no** sustituye el cierre de un reto; para eso sigue **`/close-challenge`**.

## Reglas

- Mensaje en **inglés**; respuesta al chat en **español**.
- Cumplir `.cursor/rules/git-commits.mdc` (sin coautoría IA).
- Hook rechazado → nuevo commit; sin `--no-verify` salvo petición explícita.
- Si el entorno inyecta `Co-authored-by: Cursor` y el commit **no está en remoto**: enmendar con el mismo texto sin ese
  trailer (`git commit --amend -F msg.txt`).
- Tras cambios en `lint:md` / Prettier en `.md`, ejecutar `pnpm run lint:md` antes del commit si el diff es solo
  documentación.

## Comandos relacionados

- Organizar reto (fase A): **`/integrate-challenges`**.
- Cerrar reto listo (doc + `challenges-card` + **push**): **`/close-challenge`**.
- Documentación: **`/update-docs`**.
