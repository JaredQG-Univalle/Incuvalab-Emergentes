import React from 'react';
import { cn } from '../../utils/cn';

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn(
        "p-6 pt-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;
