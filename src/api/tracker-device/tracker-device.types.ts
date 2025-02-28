export interface TrackerDeviceDto {
    id: string;
    name: string;
    serialNumber: string;
    status: string;
    assignedVehicleId?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreateTrackerDeviceDto {
    name: string;
    serialNumber: string;
    status: string;
    assignedVehicleId?: string;
  }
  
  export interface UpdateTrackerDeviceDto {
    name?: string;
    serialNumber?: string;
    status?: string;
    assignedVehicleId?: string;
  }
  