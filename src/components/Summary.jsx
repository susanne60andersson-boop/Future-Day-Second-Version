export function Summary({ selected, spice, drink, total, reset }) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold">Din order</h2>

      <div className="space-y-1 text-lg md:text-xl">
        {selected.map((i) => (
          <div key={i.name} className="rounded-lg bg-gray-50 px-3 py-1">
            {i.name}
          </div>
        ))}
      </div>

      <p className="text-lg">{"🌶️".repeat(spice)}</p>

      {drink && (
        <div className="rounded-lg bg-gray-50 px-3 py-1 text-lg md:text-xl">
          🥤 {drink.name}
        </div>
      )}

      <h3 className="text-2xl font-bold">{total} kr</h3>

      <button
        onClick={reset}
        className="w-full bg-gray-300 py-3 text-lg rounded-full hover:bg-gray-400 transition"
      >
        Börja om
      </button>
    </div>
  );
}