/**
 * Conversión del `index.html` del ZIP: mismo contenido, en JSX.
 * Componentes, estilos y datos extra van en esta carpeta (`src/features/{folder_name}/`).
 */

export default function ResultsSummaryComponentPage() {
  return (
    <div className="bg-[hsl(221, 100%, 96%)] flex min-h-screen w-screen flex-col">
      <main className="">
        <section className="h-89 rounded-b-2xl bg-linear-to-b from-[#7755FF] to-[#2F2CE9]">
          <div className="flex w-65 flex-col gap-6">
            <h1 className="">Your Result</h1>

            <div>
              <p>76</p>
              <p>of 100</p>
            </div>

            <div>
              <h2>Great</h2>
              <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Summary</h2>
          <p>Reaction</p>
          <p>80 / 100</p>
          <p>Memory</p>
          <p>92 / 100</p>
          <p>Verbal</p>
          <p>61 / 100</p>
          <p>Visual</p>
          <p>72 / 100</p>
          <p>Continue</p>
        </section>
      </main>
    </div>
  );
}
