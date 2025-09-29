import React from 'react';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import Button from './ui/Button';
import DropdownMenu from './ui/DropdownMenu';

const platforms = [
  { id: "all", name: "All Platforms" },
  { id: "youtube", name: "YouTube" },
  { id: "facebook", name: "Facebook" },
];

const Filter = ({ onFilterChange, selectedPlatformId = "all" }) => {
  const selectedPlatform = platforms.find((p) => p.id === selectedPlatformId) || platforms[0];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Button
            variant="outline"
            className="w-full sm:w-auto justify-between border-secondary-500 text-secondary-500 hover:bg-secondary-50 hover:text-secondary-600"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {selectedPlatform.name}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-56">
          {platforms.map((platform) => (
            <DropdownMenu.Item
              key={platform.id}
              onClick={() => onFilterChange(platform.id)}
              className="flex items-center justify-between"
            >
              {platform.name}
              {selectedPlatformId === platform.id && <Check className="h-4 w-4 text-primary-900" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="text-gray-600 border-gray-500 hover:bg-gray-50">
          Most Recent
        </Button>
        <Button variant="outline" size="sm" className="text-gray-600 border-gray-500 hover:bg-gray-50">
          Most Popular
        </Button>
      </div>
    </div>
  );
};

export default Filter;
