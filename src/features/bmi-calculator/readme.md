# Frontend Mentor — Body Mass Index Calculator

Reto [Body Mass Index Calculator](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T) en este monorepo Next.js.

## Funcionalidad

- Unidades **métricas** (cm, kg) o **imperiales** (ft/in, lbs).
- Cálculo de **IMC**, clasificación (bajo peso / peso saludable / sobrepeso / obesidad) y **rango de peso ideal** 18.5–24.9 IMC en las unidades elegidas.
- Secciones «What your BMI result means» e «Limitations of BMI» con textos del enunciado FM.
- Layout responsive, estados hover/focus en controles, tipografía **Inter** (`next/font`).

## Vista previa (referencia del paquete FM)

![Vista previa](./docs/preview.jpg)

## Referencia de implementación

- Lógica: [`lib/bmi.ts`](./lib/bmi.ts)
- UI raíz: [`components/BmiCalculator.tsx`](./components/BmiCalculator.tsx), secciones bajo [`components/`](./components/), [`page.tsx`](./page.tsx)

## Índice y redes

- Tarjeta del proyecto: entrada `bmi-calculator` en [`src/data/challenges-card.ts`](../../../data/challenges-card.ts).
- Captura para tarjeta y OG/Twitter versionada en [`public/bmi-calculator/screenshot.png`](../../../public/bmi-calculator/screenshot.png) (viewport de referencia; puedes regenerarla desde tu deploy).
