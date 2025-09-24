import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/admin/Index";
import NotFound from "./pages/common/NotFound";
import TravelRequestApprovals from "./pages/admin/TravelRequestApprovals";
import TravelApplication from "./pages/admin/TravelApplication";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import Login from "./pages/common/Login";
import { isAuthenticated } from "@/lib/auth";

// Admin Masters
import Masters from "./pages/admin/Masters";
import EmployeeCode from "./pages/admin/masters/EmployeeCode";
import GLCode from "./pages/admin/masters/GLCode";
import Department from "./pages/admin/masters/Department";
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
} from "./pages/admin/masters/PlaceholderMaster";
import { PlaceholderPageAdmin } from "./pages/admin/PlaceholderPageAdmin";

const queryClient = new QueryClient();

function Protected({ children }: { children: JSX.Element }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Protected>
                <Index />
              </Protected>
            }
          />
          <Route
            path="/travel-request"
            element={
              <Protected>
                <TravelRequestApprovals />
              </Protected>
            }
          />

          {/* Admin Masters */}
          <Route
            path="/admin/masters"
            element={
              <Protected>
                <Masters />
              </Protected>
            }
          />
          <Route path="/admin/masters/employee-code" element={<Protected><EmployeeCode /></Protected>} />
          <Route path="/admin/masters/grade" element={<Protected><Grade /></Protected>} />
          <Route path="/admin/masters/gl-code" element={<Protected><GLCode /></Protected>} />
          <Route path="/admin/masters/society" element={<Protected><Society /></Protected>} />
          <Route path="/admin/masters/department" element={<Protected><Department /></Protected>} />
          <Route path="/admin/masters/designation" element={<Protected><Designation /></Protected>} />
          <Route path="/admin/masters/city" element={<Protected><City /></Protected>} />
          <Route path="/admin/masters/state" element={<Protected><State /></Protected>} />
          <Route path="/admin/masters/country" element={<Protected><Country /></Protected>} />
          <Route path="/admin/masters/category" element={<Protected><Category /></Protected>} />
          <Route path="/admin/masters/location" element={<Protected><Location /></Protected>} />
          <Route path="/admin/masters/sub-location" element={<Protected><SubLocation /></Protected>} />
          <Route path="/admin/masters/employee-type" element={<Protected><EmployeeType /></Protected>} />
          <Route path="/admin/masters/reporting-manager" element={<Protected><ReportingManager /></Protected>} />
          <Route path="/admin/masters/travel-mode" element={<Protected><TravelMode /></Protected>} />
          <Route path="/admin/masters/travel-type-master" element={<Protected><TravelTypeMaster /></Protected>} />
          <Route path="/admin/masters/travel-sub-type-master" element={<Protected><TravelSubTypeMaster /></Protected>} />
          <Route path="/admin/masters/expense" element={<Protected><Expense /></Protected>} />
          <Route path="/admin/masters/leave" element={<Protected><Leave /></Protected>} />
          <Route path="/admin/masters/company-master" element={<Protected><CompanyMaster /></Protected>} />
          <Route path="/admin/masters/guest-house-master" element={<Protected><GuestHouseMaster /></Protected>} />
          <Route path="/admin/masters/hotel-master" element={<Protected><HotelMaster /></Protected>} />

          {/* Admin Sections */}
          <Route path="/admin/dashboard" element={<Protected><Index /></Protected>} />
          <Route path="/admin/employee" element={<Protected><PlaceholderPageAdmin title="Employee Management" description="Manage employee records and information" /></Protected>} />
          <Route path="/admin/travel" element={<Protected><PlaceholderPageAdmin title="Travel Management" description="Manage travel requests and bookings" /></Protected>} />
          <Route path="/admin/expense" element={<Protected><PlaceholderPageAdmin title="Expense Management" description="Manage expense reports and reimbursements" /></Protected>} />
          <Route path="/admin/leave" element={<Protected><PlaceholderPageAdmin title="Leave Management" description="Manage employee leave requests and policies" /></Protected>} />
          <Route path="/admin/reports" element={<Protected><PlaceholderPageAdmin title="Reports & Analytics" description="View reports and analytics dashboard" /></Protected>} />
          <Route path="/admin/settings" element={<Protected><PlaceholderPageAdmin title="System Settings" description="Configure system settings and preferences" /></Protected>} />
          <Route
            path="/travel-request/:id"
            element={
              <Protected>
                <TravelApplication />
              </Protected>
            }
          />
          <Route
            path="/bookings"
            element={
              <Protected>
                <PlaceholderPage
                  title="Bookings"
                  description="View and manage travel bookings"
                />
              </Protected>
            }
          />
          <Route
            path="/itineraries"
            element={
              <Protected>
                <PlaceholderPage
                  title="Itineraries"
                  description="Plan and view travel itineraries"
                />
              </Protected>
            }
          />
          <Route
            path="/expense-reports"
            element={
              <Protected>
                <PlaceholderPage
                  title="Expense Reports"
                  description="Submit and track expense reports"
                />
              </Protected>
            }
          />
          <Route
            path="/reimbursements"
            element={
              <Protected>
                <PlaceholderPage
                  title="Reimbursements"
                  description="Manage expense reimbursements"
                />
              </Protected>
            }
          />
          <Route
            path="/approvals"
            element={
              <Protected>
                <PlaceholderPage
                  title="Approvals"
                  description="Review and approve travel requests"
                />
              </Protected>
            }
          />
          <Route
            path="/users"
            element={
              <Protected>
                <PlaceholderPage
                  title="Users"
                  description="Manage user accounts and permissions"
                />
              </Protected>
            }
          />
          <Route
            path="/departments"
            element={
              <Protected>
                <PlaceholderPage
                  title="Departments"
                  description="Organize and manage departments"
                />
              </Protected>
            }
          />
          <Route
            path="/settings"
            element={
              <Protected>
                <PlaceholderPage
                  title="Settings"
                  description="Configure system settings"
                />
              </Protected>
            }
          />
          <Route
            path="/reports"
            element={
              <Protected>
                <PlaceholderPage
                  title="Reports"
                  description="View analytics and reports"
                />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
