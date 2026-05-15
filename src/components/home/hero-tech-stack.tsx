import { cn } from "@/lib/utils";
import { techStackItems } from "@/components/home/hero-tech-stack.lib";

export function HeroTechStack() {
  return (
    <div
      className={cn(
        "group/hero-stack relative mx-auto w-fit lg:mx-0 lg:max-w-none",
        "w-full rounded-3xl p-4",
        "bg-linear-to-tr from-transparent from-20% to-[rgba(0,0,0,0.5)] to-100%",
      )}
      aria-label="Stack tecnológico del proyecto"
    >
      <ul
        className={cn(
          "relative isolate z-0 flex h-fit min-h-[10rem] list-none flex-row gap-10 max-sm:flex-wrap max-sm:gap-x-3 max-sm:gap-y-10",
          "max-sm:justify-center",
          "px-4 py-6 lg:block lg:min-h-[24rem] lg:gap-0 lg:px-10 lg:pt-12 lg:pb-14",
        )}
      >
        {techStackItems.map(({ label, hint, Icon, iconClass, desktopPos, zBase }) => (
          <li
            key={label}
            className={cn(
              "group w-[min(100%,18rem)] max-w-[90vw] transition-opacity duration-200 outline-none hover:opacity-100",
              "focus-visible:opacity-100 lg:absolute lg:w-auto lg:max-w-none lg:focus-within:z-50 lg:hover:z-50",
              zBase,
              desktopPos,
              "max-lg:-mt-6 max-lg:min-w-[5rem]",
              "flex h-fit min-w-0 flex-col flex-wrap items-center gap-4 text-center",
              "lg:flex-row lg:items-center lg:gap-1 lg:text-center",
            )}
          >
            {/* Fila: icono SVG + textos (nombre + hint) */}
            <Icon className={iconClass} />

            <div
              className={cn(
                "flex w-full min-w-0 flex-1 flex-col items-center sm:items-start lg:items-center",
                "max-lg:min-w-0 max-lg:flex-1",
              )}
            >
              <p className="w-full text-sm font-semibold tracking-wide text-pretty break-words text-white lg:text-base">
                {label}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-pretty break-words text-zinc-400 lg:text-sm">{hint}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
