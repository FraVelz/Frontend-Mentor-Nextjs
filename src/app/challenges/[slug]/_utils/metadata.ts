import type { Metadata } from "next";

export const challengeMetadata: Record<
  string,
  Pick<Metadata, "title" | "description" | "icons">
> = {
  "results-summary-component": {
    title: "Frontend Mentor | Results summary component",
    description:
      "Results summary component: layout responsive, estados hover/focus y datos opcionales desde JSON.",
    icons: {
      icon: "/results-summary-component/images/favicon-32x32.png",
    },
  },
};
