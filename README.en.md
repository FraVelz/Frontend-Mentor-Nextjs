# Frontend Mentor · Next.js

[Spanish version](README.md)

Monorepo to practice multiple [Frontend Mentor](https://www.frontendmentor.io/) challenges with **Next.js** (App Router), keeping each challenge isolated (assets, code, and routes) so resources do not bleed across projects.

![Next.js hub preview](public/hub/next-index.png)

---

## Table of contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Repository layout](#repository-layout)
- [Adding a new challenge (playbook)](#adding-a-new-challenge-playbook)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Requirements

- Node.js compatible with Next.js 16
- Package manager: this repo uses **pnpm** (you can use `npm` or `yarn` with equivalent commands)

---

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the challenge index. The entry hub is at [`/main`](src/app/main/page.tsx).

Other useful commands: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm format`.

---

## Repository layout

| Path | Purpose |
|------|---------|
| `src/app/` | App routes and layout (index at `/`, hub at `/main`) |
| `src/components/` | Shared components (header, cards, etc.) |
| `src/data/` | Index data (`challenges.ts`, `hub.ts`) |
| `public/` | Global static files; per-challenge assets live under `public/challenges/{slug}/` by convention |
| `docs/IA/` | Playbook and `note.yaml` for assistant-driven challenge setup |
| `*/` at repo root | Downloaded Frontend Mentor ZIP folders (reference: designs, `style-guide.md`, etc.) |

---

## Adding a new challenge (playbook)

1. Unzip the challenge and place the folder at the **repository root** (often similar to `results-summary-component/`).
2. Read **[`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](docs/IA/FM-CHALLENGE-PLAYBOOK.md)**: folder conventions, assistant checklist, and metadata rules.
3. Optional: fill the minimum in [`docs/IA/note.yaml`](docs/IA/note.yaml) **or** pass `folder_name` and `difficulty` in chat; the rest can be inferred from the ZIP README.

The playbook describes paths like `src/challenges/{slug}/`, pages under `src/app/challenges/[slug]/`, and updates to `src/data/challenges.ts`. **By default** the assistant only **organizes** (assets, data, stub, index); you implement the UI unless you explicitly ask for “phase B” (full implementation) per the playbook.

---

## Documentation

- Challenge integration: [`docs/IA/FM-CHALLENGE-PLAYBOOK.md`](docs/IA/FM-CHALLENGE-PLAYBOOK.md)
- Minimal per-challenge notes: [`docs/IA/note.yaml`](docs/IA/note.yaml)

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/clear-name`)
3. Commit your changes (`git commit -m 'Short description'`)
4. Push the branch (`git push origin feature/clear-name`)
5. Open a Pull Request

---

## Contact

For suggestions or bug reports, open an issue on the GitHub repository.

---

**Development:** Fravelz
