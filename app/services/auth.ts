export interface User {
    id: string;
    role: "admin" | "editor" | "viewer";
    department: "HR" | "Engineering" | "Finance";
    location: "US" | "EU" | "Asia";
    deviceType: "desktop" | "mobile";
  }
  
  export function getCurrentUser(): User | null {
    if (typeof window === "undefined") return null; // Prevent SSR access
  
    return JSON.parse(localStorage.getItem("user") || "null");
  }
  
  
  export function setUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  export function logout() {
    localStorage.removeItem("user");
  }
  