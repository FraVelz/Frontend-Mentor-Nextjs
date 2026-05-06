import { CartProvider } from "./context/CartContext";

import ProductPage from "./ProductPage";

export default function EcommerceProductPage() {
  return (
    <CartProvider>
      <ProductPage />
    </CartProvider>
  );
}
