import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

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
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {skill}
  </span>
)

interface PreferenceBadgeProps {
  preference: string
}

const PreferenceBadge = ({ preference }: PreferenceBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {preference}
  </span>
)

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    <div className="page relative h-full bg-white" ref={ref}>
      <div className="page-content h-full">
        {children}
      </div>
    </div>
  )
)

export const RecommendedProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const flipBookRef = useRef<any>(null)

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
    },
  ]

  const SimpleView = ({ user }: { user: typeof recommendedUsers[0] }) => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-sm">{user.linkCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">{user.starCount}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{user.description}</p>

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
            {user.roles.map((role) => (
              <SkillBadge key={role} skill={role} />
            ))}
          </div>
        </div>

        <div className="py-5">
          <div className="flex flex-wrap gap-1.5">
            {user.position.map((pos) => (
              <SkillBadge key={pos} skill={pos} />
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
    </div>
  )

  const DetailView = ({ user }: { user: typeof recommendedUsers[0] }) => (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold">{user.name} 상세 프로필</h2>
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
    </div>
  )

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

                <span className="text-gray-500">my-github 외 {user.linkCount}개</span>
                <span className="flex items-center gap-1 text-gray-500">
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
                {user.roles.map((role) => (
                  <SkillBadge key={role} skill={role} />
                ))}
              </div>

              {/* 포지션 */}
              <div className="flex gap-2 mb-4">
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
                key={user.id}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%'
                }}
                initial={{ y: index === 0 ? 0 : '100%' }}
                animate={{ 
                  y: `${(index - currentIndex) * 100}%`,
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
                drag="y"
                dragDirectionLock
                dragConstraints={{
                  top: 0,
                  bottom: 0
                }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  const swipe = info.offset.y;
                  const velocity = info.velocity.y;

                  if (swipe < -50 || velocity < -500) {
                    if (currentIndex < recommendedUsers.length - 1) {
                      setCurrentIndex(currentIndex + 1);
                      setShowDetail(false);
                    }
                  } else if (swipe > 50 || velocity > 500) {
                    if (currentIndex > 0) {
                      setCurrentIndex(currentIndex - 1);
                      setShowDetail(false);
                    }
                  }
                }}
              >
                <div className="relative h-full bg-white rounded-lg shadow-sm border mx-4">
                  <HTMLFlipBook
                    width={window.innerWidth - 32}
                    height={window.innerHeight - 108}
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1000}
                    maxShadowOpacity={0.5}
                    showCover={false}
                    mobileScrollSupport={true}
                    onFlip={() => {
                      setShowDetail(!showDetail)
                      setSelectedUser(showDetail ? null : user.id)
                    }}
                    className="stf__parent"
                    style={{
                      position: 'relative',
                      display: 'block',
                      zIndex: 1
                    }}
                    ref={(el) => (flipBookRef.current = el)}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={false}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                  >
                    <Page>
                      <div className="absolute inset-0 p-6 overflow-y-auto">
                        <SimpleView user={user} />
                      </div>
                    </Page>
                    <Page>
                      <div className="absolute inset-0 p-6 overflow-y-auto">
                        <DetailView user={user} />
                      </div>
                    </Page>
                  </HTMLFlipBook>
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 