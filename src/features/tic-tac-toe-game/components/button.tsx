import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  handleClick: () => void;
  className?: string;
  shadowColor: string;
  shadowWidth: number;
  children: ReactNode;
}

export function Button({ handleClick, className = "", shadowColor, shadowWidth, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ boxShadow: `inset 0 -${shadowWidth}px 0 ${shadowColor}` }}
      className={cn(
        "cursor-pointer rounded-[10px] bg-amber-400 font-bold text-slate-900 uppercase transition-all hover:bg-amber-300",
        className,
      )}
    >
      {children}
    </button>
  );
}
