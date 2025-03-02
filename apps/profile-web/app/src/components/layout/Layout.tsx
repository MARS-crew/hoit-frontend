import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation className="sticky top-0 z-20" />
      <main className="relative flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </main>
      {/* 모바일 네비게이션을 위한 하단 여백 */}
      <div className="h-16 md:hidden" />
    </div>
  )
} 