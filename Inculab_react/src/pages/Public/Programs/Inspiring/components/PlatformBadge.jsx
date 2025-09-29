import React from 'react';
import Badge from './ui/Badge';

const PlatformBadge = ({ platform, className = "" }) => {
  const getBadgeColor = () => {
    switch (platform) {
      case "YouTube":
        return "bg-primary-900 hover:bg-primary-800 text-white";
      case "Facebook":
        return "bg-secondary-500 hover:bg-secondary-600 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  return (
    <Badge className={`${getBadgeColor()} ${className} font-medium`}>
      {platform}
    </Badge>
  );
};

export default PlatformBadge;
