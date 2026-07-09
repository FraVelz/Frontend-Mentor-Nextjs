import { useState } from "react";

import { cn } from "@/lib/utils";

import { useCart } from "../context/CartContext";

import { imgSrc } from "../helper/img-src";
import thumbnailImage1 from "../images/image-product-1-thumbnail.jpg";
import iconMinusImage from "../images/icon-minus.svg";
import iconPlusImage from "../images/icon-plus.svg";
import iconCartImage from "../images/icon-cart.svg";

export default function ProductInfo() {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(0);

  // Datos de producto (reto: un solo artículo)
  const product = {
    id: 1,
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    originalPrice: 250.0,
    discount: 50,
    image: thumbnailImage1,
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: imgSrc(product.image),
      });
      setQuantity(0);
    }
  };

  return (
    <div className="flex max-w-[445px] flex-col gap-4 px-6 py-6 md:gap-6 md:px-0 md:py-12">
      {/* Marca / empresa */}
      <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase md:text-sm">{product.company}</h3>

      {/* Título del producto */}
      <h1 className="text-3xl leading-tight font-semibold text-[#1d2025] md:text-5xl">{product.name}</h1>

      {/* Descripción */}
      <p className="text-[15px] leading-relaxed text-[#68707d] md:text-base">{product.description}</p>

      {/* Precio y descuento */}
      <div className="flex items-center justify-between gap-2 md:flex-col md:items-start">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-[#1d2025]">${product.price.toFixed(2)}</span>
          <span className="rounded-md bg-[#ffede0] px-2 py-0.5 font-bold text-orange-500">{product.discount}%</span>
        </div>
        <span className="font-bold text-[#b6bcc8] line-through">${product.originalPrice.toFixed(2)}</span>
      </div>

      {/* Controles: cantidad y añadir al carrito */}
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        {/* Selector de cantidad */}
        <div className="flex items-center justify-between rounded-lg bg-[#f7f7f9] p-4 md:w-1/3">
          <button onClick={handleDecrement} className="transition-opacity hover:opacity-60">
            <img src={imgSrc(iconMinusImage)} alt="Decrease" />
          </button>
          <span className="font-bold text-[#1d2025]">{quantity}</span>
          <button onClick={handleIncrement} className="transition-opacity hover:opacity-60">
            <img src={imgSrc(iconPlusImage)} alt="Increase" />
          </button>
        </div>

        {/* Añadir al carrito */}
        <button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          className={cn(
            "flex flex-1 items-center justify-center gap-4 rounded-lg py-4",
            "font-bold text-white shadow-lg shadow-orange-200 transition-all",
            "bg-orange-500 hover:bg-orange-400",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          <img src={imgSrc(iconCartImage)} alt="" className="h-4 brightness-0 invert" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
