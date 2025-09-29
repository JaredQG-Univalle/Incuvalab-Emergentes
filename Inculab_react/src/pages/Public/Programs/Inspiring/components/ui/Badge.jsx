import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, className = '', ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
