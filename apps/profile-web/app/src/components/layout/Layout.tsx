import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { PageTransition } from './PageTransition'

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation className="sticky top-0 z-20" />
      <main className="relative min-h-[calc(100vh-4rem)]">
        <PageTransition>
          <div className="container py-8 md:py-12">
            <Outlet />
          </div>
        </PageTransition>
      </main>
      {/* 모바일 네비게이션을 위한 하단 여백 */}
      <div className="h-16 md:hidden" />
    </div>
  )
} 