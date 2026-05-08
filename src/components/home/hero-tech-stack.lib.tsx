import { cn } from "@/lib/utils";
import { NextJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "@/components/home/hero-tech-stack-icons";

const hoverIdle = "transition-transform duration-200 motion-reduce:group-hover:scale-100";

const mdIconClass = cn(
  "size-10 shrink-0 drop-shadow-[0_8px_26px_rgb(9_9_11/0.45)] sm:size-14 lg:size-[3.75rem] group-hover:scale-[1.06]",
  hoverIdle,
);

/** Entradas de la constelación (layout + clase del icono). */
export const techStackItems = [
  {
    desktopPos:
      "max-sm:w-fit lg:left-1/2 lg:top-[50%] lg:z-20 lg:w-[13rem] lg:max-w-[min(13rem,48%)] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rotate-[2deg]",
    hint: "App Router · RSC",
    Icon: NextJsIcon,
    iconClass: cn(
      "size-10 sm:size-14 drop-shadow-[0_10px_30px_rgb(9_9_11/0.5)] sm:size-[3.5rem] lg:size-[4.5rem] group-hover:scale-[1.04]",
      hoverIdle,
    ),
    label: "Next.js",
    zBase: "lg:z-20",
  },
  {
    desktopPos: "max-sm:w-fit lg:left-6 lg:top-6 lg:z-10 lg:w-[11.5rem] lg:max-w-[42%] lg:-rotate-[8deg]",
    hint: "Componentes UI",
    Icon: ReactIcon,
    iconClass: mdIconClass,
    label: "React",
    zBase: "lg:z-10",
  },
  {
    desktopPos: "max-sm:w-fit lg:left-8 lg:bottom-10 lg:z-10 lg:w-[11.5rem] lg:max-w-[42%] lg:rotate-[12deg]",
    hint: "Tipado estricto",
    Icon: TypeScriptIcon,
    iconClass: mdIconClass,
    label: "TypeScript",
    zBase: "lg:z-10",
  },
  {
    desktopPos: "max-sm:w-fit lg:right-8 lg:top-[8%] lg:z-10 lg:w-[11.5rem] lg:max-w-[42%] lg:rotate-[10deg]",
    hint: "Utilidades + v4",
    Icon: TailwindIcon,
    iconClass: mdIconClass,
    label: "Tailwind CSS",
    zBase: "lg:z-10",
  },
] as const;
