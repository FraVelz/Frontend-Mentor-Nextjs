import { Button } from "./button";
import { OIcon } from "./icons/o-icon";
import { XIcon } from "./icons/x-icon";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";

export function GameOverlay() {
  const { winner, isTie, resetGame, player1, player2, gamemode, setPaused, nextRound } = useGame();

  const winningPlayer = winner && (player1.mark === winner ? player1 : player2);
  let text: string | undefined;

  if (winner && winningPlayer) {
    if (gamemode === "solo") {
      text = winningPlayer.id === 1 ? "You won!" : "Oh no, you lost...";
    } else {
      text = winningPlayer.id === 1 ? "Player 1 wins!" : "Player 2 wins!";
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/50">
      <div className="flex h-[14.25rem] w-full flex-col items-center justify-center bg-slate-800 text-center tablet:h-[16.625rem]">
        {winner ? (
          <>
            <p className="text-[14px] leading-[130%] font-bold tracking-[0.9px] text-slate-300 uppercase tablet:text-base tablet:leading-base tablet:tracking-base">
              {text}
            </p>

            <div
              className={`mt-4 flex items-center justify-center gap-4 ${winner === "X" ? "text-teal-400" : "text-amber-400"}`}
            >
              {winner === "X" ? (
                <XIcon className="h-[26px] w-[26px] tablet:h-16 tablet:w-16" />
              ) : (
                <OIcon className="h-[26px] w-[26px] tablet:h-16 tablet:w-16" />
              )}

              <span className="text-[24px] leading-base font-bold tracking-[1.5px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">
                takes the round
              </span>
            </div>

            <div className="mt-6 flex h-[52px] gap-4">
              <Button handleClick={resetGame} className="bg-slate-300 p-4 hover:bg-slate-100" shadowColor="#6B8997" shadowWidth={4}>
                Quit
              </Button>

              <Button handleClick={nextRound} className="bg-amber-400 p-4 hover:bg-amber-300" shadowColor="#CC8B13" shadowWidth={4}>
                Next round
              </Button>
            </div>
          </>
        ) : isTie ? (
          <>
            <h2 className="text-2xl leading-base font-bold tracking-[1.25px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">
              Round tied
            </h2>

            <div className="mt-6 flex h-[52px] gap-4 tablet:mt-[30px]">
              <Button handleClick={resetGame} className="bg-slate-300 p-4 hover:bg-slate-100" shadowColor="#6B8997" shadowWidth={4}>
                Quit
              </Button>

              <Button handleClick={nextRound} className="bg-amber-400 p-4 hover:bg-amber-300" shadowColor="#CC8B13" shadowWidth={4}>
                Next round
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl leading-base font-bold tracking-[1.25px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">
              Restart game?
            </h2>

            <div className="mt-6 flex h-[52px] gap-4">
              <Button
                handleClick={() => setPaused(false)}
                className="bg-slate-300 p-4 hover:bg-slate-100"
                shadowColor="#6B8997"
                shadowWidth={4}
              >
                No, cancel
              </Button>

              <Button handleClick={resetGame} className="bg-amber-400 p-4 hover:bg-amber-300" shadowColor="#CC8B13" shadowWidth={4}>
                Yes, restart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
