import type { Metadata } from "next";

import bmiFavicon from "@/features/bmi-calculator/images/favicon-32x32.png";
import ecommerceFavicon from "@/features/ecommerce-product-page/images/favicon-32x32.png";
import resultsSummaryFavicon from "@/features/results-summary-component/images/favicon-32x32.png";
import ticFavicon from "@/features/tic-tac-toe-game/images/favicon-32x32.png";
import { ogImageAbsoluteUrl } from "@/lib/og-image-url";

const ecommerceOgImageUrl = ogImageAbsoluteUrl("/ecommerce-product-page/screenshot.png");
const bmiOgImageUrl = ogImageAbsoluteUrl("/bmi-calculator/screenshot.png");
const ticOgImageUrl = ogImageAbsoluteUrl("/tic-tac-toe-game/screenshot.png");

export const challengeMetadata: Record<string, Metadata> = {
  "bmi-calculator": {
    title: "Frontend Mentor | Body Mass Index Calculator",
    description:
      "Calculadora de IMC: unidades métricas o imperiales, resultado, clasificación y rango de peso saludable.",
    icons: {
      icon: bmiFavicon.src,
    },
    openGraph: {
      title: "Frontend Mentor | Body Mass Index Calculator",
      description:
        "Calculadora de IMC: unidades métricas o imperiales, resultado, clasificación y rango de peso saludable.",
      images: [
        {
          url: bmiOgImageUrl,
          width: 1440,
          height: 1056,
          alt: "Captura de la solución Body Mass Index Calculator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Frontend Mentor | Body Mass Index Calculator",
      description:
        "Calculadora de IMC: unidades métricas o imperiales, resultado, clasificación y rango de peso saludable.",
      images: [bmiOgImageUrl],
    },
  },
  "tic-tac-toe-game": {
    title: "Frontend Mentor | Tic Tac Toe Game",
    description:
      "Juego tres en raya: menú, solo vs CPU o dos jugadores, tablero y modales según el reto Frontend Mentor.",
    icons: {
      icon: ticFavicon.src,
    },
    openGraph: {
      title: "Frontend Mentor | Tic Tac Toe Game",
      description:
        "Juego tres en raya: menú, solo vs CPU o dos jugadores, tablero y modales según el reto Frontend Mentor.",
      images: [
        {
          url: ticOgImageUrl,
          width: 1920,
          height: 1080,
          alt: "Captura de la solución Tic Tac Toe Game",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Frontend Mentor | Tic Tac Toe Game",
      description:
        "Juego tres en raya: solo vs CPU o dos jugadores; layout responsive y estados de juego.",
      images: [ticOgImageUrl],
    },
  },
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
          url: ecommerceOgImageUrl,
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
      images: [ecommerceOgImageUrl],
    },
  },
};
