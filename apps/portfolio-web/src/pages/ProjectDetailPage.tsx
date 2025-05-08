import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube } from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cube'

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
  const { id } = useParams<{ id: string }>()
  const isEngineerProject = id?.startsWith('eng-')
  const [activeTab, setActiveTab] = useState<TabType>(isEngineerProject ? '상세' : '현황')
  const [showDetail, setShowDetail] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const verticalSwiperRef = useRef<any>(null)
  const horizontalSwiperRef = useRef<any>(null)

  const tabs: TabType[] = isEngineerProject ? ['상세'] : ['상세', '현황', '추천']

  const SwiperConfig: SwiperProps = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    modules: [EffectCube],
    onSlideChange: (swiper) => {
      const isDetail = swiper.activeIndex === 2;
      setShowDetail(isDetail);
      if (isDetail) {
        verticalSwiperRef.current.allowTouchMove = false;
      } else {
        verticalSwiperRef.current.allowTouchMove = true;
      }
    }
  }

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
          <h3 className="font-medium mb-2">문효찬</h3>
          <p className="text-gray-600">010-3320-1484</p>
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

  const VideoProfilePage = () => (
    <div className="h-full p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="p-6"
          animate={{
            y: [0, -50, 0],
          }}
          transition={{
            duration: 1.0,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        >
          영상 프로필 페이지
        </motion.div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    return (
      <Swiper
        initialSlide={tabs.indexOf(activeTab)}
        onSwiper={(swiper) => {
          horizontalSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveTab(tabs[swiper.activeIndex]);
        }}
        allowTouchMove={!showDetail}
        className="h-full flex-1"
      >
        <SwiperSlide className="h-full">
          <div className="w-full h-full px-4 pt-4">
            <h2 className="text-lg font-semibold">프로젝트 상세</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="w-full h-full px-4 pt-4">
            <h2 className="text-lg font-semibold">프로젝트 현황</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="w-full h-full">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.activeIndex)
                setShowDetail(false)
              }}
              className="h-full"
              onBeforeInit={(swiper) => {
                verticalSwiperRef.current = swiper
              }}
            >
              {recommendedUsers.map((user) => (
                <SwiperSlide key={user.id} className="h-full">
                  <div className="h-full bg-white">
                    <Swiper
                      {...SwiperConfig}
                      className="h-full [&_.swiper-cube-shadow]:hidden"
                      allowSlideNext={true}
                      allowSlidePrev={true}
                    >
                      <SwiperSlide className="h-full">
                        <VideoProfilePage />
                      </SwiperSlide>
                      <SwiperSlide className="h-full">
                        <div className="h-full p-6 overflow-y-auto">
                          <SimpleView user={user} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="h-full">
                        <div className="h-full p-6 overflow-y-auto">
                          <DetailView user={user} />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SwiperSlide>
      </Swiper>
    )
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
            onClick={() => {
              setActiveTab(tab as TabType);
              horizontalSwiperRef.current?.slideTo(tabs.indexOf(tab));
            }}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600">
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        {renderTabContent()}
      </div>
    </div>
  )
} 