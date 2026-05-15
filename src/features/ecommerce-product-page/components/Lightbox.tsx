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

// Misma secuencia que en ProductGallery
const images = [
  { id: 1, main: productImage1, thumb: thumbnailImage1 },
  { id: 2, main: productImage2, thumb: thumbnailImage2 },
  { id: 3, main: productImage3, thumb: thumbnailImage3 },
  { id: 4, main: productImage4, thumb: thumbnailImage4 },
];

interface LightboxProps {
  /** Cierra el lightbox a pantalla completa */
  onClose: () => void;
}

export default function Lightbox({ onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-[100] hidden md:flex flex-col items-center justify-center bg-black/75">
      <div className="relative flex flex-col gap-6 max-w-[550px]">
        
        {/* Cerrar: hover naranja */}
        <button 
          onClick={onClose}
          className="self-end group"
        >
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "scale-125 fill-[#69707D] transition-colors",
              "group-hover:fill-orange-500",
            )}
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/>
          </svg>
        </button>

        {/* Imagen y flechas anterior/siguiente */}
        <div className="relative">
          <img
            src={imgSrc(images[currentIndex].main)}
            alt="Product Focus"
            className="w-full rounded-2xl"
          />

          <button
            onClick={prevImage}
            className={cn(
              "group absolute top-1/2 flex h-14 w-14 -translate-y-1/2",
              "-left-6 items-center justify-center rounded-full bg-white",
            )}
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "stroke-[#1D2026] transition-colors",
                "group-hover:stroke-orange-500",
              )}
            >
              <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className={cn(
              "group absolute top-1/2 flex h-14 w-14 -translate-y-1/2",
              "-right-6 items-center justify-center rounded-full bg-white",
            )}
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "stroke-[#1D2026] transition-colors",
                "group-hover:stroke-orange-500",
              )}
            >
              <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Miniaturas en la parte inferior del modal */}
        <div className="flex justify-center gap-6 px-8">
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "relative overflow-hidden rounded-xl border-2 bg-white",
                "transition-all",
                currentIndex === index
                  ? "border-orange-500"
                  : "border-transparent",
              )}
            >
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
    </div>
  );
}