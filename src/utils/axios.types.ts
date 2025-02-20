export interface IResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
  }
  export interface PageMeta {
    page: number;
    limit: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }
  export interface PaginatedDto<T> {
    meta: PageMeta;
    results: T[];
  }
  
  export const defaultPaginationValues: PaginatedDto<never> = {
    results: [],
    meta: {
      itemCount: 0,
      page: 1,
      limit: 10,
      pageCount: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    },
  };
  