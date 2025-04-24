import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemoListPage from "./pages/MemoListPage";
import UseMemoPerformancePage from "./pages/useMemoPage";
import DebounceExamplePage from "./pages/DebounceExamplePage";

import { Layout } from "./components/Layout";
import UseCallbackPage from "./pages/UseCallbackPage";
import { ModalDemoPage } from "./pages/ModalDemoPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memo-list" element={<MemoListPage />} />
        <Route path="/use-memo" element={<UseMemoPerformancePage />} />
        <Route path="//use-callback" element={<UseCallbackPage />} />
        <Route path="/modal-demo" element={<ModalDemoPage />} />
        <Route path="/debounce-example" element={<DebounceExamplePage />} />
      </Routes>
    </Layout>
  );
}
