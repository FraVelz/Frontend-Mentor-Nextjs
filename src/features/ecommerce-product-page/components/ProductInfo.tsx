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
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.00,
    originalPrice: 250.00,
    discount: 50,
    image: thumbnailImage1
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

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
    <div className="flex flex-col gap-4 md:gap-6 px-6 md:px-0 py-6 md:py-12 max-w-[445px]">
      {/* Marca / empresa */}
      <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase md:text-sm">
        {product.company}
      </h3>

      {/* Título del producto */}
      <h1 className="text-[#1d2025] text-3xl leading-tight font-semibold md:text-5xl">
        {product.name}
      </h1>

      {/* Descripción */}
      <p className="text-[#68707d] text-[15px] md:text-base leading-relaxed">
        {product.description}
      </p>

      {/* Precio y descuento */}
      <div className="flex md:flex-col justify-between items-center md:items-start gap-2">
        <div className="flex items-center gap-4">
          <span className="text-[#1d2025] text-3xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-[#ffede0] text-orange-500 font-bold px-2 py-0.5 rounded-md">
            {product.discount}%
          </span>
        </div>
        <span className="text-[#b6bcc8] font-bold line-through">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>

      {/* Controles: cantidad y añadir al carrito */}
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
        {/* Selector de cantidad */}
        <div className="flex items-center justify-between rounded-lg bg-[#f7f7f9] p-4 md:w-1/3">
          <button onClick={handleDecrement} className="hover:opacity-60 transition-opacity">
            <img src={imgSrc(iconMinusImage)} alt="Decrease" />
          </button>
          <span className="font-bold text-[#1d2025]">{quantity}</span>
          <button onClick={handleIncrement} className="hover:opacity-60 transition-opacity">
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
          <img
            src={imgSrc(iconCartImage)}
            alt=""
            className="brightness-0 invert h-4"
          />
          Add to cart
        </button>
      </div>
    </div>
  );
}