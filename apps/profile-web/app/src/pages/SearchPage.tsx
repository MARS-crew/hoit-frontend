import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/common/Button'

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'project' | 'engineer'>('project')
  const [dragStart, setDragStart] = useState(0)

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
    const delta = clientX - dragStart

    if (Math.abs(delta) > 50) {
      if (delta > 0 && activeTab === 'engineer') {
        setActiveTab('project')
      } else if (delta < 0 && activeTab === 'project') {
        setActiveTab('engineer')
      }
    }
  }

  return (
    <div
      className="min-h-screen touch-pan-x"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {/* 탭 네비게이션 */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center font-medium relative ${
            activeTab === 'project' ? 'text-indigo-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('project')}
        >
          Project
          {activeTab === 'project' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
              layoutId="tab-indicator"
            />
          )}
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium relative ${
            activeTab === 'engineer' ? 'text-indigo-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('engineer')}
        >
          Engineer
          {activeTab === 'engineer' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
              layoutId="tab-indicator"
            />
          )}
        </button>
      </div>

      {/* 검색 영역 */}
      <div className="mt-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={activeTab === 'project' ? "프로젝트 또는 기술 스택을 검색하세요" : "엔지니어 또는 기술 스택을 검색하세요"}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button>검색</Button>
        </div>
      </div>

      {/* 검색 결과 영역 */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: activeTab === 'project' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-6"
      >
        <div className="text-gray-500">
          {activeTab === 'project' ? '프로젝트 검색 결과' : '엔지니어 검색 결과'}
        </div>
      </motion.div>
    </div>
  )
} 