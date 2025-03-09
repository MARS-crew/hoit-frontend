import { Badge } from '../Badge';

interface SkillBadgeProps {
  skill: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SkillBadge = ({ skill, size }: SkillBadgeProps) => (
  <Badge variant="skill" size={size}>
    {skill}
  </Badge>
); 