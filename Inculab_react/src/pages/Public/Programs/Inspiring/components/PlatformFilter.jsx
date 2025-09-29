import React from 'react';
import Button from './ui/Button';

const PlatformFilter = ({ selectedPlatform, onSelectPlatform }) => {
  const platforms = [
    { id: "all", name: "Todas Las Plataformas" },
    { id: "youtube", name: "YouTube" },
    { id: "facebook", name: "Facebook" },
  ];

  const getButtonClasses = (platformId) => {
    if (selectedPlatform === platformId) {
      switch (platformId) {
        case "youtube":
          return "bg-primary-900 hover:bg-primary-800 text-white";
        case "facebook":
          return "bg-secondary-500 hover:bg-secondary-600 text-white";
        default:
          return "bg-gray-500 hover:bg-gray-600 text-white";
      }
    } else {
      return "border-gray-300 text-gray-700 hover:bg-gray-50";
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => (
        <Button
          key={platform.id}
          variant={selectedPlatform === platform.id ? "default" : "outline"}
          className={getButtonClasses(platform.id)}
          onClick={() => onSelectPlatform(platform.id)}
        >
          {platform.name}
        </Button>
      ))}
    </div>
  );
};

export default PlatformFilter;
