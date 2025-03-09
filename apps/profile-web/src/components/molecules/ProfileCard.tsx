import { TechBadge, SkillBadge, PreferenceBadge } from './Badges';

interface ProfileCardProps {
  user: {
    id: string;
    name: string;
    githubUrl: string;
    linkCount: number;
    starCount: number;
    techStack: Array<{ count: number; tech: string; }>;
    roles: string[];
    position: string[];
    preferences: string[];
    description: string;
  };
  onClick?: () => void;
}

export const ProfileCard = ({ user, onClick }: ProfileCardProps) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-sm border border-secondary-200 cursor-pointer 
        transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      {/* 설명 */}
      <p className="text-secondary-700 text-body-md mb-4">{user.description}</p>
      
      {/* 프로필 정보 */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-medium text-body-lg">{user.name}</span>
        <span className="text-secondary-500 text-body-sm">my-github 외 {user.linkCount}개</span>
        <span className="flex items-center gap-1 text-secondary-500 text-body-sm">
          {user.starCount}
        </span>
      </div>

      {/* 기술 스택 */}
      <div className="flex gap-2 mb-4">
        {user.techStack.map((tech) => (
          <TechBadge key={tech.tech} count={tech.count} tech={tech.tech} />
        ))}
      </div>

      {/* 스킬 */}
      <div className="flex gap-2 mb-4">
        {user.roles.map((role) => (
          <SkillBadge key={role} skill={role} />
        ))}
      </div>

      {/* 포지션 */}
      <div className="flex gap-2 mb-4">
        {user.position.map((pos) => (
          <SkillBadge key={pos} skill={pos} />
        ))}
      </div>

      {/* 관심분야 */}
      <div className="flex flex-wrap gap-2">
        {user.preferences.map((pref) => (
          <PreferenceBadge key={pref} preference={pref} />
        ))}
      </div>
    </div>
  );
}; 