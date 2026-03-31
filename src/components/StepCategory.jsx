import { categories, multiSelect } from "../data/tacoData";

export function StepCategory({ category, next, toggleItem, setStep }) {
  return (
    <div className="space-y-4 md:space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold">{category}</h2>

      <div className="flex flex-wrap gap-3">
        {categories[category].map((item) => (
          <button
            key={item.name}
            onClick={() => {
              toggleItem(category, item);
              if (!multiSelect.includes(category)) setStep(next);
            }}
            className="px-4 py-2 md:px-5 md:py-3 rounded-full border bg-white font-semibold text-lg hover:bg-yellow-100 transition"
          >
            {item.name} ({item.price} kr)
          </button>
        ))}
      </div>

      {multiSelect.includes(category) && (
        <button
          onClick={() => setStep(next)}
          className="w-full bg-purple-600 text-white py-3 text-lg rounded-full hover:bg-purple-700 transition"
        >
          Nästa
        </button>
      )}
    </div>
  );
}