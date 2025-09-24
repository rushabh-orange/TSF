import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Employee pages
import EmployeeDashboard from "../pages/employee/Dashboard";
import TravelApplication from "../pages/employee/TravelApplication";

// Admin pages
import AdminDashboard from "../pages/admin/Index";
// import ManageUsers from "../pages/admin/ManageUsers"; // example
import TravelRequestApprovals from "../pages/admin/TravelRequestApprovals";

// Manager pages
// import ManagerDashboard from "../pages/manager/Dashboard";
// import Approvals from "../pages/manager/Approvals";

// Agent (unified)
// import AgentDashboard from "../pages/agent/Dashboard";
// import AgentRequestList from "../pages/agent/RequestList";
// import AgentRequestDetail from "../pages/agent/RequestDetail";

// Common
import Login from "../pages/common/Login";
import NotFound from "../pages/common/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      {/* Employee Routes */}
      <Route element={<ProtectedRoute role={["employee"]} />}>
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/travel-application" element={<TravelApplication />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute role={["admin"]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin/manage-users" element={<ManageUsers />} /> */}
        <Route path="/admin/travel-approvals" element={<TravelRequestApprovals />} />
      </Route>

      {/* Manager Routes */}
      {/* <Route element={<ProtectedRoute roles={["manager"]} />}>
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/approvals" element={<Approvals />} />
      </Route> */}

      {/* Unified Agent Routes */}
      {/* <Route element={<ProtectedRoute roles={["agent"]} />}>
        <Route path="/agent/dashboard" element={<AgentDashboard />} />
        <Route path="/agent/requests" element={<AgentRequestList />} />
        <Route path="/agent/requests/:id" element={<AgentRequestDetail />} />
      </Route> */}

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
