# Playbook: integrar un reto Frontend Mentor en este monorepo Next.js

Este documento es la **fuente de verdad** para el asistente (y para ti) cada vez que añades un ZIP de Frontend Mentor en la raíz del repo. Puedes usar solo [`note.yaml`](note.yaml) con lo mínimo; el asistente **completa el resto de metadatos** leyendo la carpeta del reto. **También puedes pasar esos datos por el chat** (p. ej. pegar un YAML parcial, el nombre de la carpeta o correcciones) en lugar de editar el archivo: lo importante es que el asistente tenga claro `folder_name` y, si quieres, `difficulty`. Adjunta este playbook + `note.yaml` cuando lo uses, o solo el playbook y tu mensaje, y pide ejecutar el checklist en orden.

---

## 1. Variables del reto

### 1.1 Archivo mínimo (`docs/note.yaml`)

Edita solo lo imprescindible. `folder_name` debe coincidir **exactamente** con la carpeta en la raíz del repo.

```yaml
# Obligatorio
folder_name: results-summary-component # ej. carpeta que dejaste en /

# Recomendado (si lo omites, la IA puede inferirlo del README del ZIP o dejar un valor razonable)
difficulty: newbie # newbie | junior | intermediate | advanced | guru
```

Opcionalmente puedes ampliar `note.yaml` con cualquier campo de la lista de la sección 1.4 si quieres fijarlo tú a mano; si no está, corresponde inferirlo. **Equivalente por chat:** puedes escribir en el hilo algo como “carpeta: `mi-reto`, dificultad newbie” o pegar el mismo YAML sin guardarlo en `docs/note.yaml`; el asistente debe tratarlo como la misma fuente de verdad que el archivo.

### 1.2 Qué puede inferir la IA por ti

Sin que tengas que escribirlo en el YAML, el asistente debe **derivar o proponer** estos valores inspeccionando `/{folder_name}/`:

| Campo | De dónde sacarlo (orden de preferencia) |
|-------|----------------------------------------|
| `difficulty` | Valor explícito en [`note.yaml`](note.yaml) o en el mensaje del chat. Si falta: leer si el README del ZIP indica nivel; si no hay pistas, **asumir `newbie`** es habitual en muchos challenges de Frontend Mentor (componentes HTML/CSS), y avisar al usuario para que confirme. |
| `slug` | Igual a `folder_name` en kebab-case; si el ZIP trae sufijo tipo `-main`, usar el nombre real de la carpeta salvo que en `note.yaml` o en el chat indiques otro `slug`. |
| `title` | Título del reto en `README.md` (línea del `#` o bloque “Frontend Mentor - …”). |
| `short_description` | Resumen en 1–2 frases a partir del README (“The challenge” / requisitos). |
| `tags` | Stack implícito (HTML, CSS, React/Next si aplica) + responsive/a11y si el README lo menciona. |
| `fm_url` | Enlaces a `frontendmentor.io/challenges/...` en el README; si no hay, buscar en la web o dejar placeholder y avisar. |
| `status` | Por defecto `en-progreso` al integrar; `listo` solo cuando el usuario lo indique. |
| `preview_gradient` | Aproximación a partir de colores de `style-guide.md` (o gradiente neutro si faltan datos). |
| `has_data_json` | `true` si existe `/{folder_name}/data.json`. |
| `primary_font_note` | Familias y pesos indicados en `style-guide.md` o en `assets/fonts/`. |

La IA debe **mostrar al usuario** el bloque YAML “completo” inferido (o pegarlo en un comentario / archivo) antes o al actualizar `challenges.ts`, para que puedas corregir título, URL o dificultad si algo falló.

### 1.3 Estructura esperada de la carpeta del ZIP

Los retos descargados suelen parecerse a [`results-summary-component/`](../results-summary-component/) en la raíz del repo: `README.md`, `style-guide.md`, `preview.jpg`, carpeta `design/` (JPG), `assets/` (imágenes, fuentes), a veces `data.json`, `index.html`, `AGENTS.md` / `CLAUDE.md`. Variaciones menores (nombres de subcarpetas) son normales; el asistente debe adaptarse pero **tratar como referencia viva** esa carpeta ejemplo cuando dudes de la disposición típica.

