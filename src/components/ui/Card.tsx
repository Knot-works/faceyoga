import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'accent';
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
}: CardProps) {
  const variantClasses = {
    default: 'bg-surface',
    elevated: 'bg-surface shadow-medium',
    bordered: 'bg-surface border border-border',
    accent: 'bg-surface border-l-4 border-l-accent',
  };

  const paddingClasses = {
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-10',
  };

  return (
    <div
      className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

interface ProgramCardProps {
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
}

export function ProgramCard({
  title,
  subtitle,
  description,
  price,
  priceNote,
  features,
  highlighted = false,
}: ProgramCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? 'bg-primary text-surface shadow-large'
          : 'bg-surface shadow-soft hover:shadow-medium'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-8">
          <span className="bg-accent text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            おすすめ
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`font-heading text-xl mb-1 ${
            highlighted ? 'text-surface' : 'text-primary'
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={`text-sm ${
              highlighted ? 'text-surface-warm/80' : 'text-text-muted'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      <p
        className={`mb-6 leading-relaxed ${
          highlighted ? 'text-surface-warm/90' : 'text-text-muted'
        }`}
      >
        {description}
      </p>

      <div className="mb-6">
        <span
          className={`text-3xl font-heading ${
            highlighted ? 'text-accent' : 'text-primary'
          }`}
        >
          {price}
        </span>
        {priceNote && (
          <span
            className={`ml-2 text-sm ${
              highlighted ? 'text-surface-warm/70' : 'text-text-light'
            }`}
          >
            {priceNote}
          </span>
        )}
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-start gap-3 text-sm ${
              highlighted ? 'text-surface-warm/90' : 'text-text-muted'
            }`}
          >
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                highlighted ? 'bg-accent' : 'bg-accent-warm'
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
