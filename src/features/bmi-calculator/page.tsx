import { Inter } from "next/font/google";

import { BmiCalculator } from "./components/BmiCalculator";
import "./style.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bmi-inter",
});

export default function BmiCalculatorPage() {
  return (
    <div className={`${inter.className} ${inter.variable} min-h-screen bg-white text-base antialiased`}>
      <BmiCalculator />
    </div>
  );
}
