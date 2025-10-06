import { useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, ArrowLeft } from "lucide-react";

interface PlaceholderMasterProps {
  title: string;
  description: string;
  columns: string[];
  sampleData?: Record<string, any>[];
  formRoute?: string;
}

export default function PlaceholderMaster({
  title,
  description,
  columns,
  sampleData = [],
  formRoute
}: PlaceholderMasterProps) {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/masters")}
          className="flex items-center gap-2 text-[#3B82F7] hover:underline"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base font-normal font-['DM_Sans']">Back</span>
        </button>

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[26px] font-semibold text-[#1C1F37] font-['DM_Sans']">
              {title}
            </h1>
            <p className="text-[#6B7280] mt-1">{description}</p>
          </div>
          <Button
            onClick={() => formRoute && navigate(formRoute)}
            className="bg-[#3B82F7] hover:bg-[#2563EB] text-white gap-2"
          >
            <Plus className="h-4 w-4" />
            Add {title.replace(' Master', '')}
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] h-4 w-4" />
                <Input
                  placeholder={`Search ${title.toLowerCase()}...`}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#1C1F37]">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((column) => (
                    <TableHead key={column}>{column}</TableHead>
                  ))}
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.length > 0 ? (
                  sampleData.map((row, index) => (
                    <TableRow key={index}>
                      {columns.map((column) => (
                        <TableCell key={column} className={index === 0 ? "font-medium" : ""}>
                          {row[column] || "-"}
                        </TableCell>
                      ))}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} className="text-center py-8 text-[#6B7280]">
                      No data available. Click "Add {title.replace(' Master', '')}" to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

// Individual master page components using the template
export function Grade() {
  return (
    <PlaceholderMaster
      title="Grade Master"
      description="Manage employee grades and levels"
      columns={["Grade Code", "Grade Name", "Level", "Min Salary", "Max Salary", "Status"]}
      sampleData={[
        { "Grade Code": "GRD001", "Grade Name": "Junior", "Level": "1", "Min Salary": "$30,000", "Max Salary": "$40,000", "Status": "Active" },
        { "Grade Code": "GRD002", "Grade Name": "Senior", "Level": "2", "Min Salary": "$40,000", "Max Salary": "$60,000", "Status": "Active" },
      ]}
      formRoute="/admin/masters/grade/add"
    />
  );
}

export function Society() {
  return (
    <PlaceholderMaster
      title="Society Master"
      description="Manage society and association data"
      columns={["Society Code", "Society Name", "Type", "Registration No", "Status"]}
      sampleData={[
        { "Society Code": "SOC001", "Society Name": "Employee Welfare Society", "Type": "Welfare", "Registration No": "REG123", "Status": "Active" },
      ]}
    />
  );
}

export function Designation() {
  return (
    <PlaceholderMaster
      title="Designation Master"
      description="Manage job designations and positions"
      columns={["Designation Code", "Designation Name", "Department", "Grade", "Status"]}
      sampleData={[
        { "Designation Code": "DES001", "Designation Name": "Software Engineer", "Department": "IT", "Grade": "Junior", "Status": "Active" },
        { "Designation Code": "DES002", "Designation Name": "HR Manager", "Department": "HR", "Grade": "Senior", "Status": "Active" },
      ]}
    />
  );
}

export function City() {
  return (
    <PlaceholderMaster
      title="City Master"
      description="Manage city information"
      columns={["City Code", "City Name", "State", "Country", "Status"]}
      sampleData={[
        { "City Code": "CIT001", "City Name": "New York", "State": "New York", "Country": "USA", "Status": "Active" },
        { "City Code": "CIT002", "City Name": "London", "State": "England", "Country": "UK", "Status": "Active" },
      ]}
    />
  );
}

export function State() {
  return (
    <PlaceholderMaster
      title="State Master"
      description="Manage state/province information"
      columns={["State Code", "State Name", "Country", "Capital", "Status"]}
      sampleData={[
        { "State Code": "ST001", "State Name": "New York", "Country": "USA", "Capital": "Albany", "Status": "Active" },
        { "State Code": "ST002", "State Name": "California", "Country": "USA", "Capital": "Sacramento", "Status": "Active" },
      ]}
    />
  );
}

export function Country() {
  return (
    <PlaceholderMaster
      title="Country Master"
      description="Manage country information"
      columns={["Country Code", "Country Name", "Currency", "Capital", "Status"]}
      sampleData={[
        { "Country Code": "US", "Country Name": "United States", "Currency": "USD", "Capital": "Washington D.C.", "Status": "Active" },
        { "Country Code": "UK", "Country Name": "United Kingdom", "Currency": "GBP", "Capital": "London", "Status": "Active" },
      ]}
    />
  );
}

export function Category() {
  return (
    <PlaceholderMaster
      title="Category Master"
      description="Manage expense and travel categories"
      columns={["Category Code", "Category Name", "Type", "Description", "Status"]}
      sampleData={[
        { "Category Code": "CAT001", "Category Name": "Domestic Travel", "Type": "Travel", "Description": "Local travel expenses", "Status": "Active" },
        { "Category Code": "CAT002", "Category Name": "International Travel", "Type": "Travel", "Description": "International travel expenses", "Status": "Active" },
      ]}
    />
  );
}

export function Location() {
  return (
    <PlaceholderMaster
      title="Location Master"
      description="Manage office and travel locations"
      columns={["Location Code", "Location Name", "Address", "City", "Status"]}
      sampleData={[
        { "Location Code": "LOC001", "Location Name": "Head Office", "Address": "123 Main St", "City": "New York", "Status": "Active" },
        { "Location Code": "LOC002", "Location Name": "Branch Office", "Address": "456 Oak Ave", "City": "London", "Status": "Active" },
      ]}
    />
  );
}

export function SubLocation() {
  return (
    <PlaceholderMaster
      title="Sub Location Master"
      description="Manage sub-locations within main locations"
      columns={["Sub Location Code", "Sub Location Name", "Parent Location", "Floor", "Status"]}
      sampleData={[
        { "Sub Location Code": "SUB001", "Sub Location Name": "IT Department", "Parent Location": "Head Office", "Floor": "3rd Floor", "Status": "Active" },
      ]}
    />
  );
}

export function EmployeeType() {
  return (
    <PlaceholderMaster
      title="Employee Type Master"
      description="Manage employee types and classifications"
      columns={["Type Code", "Type Name", "Description", "Benefits", "Status"]}
      sampleData={[
        { "Type Code": "EMP001", "Type Name": "Full Time", "Description": "Full-time employee", "Benefits": "All", "Status": "Active" },
        { "Type Code": "EMP002", "Type Name": "Contract", "Description": "Contract employee", "Benefits": "Basic", "Status": "Active" },
      ]}
    />
  );
}

export function ReportingManager() {
  return (
    <PlaceholderMaster
      title="Reporting Manager Master"
      description="Manage reporting hierarchy and manager assignments"
      columns={["Manager Code", "Manager Name", "Department", "Team Size", "Status"]}
      sampleData={[
        { "Manager Code": "MGR001", "Manager Name": "John Smith", "Department": "IT", "Team Size": "12", "Status": "Active" },
        { "Manager Code": "MGR002", "Manager Name": "Sarah Johnson", "Department": "HR", "Team Size": "5", "Status": "Active" },
      ]}
    />
  );
}

export function TravelMode() {
  return (
    <PlaceholderMaster
      title="Travel Mode Master"
      description="Manage travel modes and transportation options"
      columns={["Mode Code", "Mode Name", "Category", "Rate per KM", "Status"]}
      sampleData={[
        { "Mode Code": "TM001", "Mode Name": "Flight", "Category": "Air", "Rate per KM": "$0.50", "Status": "Active" },
        { "Mode Code": "TM002", "Mode Name": "Train", "Category": "Rail", "Rate per KM": "$0.20", "Status": "Active" },
        { "Mode Code": "TM003", "Mode Name": "Car", "Category": "Road", "Rate per KM": "$0.30", "Status": "Active" },
      ]}
    />
  );
}

export function TravelTypeMaster() {
  return (
    <PlaceholderMaster
      title="Travel Type Master"
      description="Manage travel types and purposes"
      columns={["Type Code", "Type Name", "Purpose", "Max Days", "Status"]}
      sampleData={[
        { "Type Code": "TT001", "Type Name": "Business Travel", "Purpose": "Business meetings", "Max Days": "30", "Status": "Active" },
        { "Type Code": "TT002", "Type Name": "Training", "Purpose": "Employee training", "Max Days": "10", "Status": "Active" },
      ]}
    />
  );
}

export function TravelSubTypeMaster() {
  return (
    <PlaceholderMaster
      title="Travel Sub Type Master"
      description="Manage travel sub-types for detailed categorization"
      columns={["Sub Type Code", "Sub Type Name", "Parent Type", "Description", "Status"]}
      sampleData={[
        { "Sub Type Code": "TST001", "Sub Type Name": "Client Meeting", "Parent Type": "Business Travel", "Description": "Meeting with clients", "Status": "Active" },
      ]}
    />
  );
}

export function Expense() {
  return (
    <PlaceholderMaster
      title="Expense Master"
      description="Manage expense types and categories"
      columns={["Expense Code", "Expense Name", "Category", "Max Amount", "Status"]}
      sampleData={[
        { "Expense Code": "EXP001", "Expense Name": "Meals", "Category": "Food", "Max Amount": "$100", "Status": "Active" },
        { "Expense Code": "EXP002", "Expense Name": "Accommodation", "Category": "Lodging", "Max Amount": "$300", "Status": "Active" },
      ]}
    />
  );
}

export function Leave() {
  return (
    <PlaceholderMaster
      title="Leave Master"
      description="Manage leave types and policies"
      columns={["Leave Code", "Leave Type", "Max Days", "Carry Forward", "Status"]}
      sampleData={[
        { "Leave Code": "LV001", "Leave Type": "Annual Leave", "Max Days": "25", "Carry Forward": "Yes", "Status": "Active" },
        { "Leave Code": "LV002", "Leave Type": "Sick Leave", "Max Days": "10", "Carry Forward": "No", "Status": "Active" },
      ]}
    />
  );
}

export function CompanyMaster() {
  return (
    <PlaceholderMaster
      title="Company Master"
      description="Manage company information and details"
      columns={["Company Code", "Company Name", "Address", "Registration No", "Status"]}
      sampleData={[
        { "Company Code": "COM001", "Company Name": "ABC Corporation", "Address": "123 Business St", "Registration No": "12345", "Status": "Active" },
      ]}
    />
  );
}

export function GuestHouseMaster() {
  return (
    <PlaceholderMaster
      title="Guest House Master"
      description="Manage guest house accommodations"
      columns={["Guest House Code", "Name", "Location", "Rooms", "Status"]}
      sampleData={[
        { "Guest House Code": "GH001", "Name": "Corporate Guest House", "Location": "Downtown", "Rooms": "20", "Status": "Active" },
      ]}
    />
  );
}

export function HotelMaster() {
  return (
    <PlaceholderMaster
      title="Hotel Master"
      description="Manage hotel partnerships and accommodations"
      columns={["Hotel Code", "Hotel Name", "Location", "Star Rating", "Status"]}
      sampleData={[
        { "Hotel Code": "HOT001", "Hotel Name": "Grand Hotel", "Location": "City Center", "Star Rating": "5", "Status": "Active" },
        { "Hotel Code": "HOT002", "Hotel Name": "Business Inn", "Location": "Airport", "Star Rating": "4", "Status": "Active" },
      ]}
    />
  );
}
