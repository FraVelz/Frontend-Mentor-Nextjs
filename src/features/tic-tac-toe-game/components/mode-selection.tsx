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
        "flex w-full flex-col gap-4 tablet:gap-5 tablet:text-[20px] tablet:leading-base tablet:tracking-[1.25px]",
      )}
    >
      <Button
        onRoundAction={() => startGame(mark, "solo")}
        className="h-14 w-full rounded-2xl bg-amber-400 pb-1 hover:bg-amber-300 tablet:h-[72px]"
        shadowColor="#CC8B13"
        shadowWidth={8}
      >
        New Game (VS CPU)
      </Button>
      <Button
        onRoundAction={() => startGame(mark, "multi")}
        className="rounded-2xl bg-teal-400 pb-1 hover:bg-teal-300 h-14 w-full tablet:h-[72px]"
        shadowColor="#118C87"
        shadowWidth={8}
      >
        New Game (VS Player)
      </Button>
    </div>
  );
}
