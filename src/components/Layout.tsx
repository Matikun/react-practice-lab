// src/components/Layout.tsx
import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="bg-gray-900 shadow">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            React Practice Lab
          </h1>
          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/memo-list"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Memo List
            </Link>
            <Link
              to="/use-memo"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              useMemo
            </Link>
            <Link
              to="/use-callback"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              useCallback
            </Link>
            <Link
              to="/modal-demo"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Modal Portal
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
