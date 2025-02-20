import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container py-4">
          <h1 className="text-xl font-bold">Hoit</h1>
        </div>
      </header>
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  )
} 