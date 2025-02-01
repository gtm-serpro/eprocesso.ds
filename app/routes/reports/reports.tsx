import type { Route } from "../../types/reports";
import ProtectedRoute from "../../guards/ProtectedRoute";

export function meta({}: Route["MetaArgs"]) {
  return [{ title: "Reports Dashboard" }];
}

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Reports Dashboard</h1>
        <p>View detailed reports and analytics.</p>
      </div>
    </ProtectedRoute>
  );
}
