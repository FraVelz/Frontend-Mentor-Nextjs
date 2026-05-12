import { OIcon } from "./icons/o-icon";
import { XIcon } from "./icons/x-icon";

import type { Mark } from "@/features/tic-tac-toe-game/context/game-context";
import { cn } from "@/lib/utils";

interface MarkTogglerProps {
  mark: Extract<Mark, "X" | "O">;
  setMark: (m: Extract<Mark, "X" | "O">) => void;
}

export function MarkToggler({ mark, setMark }: MarkTogglerProps) {
  return (
    <div className="relative grid grid-cols-2 rounded-[10px] bg-slate-900 p-[9px] tablet:p-2">
      <div
        className={cn(
          "pointer-events-none absolute top-[9px] right-2 bottom-[9px] left-2 grid grid-cols-2",
          "tablet:top-2 tablet:right-2 tablet:bottom-2 tablet:left-2",
        )}
      >
        <div
          className={cn(
            "rounded-[10px] bg-slate-300 transition-all duration-300",
            mark === "X" ? "translate-x-0" : "translate-x-full",
          )}
        />
      </div>

      <label
        className={cn(
          "relative z-10 flex h-[54px] cursor-pointer items-center justify-center rounded-[10px]",
          "not-has-checked:hover:bg-slate-850",
        )}
      >
        <input
          type="radio"
          name="mark"
          value="X"
          className="hidden"
          checked={mark === "X"}
          onChange={() => setMark("X")}
        />
        <XIcon
          className={cn("h-8 w-8 transition-all duration-300", mark === "X" ? "text-slate-900" : "text-slate-300")}
        />
      </label>

      <label
        className={cn(
          "relative z-10 flex h-[54px] cursor-pointer items-center justify-center rounded-[10px]",
          "not-has-checked:hover:bg-slate-850",
        )}
      >
        <input
          type="radio"
          name="mark"
          value="O"
          className="hidden"
          checked={mark === "O"}
          onChange={() => setMark("O")}
        />
        <OIcon
          className={cn("h-8 w-8 transition-all duration-300", mark === "O" ? "text-slate-900" : "text-slate-300")}
        />
      </label>
    </div>
  );
}
