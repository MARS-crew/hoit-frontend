import { IBaseResponse, IPaginationParams } from './common';

export interface IApiConfig {
  baseURL: string;
  timeout: number;
  headers?: Record<string, string>;
}

export interface IApiError extends Error {
  status?: number;
  data?: unknown;
}

export interface IRequestConfig extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean>;
  data?: unknown;
  timeout?: number;
}

export type IApiResponse<T> = IBaseResponse<T>;

export interface IApiService {
  get: <T>(url: string, config?: IRequestConfig) => Promise<T>;
  post: <T>(url: string, data?: unknown, config?: IRequestConfig) => Promise<T>;
  put: <T>(url: string, data?: unknown, config?: IRequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: IRequestConfig) => Promise<T>;
}

export interface IApiBaseResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
} 