### 1.4 Campos completos (referencia)

Si algún día quieres rellenar todo a mano, el modelo de datos sigue alineado con [`src/data/challenges.ts`](../src/data/challenges.ts):

`slug`, `title`, `shortDescription`, `difficulty`, `tags`, `fmUrl`, `status`, `previewGradient`, y tras integrar la ruta interna, `implementationHref`.

**Convención:** `slug` y `folder_name` suelen ser el mismo string kebab-case. Si el ZIP trae un nombre largo tipo `results-summary-component-main`, renombra la carpeta a un `slug` estable o refleja el nombre real en `folder_name` y documenta excepciones en `note.yaml` o en el chat.

---

## 2. Convenciones de carpetas (no cambiar entre retos)

| Rol | Ubicación |
|-----|-----------|
| **Origen / referencia** | `/{folder_name}/` en la raíz del repo: diseños en `design/`, `style-guide.md`, `README.md`, `preview.jpg`, etc. Sirve como referencia; **no** uses su `index.html` como página principal de la app. |
| **Assets servidos por Next** | `public/challenges/{slug}/` — copia desde `{folder_name}/assets/` (imágenes, SVG, etc.). URLs públicas: `/challenges/{slug}/images/...` según la subestructura que copies (p. ej. reflejar `assets/images` → `public/challenges/{slug}/images`). |
| **Datos JSON del reto** | `src/challenges/{slug}/data.json` — copia desde `{folder_name}/data.json` si existe. Importa desde código con ruta relativa al módulo del reto. |
| **Código UI del reto** | `src/challenges/{slug}/` — componentes, tipos, CSS Modules o estilos acotados. Prefija nombres o mantén todo bajo esta carpeta para no chocar con otros retos. |
| **Ruta en App Router** | `src/app/challenges/[slug]/page.tsx` — **ruta dinámica**. Resuelve el reto según `slug` y comprueba que el slug exista en los datos (p. ej. lista derivada de `challenges` en `src/data/challenges.ts` o un Set permitido) antes de renderizar; si no, `notFound()`. |

### Fuentes locales

- Si el ZIP incluye fuentes en `assets/fonts/`, define `next/font/local` en `src/challenges/{slug}/fonts.ts` (o similar) y usa esas variables **solo** en los componentes de ese reto.
- **No** modifiques `src/app/layout.tsx` para fuentes de un reto concreto salvo que el usuario lo pida explícitamente.

---

## 3. Extensión del código compartido (índice y tarjetas)

Hoy el índice en [`src/app/page.tsx`](../src/app/page.tsx) y los datos en [`src/data/challenges.ts`](../src/data/challenges.ts) enlazan las tarjetas principalmente a Frontend Mentor. Para que cada reto tenga **implementación interna** en `/challenges/{slug}`:

1. **Tipo `Challenge`** en `src/data/challenges.ts`: añade un campo opcional, por ejemplo `implementationHref?: string` (valor típico: `"/challenges/results-summary-component"`). Solo rellenarlo cuando la ruta exista.
2. **`ChallengeCard`** en `src/components/challenge-card.tsx`: si `implementationHref` está definido, el título o la tarjeta debe ofrecer navegación principal con `next/link` hacia esa ruta; conserva `fmUrl` como enlace al enunciado oficial (p. ej. botón o enlace secundario “Ver en Frontend Mentor”).
3. **`src/app/challenges/[slug]/page.tsx`**: obtén `slug` de `params`, valida contra los retos registrados, importa el componente raíz del reto desde `src/challenges/{slug}/`.

El playbook no sustituye al código: la primera integración concreta debe aplicar estos tres puntos si aún no están en el repo.

---

## 4. Checklist para el asistente (orden fijo)

Ejecutar en este orden. Tomar `folder_name` y opcionalmente `difficulty` de [`note.yaml`](note.yaml) **y/o del mensaje del chat**; **completar metadatos faltantes** según la tabla de la sección 1.2 antes de tocar `challenges.ts`.

