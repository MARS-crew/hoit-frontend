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

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">인기 검색어</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AI', 'Web3'].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">검색 결과</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 임시 검색 결과 */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">프로젝트 {item}</h3>
                <p className="mt-2 text-gray-600">프로젝트 설명이 들어갑니다.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 