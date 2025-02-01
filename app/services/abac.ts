import type { User } from "./auth";

export type Condition = (user: User) => boolean;

export interface PolicyRule {
  name: string;
  resource: string; // The route or feature being accessed
  condition: Condition; // The function that checks access
}

// Define ABAC rules dynamically
const ABAC_RULES: PolicyRule[] = [
  {
    name: "Admin Access",
    resource: "/admin",
    condition: (user) => user.role === "admin",
  },
  {
    name: "Engineering Can Edit",
    resource: "/edit",
    condition: (user) => user.department === "Engineering",
  },
  {
    name: "Only US Users Can View Reports",
    resource: "/reports",
    condition: (user) => user.location === "US",
  },
  {
    name: "Finance Can Access Transactions",
    resource: "/transactions",
    condition: (user) => user.department === "Finance",
  },
];

// Check if the user is allowed to access a resource
export function canAccess(user: User | null, resource: string): boolean {
  if (!user) return false;
  const rule = ABAC_RULES.find((r) => r.resource === resource);
  return rule ? rule.condition(user) : false;
}
