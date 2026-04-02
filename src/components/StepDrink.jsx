import { drinks } from "../data/tacoData";

export function StepDrink({ drink, setDrink, setStep }) {
  return (
    <div className="space-y-4 md:space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold">Välj dryck 🥤</h2>

      <div className="flex flex-wrap gap-3">
        {drinks.map((item) => {
          const selected = drink?.name === item.name;
          return (
            <button
              key={item.name}
              onClick={() => {
                setDrink(item);
                setStep(9);
              }}
              className={`px-4 py-2 md:px-5 md:py-3 rounded-full border font-semibold text-lg transition ${
                selected
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white hover:bg-yellow-100"
              }`}
            >
              {item.name} {item.price > 0 ? `(${item.price} kr)` : "(Gratis)"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
