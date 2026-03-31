import { spiceLevels } from "../data/tacoData";

export function StepSpice({ setSpice, setStep }) {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-xl font-bold">Välj styrka 🔥</h2>

      <div className="flex justify-center gap-2">
        {spiceLevels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => {
              setSpice(lvl);
              setStep(2);
            }}
            className="px-3 py-1 bg-white rounded-full border hover:bg-red-100"
          >
            {"🌶️".repeat(lvl)}
          </button>
        ))}
      </div>
    </div>
  );
}