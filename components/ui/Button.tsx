import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase text-[10px] tracking-[0.2em] gap-3 select-none';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/10 border border-blue-600',
    secondary: 'bg-slate-950 text-white hover:bg-slate-800 shadow-sm border border-slate-950',
    outline: 'border border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50/30 shadow-sm hover:text-blue-600',
    ghost: 'text-slate-500 hover:text-blue-600 hover:bg-slate-50 border border-transparent',
  };

  const sizes = {
    sm: 'px-6 py-3 min-h-[44px]',
    md: 'px-8 py-4 min-h-[56px]',
    lg: 'px-10 py-5 min-h-[68px] text-[11px]',
    xl: 'px-14 py-6 min-h-[80px] text-[12px] rounded-[1.5rem]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;