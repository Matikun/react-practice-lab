import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemoListPage from "./pages/MemoListPage";
import UseMemoPerformancePage from "./pages/useMemoPage";
import { Layout } from "./components/layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memo-list" element={<MemoListPage />} />
        <Route path="/use-memo" element={<UseMemoPerformancePage />} />
      </Routes>
    </Layout>
  );
}
