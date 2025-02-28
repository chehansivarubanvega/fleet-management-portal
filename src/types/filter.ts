import type { GridFilterModel } from '@mui/x-data-grid';



export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export type DataGridFilterParams = {
  limit: number;
  page: number;
  sortField: string;
  sortDirection: SortDirection;
  filterModel: GridFilterModel;
};

export type PaginationFilterParams = {
  pageSize: number;
  pageNumber: number;
  // sortField: string;
  // sortDirection: SortDirection;
}