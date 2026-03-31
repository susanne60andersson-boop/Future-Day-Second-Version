import { categories, multiSelect } from "../data/tacoData";

export function StepCategory({ category, next, toggleItem, setStep }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{category}</h2>

      <div className="flex flex-wrap gap-2">
        {categories[category].map((item) => (
          <button
            key={item.name}
            onClick={() => {
              toggleItem(category, item);
              if (!multiSelect.includes(category)) setStep(next);
            }}
            className="px-3 py-1 rounded-full border bg-white hover:bg-yellow-100"
          >
            {item.name} ({item.price} kr)
          </button>
        ))}
      </div>

      {multiSelect.includes(category) && (
        <button
          onClick={() => setStep(next)}
          className="w-full bg-purple-600 text-white py-2 rounded-full"
        >
          Nästa
        </button>
      )}
    </div>
  );
}