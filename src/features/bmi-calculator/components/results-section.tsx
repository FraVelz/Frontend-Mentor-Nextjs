import Image from "next/image";

import heroImage from "@/features/bmi-calculator/images/image-man-eating.webp";
import curveLeft from "@/features/bmi-calculator/images/pattern-curved-line-left.svg";
import { cn } from "@/lib/utils";

export function ResultsSection() {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center gap-12 px-6 tablet:flex-row tablet:gap-[4.5rem] tablet:px-10",
        "desktop:mx-auto desktop:max-w-[90rem] desktop:translate-x-0 desktop:items-center desktop:justify-center",
        "desktop:gap-[8.4375rem] desktop:self-center desktop:px-36 desktop:pt-[3.25rem] desktop:pb-[5.375rem]",
      )}
    >
      <Image
        src={curveLeft}
        alt=""
        width={85}
        height={150}
        className="absolute top-0 right-44 hidden desktop:block"
        aria-hidden
      />

      <div
        className={cn(
          "relative aspect-[565/412] w-full max-w-[21.5rem] shrink-0 tablet:max-w-[27.2rem]",
          "desktop:max-w-[35.25rem]",
        )}
      >
        <Image
          src={heroImage}
          alt="Hombre comiendo"
          fill
          className="object-contain object-left"
          sizes="(max-width: 767px) 90vw, (max-width: 1439px) 45vw, 564px"
        />
      </div>

      <div className="flex max-w-xl flex-col gap-8 tablet:px-0 desktop:translate-y-16">
        <h2
          className={cn(
            "text-var-blue-900 text-[32px] leading-[110%] font-semibold tracking-[-0.04em]",
            "desktop:text-[48px]",
          )}
        >
          What your BMI result means
        </h2>
        <p className="text-var-grey-500 text-preset-6-regular">
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy weight may
          lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables.
          Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}
