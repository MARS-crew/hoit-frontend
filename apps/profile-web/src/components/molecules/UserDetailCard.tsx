import { IUser } from '@/types/user';
import { Link } from 'react-router-dom';

interface IUserDetailCardProps {
  user: IUser;
}

export const UserDetailCard = ({ user }: IUserDetailCardProps) => {
  return (
    <div className="h-full bg-white overflow-y-auto">
      {/* 기본 정보 */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200" />
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* 기술 스택 */}
          <div>
            <h3 className="font-medium mb-2">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {user.techStack.map((tech) => (
                <span key={tech.tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech.tech} ({tech.count})
                </span>
              ))}
            </div>
          </div>

          {/* URL */}
          <div>
            <h3 className="font-medium mb-2">URL</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link to={user.githubUrl} className="text-blue-500 hover:underline">
                GitHub
              </Link>
            </div>
          </div>

          {/* 역할 */}
          <div>
            <h3 className="font-medium mb-2">역할</h3>
            <div className="flex flex-wrap gap-2">
              {user.roles.map((role) => (
                <span key={role} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* 포지션 */}
          <div>
            <h3 className="font-medium mb-2">포지션</h3>
            <div className="flex flex-wrap gap-2">
              {user.position.map((pos) => (
                <span key={pos} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {pos}
                </span>
              ))}
            </div>
          </div>

          {/* 관심분야 */}
          <div>
            <h3 className="font-medium mb-2">관심분야</h3>
            <div className="flex flex-wrap gap-2">
              {user.preferences.map((pref) => (
                <span key={pref} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {pref}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 