1. Comprobar que la carpeta `/{folder_name}/` existe en la raíz del repo (estructura típica como en la sección 1.3) y leer `note.yaml` si existe.
2. Inferir o confirmar `slug`, `title`, `shortDescription`, `tags`, `fmUrl`, `status`, `previewGradient`, `has_data_json` y notas de fuente según 1.2; para `difficulty`, priorizar YAML o chat; si falta, README; si no hay pistas, **`newbie` por defecto** y avisar para confirmación.
3. Leer `/{folder_name}/style-guide.md` y el README del challenge para requisitos (responsive, hover, bonus JSON, etc.).
4. Crear `public/challenges/{slug}/` y copiar los assets necesarios desde `/{folder_name}/assets/`, preservando subcarpetas razonables (`images/`, etc.). Anotar en el mensaje al usuario si algo se omitió (p. ej. favicon duplicado del ZIP).
5. Si existe `/{folder_name}/data.json` (o `has_data_json` en YAML): copiar a `src/challenges/{slug}/data.json`.
6. Si hay fuentes locales: añadir carga con `next/font/local` bajo `src/challenges/{slug}/` sin tocar el layout raíz salvo instrucción contraria.
7. Implementar la UI en `src/challenges/{slug}/` y la página `src/app/challenges/[slug]/page.tsx` (validar `slug`, `notFound()` si no está registrado).
8. Actualizar `src/data/challenges.ts`: añadir o actualizar la entrada con los campos inferidos o del YAML y `implementationHref: "/challenges/{slug}"` cuando la página exista.
9. Actualizar `ChallengeCard` y el tipo `Challenge` si aún no soportan `implementationHref` (ver sección 3).

---

## 5. Qué no hacer (anti-mezcla)

- No volcar assets sueltos en `public/` sin el prefijo `challenges/{slug}/`.
- No crear componentes genéricos en `src/components/` sin namespace si son exclusivos de un reto; preferir `src/challenges/{slug}/`.
- No reemplazar el contenido de [`src/app/page.tsx`](../src/app/page.tsx) por el HTML estático del ZIP.
- No mezclar datos o imágenes de dos retos en la misma carpeta bajo `public/challenges/`.

---

## 6. Git y la carpeta del ZIP

**Recomendación:** versiona la carpeta `/{folder_name}/` en el repo si quieres conservar **diseños JPG**, `style-guide.md` y el README original como referencia offline. Si el tamaño del repo es problema, puedes ignorar solo artefactos pesados innecesarios; por defecto **no** hace falta ignorar toda la carpeta del challenge.

Si un ZIP trae archivos que no quieres en git (basura temporal, duplicados), añade reglas puntuales en `.gitignore` y documenta el motivo en el commit o en este playbook bajo notas del reto.

---

## 7. Flujo rápido para el humano

1. Descarga el challenge en Frontend Mentor y descomprime.
2. Coloca la carpeta en la raíz de este repo; suele verse como [`results-summary-component/`](../results-summary-component/) (misma idea de estructura).
3. Indica al asistente el nombre de carpeta: en [`note.yaml`](note.yaml) **o** en el mensaje del chat (equivalente).
4. Opcional: fija `difficulty` en el YAML o en el chat; si no, la IA puede inferirla o usar **`newbie` por defecto** y pedirte confirmación.
5. Abre el chat, adjunta [`FM-CHALLENGE-PLAYBOOK.md`](FM-CHALLENGE-PLAYBOOK.md) y, si quieres, [`note.yaml`](note.yaml); pide integrar el reto. El asistente rellena el resto de metadatos y ejecuta el checklist. Después **codifica** la UI en `src/challenges/{slug}/` con el asistente o solo.

---

## Referencias en el repo

- Datos del índice: [`src/data/challenges.ts`](../src/data/challenges.ts)
- Tarjeta de reto: [`src/components/challenge-card.tsx`](../src/components/challenge-card.tsx)
- Layout global (fuentes globales): [`src/app/layout.tsx`](../src/app/layout.tsx)
