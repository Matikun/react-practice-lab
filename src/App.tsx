import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemoListPage from "./pages/MemoListPage";

export default function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/memo-list">Memo List</Link>
        {/* Future: <Link to="/useeffect-demo">useEffect Demo</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memo-list" element={<MemoListPage />} />
      </Routes>
    </div>
  );
}
