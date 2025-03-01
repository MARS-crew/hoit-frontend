import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/recommended" replace />} />
      <Route path="/" element={
        <div className="min-h-screen">
          <Navigation className="sticky top-0 z-20" />
          <main className="relative flex-1">
            <div className="container py-8 md:py-12 min-h-[calc(100vh-4rem)]">
              <Outlet />
            </div>
          </main>
          {/* 모바일 네비게이션을 위한 하단 여백 */}
          <div className="h-16 md:hidden" />
        </div>
      } />
    </Routes>
  )
} 