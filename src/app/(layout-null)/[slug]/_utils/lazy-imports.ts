import type { ComponentType } from "react";

type challengePagesType = Record<string, () => Promise<{ default: ComponentType }>>;

export const challengePages: challengePagesType = {
  "bmi-calculator": () => import("@/features/bmi-calculator/page"),
  "results-summary-component": () => import("@/features/results-summary-component/page"),
  "ecommerce-product-page": () => import("@/features/ecommerce-product-page/page"),
};
