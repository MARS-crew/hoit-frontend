import { Badge } from '../Badge';

interface PreferenceBadgeProps {
  preference: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PreferenceBadge = ({ preference, size }: PreferenceBadgeProps) => (
  <Badge variant="preference" size={size}>
    {preference}
  </Badge>
); 