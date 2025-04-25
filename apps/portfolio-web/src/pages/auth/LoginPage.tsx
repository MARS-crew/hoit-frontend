import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/common/Button'
import { userState, isAuthenticatedState } from '@/store/atoms/auth'

interface LoginForm {
  id: string
  password: string
}

export const LoginPage = () => {
  const navigate = useNavigate()
  const setUser = useSetRecoilState(userState)
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState)
  const isAuthenticated = useRecoilValue(isAuthenticatedState)
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/recommended', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const loginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      // 임시 로그인 체크
      if (data.id === 'mars' && data.password === '1595') {
        return {
          user: {
            id: 'mars',
            name: 'Mars User',
            email: 'mars@example.com'
          }
        }
      }
      throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.')
    },
    onSuccess: (data) => {
      setUser(data.user)
      setIsAuthenticated(true)
      navigate('/recommended', { replace: true })
    },
    onError: (error) => {
      alert(error instanceof Error ? error.message : '로그인에 실패했습니다.')
    },
  })

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            로그인
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                {...register('id', { required: '아이디를 입력해주세요' })}
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="아이디"
              />
              {errors.id && (
                <p className="mt-1 text-sm text-red-600">{errors.id.message}</p>
              )}
            </div>
            <div>
              <input
                {...register('password', { required: '비밀번호를 입력해주세요' })}
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="비밀번호"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? '로그인 중...' : '로그인'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 