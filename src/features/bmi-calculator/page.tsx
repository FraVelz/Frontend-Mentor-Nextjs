import { Inter } from "next/font/google";

import { FmAttribution } from "@/components/ui/fm-attribution";

import { BmiCalculator } from "./components/BmiCalculator";
import "./style.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bmi-inter",
});

export default function BmiCalculatorPage() {
  return (
    <div className={`${inter.className} ${inter.variable} flex min-h-screen flex-col bg-white text-base antialiased`}>
      <BmiCalculator />
      <FmAttribution
        challengeName="Body Mass Index Calculator"
        challengeUrl="https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T"
        className="mt-auto"
      />
    </div>
  );
}
