# DoD template — Frontend Mentor challenge (gold)

Copy this checklist into `src/features/{slug}/DOD.md` before marking the hub badge **Listo / Gold**.

Challenge: `{title}`  
Slug: `{slug}`  
FM URL: `{fmChallengeUrl}`

## Pixel / layout

- [ ] Desktop layout matches FM design JPG (breakpoints in style guide)
- [ ] Mobile ≤375px: no horizontal overflow
- [ ] Hover / focus / active states on interactive controls

## Accessibility

- [ ] Form controls have visible labels (or `sr-only` + accessible name)
- [ ] Images have meaningful `alt` (or `alt=""` if decorative)
- [ ] Keyboard: all interactive controls reachable; focus visible
- [ ] Lighthouse Accessibility ≥ **90** on the challenge route (paste score + date below)

**Lighthouse a11y:** score `___` · date `YYYY-MM-DD` · tool/version `___`

## Tests

- [ ] ≥1 Vitest test covering domain / interaction behavior for this challenge
- [ ] `pnpm test` green locally and in CI

## Docs & honesty

- [ ] `whatILearned` — 3 honest bullets in feature `readme.md`
- [ ] FM attribution visible on the challenge page (`FmAttribution`)
- [ ] Link to original FM challenge + GitHub feature folder
- [ ] Hub entry in `src/data/challenges-card.ts`: `status: "listo"`, `craftTier: "gold"` only when items above are green

## Hub badge rule

| Badge        | When                                               |
| ------------ | -------------------------------------------------- |
| En progreso  | Route exists but DoD incomplete                    |
| Listo / Gold | DoD 1–6 green (pixel, a11y ≥90, test, attribution) |
| Ejemplo      | Placeholder / no implementation                    |

**Never** set `listo` + `gold` without this checklist filled.
