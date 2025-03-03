import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

interface TechBadgeProps {
  count: number
  tech: string
}

const TechBadge = ({ count, tech }: TechBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {count} | {tech}
  </span>
)

interface SkillBadgeProps {
  skill: string
}

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-full">
    {skill}
  </span>
)

interface PreferenceBadgeProps {
  preference: string
}

const PreferenceBadge = ({ preference }: PreferenceBadgeProps) => (
  <span className="px-4 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full">
    {preference}
  </span>
)

export const RecommendedProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

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
      skills: ['학생', '프리랜서'],
      roles: ['B.E', 'DevOps', 'TechLeader'],
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
      skills: ['현직자', '스타트업'],
      roles: ['F.E', 'PM', 'Designer'],
      preferences: ['한 페이지가 될 수 있게', 'DAY6', '집 일찍 가는 방법'],
      description: '아르다운 청춘의 한장 함께 써내려 가자 너와의 추억들로 가득 채울래 컴온!',
    },
  ]

  return (
    <div className="md:space-y-6">
      {/* PC 뷰 */}
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold mb-6">추천 프로젝트</h1>
        <div className="grid md:grid-cols-2 md:gap-4">
          {recommendedUsers.map((user) => (
            <div 
              key={user.id} 
              className="p-6 bg-white rounded-lg shadow-sm border cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => {
                setSelectedUser(user.id)
                setShowDetail(true)
              }}
            >
              {/* 설명 */}
              <p className="text-gray-700 mb-4">{user.description}</p>
              
              {/* 프로필 정보 */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium">{user.name}</span>
                <Link to={user.githubUrl} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                  </svg>
                </Link>
                <span className="text-gray-500">my-github 외 {user.linkCount}개</span>
                <span className="flex items-center gap-1 text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  </svg>
                  {user.starCount}
                </span>
              </div>

              {/* 기술 스택 */}
              <div className="flex gap-2 mb-4">
                {user.techStack.map((tech) => (
                  <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
                ))}
              </div>

              {/* 스킬 */}
              <div className="flex gap-2 mb-4">
                {user.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>

              {/* 역할 */}
              <div className="flex gap-2 mb-4">
                {user.roles.map((role) => (
                  <SkillBadge key={role} skill={role} />
                ))}
              </div>

              {/* 선호사항 */}
              <div className="flex flex-wrap gap-2">
                {user.preferences.map((pref) => (
                  <PreferenceBadge key={pref} preference={pref} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일 뷰 */}
      <div className="md:hidden fixed inset-0 bg-white">
        <div className="fixed top-0 left-0 right-0 z-10 bg-white">
          <h1 className="text-2xl font-bold p-4 border-b">추천 프로젝트</h1>
        </div>
        <div className="absolute inset-0 top-[60px] pt-4 pb-24">
          <div className="absolute inset-0 overflow-hidden">
            {recommendedUsers.map((user, index) => (
              <motion.div
                key={index}
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
                className="card touch-none"
              >
                <div className="w-full h-full p-6 bg-white rounded-lg shadow-sm mx-4">
                  <motion.div 
                    className="h-full flex flex-col"
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
                    <div className="mb-3">
                      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                      <p className="text-gray-600 text-sm">{user.description}</p>
                    </div>

                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <Link to={user.githubUrl}>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          </svg>
                          my-github 외 {user.linkCount}개
                        </span>
                      </Link>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        </svg>
                        {user.starCount}
                      </span>
                    </div>

                    <div className="flex-1 divide-y divide-gray-100">
                      <div className="py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {user.techStack.map((tech) => (
                            <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
                          ))}
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {user.skills.map((skill) => (
                            <SkillBadge key={skill} skill={skill} />
                          ))}
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {user.roles.map((role) => (
                            <SkillBadge key={role} skill={role} />
                          ))}
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {user.preferences.map((pref) => (
                            <PreferenceBadge key={pref} preference={pref} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full h-full p-6 bg-white rounded-lg shadow-sm mx-4">
                  <motion.div 
                    className="h-full flex flex-col"
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
        </div>
      </div>

      {/* PC 상세 프로필 모달 */}
      {showDetail && isDesktop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {recommendedUsers.find(u => u.id === selectedUser)?.name} 상세 프로필
                </h2>
                <button 
                  onClick={() => {
                    setShowDetail(false)
                    setSelectedUser(null)
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
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
                  <h3 className="font-medium mb-2">네이버</h3>
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
                    <p className="text-gray-600">마스터즌 2025.01 ~ 재직중</p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 