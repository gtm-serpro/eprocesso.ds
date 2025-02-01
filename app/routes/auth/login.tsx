import { useState } from "react";
import { useNavigate } from "react-router";
import { setUser } from "../../services/auth";
import type { User } from "../../services/auth";

export default function Login() {
  const [role, setRole] = useState<User["role"]>("viewer");
  const [department, setDepartment] = useState<User["department"]>("HR");
  const [location, setLocation] = useState<User["location"]>("US");
  const [deviceType, setDeviceType] = useState<User["deviceType"]>("desktop");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setUser({
      id: "user123",
      role,
      department,
      location,
      deviceType,
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as User["role"])}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>

          {/* Department Selection */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value as User["department"])}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
          </select>

          {/* Location Selection */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value as User["location"])}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="US">US</option>
            <option value="EU">EU</option>
            <option value="Asia">Asia</option>
          </select>

          {/* Device Type Selection */}
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value as User["deviceType"])}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login as {role} in {department}
          </button>
        </form>
      </div>
    </div>
  );
}
