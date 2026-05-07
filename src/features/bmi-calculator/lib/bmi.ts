export type BmiCategory = "underweight" | "healthy" | "overweight" | "obese";

export function classifyBmi(bmi: number): BmiCategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "healthy";
  if (bmi < 30) return "overweight";
  return "obese";
}

/** Frase corta para “Your BMI suggests you're …”. */
export function categoryPhrase(category: BmiCategory): string {
  switch (category) {
    case "underweight":
      return "underweight";
    case "healthy":
      return "a healthy weight";
    case "overweight":
      return "overweight";
    case "obese":
      return "obese";
    default:
      return "";
  }
}

export function bmiFromMetric(heightCm: number, weightKg: number): number {
  const m = heightCm / 100;
  if (m <= 0 || weightKg <= 0) return NaN;
  return weightKg / (m * m);
}

export function bmiFromImperial(heightInches: number, weightLbs: number): number {
  if (heightInches <= 0 || weightLbs <= 0) return NaN;
  return (703 * weightLbs) / (heightInches * heightInches);
}

export function healthyWeightRangeKg(heightCm: number): { min: number; max: number } {
  const h = heightCm / 100;
  return {
    min: 18.5 * h * h,
    max: 24.9 * h * h,
  };
}

export function totalInches(feet: number, inches: number): number {
  return feet * 12 + inches;
}

export function cmFromInches(totalIn: number): number {
  return totalIn * 2.54;
}

/** Libras totales desde stone + libras (UK). */
export function totalLbsFromStone(stone: number, pounds: number): number {
  return stone * 14 + pounds;
}

/**
 * Formato tipo challenge: "10st 5lbs" a partir de kg (redondeo como en el diseño de referencia).
 */
export function formatStonePoundsFromKg(kg: number): string {
  const totalLbs = kg * 2.20462;
  const stone = Math.floor(totalLbs / 14);
  const pounds = Math.round(totalLbs % 14);
  return `${stone}st ${pounds}lbs`;
}
