import Image, { type StaticImageData } from "next/image";

import ageIcon from "@/features/bmi-calculator/images/icon-age.svg";
import genderIcon from "@/features/bmi-calculator/images/icon-gender.svg";
import muscleIcon from "@/features/bmi-calculator/images/icon-muscle.svg";
import pregnancyIcon from "@/features/bmi-calculator/images/icon-pregnancy.svg";
import raceIcon from "@/features/bmi-calculator/images/icon-race.svg";
import curveRight from "@/features/bmi-calculator/images/pattern-curved-line-right.svg";

import { cn } from "@/lib/utils";

type Limit = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
};

const LIMITS: Limit[] = [
  {
    id: 1,
    icon: genderIcon,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    id: 2,
    icon: ageIcon,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    id: 3,
    icon: muscleIcon,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    id: 4,
    icon: pregnancyIcon,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    id: 5,
    icon: raceIcon,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

const LIMIT_GRID_POSITIONS = [
  "desktop:col-start-8 desktop:row-start-1",
  "desktop:col-start-5 desktop:row-start-2",
  "desktop:col-start-9 desktop:row-start-2",
  "desktop:col-start-3 desktop:row-start-3",
  "desktop:col-start-7 desktop:row-start-3",
] as const;

function LimitCard({ limit, className }: { limit: Limit; className?: string }) {
  return (
    <article className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[16px_32px_56px_rgba(143,174,207,0.25)]"
        aria-hidden
      />
      <div className="relative flex h-full flex-col gap-4 rounded-2xl bg-white p-6 tablet:p-8">
        <div
          className={cn(
            "text-var-blue-900 flex items-start gap-4 text-[20px] font-semibold tracking-[-0.04em]",
            "leading-base",
          )}
        >
          <Image src={limit.icon} alt="" width={32} height={32} className="aspect-square w-8 shrink-0" />
          <h3>{limit.title}</h3>
        </div>
        <p className="text-var-grey-500 text-preset-6-regular">{limit.description}</p>
      </div>
    </article>
  );
}

export function LimitsSection() {
  return (
    <section
      className={cn(
        "relative flex flex-col gap-14 px-5 pb-16 tablet:px-10",
        "desktop:mx-auto desktop:grid desktop:max-w-[90rem] desktop:grid-cols-12 desktop:gap-8 desktop:px-36 desktop:py-24",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-8 text-center desktop:col-start-1 desktop:row-start-1 desktop:max-w-[34.5rem]",
          "desktop:text-left",
        )}
      >
        <h2
          className={cn(
            "text-var-blue-900 text-[32px] leading-[110%] font-semibold tracking-[-0.04em]",
            "desktop:text-[48px]",
          )}
        >
          Limitations of BMI
        </h2>
        <p className="text-var-grey-500 text-preset-6-regular">
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
          groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <Image
        src={curveRight}
        alt=""
        width={85}
        height={185}
        className="absolute top-[22.5rem] left-[18.75rem] hidden desktop:block"
        aria-hidden
      />

      <div
        className={cn(
          "flex flex-col items-center gap-4 tablet:flex-row tablet:flex-wrap tablet:items-stretch tablet:justify-center",
          "desktop:contents",
        )}
      >
        {LIMITS.map((item, index) => (
          <LimitCard
            key={item.id}
            limit={item}
            className={cn(
              "w-full max-w-[33.5rem] tablet:max-w-[20.9rem] desktop:w-[22.8rem] desktop:max-w-none",
              LIMIT_GRID_POSITIONS[index],
            )}
          />
        ))}
      </div>
    </section>
  );
}
