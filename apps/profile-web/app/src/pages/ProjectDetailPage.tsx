import { useState } from 'react'
import { motion } from 'framer-motion'

type TabType = '상세' | '현황' | '추천'

export const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('현황')
  const tabs: TabType[] = ['상세', '현황', '추천']

  const renderTabContent = () => {
    switch (activeTab) {
      case '상세':
        return (
          <div className="w-full px-4">
            <h2 className="text-lg font-semibold">프로젝트 상세</h2>
          </div>
        )
      case '현황':
        return (
          <div className="w-full px-4">
            <h2 className="text-lg font-semibold">프로젝트 현황</h2>
          </div>
        )
      case '추천':
        return (
          <div className="w-full px-4">
            <h2 className="text-lg font-semibold">추천</h2>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      {/* 탭 네비게이션 */}
      <div className="flex border-b bg-white sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-4 text-center font-medium relative ${
              activeTab === tab ? 'text-indigo-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                layoutId="tab-indicator"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: activeTab === '상세' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="flex-1"
      >
        {renderTabContent()}
      </motion.div>
    </div>
  )
} 