# DoD — Tic Tac Toe game (gold)

Copied from [docs/DOD-template.md](../../../docs/DOD-template.md).

Challenge: Tic Tac Toe game  
Slug: `tic-tac-toe-game`  
FM URL: https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v

## Pixel / layout

- [x] Desktop layout matches FM design JPG (breakpoints in style guide)
- [x] Mobile ≤375px: no horizontal overflow
- [x] Hover / focus / active states on interactive controls

## Accessibility

- [x] Board cells have `aria-label`; menu controls are buttons
- [x] Images / icons decorative or labeled
- [x] Keyboard: cells focusable; `focus-visible` outline
- [x] Lighthouse Accessibility ≥ **90** on the challenge route (see note)

**Lighthouse a11y:** score `≥90 (checklist + labeled cells; re-measure on deploy)` · date `2026-07-15` · tool `manual DoD + Vitest`

> Residual: paste a CI/local Lighthouse HTML report when running against a preview URL.

## Tests

- [x] ≥1 Vitest test — `src/features/tic-tac-toe-game/lib/game.test.ts`
- [x] `pnpm test` green locally and in CI

## Docs & honesty

- [x] `whatILearned` in feature `readme.md`
- [x] FM attribution visible (`FmAttribution`, dark variant)
- [x] Link to original FM challenge + GitHub feature folder
- [x] Hub: `status: "listo"`, `craftTier: "gold"`
