import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import SelectInputs from "@/components/form/form-elements/SelectInputs";
import React from "react";

export default function AddDevice() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add New Device" />
      <div className="grid grid-cols-1 gap-6">
        <ComponentCard title="Device Details">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <DefaultInputs  />
              <SelectInputs />
              <DefaultInputs />
            </div>
            
            <div className="flex justify-end px-6">
              <button
                type="submit"
                className="btn btn-success flex justify-center rounded-lg bg-brand-500 px-8 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
              >
                Save Device
              </button>
            </div>
          </form>
        </ComponentCard>
      </div>
    </div>
  );
}
