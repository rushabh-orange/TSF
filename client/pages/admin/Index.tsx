import { AdminLayout } from "@/components/AdminLayout";
import { DashboardOverview } from "@/components/DashboardOverview";

export default function Index() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  );
}
