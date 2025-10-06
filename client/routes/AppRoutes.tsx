import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Employee pages
import EmployeeDashboard from "../pages/employee/Dashboard";
import TravelApplication from "../pages/employee/TravelApplication";

// Admin pages
import AdminDashboard from "../pages/admin/Index";
import TravelRequestApprovals from "../pages/admin/TravelRequestApprovals";
import TravelApplicationAdmin from "../pages/admin/TravelApplication";

// Admin Master pages
import Masters from "../pages/admin/Masters";
import EmployeeCode from "../pages/admin/masters/EmployeeCode";
import GLCode from "../pages/admin/masters/GLCode";
import Department from "../pages/admin/masters/Department";
import {
  Grade,
  Society,
  Designation,
  City,
  State,
  Country,
  Category,
  Location,
  SubLocation,
  EmployeeType,
  ReportingManager,
  TravelMode,
  TravelTypeMaster,
  TravelSubTypeMaster,
  Expense,
  Leave,
  CompanyMaster,
  GuestHouseMaster,
  HotelMaster,
} from "../pages/admin/masters/PlaceholderMaster";

// Placeholder pages for other admin sections
import { PlaceholderPage } from "../pages/PlaceholderPage";
import { PlaceholderPageAdmin } from "../pages/admin/PlaceholderPageAdmin";

// Common
import Login from "../pages/common/Login";
import NotFound from "../pages/common/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      {/* Employee Routes */}
      <Route element={<ProtectedRoute role="employee" />}>
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/travel-application" element={<TravelApplication />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute role="admin" />}>
        {/* Main Admin Dashboard */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Masters Section */}
        <Route path="/admin/masters" element={<Masters />} />
        <Route path="/admin/masters/employee-code" element={<EmployeeCode />} />
        <Route path="/admin/masters/grade" element={<Grade />} />
        <Route path="/admin/masters/gl-code" element={<GLCode />} />
        <Route path="/admin/masters/society" element={<Society />} />
        <Route path="/admin/masters/department" element={<Department />} />
        <Route path="/admin/masters/designation" element={<Designation />} />
        <Route path="/admin/masters/city" element={<City />} />
        <Route path="/admin/masters/state" element={<State />} />
        <Route path="/admin/masters/country" element={<Country />} />
        <Route path="/admin/masters/category" element={<Category />} />
        <Route path="/admin/masters/location" element={<Location />} />
        <Route path="/admin/masters/sub-location" element={<SubLocation />} />
        <Route path="/admin/masters/employee-type" element={<EmployeeType />} />
        <Route path="/admin/masters/reporting-manager" element={<ReportingManager />} />
        <Route path="/admin/masters/travel-mode" element={<TravelMode />} />
        <Route path="/admin/masters/travel-type-master" element={<TravelTypeMaster />} />
        <Route path="/admin/masters/travel-sub-type-master" element={<TravelSubTypeMaster />} />
        <Route path="/admin/masters/expense" element={<Expense />} />
        <Route path="/admin/masters/leave" element={<Leave />} />
        <Route path="/admin/masters/company-master" element={<CompanyMaster />} />
        <Route path="/admin/masters/guest-house-master" element={<GuestHouseMaster />} />
        <Route path="/admin/masters/hotel-master" element={<HotelMaster />} />
        
        {/* Other Admin Sections */}
        <Route
          path="/admin/employee"
          element={
            <PlaceholderPageAdmin
              title="Employee Management"
              description="Manage employee records and information"
            />
          }
        />
        <Route
          path="/admin/travel"
          element={
            <PlaceholderPageAdmin
              title="Travel Management"
              description="Manage travel requests and bookings"
            />
          }
        />
        <Route path="/admin/travel-approvals" element={<TravelRequestApprovals />} />
        <Route path="/admin/travel-request/:id" element={<TravelApplicationAdmin />} />
        <Route
          path="/admin/expense"
          element={
            <PlaceholderPageAdmin
              title="Expense Management"
              description="Manage expense reports and reimbursements"
            />
          }
        />
        <Route
          path="/admin/leave"
          element={
            <PlaceholderPageAdmin
              title="Leave Management"
              description="Manage employee leave requests and policies"
            />
          }
        />
        <Route
          path="/admin/reports"
          element={
            <PlaceholderPageAdmin
              title="Reports & Analytics"
              description="View reports and analytics dashboard"
            />
          }
        />
        <Route
          path="/admin/settings"
          element={
            <PlaceholderPageAdmin
              title="System Settings"
              description="Configure system settings and preferences"
            />
          }
        />
      </Route>

      {/* Legacy routes for backward compatibility */}
      <Route element={<ProtectedRoute role={["admin"]} />}>
        <Route path="/travel-request" element={<TravelRequestApprovals />} />
        <Route path="/travel-request/:id" element={<TravelApplicationAdmin />} />
        <Route 
          path="/bookings" 
          element={
            <PlaceholderPage
              title="Bookings"
              description="View and manage travel bookings"
            />
          } 
        />
        <Route 
          path="/itineraries" 
          element={
            <PlaceholderPage
              title="Itineraries"
              description="Plan and view travel itineraries"
            />
          } 
        />
        <Route 
          path="/expense-reports" 
          element={
            <PlaceholderPage
              title="Expense Reports"
              description="Submit and track expense reports"
            />
          } 
        />
        <Route 
          path="/reimbursements" 
          element={
            <PlaceholderPage
              title="Reimbursements"
              description="Manage expense reimbursements"
            />
          } 
        />
        <Route 
          path="/approvals" 
          element={
            <PlaceholderPage
              title="Approvals"
              description="Review and approve travel requests"
            />
          } 
        />
        <Route 
          path="/users" 
          element={
            <PlaceholderPage
              title="Users"
              description="Manage user accounts and permissions"
            />
          } 
        />
        <Route 
          path="/departments" 
          element={
            <PlaceholderPage
              title="Departments"
              description="Organize and manage departments"
            />
          } 
        />
        <Route 
          path="/settings" 
          element={
            <PlaceholderPage
              title="Settings"
              description="Configure system settings"
            />
          } 
        />
        <Route 
          path="/reports" 
          element={
            <PlaceholderPage
              title="Reports"
              description="View analytics and reports"
            />
          } 
        />
      </Route>

      {/* Manager Routes (placeholder for future implementation) */}
      {/* <Route element={<ProtectedRoute roles={["manager"]} />}>
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/approvals" element={<Approvals />} />
      </Route> */}

      {/* Unified Agent Routes (placeholder for future implementation) */}
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
