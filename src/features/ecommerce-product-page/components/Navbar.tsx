import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { useCart } from "../context/CartContext";
import { imgSrc } from "../helper/img-src";

import menuImage from "../images/icon-menu.svg";
import logoImage from "../images/logo.svg";
import iconCardImage from "../images/icon-cart.svg";
import userAvatarImage from "../images/image-avatar.png";
import closeIconImage from "../images/icon-close.svg";

interface NavbarProps {
  onCartClick: () => void;
}

const NAV_LINKS = ["Collections", "Men", "Women", "About", "Contact"];

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav
      className={cn(
        "relative mx-auto mb-0 flex max-w-7xl items-center justify-between",
        "border-b border-zinc-100 px-6 py-5 md:mb-20 md:py-10",
      )}
    >
      <div className="flex items-center gap-4 md:gap-14">
        {/* Menú hamburguesa (móvil) */}
        <button type="button" onClick={() => setIsMenuOpen(true)} className="pt-1 md:hidden">
          <img src={imgSrc(menuImage)} alt="Menu" />
        </button>

        <Link href="/" className="pb-1">
          <img src={imgSrc(logoImage)} alt="sneakers" className="h-5 md:h-6" />
        </Link>

        <ul className="hidden gap-8 font-medium text-zinc-500 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  "relative border-b-4 border-transparent py-11 transition-all",
                  "hover:border-orange-500 hover:text-black",
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5 md:gap-11">
        {/* Carrito: abre el panel (CartModal en el padre) */}
        <button type="button" onClick={onCartClick} className="group relative">
          <img src={imgSrc(iconCardImage)} alt="Cart" className="h-5 md:h-6" />
          {totalItems > 0 && (
            <span
              className={cn(
                "absolute -top-2 -right-2 rounded-full bg-orange-500 px-2",
                "py-0.5 text-[10px] font-bold text-white",
              )}
            >
              {totalItems}
            </span>
          )}
        </button>

        <button
          type="button"
          className="rounded-full border-2 border-transparent transition-all hover:border-orange-500"
        >
          <img src={imgSrc(userAvatarImage)} alt="User Profile" className="h-6 md:h-12" />
        </button>
      </div>

      {/* Panel lateral móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 bg-black/75"
            onClick={() => setIsMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                setIsMenuOpen(false);
              }
            }}
          />
          <div className="relative flex h-full w-[250px] flex-col gap-10 bg-white p-6">
            <button type="button" aria-label="Cerrar menú" onClick={() => setIsMenuOpen(false)}>
              <img src={imgSrc(closeIconImage)} alt="" />
            </button>
            <ul className="flex flex-col gap-6 text-lg font-bold text-black">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
