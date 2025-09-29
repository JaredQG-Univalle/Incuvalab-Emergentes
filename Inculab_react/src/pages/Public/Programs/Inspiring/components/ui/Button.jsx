import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantStyles = {
    default: "bg-primary-900 text-white hover:bg-primary-800",
    outline: "border border-input bg-transparent hover:bg-accent-100",
    ghost: "hover:bg-accent-100",
  };
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  const combined = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};

export default Button;
