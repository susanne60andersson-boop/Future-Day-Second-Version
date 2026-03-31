import { useState } from "react";

export function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mb-6">
      <div className="text-5xl">🌯 🌮 🫓</div>
      <h1 className="text-3xl font-bold text-purple-600">
        Taco Tornado 🌪️
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Counter: {count}
      </button>
    </div>
  );
}