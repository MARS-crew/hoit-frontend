import { createApiClient } from './http/client';

// 환경 변수에서 API URL 가져오기
const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

// API 클라이언트 인스턴스 생성
export const apiClient = createApiClient(API_URL);

// 사용자 관련 API
export const userApi = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),

  register: (userData: { email: string; password: string; name: string }) =>
    apiClient.post('/auth/register', userData),

  getProfile: () =>
    apiClient.get('/user/profile'),
};

// 상품 관련 API
export const productApi = {
  getProducts: (page = 1, limit = 10) =>
    apiClient.get('/products', { params: { page, limit } }),

  getProductById: (id: string) =>
    apiClient.get(`/products/${id}`),

  createProduct: (productData: any) =>
    apiClient.post('/products', productData),
}; 