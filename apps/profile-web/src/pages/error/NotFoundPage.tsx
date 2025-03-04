import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-lg text-gray-600">페이지를 찾을 수 없습니다.</p>
        <Button
          className="mt-4"
          onClick={() => navigate('/')}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  )
} 