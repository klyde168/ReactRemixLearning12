import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <p className="text-2xl mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        遞增
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        遞減
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        歸零
      </button>
    </div>
  );
}
