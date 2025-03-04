import { Link } from 'react-router-dom'

interface Project {
  id: string
  title: string
  period: string
  status: string
  description: string
  badge?: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'D-20':
      case 'D-Day':
        return 'bg-gray-100 text-gray-800'
      case '모집 완료':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="p-5 bg-white rounded-[20px] border border-gray-200 mb-4 relative hover:shadow-md transition-shadow">
        {project.badge && (
          <div className="absolute right-5 top-5">
            <span className={`px-3 py-1 text-sm rounded-full ${
              project.badge === '수락' ? 'bg-green-400 text-white' : 'bg-gray-100'
            }`}>
              {project.badge}
            </span>
          </div>
        )}
        
        <div className="space-y-2 mb-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-gray-600 text-sm whitespace-pre-line">{project.description}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.period}</span>
          <span className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
    </Link>
  )
}

export const ProjectListPage = () => {
  const makerProjects: Project[] = [
    {
      id: 'maker-1',
      title: 'Ver6',
      period: '2025.01 ~ 2025.02',
      status: 'D-20',
      description: '프로젝트 관련한 설명입니다. 프로젝트 관련한 설명...',
    },
    {
      id: 'maker-2',
      title: '수면 측정',
      period: '2024.01 ~ 2026.02',
      status: '모집 완료',
      description: '수면 측정에 관련한 앱을 만들면서 수면 패턴에 관련하여 설명...',
    },
  ]

  const engineerProjects: Project[] = [
    {
      id: 'eng-3',
      title: 'SNS수정',
      period: '2024.05 ~ 2024.12',
      status: 'D-Day',
      description: '프로젝트 관련한 설명입니다. 프로젝트 관련한 설명...',
      badge: '대기'
    },
    {
      id: 'eng-4',
      title: 'Ver6',
      period: '2025.01 ~ 2025.02',
      status: '모집 완료',
      description: '프로젝트 관련한 설명입니다. 프로젝트 관련한 설명...',
      badge: '수락'
    },
  ]

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">내 프로젝트 목록</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Maker</h2>
          {makerProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Engineer</h2>
          {engineerProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
} 