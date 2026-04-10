export function Summary({ selected, spice, drink, total, reset }) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold">Din order</h2>

      <div className="space-y-1 text-lg md:text-xl">
        {selected.map((i) => (
          <div key={i.name} className="rounded-lg bg-gray-50 px-3 py-1 flex justify-between items-center">
            <span>{i.name}</span>
            <span className="font-semibold">{i.price} kr</span>
          </div>
        ))}
      </div>

      <p className="text-lg">{"🌶️".repeat(spice)}</p>

      {drink && (
        <div className="rounded-lg bg-gray-50 px-3 py-1 text-lg md:text-xl flex justify-between items-center">
          <span>🥤 {drink.name}</span>
          <span className="font-semibold">{drink.price} kr</span>
        </div>
      )}

      <div className="border-t-2 border-gray-300 pt-2">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Totalt:</span>
          <span>{total} kr</span>
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full bg-gray-300 py-3 text-lg rounded-full hover:bg-gray-400 transition"
      >
        Börja om
      </button>
    </div>
  );
}