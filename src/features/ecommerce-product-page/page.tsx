import { FmAttribution } from "@/components/ui/fm-attribution";

import { CartProvider } from "./context/CartContext";
import ProductPage from "./ProductPage";

export default function EcommerceProductPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <ProductPage />
        </div>
        <FmAttribution
          challengeName="E-commerce product page"
          challengeUrl="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
        />
      </div>
    </CartProvider>
  );
}
