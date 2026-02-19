import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300';

  const variantClasses = {
    primary:
      'bg-primary text-surface hover:bg-secondary shadow-soft hover:shadow-medium',
    secondary:
      'bg-accent text-primary hover:bg-accent-warm shadow-soft hover:shadow-medium',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-surface',
  };

  const sizeClasses = {
    sm: 'px-5 py-2 text-sm rounded-md',
    md: 'px-7 py-3 text-base rounded-lg',
    lg: 'px-9 py-4 text-lg rounded-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
