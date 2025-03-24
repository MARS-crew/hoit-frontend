export interface IBaseResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface IPaginationParams {
  page: number;
  limit: number;
}

export interface IPaginatedResponse<T> extends IBaseResponse<T> {
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface IErrorResponse {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
} 