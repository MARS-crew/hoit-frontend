import { ReactNode } from 'react';
import { Text } from '../atoms/Text';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'tech' | 'skill' | 'preference';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-secondary-100',
  tech: 'bg-primary-100',
  skill: 'bg-secondary-100',
  preference: 'bg-secondary-50'
};

const sizeStyles = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1',
  lg: 'px-4 py-2'
};

const textSizes = {
  sm: 'body-xs',
  md: 'body-sm',
  lg: 'body-md'
} as const;

export const Badge = ({ children, variant = 'default', size = 'md' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full
        ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      <Text 
        variant={textSizes[size]}
        color={variant === 'tech' ? 'primary' : 'secondary'}
      >
        {children}
      </Text>
    </span>
  );
}; 