import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../services/api/axios'

export const useUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users/${userId}`)
      return data
    },
  })
} 