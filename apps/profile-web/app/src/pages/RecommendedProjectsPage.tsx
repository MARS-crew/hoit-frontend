import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">추천 프로젝트</h1>
      
      <div className="hidden md:flex md:flex-col md:space-y-4">
        {recommendedUsers.map((user) => (
          <div key={user.id} className="p-6 bg-white rounded-lg shadow-sm border">
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

      {/* 모바일 뷰 */}
      <div className="md:hidden h-[calc(100vh-12rem)] relative overflow-hidden">
        <div className="absolute inset-0">
          {recommendedUsers.map((user, index) => (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
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
                  }
                } else if (swipe > 50 || velocity > 500) {
                  if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1)
                  }
                }
              }}
              className="card touch-none"
            >
              <div className="h-full p-6 bg-white rounded-lg shadow-sm mx-4">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <p className="text-gray-600">{user.description}</p>
                  </div>

                  <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
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

                  <div className="space-y-4 mb-auto">
                    <div className="flex flex-wrap gap-2">
                      {user.techStack.map((tech) => (
                        <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {user.roles.map((role) => (
                        <SkillBadge key={role} skill={role} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {user.preferences.map((pref) => (
                      <PreferenceBadge key={pref} preference={pref} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 