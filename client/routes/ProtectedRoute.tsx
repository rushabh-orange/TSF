// apps/portal/src/routes/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 🔑 In a real app, this would come from your auth provider / context
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  role: string; // e.g., "employee", "admin", "manager"
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Not logged in → go to login page
    return <Navigate to="/login" replace />;
  }

  if (user.role !== role) {
    // Logged in but wrong role → go to a "no access" page or home
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ User is logged in & has the right role → render child routes
  return <Outlet />;
};

export default ProtectedRoute;
