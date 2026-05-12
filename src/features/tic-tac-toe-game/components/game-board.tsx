import { GameScores } from "./game-scores";
import { OIcon } from "./icons/o-icon";
import { OutlinedOIcon } from "./icons/outlined-o-icon";
import { OutlinedXIcon } from "./icons/outlined-x-icon";
import { XIcon } from "./icons/x-icon";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";
import { cn } from "@/lib/utils";

export function GameBoard() {
  const { board, playRound, currentPlayer, gamemode } = useGame();

  if (!currentPlayer) return null;

  const isCpuTurn = gamemode === "solo" && currentPlayer.id === 2;

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        {board.map((item, index) => (
          <div
            key={index}
            className={cn(
              "group flex aspect-square w-full items-center justify-center rounded-[10px] bg-slate-800 pb-2",
              "shadow-[inset_0_-8px_0_#10212A]",
              isCpuTurn || item ? "cursor-not-allowed" : "cursor-pointer",
              isCpuTurn && "opacity-60",
            )}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (isCpuTurn) return;
              playRound(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (!isCpuTurn) playRound(index);
              }
            }}
          >
            {item === "X" && <XIcon className="h-10 w-10 text-teal-400 tablet:h-16 tablet:w-16" />}
            {item === "O" && <OIcon className="h-10 w-10 text-amber-400 tablet:h-16 tablet:w-16" />}

            {!item && !isCpuTurn && (
              <>
                {currentPlayer.mark === "X" && (
                  <OutlinedXIcon
                    className={cn(
                      "h-10 w-10 opacity-0 transition-all duration-300 group-hover:opacity-100 tablet:h-16",
                      "tablet:w-16",
                    )}
                  />
                )}
                {currentPlayer.mark === "O" && (
                  <OutlinedOIcon
                    className={cn(
                      "h-10 w-10 opacity-0 transition-all duration-300 group-hover:opacity-100 tablet:h-16",
                      "tablet:w-16",
                    )}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <GameScores />
    </section>
  );
}
