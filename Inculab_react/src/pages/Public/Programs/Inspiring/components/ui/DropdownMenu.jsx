import React, { useState } from 'react';
import { cn } from '../../utils/cn';

const DropdownMenuContext = React.createContext();

const DropdownMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);
  const close = () => setOpen(false);

  return (
    <DropdownMenuContext.Provider value={{ open, toggle, close }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { toggle } = React.useContext(DropdownMenuContext);

  return (
    <div onClick={toggle} className="cursor-pointer">
      {children}
    </div>
  );
};

const Content = ({ children, className = '' }) => {
  const { open } = React.useContext(DropdownMenuContext);

  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute mt-2 rounded-md border bg-white shadow-lg z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

const Item = ({ children, onClick, className = '' }) => {
  const { close } = React.useContext(DropdownMenuContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "cursor-pointer px-4 py-2 text-sm hover:bg-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = Item;

export default DropdownMenu;
