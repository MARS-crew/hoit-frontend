import { axiosInstance } from '../axios';
import { IApiResponse, IPaginatedResponse } from '@/types/api';

export interface IUser {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateUserRequest {
  name?: string;
  profileImage?: string;
}

export const userApi = {
  getProfile: async (): Promise<IApiResponse<IUser>> => {
    const response = await axiosInstance.get('/users/me');
    return response.data;
  },

  updateProfile: async (data: IUpdateUserRequest): Promise<IApiResponse<IUser>> => {
    const response = await axiosInstance.put('/users/me', data);
    return response.data;
  },

  getUsers: async (page: number = 1, limit: number = 10): Promise<IPaginatedResponse<IUser[]>> => {
    const response = await axiosInstance.get('/users', {
      params: { page, limit },
    });
    return response.data;
  },
}; 