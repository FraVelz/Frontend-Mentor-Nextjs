import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor — Retos (Next.js)",
  description:
    "Índice de retos Frontend Mentor en Next.js: dificultad, etiquetas y enlaces. Versión orientada a práctica profesional con App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable} min-h-screen scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
