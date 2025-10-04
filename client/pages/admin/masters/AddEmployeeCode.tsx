import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AddEmployeeCode() {
  const [formData, setFormData] = useState({
    digits: "",
    sampleCode: "",
    employeeCodeCombination: true,
    alphaNumericCode1: false,
    alphaNumericCode2: false,
    companyCode: false,
    designationCode: false,
    employeeTypeCode: true,
    dateCode: false,
    branchCode: false,
    categoryCode: false,
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          to="/admin/masters/employee-code"
          className="inline-flex items-center gap-2 text-[#3B82F7] hover:text-[#2563EB] transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base font-normal font-['DM_Sans']">Back</span>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-[10px] shadow-[0_2px_2px_0_rgba(59,130,247,0.30)] p-8">
          {/* Page Title */}
          <h1 className="text-xl font-semibold text-[#1C1F37] font-['DM_Sans'] mb-8">
            Employee Code
          </h1>

          {/* Digits For Employee Code */}
          <div className="mb-8">
            <label className="block text-base text-[#1C1F37] font-['DM_Sans'] mb-3">
              Digits For Employee Code
            </label>
            <Input
              type="text"
              placeholder="Enter Digits For Employee Code"
              value={formData.digits}
              onChange={(e) =>
                setFormData({ ...formData, digits: e.target.value })
              }
              className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)] bg-white text-base text-[#1C1F37] placeholder:text-[#6B7280] font-['DM_Sans']"
            />
          </div>

          {/* Checkbox Grid - Row 1 */}
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="employeeCodeCombination"
                  checked={formData.employeeCodeCombination}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      employeeCodeCombination: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#3B82F7] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="employeeCodeCombination"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Employee Code Combination
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="alphaNumericCode1"
                  checked={formData.alphaNumericCode1}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      alphaNumericCode1: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="alphaNumericCode1"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Alpha Numeric Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="alphaNumericCode2"
                  checked={formData.alphaNumericCode2}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      alphaNumericCode2: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="alphaNumericCode2"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Alpha Numeric Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="companyCode"
                  checked={formData.companyCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      companyCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="companyCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Company Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="designationCode"
                  checked={formData.designationCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      designationCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="designationCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Designation Code
                </label>
              </div>
            </div>
          </div>

          {/* Checkbox Grid - Row 2 */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="employeeTypeCode"
                  checked={formData.employeeTypeCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      employeeTypeCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#3B82F7] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="employeeTypeCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Employee Type Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="dateCode"
                  checked={formData.dateCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      dateCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="dateCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Date Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="branchCode"
                  checked={formData.branchCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      branchCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="branchCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Branch Code
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="categoryCode"
                  checked={formData.categoryCode}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      categoryCode: checked as boolean,
                    })
                  }
                  className="h-4 w-4 rounded-[2px] border-[#1C1F37] data-[state=checked]:bg-[#3B82F7] data-[state=checked]:border-[#3B82F7]"
                />
                <label
                  htmlFor="categoryCode"
                  className="text-base font-medium text-[#1C1F37] font-['DM_Sans'] cursor-pointer"
                >
                  Category Code
                </label>
              </div>
            </div>
          </div>

          {/* Sample Code */}
          <div>
            <label className="block text-base text-[#1C1F37] font-['DM_Sans'] mb-3">
              Sample Code
            </label>
            <Input
              type="text"
              placeholder="Enter Sample Code"
              value={formData.sampleCode}
              onChange={(e) =>
                setFormData({ ...formData, sampleCode: e.target.value })
              }
              className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)] bg-white text-base text-[#1C1F37] placeholder:text-[#6B7280] font-['DM_Sans']"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 justify-end">
            <Link to="/admin/masters/employee-code">
              <Button
                variant="outline"
                className="px-6 h-11 rounded-lg border-[#1C1F37] text-[#1C1F37] hover:bg-gray-50"
              >
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="px-6 h-11 rounded-lg bg-[#3B82F7] hover:bg-[#2563EB] text-white"
            >
              Save Employee Code
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
