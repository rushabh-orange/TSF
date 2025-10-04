import { AdminLayout } from "@/components/AdminLayout";

interface PlaceholderPageAdminProps {
  title: string;
  description: string;
}

export function PlaceholderPageAdmin({ title, description }: PlaceholderPageAdminProps) {
  return (
    <AdminLayout>
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h1 className="text-[26px] font-semibold text-[#1C1F37] font-['DM_Sans'] mb-4">
          {title}
        </h1>
        <p className="text-[#6B7280] text-lg mb-8">
          {description}
        </p>
        <div className="text-[#6B7280]">
          This feature is coming soon...
        </div>
      </div>
    </AdminLayout>
  );
}
