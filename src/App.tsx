import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemoListPage from "./pages/MemoListPage";
import UseMemoPerformancePage from "./pages/useMemoPage";

import UseCallbackPage from "./pages/useCallbackPage";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memo-list" element={<MemoListPage />} />
        <Route path="/use-memo" element={<UseMemoPerformancePage />} />
        <Route path="//use-callback" element={<UseCallbackPage />} />
      </Routes>
    </Layout>
  );
}
