import Image, { type StaticImageData } from "next/image";

import eatingIcon from "@/features/bmi-calculator/images/icon-eating.svg";
import exerciseIcon from "@/features/bmi-calculator/images/icon-exercise.svg";
import sleepIcon from "@/features/bmi-calculator/images/icon-sleep.svg";

type Tip = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
};

const TIPS: Tip[] = [
  {
    id: 1,
    icon: eatingIcon,
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    id: 2,
    icon: exerciseIcon,
    title: "Regular exercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    id: 3,
    icon: sleepIcon,
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

function TipsItem({ tip }: { tip: Tip }) {
  return (
    <article className="flex flex-col gap-8 tablet:flex-row tablet:items-center tablet:gap-10 desktop:flex-col desktop:items-start desktop:gap-12">
      <Image src={tip.icon} alt="" width={64} height={64} className="aspect-square w-16 shrink-0" />
      <div className="flex flex-col gap-6">
        <h3 className="text-var-blue-900 text-[24px] leading-[29px] font-semibold tracking-[-0.04em]">{tip.title}</h3>
        <p className="text-var-grey-500 text-preset-6-regular">{tip.description}</p>
      </div>
    </article>
  );
}

export function TipsSection() {
  return (
    <section className="flex flex-col gap-10 bg-gradient-to-r from-white to-[rgba(214,230,254,0.3)] px-6 py-12 tablet:px-10 tablet:py-12 desktop:grid desktop:grid-cols-3 desktop:gap-8 desktop:px-32 desktop:py-24">
      {TIPS.map((tip) => (
        <TipsItem key={tip.id} tip={tip} />
      ))}
    </section>
  );
}
