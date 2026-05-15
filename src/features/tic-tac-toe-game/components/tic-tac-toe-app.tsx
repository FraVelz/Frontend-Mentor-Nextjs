"use client";

import { useState } from "react";

import { GameScreen } from "./game-screen";
import { NewGameMenu } from "./new-game-menu";

import type { Mark } from "@/features/tic-tac-toe-game/context/game-context";
import { GameProvider, useGame } from "@/features/tic-tac-toe-game/context/game-context";

function TicTacToeShell({ className }: { className?: string }) {
  const [mark, setMark] = useState<Extract<Mark, "X" | "O">>("X");
  const { isGameStarted } = useGame();

  return (
    <div
      className={`
        bg-zinc-900 p-6 leading-base tracking-base text-base text-zinc-300
        flex min-h-screen justify-center ${className ?? ""} ${!isGameStarted ? "items-center" : "tablet:items-center"}
      `}
    >
      {isGameStarted ? <GameScreen /> : <NewGameMenu mark={mark} setMark={setMark} />}
    </div>
  );
}

export function TicTacToeApp({ className }: { className?: string }) {
  return (
    <GameProvider>
      <TicTacToeShell className={className} />
    </GameProvider>
  );
}
