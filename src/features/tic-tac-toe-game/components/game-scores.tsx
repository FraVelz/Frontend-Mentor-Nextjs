import { ScoreDiv } from "./score-div";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";

export function GameScores() {
  const { player1, player2, gamemode, ties } = useGame();

  const xPlayer = player1.mark === "X" ? player1 : player2;
  const oPlayer = player1.mark === "O" ? player1 : player2;

  const isSolo = gamemode === "solo";

  return (
    <section className="grid h-16 w-full grid-cols-3 gap-5 tablet:h-[72px]">
      <ScoreDiv
        className="bg-teal-400"
        headerText={`X ${isSolo ? (xPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${xPlayer.id})`}`}
        scoreText={xPlayer.wins}
      />

      <ScoreDiv className="bg-slate-300" headerText="Ties" scoreText={ties} />

      <ScoreDiv
        className="bg-amber-400"
        headerText={`O ${isSolo ? (oPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${oPlayer.id})`}`}
        scoreText={oPlayer.wins}
      />
    </section>
  );
}
