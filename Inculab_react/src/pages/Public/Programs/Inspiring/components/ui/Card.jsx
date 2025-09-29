import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
