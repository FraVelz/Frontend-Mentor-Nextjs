import { describe, expect, it } from "vitest";

import {
  bmiFromImperial,
  bmiFromMetric,
  categoryPhrase,
  classifyBmi,
  healthyWeightRangeKg,
  totalInches,
  totalLbsFromStone,
} from "./bmi";

describe("bmiFromMetric", () => {
  it("computes BMI for 180cm / 75kg ≈ 23.1 (healthy)", () => {
    const bmi = bmiFromMetric(180, 75);
    expect(bmi).toBeCloseTo(23.148, 2);
    expect(classifyBmi(bmi)).toBe("healthy");
    expect(categoryPhrase("healthy")).toBe("a healthy weight");
  });

  it("returns NaN for non-positive inputs", () => {
    expect(bmiFromMetric(0, 70)).toBeNaN();
    expect(bmiFromMetric(170, -1)).toBeNaN();
  });
});

describe("classifyBmi", () => {
  it("classifies WHO-style bands", () => {
    expect(classifyBmi(18.4)).toBe("underweight");
    expect(classifyBmi(18.5)).toBe("healthy");
    expect(classifyBmi(24.9)).toBe("healthy");
    expect(classifyBmi(25)).toBe("overweight");
    expect(classifyBmi(30)).toBe("obese");
  });
});

describe("bmiFromImperial", () => {
  it("matches metric conversion for 5ft 11in / 11st 0lbs", () => {
    const inches = totalInches(5, 11);
    const lbs = totalLbsFromStone(11, 0);
    const bmi = bmiFromImperial(inches, lbs);
    expect(bmi).toBeCloseTo(21.7, 0);
    expect(classifyBmi(bmi)).toBe("healthy");
  });
});

describe("healthyWeightRangeKg", () => {
  it("returns 18.5–24.9 BMI band in kg for a height", () => {
    const { min, max } = healthyWeightRangeKg(170);
    expect(min).toBeCloseTo(18.5 * 1.7 * 1.7, 2);
    expect(max).toBeCloseTo(24.9 * 1.7 * 1.7, 2);
  });
});
