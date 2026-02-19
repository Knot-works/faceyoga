import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'warm' | 'white';
}

export function Section({
  id,
  children,
  className = '',
  background = 'default',
}: SectionProps) {
  const bgClasses = {
    default: 'bg-background',
    warm: 'bg-surface-warm',
    white: 'bg-surface',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`decorative-line mt-6 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
