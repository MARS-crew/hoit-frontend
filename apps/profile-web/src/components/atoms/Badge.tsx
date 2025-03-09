import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'tech' | 'skill' | 'preference';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-secondary-100 text-secondary-700',
  tech: 'bg-primary-100 text-primary-700',
  skill: 'bg-secondary-100 text-secondary-700',
  preference: 'bg-secondary-50 text-secondary-600'
};

const sizeStyles = {
  sm: 'px-2 py-1 text-body-xs',
  md: 'px-3 py-1 text-body-sm',
  lg: 'px-4 py-2 text-body-md'
};

export const Badge = ({ children, variant = 'default', size = 'md' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full
        ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}; 