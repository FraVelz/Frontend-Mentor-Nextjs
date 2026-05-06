/**
 * Stub de organización (fase A del playbook): mismo contenido base que
 * `bmi-calculator/starter-code/index.html`, en JSX. Sustituir por la UI final.
 */
export default function BmiCalculatorPage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Body Mass Index Calculator</h1>

        <p className="mt-4 max-w-prose text-slate-600">
          Better understand your weight in relation to your height using our body mass index (BM)
          calculator. While BMI is not the sole determinant of a healthy weight, it offers a
          valuable starting point to evaluate your overall health and well-being.
        </p>

        <section className="mt-8 space-y-2 text-slate-700" aria-labelledby="form-heading">
          <h2 id="form-heading" className="text-lg font-medium">
            Enter your details below
          </h2>
          <p>Metric / Imperial</p>
          <p>Height · Weight</p>
          <p>Your BMI is…</p>
          <p>Your BMI suggests you&apos;re (classification). Your ideal weight is between (range).</p>
        </section>

        <section className="mt-10" aria-labelledby="means-heading">
          <h2 id="means-heading" className="text-lg font-medium">
            What your BMI result means
          </h2>
          <p className="mt-2 max-w-prose text-slate-600">
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy
            weight may lower your chances of experiencing health issues later on…
          </p>
        </section>

        <section className="mt-10" aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="text-lg font-medium">
            Limitations of BMI
          </h2>
          <p className="mt-2 max-w-prose text-slate-600">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every
            person…
          </p>
        </section>
      </main>
    </div>
  );
}
