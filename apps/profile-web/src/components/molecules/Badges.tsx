import { Badge } from '../atoms/Badge';

interface TechBadgeProps {
  count: number;
  tech: string;
}

export const TechBadge = ({ count, tech }: TechBadgeProps) => (
  <Badge variant="tech">
    {count} | {tech}
  </Badge>
);

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <Badge variant="skill">{skill}</Badge>
);

interface PreferenceBadgeProps {
  preference: string;
}

export const PreferenceBadge = ({ preference }: PreferenceBadgeProps) => (
  <Badge variant="preference">{preference}</Badge>
); 