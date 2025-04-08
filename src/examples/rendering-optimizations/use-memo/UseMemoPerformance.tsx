import { useState, useMemo } from "react";

const generateBigList = () => {
  return Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
};

const simulateHeavyFilter = (list: string[], query: string): string[] => {
  console.log("🔄 Filtering...");
  return list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};

export const UseMemoPerformance = () => {
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const list = useMemo(() => generateBigList(), []);

  const filteredList = useMemo(() => {
    return simulateHeavyFilter(list, query);
  }, [query, list]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">🔍 useMemo Filter Example</h2>

      <p className="text-sm text-muted-foreground mb-4">
        This example shows how{" "}
        <code className="bg-muted px-1 rounded">useMemo</code> prevents
        expensive recalculations unless its dependencies change. Try clicking
        the button — the filter won't run again.
      </p>

      <input
        className="border p-2 w-full mb-4"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => setClicks((c) => c + 1)}
        className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
      >
        Click Me! ({clicks})
      </button>

      <p className="text-sm text-muted mb-2 italic">
        {query.length > 0 && `Filtering for "${query}"...`}
      </p>

      <ul className="max-h-60 overflow-y-auto border p-2">
        {filteredList.slice(0, 50).map((item) => (
          <li key={item} className="py-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground italic mt-2">
        Open the console to see when the filter runs. It only runs when the
        search input changes.
      </p>
    </div>
  );
};
