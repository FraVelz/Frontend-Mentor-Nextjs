import type { ComponentType } from "react";

type challengePagesType = Record<string, () => Promise<{ default: ComponentType }>>;

export const challengePages: challengePagesType = {
  "bmi-calculator": () => import("@/features/bmi-calculator/page"),
  "tic-tac-toe-game": () => import("@/features/tic-tac-toe-game/page"),
  "results-summary-component": () => import("@/features/results-summary-component/page"),
  "ecommerce-product-page": () => import("@/features/ecommerce-product-page/page"),
};
