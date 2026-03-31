import { spiceLevels } from "../data/tacoData";

export function StepSpice({ setSpice, setStep }) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold">Välj styrka 🔥</h2>

      <div className="flex justify-center gap-3 md:gap-4">
        {spiceLevels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => {
              setSpice(lvl);
              setStep(2);
            }}
            className="px-4 py-2 md:px-5 md:py-3 bg-white rounded-full border text-lg md:text-xl hover:bg-red-100 transition"
          >
            {"🌶️".repeat(lvl)}
          </button>
        ))}
      </div>
    </div>
  );
}