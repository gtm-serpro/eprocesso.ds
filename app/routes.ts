import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Public homepage
  route("login", "routes/auth/login.tsx"), // Public login page
  route("403", "routes/error/403.tsx"), // 403 Forbidden page
  route("profile", "routes/user/profile.tsx"), // Profile page
  
  // Protect admin route
  route("admin", "routes/admin/admin.tsx"),

  // Protect reports route
  route("reports", "routes/reports/reports.tsx"),

  // Protect transactions route
  route("transactions", "routes/transactions/transactions.tsx"),
] satisfies RouteConfig;
