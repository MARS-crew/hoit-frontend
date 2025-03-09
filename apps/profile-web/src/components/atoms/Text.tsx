import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'display-2xl' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | 'display-xs' |
           'body-xl' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs';
  color?: 'primary' | 'secondary' | 'white';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
}

const colorClasses = {
  primary: 'text-primary-900',
  secondary: 'text-secondary-900',
  white: 'text-white'
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

export const Text = ({ 
  children, 
  variant = 'body-md',
  color = 'secondary',
  weight = 'normal',
  className = ''
}: TextProps) => {
  return (
    <span className={`text-${variant} ${colorClasses[color]} ${weightClasses[weight]} ${className}`}>
      {children}
    </span>
  );
}; 