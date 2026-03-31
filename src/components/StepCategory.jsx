import { categories, multiSelect } from "../data/tacoData";

export function StepCategory({ category, next, toggleItem, setStep, selected }) {
  const isSelected = (item) => {
    return selected.some(
      (selectedItem) =>
        selectedItem.name === item.name && selectedItem.category === category
    );
  };

  return (
    <div className="space-y-4 md:space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold">{category}</h2>

      <div className="flex flex-wrap gap-3">
        {categories[category].map((item) => {
          const selected = isSelected(item);
          return (
            <button
              key={item.name}
              onClick={() => {
                toggleItem(category, item);
                if (!multiSelect.includes(category)) setStep(next);
              }}
              className={`px-4 py-2 md:px-5 md:py-3 rounded-full border font-semibold text-lg transition ${
                selected
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white hover:bg-yellow-100"
              }`}
            >
              {item.name} ({item.price} kr)
            </button>
          );
        })}
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