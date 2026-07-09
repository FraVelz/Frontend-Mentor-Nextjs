import { Button } from "./button";

import type { Mark } from "@/features/tic-tac-toe-game/context/game-context";
import { useGame } from "@/features/tic-tac-toe-game/context/game-context";
import { cn } from "@/lib/utils";

interface ModeSelectionProps {
  mark: Extract<Mark, "X" | "O">;
}

export function ModeSelection({ mark }: ModeSelectionProps) {
  const { startGame } = useGame();

  return (
    <div
      className={cn(
        "tablet:gap-5 tablet:text-[20px] tablet:leading-base tablet:tracking-[1.25px] flex w-full flex-col gap-4",
      )}
    >
      <Button
        onRoundAction={() => startGame(mark, "solo")}
        className="tablet:h-[72px] h-14 w-full rounded-2xl bg-amber-400 pb-1 hover:bg-amber-300"
        shadowColor="#CC8B13"
        shadowWidth={8}
      >
        New Game (VS CPU)
      </Button>
      <Button
        onRoundAction={() => startGame(mark, "multi")}
        className="tablet:h-[72px] h-14 w-full rounded-2xl bg-teal-400 pb-1 hover:bg-teal-300"
        shadowColor="#118C87"
        shadowWidth={8}
      >
        New Game (VS Player)
      </Button>
    </div>
  );
}
