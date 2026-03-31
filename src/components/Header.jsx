import { useState } from "react";

export function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mb-8 md:mb-10">
      <div className="text-6xl md:text-7xl">🌯 🌮 🫓</div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 mt-2 md:mt-3">
        Taco Tornado 🌪️
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-5 md:mt-6 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200"
      >
        Counter: {count}
      </button>
    </div>
  );
}