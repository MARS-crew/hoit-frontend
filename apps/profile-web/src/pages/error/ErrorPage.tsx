import { useRouteError } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">오류가 발생했습니다</h1>
        <p className="mt-2 text-lg text-gray-600">{error.message}</p>
        <Button
          className="mt-4"
          onClick={() => window.location.href = '/'}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  )
} 