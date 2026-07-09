import { HeroSection } from "./hero-section";
import { LimitsSection } from "./limits-section";
import { ResultsSection } from "./results-section";
import { TipsSection } from "./tips-section";

export function BmiCalculator() {
  return (
    <main className="text-var-grey-500 leading-base tablet:gap-24 desktop:gap-0 flex flex-col gap-[3.75rem] pb-16">
      <HeroSection />
      <ResultsSection />
      <TipsSection />
      <LimitsSection />
    </main>
  );
}
