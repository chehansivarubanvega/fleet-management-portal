import { defaultPaginationValues, type IResponse, type PaginatedDto } from './../../utils/axios.types';
import axiosInstance, { endpoints } from './../../utils/axios';
import type {
  CreateTrackerDeviceDto,
  TrackerDeviceDto,
  UpdateTrackerDeviceDto,
} from './tracker-device.types';
import { PaginationFilterParams } from '@/types/filter';

export class TrackerDeviceAPIService {
    public static async listTrackerDevices( params : PaginationFilterParams): Promise<PaginatedDto<TrackerDeviceDto>> { 
    try {
      const { data } = await axiosInstance.get<IResponse<PaginatedDto<TrackerDeviceDto>>>(
        endpoints.trackerDevice.list,
        {
          params,
       }
      );
      return data.data ?? defaultPaginationValues;
    } catch (error: any) {
      console.error('[TrackerDeviceAPI - listTrackerDevices]: ', error);
      throw new Error(error);
    }
  }

  public static async getTrackerDeviceById(id: string): Promise<IResponse<TrackerDeviceDto>> {
    try {
      const { data } = await axiosInstance.get<IResponse<TrackerDeviceDto>>(
        endpoints.trackerDevice.getById(id)
      );
      return data;
    } catch (error: any) {
      console.error('[TrackerDeviceAPI - getTrackerDeviceById]: ', error);
      throw new Error(error);
    }
  }

  public static async createTrackerDevice(
    trackerDeviceData: CreateTrackerDeviceDto
  ): Promise<IResponse<TrackerDeviceDto>> {
    try {
      const { data } = await axiosInstance.post<IResponse<TrackerDeviceDto>>(
        endpoints.trackerDevice.create,
        trackerDeviceData
      );
      return data;
    } catch (error: any) {
      console.error('[TrackerDeviceAPI - createTrackerDevice]: ', error);
      throw new Error(error);
    }
  }

  public static async updateTrackerDevice(
    id: string,
    trackerDeviceData: UpdateTrackerDeviceDto
  ): Promise<IResponse<TrackerDeviceDto>> {
    try {
      const { data } = await axiosInstance.put<IResponse<TrackerDeviceDto>>(
        endpoints.trackerDevice.update(id),
        trackerDeviceData
      );
      return data;
    } catch (error: any) {
      console.error('[TrackerDeviceAPI - updateTrackerDevice]: ', error);
      throw new Error(error);
    }
  }

  public static async deleteTrackerDevice(id: string): Promise<IResponse<void>> {
    try {
      const { data } = await axiosInstance.delete<IResponse<void>>(
        endpoints.trackerDevice.delete(id)
      );
      return data;
    } catch (error: any) {
      console.error('[TrackerDeviceAPI - deleteTrackerDevice]: ', error);
      throw new Error(error);
    }
  }
}
