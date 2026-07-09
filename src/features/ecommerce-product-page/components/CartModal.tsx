import { cn } from "@/lib/utils";

import { useCart } from "../context/CartContext";
import { imgSrc } from "../helper/img-src";

import iconDeleteImage from "../images/icon-delete.svg";

export default function CartModal() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div
      className={cn(
        "absolute top-20 z-50 mx-auto flex min-h-[256px] w-[95%]",
        "flex-col rounded-lg bg-white shadow-2xl",
        "right-2 left-2 md:right-0 md:left-auto md:w-[360px]",
      )}
    >
      {/* Encabezado del panel carrito */}
      <div className="border-b border-zinc-100 p-6">
        <h3 className="font-semibold text-black">Cart</h3>
      </div>

      {/* Líneas del carrito o mensaje vacío */}
      <div className="flex flex-1 flex-col p-6">
        {cartItems.length > 0 ? (
          <>
            <div className="mb-6 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  {/* Miniatura */}
                  <img src={item.image} alt={item.name} className="size-12 rounded-md" />

                  {/* Nombre, precio y subtotal */}
                  <div className="flex-1 text-[15px] text-zinc-500">
                    <p className="w-40 truncate md:w-full">{item.name}</p>
                    <p>
                      ${item.price.toFixed(2)} x {item.quantity}{" "}
                      <span className="ml-1 font-bold text-black">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>

                  {/* Quitar línea */}
                  <button onClick={() => removeFromCart(item.id)} className="transition-opacity hover:opacity-70">
                    <img src={imgSrc(iconDeleteImage)} alt="Delete item" />
                  </button>
                </div>
              ))}
            </div>

            {/* Pagar (enunciado: sin lógica real) */}
            <button
              className={cn(
                "w-full rounded-lg bg-orange-500 py-4 font-bold text-white shadow-md",
                "transition-colors hover:bg-orange-400",
              )}
            >
              Checkout
            </button>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            {/* Carrito vacío (texto en inglés del reto) */}
            <p className="font-bold text-zinc-500">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
