import React from "react";

const DeviceFormInputs = () => {
  return (
    <div className="rounded-sm px-6 py-4">
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Serial Number
        </label>
        <input
          type="text"
          placeholder="Enter device serial number"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Customer
        </label>
        <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
          <option value="">Select Customer</option>
          <option value="customer1">Customer 1</option>
          <option value="customer2">Customer 2</option>
        </select>
      </div>

      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Manufacture Date
        </label>
        <input
          type="date"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
    </div>
  );
};

export default DeviceFormInputs;
