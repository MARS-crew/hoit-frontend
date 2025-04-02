import { TechBadge } from '../atoms/TechBadge';
import { SkillBadge } from '../atoms/SkillBadge';
import { PreferenceBadge } from '../atoms/PreferenceBadge';
import { IUser } from '@/types/user';
import { Link } from 'react-router-dom';

interface IUserCardProps {
  user: IUser;
  onClick?: () => void;
}

export const UserCard = ({ user, onClick }: IUserCardProps) => {
  return (
    <div 
      className="h-full bg-white touch-none"
      onClick={onClick}
    >
      {/* 프로필 정보 */}
      <div className="flex items-center gap-4 p-4 border-b">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{user.name}</span>
            <Link to={user.githubUrl} className="text-gray-500 hover:text-gray-700">
              my-github
            </Link>
            <span className="text-gray-500">외 {user.linkCount}개</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>{user.starCount}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* 기술 스택 */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">기술 스택</h3>
          <div className="flex flex-wrap gap-2">
            {user.techStack.slice(0, 3).map((tech) => (
              <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
            ))}
          </div>
        </div>

        {/* 역할 */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">역할</h3>
          <div className="flex flex-wrap gap-2">
            {user.roles.slice(0, 2).map((role) => (
              <SkillBadge key={role} skill={role} />
            ))}
          </div>
        </div>

        {/* 포지션 */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">포지션</h3>
          <div className="flex flex-wrap gap-2">
            {user.position.slice(0, 3).map((pos) => (
              <SkillBadge key={pos} skill={pos} />
            ))}
          </div>
        </div>

        {/* 관심분야 */}
        <div>
          <h3 className="font-medium mb-2">관심분야</h3>
          <div className="flex flex-wrap gap-2">
            {user.preferences.slice(0, 3).map((pref) => (
              <PreferenceBadge key={pref} preference={pref} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 