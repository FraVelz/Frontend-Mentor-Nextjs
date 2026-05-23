# Auditoría global de problemas (`/problems-search`)

## Cuándo ejecutar

- El usuario invoca **`/problems-search`** o pide una **búsqueda / auditoría global** de problemas que puedan afectar la
  web.
- No implica corregir nada salvo que el usuario lo pida después; el objetivo primero es **inventariar y priorizar**.

## Objetivo

Recorrer el proyecto de forma **sistemática**, desde lo **más global y crítico** hasta lo **más local y menor impacto**,
y entregar un informe ordenado por **prioridad** (no por carpeta al azar).

Considerar siempre el **impacto en producción** (usuarios, SEO, build/CI, rendimiento, accesibilidad, fidelidad a los
retos Frontend Mentor) y la **probabilidad** de que el problema ocurra en la web desplegada.

## Qué debe hacer el asistente

1. **Ejecutar comprobaciones automáticas** cuando sea posible (sin saltar hooks ni alterar git config):
   - `pnpm run lint`
   - `pnpm run build` (como en CI)
   - Opcional si aporta valor: `pnpm run format:check`, `pnpm run react:doctor`
2. **Revisar el código y la configuración** según las áreas del apartado «Factores y prioridades» (abajo).
3. **No inventar problemas**: cada hallazgo debe citar archivo/ruta o salida de comando; si algo es hipótesis, marcarlo
   como _posible_ y qué comprobaría.
4. **Respetar reglas del repo** al evaluar estructura (p. ej. `.cursor/rules/component-scope.mdc`).
5. **No commitear ni pushear** salvo petición explícita del usuario.

## Factores y prioridades (de mayor a menor)

Usar esta escala en el informe:

| Nivel  | Etiqueta | Criterio orientativo                                                                                                       |
| ------ | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| **P0** | Crítico  | Rompe build, CI, despliegue, rutas de retos, seguridad grave o pérdida de funcionalidad visible.                           |
| **P1** | Alto     | Metadata roto, retos incompletos o rotos, errores runtime probables, accesibilidad que bloquea uso, regresión clara de UX. |
| **P2** | Medio    | Lint/types, rendimiento notable, duplicación, incumplimiento de convenciones del repo, deuda que facilita bugs.            |
| **P3** | Bajo     | Estilo, nombres, docs desactualizadas, mejoras opcionales, nitpicks sin impacto inmediato en usuarios.                     |

### 1. Global e infraestructura (P0–P1)

- **Build y CI**: `.github/workflows/ci.yml`, scripts en `package.json`, lockfile, `pnpm-workspace.yaml` si aplica.
- **Config Next**: `next.config.ts`, grupos de rutas `(with-layout)` y `(layout-null)`.
- **Secretos y env**: `.env` en git, valores hardcodeados sensibles.
- **Dependencias**: versiones obsoletas con CVE conocidos (mencionar solo si hay evidencia razonable).

### 2. Retos Frontend Mentor (P0–P1)

- Catálogo de retos: `(with-layout)/page.tsx`, `(with-layout)/start/page.tsx`.
- Rutas dinámicas `(layout-null)/[slug]/`: slugs válidos, lazy imports en `_utils/lazy-imports.ts`.
- Cada feature en `src/features/<nombre>/`: página, estilos, assets, `docs/challenge.md` y `style-guide.md` si existen.
- Retos integrados vs pendientes (coherencia con `/integrate-challenges` y `/close-challenge`).

### 3. Rutas, App Router y datos (P0–P1)

- `generateStaticParams` / params inválidos para `[slug]`.
- Metadata por reto en `_utils/metadata.ts`.
- Imports rotos o referencias a assets inexistentes.

### 4. SEO y metadata (P1)

- `generateMetadata` por reto y en layouts.
- `not-found` y enlaces rotos desde el índice de retos.

### 5. Rendimiento y experiencia (P1–P2)

- Code-splitting por reto (lazy imports), bundles por feature.
- Hidratación innecesaria (`"use client"` de más).
- Imágenes y assets estáticos sin optimizar.

### 6. Accesibilidad y fidelidad al diseño (P1–P2)

- Contraste, foco visible, teclado, `aria-*`, formularios interactivos por reto.
- Desviaciones del style guide del reto (tipografía, breakpoints, estados hover/focus).

### 7. UI, layout y arquitectura (P2)

- Componentes en `src/components/` que solo usa un reto (regla **component-scope**).
- Duplicación entre `features/` y `app/`.
- Estilos globales (`global.css`) vs CSS por feature.

### 8. Calidad de código y mantenimiento (P2–P3)

- ESLint/TypeScript (vía lint y build).
- Código muerto, exports sin uso, TODOs antiguos.
- README del repo vs retos realmente desplegables.

### 9. Detalle y pulido (P3)

- Prettier/formato, nombres de archivos, comentarios obsoletos, pequeñas mejoras de copy o UX sin riesgo.

## Formato del informe (obligatorio)

Responder en **español**, con esta estructura:

```markdown
## Resumen ejecutivo

- X críticos (P0), Y altos (P1), …
- 1–3 frases: qué duele más y qué conviene atacar primero.

## P0 — Crítico

- [ ] **Título breve** — archivo/ruta — impacto — sugerencia de fix (1 línea)

## P1 — Alto

…

## P2 — Medio

…

## P3 — Bajo

…

## Comprobaciones ejecutadas

- Lista de comandos corridos y si pasaron o fallaron.

## Sin hallazgos relevantes

- Áreas revisadas donde no se detectó nada (opcional, breve).
```

- Máximo **~15–25 ítems** con impacto real; agrupar nitpicks en un solo bullet en P3 si hay muchos.
- Si no hay P0/P1, decirlo explícitamente y destacar el siguiente paso recomendado (p. ej. solo P2 de estructura).

## Resumen para el agente

- Auditoría **de lo global a lo específico**, multi-factor, priorizada P0→P3.
- Evidencia con rutas y salidas de comandos; hipótesis marcadas como tales.
- Informe estructurado; **no** aplicar fixes masivos sin que el usuario lo pida.
