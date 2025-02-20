import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-8 md:py-12">
        <Outlet />
      </main>
      {/* 모바일 네비게이션을 위한 하단 여백 */}
      <div className="h-16 md:hidden" />
    </div>
  )
} 