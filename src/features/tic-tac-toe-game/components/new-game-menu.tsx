import Image from "next/image";

import { MarkToggler } from "./mark-toggler";
import { ModeSelection } from "./mode-selection";

import type { Mark } from "@/features/tic-tac-toe-game/context/game-context";
import logo from "@/features/tic-tac-toe-game/images/logo.svg";
import { cn } from "@/lib/utils";

interface NewGameMenuProps {
  mark: Extract<Mark, "X" | "O">;
  setMark: (m: Extract<Mark, "X" | "O">) => void;
}

export function NewGameMenu({ mark, setMark }: NewGameMenuProps) {
  return (
    <section className="flex w-full max-w-[28.75rem] flex-col items-center gap-8 text-center tablet:gap-10">
      <Image src={logo} alt="Tic tac toe logo" className="h-auto w-[72px]" priority width={72} height={72} />

      <MarkSection mark={mark} setMark={setMark} />

      <ModeSelection mark={mark} />
    </section>
  );
}

function MarkSection({ mark, setMark }: NewGameMenuProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col gap-4 rounded-2xl bg-zinc-800 p-6 pb-8 shadow-[inset_0_-8px_0_#10212A]",
        "tablet:gap-6 tablet:pt-5 tablet:pb-7",
      )}
    >
      <form className="flex flex-col gap-6">
        <p className="font-bold uppercase">Pick Player 1&apos;s mark</p>

        <MarkToggler mark={mark} setMark={setMark} />
      </form>

      <p className="text-[14px] font-medium leading-[130%] tracking-[0.9px] uppercase">Remember : X goes first</p>
    </section>
  );
}
