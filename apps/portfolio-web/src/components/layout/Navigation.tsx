import { NavLink } from 'react-router-dom'
import { 
  RiHome5Line, RiHome5Fill,
  RiListUnordered, RiListCheck,
  RiMessage2Line, RiMessage2Fill,
  RiSearchLine, RiSearchFill,
  RiUserLine, RiUserFill 
} from 'react-icons/ri'

const navItems = [
  { 
    path: '/recommended', 
    label: '추천',
    icon: RiHome5Line,
    activeIcon: RiHome5Fill
  },
  { 
    path: '/projects', 
    label: '내 프로젝트',
    icon: RiListUnordered,
    activeIcon: RiListCheck
  },
  { 
    path: '/chats', 
    label: '채팅',
    icon: RiMessage2Line,
    activeIcon: RiMessage2Fill
  },
  { 
    path: '/search', 
    label: '검색',
    icon: RiSearchLine,
    activeIcon: RiSearchFill
  },
  { 
    path: '/profile', 
    label: '프로필',
    icon: RiUserLine,
    activeIcon: RiUserFill
  },
]

interface NavigationProps {
  className?: string
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={`bg-white border-b ${className || ''}`}>
      {/* 데스크톱 네비게이션 */}
      <div className="hidden md:block container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Hoit</h1>
            <div className="ml-10">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 모바일 하단 네비게이션 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="grid grid-cols-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-3 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <item.activeIcon className="text-xl mb-1" />
                  ) : (
                    <item.icon className="text-xl mb-1" />
                  )}
                  <span className="text-xs">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
} 