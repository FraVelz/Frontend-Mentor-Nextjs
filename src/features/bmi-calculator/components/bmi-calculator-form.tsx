"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import {
  bmiFromImperial,
  bmiFromMetric,
  categoryPhrase,
  classifyBmi,
  cmFromInches,
  formatStonePoundsFromKg,
  healthyWeightRangeKg,
  totalInches,
  totalLbsFromStone,
} from "../lib/bmi";

type Unit = "metric" | "imperial";

const radioClass =
  "flex h-[31px] w-[31px] shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-var-grey-500 outline-none hover:border-var-blue-500 checked:border-0 checked:bg-var-blue-100 checked:before:block checked:before:h-[15px] checked:before:w-[15px] checked:before:rounded-full checked:before:bg-var-blue-500 checked:before:content-[''] focus-visible:ring-2 focus-visible:ring-var-blue-500 focus-visible:ring-offset-2";

const fieldShell =
  "border-var-grey-500 hover:border-var-blue-500 flex gap-6 rounded-xl border p-6 text-[24px] leading-[29px] font-semibold tracking-[-0.04em] transition-colors desktop:py-4";

function fmt1(n: number): string {
  return n.toFixed(1);
}

export function BmiCalculatorForm() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [stone, setStone] = useState("");
  const [lbs, setLbs] = useState("");

  const result = useMemo(() => {
    if (unit === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (!Number.isFinite(h) || !Number.isFinite(w) || h <= 0 || w <= 0) return null;
      const bmi = bmiFromMetric(h, w);
      if (!Number.isFinite(bmi)) return null;
      const cat = classifyBmi(bmi);
      const rangeKg = healthyWeightRangeKg(h);
      return { bmi, cat, rangeKg, metric: true as const };
    }

    const f = parseFloat(ft);
    const i = parseFloat(inch);
    const st = parseFloat(stone);
    const lb = parseFloat(lbs);
    if (!Number.isFinite(f) || !Number.isFinite(i)) return null;
    const inches = totalInches(f, i);
    if (inches <= 0) return null;

    const stVal = Number.isFinite(st) ? st : 0;
    const lbVal = Number.isFinite(lb) ? lb : 0;
    const totalLb = totalLbsFromStone(stVal, lbVal);
    if (totalLb <= 0) return null;

    const bmi = bmiFromImperial(inches, totalLb);
    if (!Number.isFinite(bmi)) return null;
    const cat = classifyBmi(bmi);
    const heightCmVal = cmFromInches(inches);
    const rangeKg = healthyWeightRangeKg(heightCmVal);
    return { bmi, cat, rangeKg, metric: false as const };
  }, [unit, heightCm, weightKg, ft, inch, stone, lbs]);

  return (
    <form
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-[16px_32px_56px_rgba(143,174,207,0.25)] tablet:gap-8 tablet:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-var-blue-900 text-[24px] leading-[29px] font-semibold tracking-[-0.04em]">
        Enter your details below
      </h2>

      <fieldset className="grid grid-cols-2 gap-6">
        <legend className="sr-only">Unit system</legend>
        <label className="flex cursor-pointer items-center gap-4">
          <input
            type="radio"
            name="bmi-unit"
            checked={unit === "metric"}
            onChange={() => setUnit("metric")}
            className={radioClass}
          />
          <span className="text-var-blue-900 font-semibold">Metric</span>
        </label>
        <label className="flex cursor-pointer items-center gap-4">
          <input
            type="radio"
            name="bmi-unit"
            checked={unit === "imperial"}
            onChange={() => setUnit("imperial")}
            className={radioClass}
          />
          <span className="text-var-blue-900 font-semibold">Imperial</span>
        </label>
      </fieldset>

      <div
        className={cn(
          "flex flex-col gap-4 tablet:gap-6",
          unit === "metric" && "tablet:grid tablet:grid-cols-2",
        )}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="height-cm" className="text-var-grey-500 text-[14px] leading-base">
            Height
          </label>
          {unit === "metric" ? (
            <div className={fieldShell}>
              <input
                id="height-cm"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="0"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
              />
              <span className="text-var-blue-500">cm</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 tablet:gap-6">
              <div className={fieldShell}>
                <input
                  id="height-ft"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="0"
                  value={ft}
                  onChange={(e) => setFt(e.target.value)}
                  className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
                />
                <span className="text-var-blue-500">ft</span>
              </div>
              <div className={fieldShell}>
                <input
                  id="height-in"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  placeholder="0"
                  value={inch}
                  onChange={(e) => setInch(e.target.value)}
                  className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
                />
                <span className="text-var-blue-500">in</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weight-kg" className="text-var-grey-500 text-[14px] leading-base">
            Weight
          </label>
          {unit === "metric" ? (
            <div className={fieldShell}>
              <input
                id="weight-kg"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="0"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
              />
              <span className="text-var-blue-500">kg</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 tablet:gap-6">
              <div className={fieldShell}>
                <input
                  id="weight-st"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  placeholder="0"
                  value={stone}
                  onChange={(e) => setStone(e.target.value)}
                  className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
                />
                <span className="text-var-blue-500">st</span>
              </div>
              <div className={fieldShell}>
                <input
                  id="weight-lbs"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  placeholder="0"
                  value={lbs}
                  onChange={(e) => setLbs(e.target.value)}
                  className="text-var-blue-900 placeholder:text-var-grey-500 w-full focus:outline-none"
                />
                <span className="text-var-blue-500">lbs</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {!result ? (
        <section className="bg-var-blue-500 flex flex-col gap-6 rounded-2xl p-8 text-white tablet:gap-4 tablet:rounded-l-2xl tablet:rounded-r-[80px]">
          <h3 className="text-[24px] leading-[29px] font-semibold tracking-[-0.04em]">Welcome!</h3>
          <p className="text-[14px] leading-base">
            Enter your height and weight and you&apos;ll see your BMI result here
          </p>
        </section>
      ) : (
        <section
          className="bg-var-blue-500 flex flex-col gap-6 rounded-2xl p-8 text-white tablet:grid tablet:grid-cols-2 tablet:items-center tablet:rounded-l-2xl tablet:rounded-r-[80px]"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Your BMI is...</p>
            <p className="text-[48px] leading-[110%] font-semibold tracking-[-0.04em]">{fmt1(result.bmi)}</p>
          </div>
          <p className="text-[14px] leading-base">
            Your BMI suggests you&apos;re {categoryPhrase(result.cat)}. Your ideal weight is between{" "}
            <strong>
              {result.metric
                ? `${fmt1(result.rangeKg.min)}kgs - ${fmt1(result.rangeKg.max)}kgs`
                : `${formatStonePoundsFromKg(result.rangeKg.min)} - ${formatStonePoundsFromKg(result.rangeKg.max)}`}
            </strong>
            .
          </p>
        </section>
      )}
    </form>
  );
}
