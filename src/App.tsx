import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-96 py-4 dark:bg-zinc-800">
      <h1 className="font-medium dark:text-zinc-100">Vite + React + Tailwindcss</h1>
      <div className="card">
        <button
          className="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
