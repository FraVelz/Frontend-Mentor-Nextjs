"use client";

import { Kumbh_Sans } from "next/font/google";
import { useState } from "react";

import CartModal from "./components/CartModal";
import Lightbox from "./components/Lightbox";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

const kumbh = Kumbh_Sans({ subsets: ["latin"], display: "swap" });

export default function ProductPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <div className={`min-h-screen bg-white relative ${kumbh.className}`}>
      <header className="relative">
        <Navbar onCartClick={toggleCart} />
        {isCartOpen && <CartModal />}
      </header>

      <main className="max-w-7xl mx-auto md:px-12 lg:px-24">
        {/* Layout: una columna en móvil, dos en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-32 md:py-20">
          {/* Galería de imágenes */}
          <section>
            <ProductGallery handleLightbox={openLightbox} />
          </section>

          {/* Ficha y compra */}
          <section>
            <ProductInfo />
          </section>
        </div>
      </main>

      {/* Lightbox: solo en escritorio (diseño FM) */}
      {isLightboxOpen && (
        <div className="hidden md:block">
          <Lightbox onClose={closeLightbox} />
        </div>
      )}
    </div>
  );
}