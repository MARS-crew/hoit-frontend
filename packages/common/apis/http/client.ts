import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createApiClient = (baseURL: string, options: AxiosRequestConfig = {}): AxiosInstance => {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  // 요청 인터셉터 설정
  client.interceptors.request.use(
    (config) => {
      // 토큰 추가 등의 작업 수행
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // 응답 인터셉터 설정
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      // 에러 핸들링 (401, 403 등)
      if (error.response?.status === 401) {
        // 인증 만료 처리
        // localStorage.removeItem('token');
        // window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return client;
}; 