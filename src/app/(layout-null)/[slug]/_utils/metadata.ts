import type { Metadata } from "next";

import ecommerceFavicon from "@/features/ecommerce-product-page/images/favicon-32x32.png";
import resultsSummaryFavicon from "@/features/results-summary-component/images/favicon-32x32.png";

export const challengeMetadata: Record<string, Metadata> = {
  "results-summary-component": {
    title: "Frontend Mentor | Results summary component",
    description:
      "Results summary component: layout responsive, estados hover/focus y datos opcionales desde JSON.",
    icons: {
      icon: resultsSummaryFavicon.src,
    },
  },
  "ecommerce-product-page": {
    title: "Frontend Mentor | E-commerce product page",
    description:
      "Página de producto e-commerce: galería, lightbox, carrito, menú móvil y layout responsive.",
    icons: {
      icon: ecommerceFavicon.src,
    },
    openGraph: {
      title: "Frontend Mentor | E-commerce product page",
      description:
        "Página de producto e-commerce: galería, lightbox, carrito, menú móvil y layout responsive.",
      images: [
        {
          url: "/ecommerce-product-page/screenshot.png",
          width: 1200,
          height: 800,
          alt: "Captura de la solución E-commerce product page",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Frontend Mentor | E-commerce product page",
      description:
        "Página de producto e-commerce: galería, lightbox, carrito, menú móvil y layout responsive.",
      images: ["/ecommerce-product-page/screenshot.png"],
    },
  },
};
