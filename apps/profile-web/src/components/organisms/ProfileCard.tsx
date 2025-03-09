import { Text } from '../atoms/Text';
import { TechBadge } from '../molecules/badges/TechBadge';
import { SkillBadge } from '../molecules/badges/SkillBadge';
import { PreferenceBadge } from '../molecules/badges/PreferenceBadge';

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
      <Text variant="body-md" color="secondary" className="mb-4">
        {user.description}
      </Text>
      
      {/* 프로필 정보 */}
      <div className="flex items-center gap-2 mb-4">
        <Text variant="body-lg" weight="medium">
          {user.name}
        </Text>
        <Text variant="body-sm" color="secondary">
          my-github 외 {user.linkCount}개
        </Text>
        <Text variant="body-sm" color="secondary">
          {user.starCount}
        </Text>
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