import { cn } from "@/lib/utils";

interface ScoreDivProps {
  className: string;
  headerText: string;
  scoreText: number;
}

export function ScoreDiv({ className, headerText, scoreText }: ScoreDivProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-[10px] text-zinc-900", className)}>
      <span
        className={cn(
          "leading-base tablet:text-[14px] text-[12px] font-medium tracking-[0.75px] uppercase",
          "tablet:tracking-[0.9px]",
        )}
      >
        {headerText}
      </span>
      <span className="leading-base tablet:text-[24px] tablet:tracking-[1.5px] text-[20px] font-bold tracking-[1.25px]">
        {scoreText}
      </span>
    </div>
  );
}
