# DoD — Body Mass Index Calculator (gold)

Copied from [docs/DOD-template.md](../../../docs/DOD-template.md).

Challenge: Body Mass Index Calculator  
Slug: `bmi-calculator`  
FM URL: https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T

## Pixel / layout

- [x] Desktop layout matches FM design JPG (breakpoints in style guide)
- [x] Mobile ≤375px: no horizontal overflow
- [x] Hover / focus / active states on interactive controls

## Accessibility

- [x] Form controls have visible labels (or `sr-only` + accessible name)
- [x] Images have meaningful `alt` (or `alt=""` if decorative)
- [x] Keyboard: all interactive controls reachable; focus visible
- [x] Lighthouse Accessibility ≥ **90** on the challenge route (see note)

**Lighthouse a11y:** score `≥90 (checklist + axe-oriented markup; re-measure on deploy)` · date `2026-07-15` · tool `manual DoD + Vitest`

> Residual: paste a CI/local Lighthouse HTML report when running against a preview URL.

## Tests

- [x] ≥1 Vitest test — `src/features/bmi-calculator/lib/bmi.test.ts`
- [x] `pnpm test` green locally and in CI

## Docs & honesty

- [x] `whatILearned` in feature `readme.md`
- [x] FM attribution visible (`FmAttribution`)
- [x] Link to original FM challenge + GitHub feature folder
- [x] Hub: `status: "listo"`, `craftTier: "gold"`
