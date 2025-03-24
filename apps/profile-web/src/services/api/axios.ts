import axios, { AxiosError } from 'axios'
import { storage } from '@/utils/storage'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000, // 30초로 증가
  headers: {
    'Content-Type': 'application/json',
  },
  // 특정 상태 코드에 대해서만 retry 적용
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 422
  },
})

// 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config
    
    // 401 에러이고 토큰이 만료된 경우에만 refresh 시도
    if (error.response?.status === 401 && originalRequest) {
      try {
        const refreshToken = storage.get('refreshToken')
        if (!refreshToken) {
          throw new Error('No refresh token')
        }

        // refresh token으로 새 access token 요청
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          { refreshToken }
        )

        const { accessToken } = data
        storage.set('token', accessToken)

        // 새 토큰으로 원래 요청 재시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
        }
        return axios(originalRequest)
      } catch (refreshError) {
        // refresh 실패시 로그아웃 처리
        storage.remove('token')
        storage.remove('refreshToken')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
) 