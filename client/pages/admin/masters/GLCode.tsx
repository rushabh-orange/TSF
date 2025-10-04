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
import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function GLCode() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[26px] font-semibold text-[#3B82F7] font-['DM_Sans']">
              GL Code Master
            </h1>
            <p className="text-[#6B7280] mt-1">Manage General Ledger codes for accounting</p>
          </div>
          <Button className="bg-[#3B82F7] hover:bg-[#2563EB] text-white gap-2">
            <Plus className="h-4 w-4" />
            Add GL Code
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="border-[#3B82F7] shadow-[0_2px_10px_0_rgba(59,130,247,0.30)]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] h-4 w-4" />
                <Input
                  placeholder="Search GL codes..."
                  className="pl-10 border-[#3B82F7] focus:border-[#3B82F7] focus:ring-[#3B82F7]"
                />
              </div>
              <Button variant="outline" className="border-[#3B82F7] text-[#3B82F7] hover:bg-[#3B82F7] hover:text-white">
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card className="border-[#3B82F7] shadow-[0_2px_10px_0_rgba(59,130,247,0.30)]">
          <CardHeader>
            <CardTitle className="text-[#3B82F7]">GL Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#3B82F7]">GL Code</TableHead>
                  <TableHead className="text-[#3B82F7]">Description</TableHead>
                  <TableHead className="text-[#3B82F7]">Account Type</TableHead>
                  <TableHead className="text-[#3B82F7]">Department</TableHead>
                  <TableHead className="text-[#3B82F7]">Status</TableHead>
                  <TableHead className="text-[#3B82F7]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-[#F5F9FF]">
                  <TableCell className="font-medium text-[#3B82F7]">GL001</TableCell>
                  <TableCell>Travel Expenses</TableCell>
                  <TableCell>Expense</TableCell>
                  <TableCell>General</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-[#F5F9FF]">
                  <TableCell className="font-medium text-[#3B82F7]">GL002</TableCell>
                  <TableCell>Accommodation Expenses</TableCell>
                  <TableCell>Expense</TableCell>
                  <TableCell>General</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-[#F5F9FF]">
                  <TableCell className="font-medium text-[#3B82F7]">GL003</TableCell>
                  <TableCell>Meal Allowances</TableCell>
                  <TableCell>Expense</TableCell>
                  <TableCell>General</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#3B82F7] hover:bg-[#F5F9FF]">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
