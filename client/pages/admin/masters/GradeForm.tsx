import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

export default function GradeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gradeName: "",
    description: "",
    sortingNo: "",
    glCode: "",
    societyName: "",
    status: "active",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    navigate("/admin/masters/grade");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/masters/grade")}
          className="flex items-center gap-2 text-[#3B82F7] hover:underline"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base font-normal font-['DM_Sans']">Back</span>
        </button>

        {/* Page Header */}
        <div>
          <h1 className="text-xl font-semibold text-[#1C1F37] font-['DM_Sans']">
            Grade Master
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grade Name */}
            <div className="space-y-2">
              <Label className="text-base text-[#1C1F37] font-['DM_Sans']">
                Grade Name
              </Label>
              <Input
                placeholder="Enter Grade Name"
                value={formData.gradeName}
                onChange={(e) =>
                  setFormData({ ...formData, gradeName: e.target.value })
                }
                className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)]"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label className="text-base text-[#1C1F37] font-['DM_Sans']">
                Description
              </Label>
              <Input
                placeholder="Enter Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)]"
              />
            </div>

            {/* Sorting No */}
            <div className="space-y-2">
              <Label className="text-base text-[#1C1F37] font-['DM_Sans']">
                Sorting No.
              </Label>
              <Input
                placeholder="Enter Sorting No."
                value={formData.sortingNo}
                onChange={(e) =>
                  setFormData({ ...formData, sortingNo: e.target.value })
                }
                className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)]"
              />
            </div>

            {/* GL Code */}
            <div className="space-y-2">
              <Label className="text-base text-[#1C1F37] font-['DM_Sans']">
                GL Code
              </Label>
              <Select
                value={formData.glCode}
                onValueChange={(value) =>
                  setFormData({ ...formData, glCode: value })
                }
              >
                <SelectTrigger className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)]">
                  <SelectValue placeholder="Select GL Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GL001">GL001 - General Ledger</SelectItem>
                  <SelectItem value="GL002">GL002 - Expense Account</SelectItem>
                  <SelectItem value="GL003">GL003 - Revenue Account</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Society Name */}
            <div className="space-y-2">
              <Label className="text-base text-[#1C1F37] font-['DM_Sans']">
                Society Name
              </Label>
              <Select
                value={formData.societyName}
                onValueChange={(value) =>
                  setFormData({ ...formData, societyName: value })
                }
              >
                <SelectTrigger className="h-[50px] rounded-[10px] border border-[rgba(28,31,55,0.10)]">
                  <SelectValue placeholder="Select Society Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="society1">
                    Employee Welfare Society
                  </SelectItem>
                  <SelectItem value="society2">Housing Society</SelectItem>
                  <SelectItem value="society3">Recreation Society</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Status Radio Buttons */}
          <div className="space-y-3">
            <RadioGroup
              value={formData.status}
              onValueChange={(value) =>
                setFormData({ ...formData, status: value })
              }
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="active"
                  id="active"
                  className="border-[#3B82F7] text-[#3B82F7]"
                />
                <Label
                  htmlFor="active"
                  className="text-base font-medium text-[#1C1F37] cursor-pointer font-['DM_Sans']"
                >
                  Active
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="disable"
                  id="disable"
                  className="border-[#1C1F37]"
                />
                <Label
                  htmlFor="disable"
                  className="text-base font-medium text-[#1C1F37] cursor-pointer font-['DM_Sans']"
                >
                  Disable
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="bg-[#3B82F7] hover:bg-[#2563EB] text-white rounded-[10px] h-[50px] px-8"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/masters/grade")}
              className="rounded-[10px] h-[50px] px-8"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
