import { GameScores } from "./game-scores";
import { OIcon } from "./icons/o-icon";
import { OutlinedOIcon } from "./icons/outlined-o-icon";
import { OutlinedXIcon } from "./icons/outlined-x-icon";
import { XIcon } from "./icons/x-icon";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";
import { cn } from "@/lib/utils";

/** Position keys avoid array index keys in the static 3×3 grid. */
const BOARD_CELL_KEYS = ["nw", "n", "ne", "w", "c", "e", "sw", "s", "se"] as const;

export function GameBoard() {
  const { board, playRound, currentPlayer, gamemode } = useGame();

  if (!currentPlayer) return null;

  const isCpuTurn = gamemode === "solo" && currentPlayer.id === 2;

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        {board.map((item, index) => (
          <button
            type="button"
            key={BOARD_CELL_KEYS[index]}
            aria-label={item ? `Cell ${index + 1}: ${item}` : `Place ${currentPlayer.mark} in cell ${index + 1}`}
            disabled={isCpuTurn || Boolean(item)}
            className={cn(
              "group flex aspect-square w-full items-center justify-center rounded-[10px] bg-zinc-800 pb-2",
              "shadow-[inset_0_-8px_0_#10212A]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400",
              isCpuTurn || item ? "cursor-not-allowed" : "cursor-pointer",
              isCpuTurn && "opacity-60",
            )}
            onClick={() => {
              playRound(index);
            }}
          >
            {item === "X" && <XIcon className="tablet:h-16 tablet:w-16 h-10 w-10 text-teal-400" />}
            {item === "O" && <OIcon className="tablet:h-16 tablet:w-16 h-10 w-10 text-amber-400" />}

            {!item && !isCpuTurn && (
              <>
                {currentPlayer.mark === "X" && (
                  <OutlinedXIcon
                    className={cn(
                      "tablet:h-16 h-10 w-10 opacity-0 transition-all duration-300 group-hover:opacity-100",
                      "tablet:w-16",
                    )}
                  />
                )}
                {currentPlayer.mark === "O" && (
                  <OutlinedOIcon
                    className={cn(
                      "tablet:h-16 h-10 w-10 opacity-0 transition-all duration-300 group-hover:opacity-100",
                      "tablet:w-16",
                    )}
                  />
                )}
              </>
            )}
          </button>
        ))}
      </div>

      <GameScores />
    </section>
  );
}
