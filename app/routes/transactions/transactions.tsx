import type { Route } from "../../types/transactions";
import ProtectedRoute from "../../guards/ProtectedRoute";

export function meta({}: Route["MetaArgs"]) {
  return [{ title: "Transactions" }];
}

export default function TransactionsPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Transactions</h1>
        <p>Manage financial transactions securely.</p>
      </div>
    </ProtectedRoute>
  );
}
