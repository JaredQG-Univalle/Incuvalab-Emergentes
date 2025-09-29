import React from 'react';
import { cn } from '../../utils/cn';

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardFooter;
