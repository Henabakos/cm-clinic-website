import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const Display: React.FC<TextProps> = ({ children, className = '', as: Component = 'h1' }) => (
  <Component className={`font-heading font-extrabold tracking-tighter text-4xl md:text-6xl lg:text-7xl text-slate-950 leading-[1.05] ${className}`}>
    {children}
  </Component>
);

export const Heading: React.FC<TextProps> = ({ children, className = '', as: Component = 'h2' }) => (
  <Component className={`font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-slate-950 leading-[1.15] ${className}`}>
    {children}
  </Component>
);

export const Subheading: React.FC<TextProps> = ({ children, className = '', as: Component = 'h3' }) => (
  <Component className={`font-heading text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight ${className}`}>
    {children}
  </Component>
);

export const Paragraph: React.FC<TextProps> = ({ children, className = '', as: Component = 'p' }) => (
  <Component className={`font-main text-base text-slate-500 leading-relaxed font-normal ${className}`}>
    {children}
  </Component>
);