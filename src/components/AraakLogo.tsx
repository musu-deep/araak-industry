import React from 'react';

interface AraakLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'light' | 'dark';
  height?: number | string;
  showSubtitle?: boolean;
}

export const AraakLogo: React.FC<AraakLogoProps> = ({
  className = '',
  variant = 'full',
  height = 44,
}) => {
  if (variant === 'icon') {
    return (
      <img
        src="/araak-industry-logo.png"
        alt="اراك الصناعية | ARAAK INDUSTRY"
        style={{ height, width: 'auto' }}
        className={`inline-block object-contain ${className}`}
      />
    );
  }

  return (
    <img
      src="/araak-industry-logo.png"
      alt="اراك الصناعية | ARAAK INDUSTRY"
      style={{ height, width: 'auto' }}
      className={`inline-block object-contain ${className}`}
    />
  );
};
