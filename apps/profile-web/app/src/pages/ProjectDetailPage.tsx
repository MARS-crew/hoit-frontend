import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type TabType = '상세' | '현황' | '추천'

const TechBadge = ({ count, tech }: { count: number; tech: string }) => (
  <span className="px-2 py-1 text-sm bg-gray-100 rounded-full">
    {tech} ({count})
  </span>
)

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-2 py-1 text-sm bg-gray-100 rounded-full">
    {skill}
  </span>
)

const PreferenceBadge = ({ preference }: { preference: string }) => (
  <span className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
    {preference}
  </span>
)

export const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('현황')
  const [showDetail, setShowDetail] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabs: TabType[] = ['상세', '현황', '추천']

  const recommendedUsers = [
    {
      id: 'piano-man',
      name: '피아노맨',
      githubUrl: 'github.com',
      linkCount: 3,
      starCount: 103,
      techStack: [
        { count: 6, tech: 'Java' },
        { count: 2, tech: 'MySQL' },
        { count: 1, tech: 'React' },
      ],
      roles: ['학생', '프리랜서'],
      position: ['B.E', 'DevOps', 'TechLeader'],
      preferences: ['새로운 사람들과의 협업', '업무 자동화', '재활용 가능한 코드'],
      description: '사용자 경험을 중요시하면서 백엔드 개발도 하는 나 김인후 다 덤벼라',
    },
    {
      id: 'hyochan-man',
      name: '효찬맨',
      githubUrl: 'github.com',
      linkCount: 4,
      starCount: 245,
      techStack: [
        { count: 8, tech: 'Python' },
        { count: 4, tech: 'Django' },
        { count: 3, tech: 'Vue' },
      ],
      roles: ['현직자', '스타트업'],
      position: ['F.E', 'PM', 'Designer'],
      preferences: ['한 페이지가 될 수 있게', 'DAY6', '집 일찍 가는 방법'],
      description: '아르다운 청춘의 한장 함께 써내려 가자 너와의 추억들로 가득 채울래 컴온!',
    }
  ]

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
          <div className="w-full h-full">
            {recommendedUsers.map((user, index) => (
              <motion.div
                key={user.id}
                style={{
                  position: 'absolute',
                  width: '200%',
                  height: '100%',
                  display: 'flex',
                }}
                initial={{ y: index === 0 ? 0 : '100%' }}
                animate={{ 
                  y: `${(index - currentIndex) * 100}%`,
                  x: showDetail ? '-50%' : '0%',
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  x: {
                    type: 'tween',
                    duration: 0.3,
                    ease: 'easeInOut'
                  }
                }}
                drag={showDetail ? false : "y"}
                dragDirectionLock
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  const swipe = info.offset.y
                  const velocity = info.velocity.y

                  if (swipe < -50 || velocity < -500) {
                    if (currentIndex < recommendedUsers.length - 1) {
                      setCurrentIndex(currentIndex + 1)
                      setShowDetail(false)
                    }
                  } else if (swipe > 50 || velocity > 500) {
                    if (currentIndex > 0) {
                      setCurrentIndex(currentIndex - 1)
                      setShowDetail(false)
                    }
                  }
                }}
                className="touch-none"
              >
                {/* 간단 프로필 */}
                <div className="w-full h-full p-4">
                  <motion.div 
                    className="h-full flex flex-col p-6 bg-white rounded-lg shadow-sm border"
                    drag="x"
                    dragDirectionLock
                    dragConstraints={{ left: -100, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) {
                        setShowDetail(true)
                      }
                    }}
                  >
                    {/* 설명 */}
                    <p className="text-gray-700 mb-4">{user.description}</p>
                    
                    {/* 프로필 정보 */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                      <span className="font-medium">{user.name}</span>
                      <Link to={user.githubUrl} className="text-gray-500 hover:text-gray-700">
                        my-github
                      </Link>
                      <span className="text-gray-500">외 {user.linkCount}개</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        {user.starCount}
                      </span>
                    </div>

                    {/* 기술 스택 */}
                    <div className="flex gap-2 mb-4 pb-4 border-b">
                      {user.techStack.map((tech) => (
                        <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
                      ))}
                    </div>

                    {/* 스킬 */}
                    <div className="flex gap-2 mb-4 pb-4 border-b">
                      {user.roles.map((role) => (
                        <SkillBadge key={role} skill={role} />
                      ))}
                    </div>

                    <div className="flex gap-2 mb-4 pb-4 border-b">
                      {user.position.map((pos) => (
                        <SkillBadge key={pos} skill={pos} />
                      ))}
                    </div>

                    {/* 관심분야 */}
                    <div className="flex flex-wrap gap-2">
                      {user.preferences.map((pref) => (
                        <PreferenceBadge key={pref} preference={pref} />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* 상세 프로필 */}
                <div className="w-full h-full p-4">
                  <motion.div 
                    className="h-full flex flex-col p-6 bg-white rounded-lg shadow-sm border"
                    drag="x"
                    dragDirectionLock
                    dragConstraints={{ left: 0, right: 100 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 50) {
                        setShowDetail(false)
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-6 sticky top-0 bg-white z-10 py-2">
                      <h2 className="text-xl font-bold">{user.name} 상세 프로필</h2>
                    </div>

                    <div className="space-y-6 overflow-y-auto flex-1 pb-20" style={{ touchAction: 'pan-y' }}>
                      <div>
                        <h3 className="font-medium mb-2">홀길동</h3>
                        <p className="text-gray-600">010-9076-3143</p>
                        <p className="text-gray-600">2001.01</p>
                        <div className="flex gap-2 mt-2">
                          <span className="px-2 py-1 text-sm bg-gray-100 rounded">학생</span>
                          <span className="px-2 py-1 text-sm bg-gray-100 rounded">직장</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">소개</h3>
                        <p className="text-gray-600">
                          안녕 하세요.<br />
                          신입 웹 개발자 홀길동 입니다.<br />
                          희망하는 직무는 프론트 엔드, 백 엔드, PM부분 직무<br />
                          희망하고 공부 하고 있습니다. 잘부탁 드립니다.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">URL</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <Link to="#" className="text-blue-500 hover:underline">네이버</Link>
                          <Link to="#" className="text-blue-500 hover:underline">네이버</Link>
                          <Link to="#" className="text-blue-500 hover:underline">네이버</Link>
                          <Link to="#" className="text-blue-500 hover:underline">네이버</Link>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">경력</h3>
                        <div className="space-y-2">
                          <p className="text-gray-600">동양 2024.01 ~ 2024.12</p>
                          <p className="text-gray-600">마스외전 2025.01 ~ 재직중</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">수상이력</h3>
                        <div className="space-y-2">
                          <p className="text-gray-600">자격증 연계 금상 2024.01</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">자격증</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-gray-600">정보처리기사 2024.01</p>
                            <p className="text-gray-600">DB 2024.12</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">활동 이력</h3>
                        <div className="space-y-2">
                          <p className="text-gray-600">자격증 연계 2024.01 ~ 2024.12</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">백 엔드, 개발 PL, 프로젝트 PM</h3>
                        <p className="text-gray-600">
                          프로젝트의 전반적인 이해도가 높으며, 팀원들과의 원활한 소통으로 
                          프로젝트를 성공적으로 이끌어낸 경험이 있습니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
        className="flex-1 relative"
      >
        {renderTabContent()}
      </motion.div>
    </div>
  )
} 