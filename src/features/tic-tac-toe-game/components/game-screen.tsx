import { GameBoard } from "./game-board";
import { GameHeader } from "./game-header";
import { GameOverlay } from "./game-overlay";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";

export function GameScreen() {
  const { winner, isTie, paused } = useGame();

  return (
    <section className="flex w-full max-w-[28.75rem] flex-col items-center gap-16 tablet:gap-5">
      <GameHeader />

      <GameBoard />

      {(winner || isTie || paused) && <GameOverlay />}
    </section>
  );
}
