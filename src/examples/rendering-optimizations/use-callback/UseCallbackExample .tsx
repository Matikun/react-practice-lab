import React, { useCallback, useState } from "react";

// 👶 Child component
const TodoList = React.memo(
  ({ todos, addTodo }: { todos: string[]; addTodo: () => void }) => {
    console.log("🧾 TodoList rendered");
    return (
      <div className="p-4 border rounded mb-4">
        <h3 className="font-bold text-lg mb-2">📋 Todo List</h3>
        <ul className="list-disc list-inside">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button
          onClick={addTodo}
          className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
        >
          Add Todo
        </button>
      </div>
    );
  }
);

// 🧠 Parent component
export const UseCallbackExample = () => {
  const [todos, setTodos] = useState(["Learn React"]);
  const [count, setCount] = useState(0);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold">🔁 useCallback Example</h2>
      <p className="text-sm text-muted-foreground">
        This example shows how <code>useCallback</code> prevents unnecessary
        re-renders.
        <br />
        <span className="text-yellow-500 font-semibold">💡 Tip:</span> Open your
        browser DevTools and check the console to see when <code>TodoList</code>{" "}
        re-renders!
      </p>

      <TodoList todos={todos} addTodo={addTodo} />

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Increment Count ({count})
      </button>
    </div>
  );
};
