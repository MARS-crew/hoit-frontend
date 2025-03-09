import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '../components/atoms/Badge'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { ProfileCard } from '../components/molecules/ProfileCard'
import { ProfileDetail } from '../components/molecules/ProfileDetailSection'

interface TechBadgeProps {
  count: number
  tech: string
}

const TechBadge = ({ count, tech }: TechBadgeProps) => (
  <Badge variant="tech">
    {count} | {tech}
  </Badge>
)

interface SkillBadgeProps {
  skill: string
}

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <Badge variant="skill">{skill}</Badge>
)

interface PreferenceBadgeProps {
  preference: string
}

const PreferenceBadge = ({ preference }: PreferenceBadgeProps) => (
  <Badge variant="preference">{preference}</Badge>
)

// TODO: 더미데이터, 삭제 예정
const RECOMMENDED_USERS = [
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

export const RecommendedProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const handleShowDetail = (userId: string) => {
    setSelectedUser(userId)
    setShowDetail(true)
  }

  const handleCloseDetail = () => {
    setShowDetail(false)
    setSelectedUser(null)
  }

  const selectedUserData = RECOMMENDED_USERS.find(u => u.id === selectedUser)

  return (
    <div className="space-y-6">
      {/* PC 뷰 */}
      <div className="hidden md:block">
        <h1 className="text-display-lg font-bold mb-6">추천 프로젝트</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {RECOMMENDED_USERS.map((user) => (
            <ProfileCard
              key={user.id}
              user={user}
              onClick={() => handleShowDetail(user.id)}
            />
          ))}
        </div>
      </div>

      {/* 모바일 뷰 */}
      <div className="md:hidden fixed inset-0 bg-white">
        <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-secondary-200">
          <h1 className="text-display-md font-bold p-4">추천 프로젝트</h1>
        </div>
        <div className="absolute inset-0 top-[60px] pt-4 pb-24">
          <div className="absolute inset-0 overflow-hidden">
            {RECOMMENDED_USERS.map((user, index) => (
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
                    if (currentIndex < RECOMMENDED_USERS.length - 1) {
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
                  <motion.div
                    className="h-full"
                    animate={{ x: showDetail ? '-100%' : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    drag="x"
                    dragDirectionLock
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) {
                        handleShowDetail(user.id);
                      }
                    }}
                  >
                    <ProfileCard user={user} />
                  </motion.div>

                  {/* 상세 프로필 */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '100%' }}
                    animate={{ x: showDetail && selectedUser === user.id ? 0 : '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    drag="x"
                    dragDirectionLock
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 50) {
                        handleCloseDetail();
                      }
                    }}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-display-sm font-bold">{user.name} 상세 프로필</h2>
                      </div>
                      <ProfileDetail userName={user.name} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PC 상세 프로필 모달 */}
      {showDetail && isDesktop && selectedUserData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-display-sm font-bold">
                  {selectedUserData.name} 상세 프로필
                </h2>
                <button 
                  onClick={handleCloseDetail}
                  className="text-secondary-500 hover:text-secondary-700"
                >
                  닫기
                </button>
              </div>
              <ProfileDetail userName={selectedUserData.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 