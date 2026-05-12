import Image from "next/image";

import { OIcon } from "./icons/o-icon";
import { XIcon } from "./icons/x-icon";

import { useGame } from "@/features/tic-tac-toe-game/context/game-context";
import logo from "@/features/tic-tac-toe-game/images/logo.svg";
import restartIcon from "@/features/tic-tac-toe-game/images/icon-restart.svg";
import { cn } from "@/lib/utils";

export function GameHeader() {
  const { currentPlayer, setPaused } = useGame();

  if (!currentPlayer) return null;

  return (
    <header className="grid w-full grid-cols-3 items-center gap-5">
      <Image src={logo} alt="Tic tac toe logo" className="h-auto w-[72px]" width={72} height={72} />

      <div
        className={cn(
          "flex h-10 items-center justify-center gap-3 rounded-md bg-slate-800 text-center",
          "text-[14px] leading-[130%] font-bold tracking-[0.9px] uppercase shadow-[inset_0_-4px_0_#10212A]",
          "tablet:h-[52px] tablet:text-base tablet:leading-base tablet:tracking-base",
        )}
      >
        {currentPlayer.mark === "X" ? (
          <XIcon className="h-4 w-4 tablet:h-5 tablet:w-5" />
        ) : (
          <OIcon className="h-4 w-4 tablet:h-5 tablet:w-5" />
        )}

        <span>Turn</span>
      </div>

      <button
        type="button"
        onClick={() => setPaused(true)}
        className={cn(
          "flex h-10 w-10 cursor-pointer items-center justify-center justify-self-end rounded-md bg-slate-300",
          "shadow-[inset_0_-4px_0_#6B8997] transition-all hover:bg-slate-100 tablet:h-[52px] tablet:w-[52px]",
        )}
      >
        <Image src={restartIcon} alt="Restart icon" className="h-4 w-4 tablet:h-5 tablet:w-5" width={20} height={20} />
      </button>
    </header>
  );
}
