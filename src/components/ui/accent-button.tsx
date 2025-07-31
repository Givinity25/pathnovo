import React from 'react';
import Link from 'next/link';

interface AccentButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
}

const AccentButton: React.FC<AccentButtonProps> = ({
  children,
  href,
  onClick,
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const sizeClasses = {
    xs: 'px-4 py-1.5 text-xs gap-2',
    sm: 'px-6 py-2 text-sm gap-3',
    md: 'px-8 py-2.5 text-base gap-3 font-medium',
    lg: 'px-10 py-3 text-lg gap-4',
    xl: 'px-12 py-4 text-xl gap-4',
  };

  const baseClasses =
    'bg-accent hover:bg-red-500 transition-colors text-white flex items-center justify-center rounded-full cursor-pointer';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  const buttonContent = (
    <>
      <span className="w-2 h-2 bg-white rounded-full" />
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses}>
      {buttonContent}
    </button>
  );
};

export default AccentButton;
