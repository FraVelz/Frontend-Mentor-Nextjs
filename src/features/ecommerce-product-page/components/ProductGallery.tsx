import { useState } from "react";

import { cn } from "@/lib/utils";

import { imgSrc } from "../helper/img-src";

import productImage1 from "../images/image-product-1.jpg";
import productImage2 from "../images/image-product-2.jpg";
import productImage3 from "../images/image-product-3.jpg";
import productImage4 from "../images/image-product-4.jpg";
import thumbnailImage1 from "../images/image-product-1-thumbnail.jpg";
import thumbnailImage2 from "../images/image-product-2-thumbnail.jpg";
import thumbnailImage3 from "../images/image-product-3-thumbnail.jpg";
import thumbnailImage4 from "../images/image-product-4-thumbnail.jpg";

import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";


// Imágenes del producto (principal + miniatura)
const images = [
  { id: 1, main: productImage1, thumb: thumbnailImage1 },
  { id: 2, main: productImage2, thumb: thumbnailImage2 },
  { id: 3, main: productImage3, thumb: thumbnailImage3 },
  { id: 4, main: productImage4, thumb: thumbnailImage4 },
];

interface GalleryProps {
  handleLightbox?: () => void;
}

export default function ProductGallery({ handleLightbox }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carrusel en móvil
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col gap-8 w-full md:max-w-[445px]">
      {/* Imagen principal: clic abre lightbox (escritorio) */}
      <div className="relative overflow-hidden md:rounded-2xl group">
        <button
          type="button"
          aria-label={
            handleLightbox ? "Ampliar imagen del producto" : "Imagen principal"
          }
          onClick={handleLightbox}
          className={cn(
            "relative block w-full border-0 bg-transparent p-0 text-left outline-none md:rounded-2xl",
            handleLightbox ? "cursor-pointer" : "",
          )}
        >
          <img
            src={imgSrc(images[currentIndex].main)}
            alt="Product"
            className="h-auto w-full"
          />
        </button>

        {/* Flechas solo en móvil */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden">
          <button
            onClick={prevImage}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white transition-colors hover:text-orange-500",
            )}
          >
            <img src={imgSrc(iconPrevious)} alt="Previous" className="h-3" />
          </button>
          <button
            onClick={nextImage}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white transition-colors hover:text-orange-500",
            )}
          >
            <img src={imgSrc(iconNext)} alt="Next" className="h-3" />
          </button>
        </div>
      </div>

      {/* Miniaturas solo en md+ */}
      <div className="hidden md:flex justify-between gap-4">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "relative overflow-hidden rounded-xl border-2 transition-all",
              currentIndex === index
                ? "border-orange-500"
                : "border-transparent",
            )}
          >
            {/* Overlay en la miniatura activa o al hover */}
            <div
              className={cn(
                "absolute inset-0 bg-white/50 transition-opacity",
                currentIndex === index
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-30",
              )}
            />
            <img
              src={imgSrc(img.thumb)}
              alt={`Thumbnail ${img.id}`}
              className="size-[88px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}