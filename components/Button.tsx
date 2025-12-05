import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary focus:ring-primary shadow-lg shadow-primary/30",
    secondary: "bg-white text-primary hover:bg-slate-50 focus:ring-white shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    accent: "bg-accent text-white hover:bg-sky-400 focus:ring-accent shadow-lg shadow-accent/30",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};