# 🧪 React Practice Lab

A personal playground to practice and explore core React concepts — from performance optimizations to state management and component patterns.

> Built using React, Vite, and TypeScript for fast iteration and clean architecture.

---

## 🗂️ Project Structure

This lab is organized for scalability, making it easy to add new examples as pages.

---

## 🚀 Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

📚 Available Examples

Concept Path Description

React.memo /memo-list Prevents re-renders of list items
... (more coming) More concepts will be added as pages

---

🛠️ Tech Stack
⚛️ React 18+

⚡ Vite

💬 TypeScript

🔁 React Router DOM

---

🎯 Goals
Practice advanced React concepts hands-on

Build real, interactive examples to test optimizations

Document reusable patterns for interviews or personal growth

Create a scalable dev environment to iterate quickly

---

🧠 Future Additions
Context + Reducer pattern

Custom hooks

Forms with validation

Performance comparison between controlled/uncontrolled inputs

React Profiler integration

---

### Custom Hooks

#### useDebounce

The `useDebounce` hook is a utility for debouncing a value. It delays updating the value until after a specified delay has passed since the last change.

**Usage:**

```tsx
import useDebounce from './hooks/useDebounce';

const Component = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
```

**Parameters:**
- `value` (any): The value to debounce.
- `delay` (number): The debounce delay in milliseconds.

**Returns:**
- The debounced value.

This hook is particularly useful for optimizing performance in scenarios like search inputs or API calls triggered by user input.

---

🙌 Contributing

This is a personal project, but feel free to fork and play with it! Suggestions and improvements are welcome via pull requests or issues.
