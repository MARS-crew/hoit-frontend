import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { LoginPage } from '@/pages/auth/LoginPage'
import { NotFoundPage } from '@/pages/error/NotFoundPage'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { ProjectListPage } from '@/pages/ProjectListPage'
import { RecommendedProjectsPage } from '@/pages/RecommendedProjectsPage'
import { ChatRoomListPage } from '@/pages/ChatRoomListPage'
import { SearchPage } from '@/pages/SearchPage'
import { ProfilePage } from '@/pages/ProfilePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to="/login" replace />,
      },
      {
        path: 'recommended',
        element: (
          <ProtectedRoute>
            <RecommendedProjectsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'projects',
        element: (
          <ProtectedRoute>
            <ProjectListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'chats',
        element: (
          <ProtectedRoute>
            <ChatRoomListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'search',
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]) 