import { axiosInstance } from '../axios';
import { IApiResponse } from '@/types/api';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}

export const authApi = {
  login: async (data: ILoginRequest): Promise<IApiResponse<ILoginResponse>> => {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  },

  refreshToken: async (data: IRefreshTokenRequest): Promise<IApiResponse<IRefreshTokenResponse>> => {
    const response = await axiosInstance.post('/auth/refresh', data);
    return response.data;
  },

  logout: async (): Promise<IApiResponse<void>> => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  },
}; 