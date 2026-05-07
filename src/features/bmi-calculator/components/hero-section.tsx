"use client";

import Image from "next/image";

import logo from "@/features/bmi-calculator/images/logo.svg";

import { BmiCalculatorForm } from "./bmi-calculator-form";

export function HeroSection() {
  return (
    <section className="relative px-6 pt-8 tablet:px-10 desktop:px-36 desktop:py-22">
      <div
        className="absolute top-0 left-0 -z-10 h-[640px] w-full rounded-b-[35px] bg-gradient-to-r from-white to-[#d6e6fe] desktop:h-full desktop:min-h-[38rem] desktop:w-[70%]"
        aria-hidden
      />

      <div className="flex flex-col items-center gap-8 tablet:gap-10 desktop:items-start">
        <Image
          src={logo}
          alt="Frontend Mentor"
          width={40}
          height={40}
          className="aspect-square w-10 select-none desktop:w-16"
          draggable={false}
          priority
        />

        <div className="flex w-full flex-col items-center gap-8 tablet:gap-10 desktop:grid desktop:grid-cols-2 desktop:items-start desktop:gap-8">
          <header className="text-center desktop:max-w-xl desktop:justify-self-start desktop:self-center desktop:py-18 desktop:text-left">
            <h1 className="text-var-blue-900 mb-6 text-[48px] leading-[110%] font-semibold tracking-[-0.04em] tablet:mb-8 desktop:text-[64px]">
              Body Mass
              <br />
              Index Calculator
            </h1>
            <p className="text-var-grey-500 text-preset-6-regular mx-auto max-w-xl desktop:mx-0">
              Better understand your weight in relation to your height using our body mass index (BMI) calculator.
              While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to
              evaluate your overall health and well-being.
            </p>
          </header>

          <BmiCalculatorForm />
        </div>
      </div>
    </section>
  );
}
