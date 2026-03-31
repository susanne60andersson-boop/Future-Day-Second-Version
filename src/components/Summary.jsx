export function Summary({ selected, spice, total, reset }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Din order</h2>

      {selected.map((i) => (
        <div key={i.name}>{i.name}</div>
      ))}

      <p>{"🌶️".repeat(spice)}</p>

      <h3 className="text-lg font-bold">{total} kr</h3>

      <button
        onClick={reset}
        className="w-full bg-gray-200 py-2 rounded"
      >
        Börja om
      </button>
    </div>
  );
}