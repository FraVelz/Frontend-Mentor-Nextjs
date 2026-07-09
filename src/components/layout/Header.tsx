"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Retos", isActive: (path: string) => path === "/" },
  {
    href: "/start",
    label: "Inicio",
    isActive: (path: string) => path === "/start" || path.startsWith("/start/"),
  },
] as const;

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-flex pb-1 transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
        active ? "text-sky-400" : "text-zinc-300 hover:text-sky-400",
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-sky-400 transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0",
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "rounded-sm text-lg font-semibold tracking-tight text-zinc-100 transition hover:text-sky-400",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
          )}
        >
          Frontend Mentor <span className="font-normal text-zinc-500">· Next.js</span>
        </Link>
        <nav aria-label="Principal" className="flex flex-wrap items-center gap-6">
          {navItems.map(({ href, label, isActive }) => (
            <NavLink key={href} href={href} label={label} active={isActive(pathname)} />
          ))}
        </nav>
      </div>
    </header>
  );
}
