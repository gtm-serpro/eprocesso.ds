import type { Route } from "../../types/admin";
import ProtectedRoute from "../../guards/ProtectedRoute";

export function meta({}: Route["MetaArgs"]) {
  return [{ title: "Admin Panel" }];
}

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p>Welcome, admin! You have full access to this panel.</p>
      </div>
    </ProtectedRoute>
  );
}
