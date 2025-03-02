import { useState } from 'react'
import { Button } from '@/components/common/Button'

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <h1 className="text-2xl font-bold">프로젝트 검색</h1>
      <div className="mt-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="프로젝트 또는 기술 스택을 검색하세요"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button>검색</Button>
        </div>
      </div>
    </div>
  )
} 