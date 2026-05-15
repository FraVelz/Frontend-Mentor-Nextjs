"use client";

import {
  createContext,
  use,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Línea del carrito (un producto; aquí un solo `id` de reto) */
export type CartLine = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextValue = {
  cartItems: CartLine[];
  totalItems: number;
  addToCart: (item: CartLine) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/** Provee el estado del carrito solo a la ruta del reto (ver `page.tsx`) */
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartLine[]>([]);

  const addToCart = useCallback((line: CartLine) => {
    setCartItems((prev) => {
      const i = prev.findIndex((p) => p.id === line.id);
      if (i === -1) {
        return [...prev, line];
      }
      // Mismo producto: suma cantidades
      return prev.map((p, j) =>
        j === i ? { ...p, quantity: p.quantity + line.quantity } : p,
      );
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const totalItems = useMemo(
    () => cartItems.reduce((n, p) => n + p.quantity, 0),
    [cartItems],
  );

  const value = useMemo(
    () => ({ cartItems, totalItems, addToCart, removeFromCart }),
    [cartItems, totalItems, addToCart, removeFromCart],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = use(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
}
