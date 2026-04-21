/**
 * Conversión del `index.html` del ZIP: mismo contenido, en JSX.
 * Componentes, estilos y datos extra van en esta carpeta (`src/features/{folder_name}/`).
 */
export default function ResultsSummaryComponentPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p>Your Result</p>
        <p>76</p>
        <p>of 100</p>
        <p>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
        <p>Summary</p>
        <p>Reaction</p>
        <p>80 / 100</p>
        <p>Memory</p>
        <p>92 / 100</p>
        <p>Verbal</p>
        <p>61 / 100</p>
        <p>Visual</p>
        <p>72 / 100</p>
        <p>Continue</p>
      </main>

      <footer className="attribution text-[0.6875rem] text-center [&_a]:text-[hsl(228,45%,44%)]">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by{" "}
        <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}
