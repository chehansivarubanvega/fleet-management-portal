'use client';
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Link from "next/link";
import React, { useState } from "react";
import { PaginationFilterParams } from "@/types/filter";
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { TrackerDeviceAPIService } from "@/api/tracker-device/tracker-device.api";
import { styled } from '@mui/material/styles';
import { DataGrid, GridToolbarExport, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid';

const StyledToolbarButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : 'rgb(55 65 81)',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgb(229 231 235)' : 'rgb(75 85 99)'}`,
  color: theme.palette.mode === 'light' ? 'rgb(75 85 99)' : 'rgb(209 213 219)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(243 244 246)' : 'rgb(75 85 99)',
  },
  transition: 'all 150ms ease',
}));

function CustomToolbar() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-5 flex items-center justify-between">
        <GridToolbarQuickFilter 
          placeholder="Search devices..."
          sx={{
            minWidth: '300px',
            '& .MuiInputBase-root': {
              backgroundColor: (theme) => 
                theme.palette.mode === 'light' ? 'rgb(249 250 251)' : 'rgb(55 65 81)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
            }
          }}
        />
        <div className="flex items-center gap-3">
          <GridToolbarColumnsButton
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'light' ? '#fff' : 'rgb(55 65 81)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: (theme) => `1px solid ${theme.palette.mode === 'light' ? 'rgb(229 231 235)' : 'rgb(75 85 99)'}`,
              color: (theme) => theme.palette.mode === 'light' ? 'rgb(75 85 99)' : 'rgb(209 213 219)',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.mode === 'light' ? 'rgb(243 244 246)' : 'rgb(75 85 99)',
              },
              transition: 'all 150ms ease',
            }}
          />
          <GridToolbarFilterButton
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'light' ? '#fff' : 'rgb(55 65 81)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: (theme) => `1px solid ${theme.palette.mode === 'light' ? 'rgb(229 231 235)' : 'rgb(75 85 99)'}`,
              color: (theme) => theme.palette.mode === 'light' ? 'rgb(75 85 99)' : 'rgb(209 213 219)',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.mode === 'light' ? 'rgb(243 244 246)' : 'rgb(75 85 99)',
              },
              transition: 'all 150ms ease',
            }}
          />
          <GridToolbarExport
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'light' ? '#fff' : 'rgb(55 65 81)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: (theme) => `1px solid ${theme.palette.mode === 'light' ? 'rgb(229 231 235)' : 'rgb(75 85 99)'}`,
              color: (theme) => theme.palette.mode === 'light' ? 'rgb(75 85 99)' : 'rgb(209 213 219)',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.mode === 'light' ? 'rgb(243 244 246)' : 'rgb(75 85 99)',
              },
              transition: 'all 150ms ease',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function TrackerDeviceListView() {
  const [paginationModel, setPaginationModel] = useState<PaginationFilterParams>({
    pageNumber: 1,
    pageSize: 10,
  });

  const columns: GridColDef[] = [
    { 
      field: 'trackerDeviceId', 
      headerName: 'Device ID', 
      width: 250,
      flex: 1,
    },
    { 
      field: 'serialNumber', 
      headerName: 'Serial Number', 
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <div className="font-medium text-brand-500">
          {params.value}
        </div>
      ),
    },
    { 
      field: 'manufacturedDate', 
      headerName: 'Manufactured Date', 
      width: 200,
      flex: 1,
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      },
    },
    { 
      field: 'userId', 
      headerName: 'User ID', 
      width: 250,
      flex: 1,
    },
  ];

  const { data: trackerDeviceData, isLoading } = useQuery({
    queryKey: [
      'tracker-device-list',
      paginationModel,
    ],
    queryFn: async () => {
      const response = await TrackerDeviceAPIService.listTrackerDevices({
        pageNumber: paginationModel.pageNumber,
        pageSize: paginationModel.pageSize,
      });
      return response;
    },
    placeholderData: keepPreviousData,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <PageBreadcrumb pageTitle="Tracker Devices" />
        <div className="mt-8 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Device List</h1>
            <Link
              href="/tracker-devices/add-device"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg shadow-sm transition-colors duration-200 gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Device
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 flex flex-col overflow-hidden">
            <DataGrid
              rows={trackerDeviceData || []}
              columns={columns}
              getRowId={(row) => row.trackerDeviceId}
              loading={isLoading}
              pageSizeOptions={[5, 10, 25, 50]}
              paginationModel={{
                page: paginationModel.pageNumber - 1,
                pageSize: paginationModel.pageSize,
              }}
              onPaginationModelChange={(model) => {
                setPaginationModel({
                  pageNumber: model.page + 1,
                  pageSize: model.pageSize,
                });
              }}
              slots={{
                toolbar: CustomToolbar,
                noRowsOverlay: () => (
                  <EmptyContent 
                    title="No Devices Found" 
                    description="Try adjusting your search or filters"
                    icon="search"
                  />
                ),
              }}
              disableColumnMenu
              disableRowSelectionOnClick
              getRowHeight={() => 'auto'}
              className="border-0"
              sx={{
                '& .MuiDataGrid-main': {
                  backgroundColor: 'transparent',
                },
                '& .MuiDataGrid-cell': {
                  borderColor: 'rgb(229 231 235)',
                  padding: '1rem',
                  '@media (prefers-color-scheme: dark)': {
                    borderColor: 'rgb(75 85 99)',
                  },
                },
                '& .MuiDataGrid-row': {
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'rgb(249 250 251)',
                    '@media (prefers-color-scheme: dark)': {
                      backgroundColor: 'rgba(31, 41, 55, 0.3)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgb(243 244 246)',
                    '@media (prefers-color-scheme: dark)': {
                      backgroundColor: 'rgba(55, 65, 81, 0.3)',
                    },
                  },
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: 'rgb(249 250 251)',
                  minHeight: '60px !important',
                  '@media (prefers-color-scheme: dark)': {
                    backgroundColor: 'rgb(31 41 55)',
                    borderColor: 'rgb(75 85 99)',
                  },
                  '& .MuiDataGrid-columnHeader': {
                    padding: '0 1rem',
                  },
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: '1px solid rgb(229 231 235)',
                  '@media (prefers-color-scheme: dark)': {
                    borderColor: 'rgb(75 85 99)',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
