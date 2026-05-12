import { cn } from "@/lib/utils";

interface ScoreDivProps {
  className: string;
  headerText: string;
  scoreText: number;
}

export function ScoreDiv({ className, headerText, scoreText }: ScoreDivProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-[10px] text-slate-900", className)}>
      <span
        className={cn(
          "text-[12px] leading-base font-medium tracking-[0.75px] uppercase tablet:text-[14px]",
          "tablet:tracking-[0.9px]",
        )}
      >
        {headerText}
      </span>
      <span className="text-[20px] leading-base font-bold tracking-[1.25px] tablet:text-[24px] tablet:tracking-[1.5px]">
        {scoreText}
      </span>
    </div>
  );
}
