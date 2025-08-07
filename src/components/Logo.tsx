import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const getLogoSrc = () => {
    if (variant === 'white') {
      return '/images/logo/menuxp-logo-white.svg';
    }
    return '/images/logo/menuxp-logo.svg';
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'h-6 w-auto';
      case 'md': return 'h-8 w-auto';
      case 'lg': return 'h-10 w-auto';
      default: return 'h-8 w-auto';
    }
  };

  return (
    <img
      src={getLogoSrc()}
      alt="MenuXP - Seu Restaurante Merece um App Próprio"
      className={`${getSizeClasses()} ${className}`}
      loading="eager"
    />
  );
};

export default Logo;