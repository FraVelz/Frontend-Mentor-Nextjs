import { GameBoard } from "./game-board";
import { GameHeader } from "./game-header";
import { GameOverlay } from "./game-overlay";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";

export function GameScreen() {
  const { winner, isTie, paused } = useGame();

  return (
    <section className="tablet:gap-5 flex w-full max-w-[28.75rem] flex-col items-center gap-16">
      <GameHeader />

      <GameBoard />

      {(winner || isTie || paused) && <GameOverlay />}
    </section>
  );
}
