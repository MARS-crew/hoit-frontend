import { Badge } from '../Badge';

interface TechBadgeProps {
  count: number;
  tech: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge = ({ count, tech, size }: TechBadgeProps) => (
  <Badge variant="tech" size={size}>
    {count} | {tech}
  </Badge>
); 