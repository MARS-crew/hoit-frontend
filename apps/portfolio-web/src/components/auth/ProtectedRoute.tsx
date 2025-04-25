import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isAuthenticatedState } from '@/store/atoms/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useRecoilValue(isAuthenticatedState)
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { 
        replace: true,
        state: { from: location.pathname }
      })
    }
    // 여기에 role 체크 로직 추가 가능
  }, [isAuthenticated, navigate])

  return isAuthenticated ? <>{children}</> : null
} 