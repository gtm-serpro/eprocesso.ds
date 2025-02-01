import { Navigate, Outlet, useLocation } from "react-router";
import { getCurrentUser, type User } from "../services/auth";
import { canAccess } from "../services/abac";
import { type ReactNode, useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const resource = location.pathname;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  if (user === null) {
    return null; // Prevent SSR errors
  }

  if (!user) {
    window.location.href = "/login"; // Forces a hard reload to login page
    return null;
  }

  if (!canAccess(user, resource)) {
    window.location.href = "/403"; // Forces a hard reload
    return null;
  }

  return <>{children || <Outlet />}</>;
}
