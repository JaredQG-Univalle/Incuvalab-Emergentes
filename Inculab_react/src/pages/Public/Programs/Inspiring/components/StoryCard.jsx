import React, { useEffect, useState } from 'react';
import { Play, Calendar, Eye } from 'lucide-react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';
import CardFooter from './ui/CardFooter';
import PlatformBadge from './PlatformBadge';

const StoryCard = ({ title, excerpt, image, author, platform, date, videoUrl }) => {
  const [views, setViews] = useState(null);

  const getBorderColor = () => {
    switch (platform) {
      case "YouTube":
        return "border-primary-900";
      case "Facebook":
        return "border-secondary-500";
      default:
        return "border-gray-500";
    }
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    async function fetchYouTubeViews() {
      if (platform === "YouTube" && videoUrl) {
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
          try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyD9bs5KLcZ3pecjAbv20p8ZXW6A99ZJbIQ`);
            const data = await response.json();
            const viewCount = data?.items?.[0]?.statistics?.viewCount;
            if (viewCount !== undefined) {
              setViews(parseInt(viewCount));
            }
          } catch (error) {
            console.error("Error fetching YouTube views:", error);
          }
        }
      }
    }

    fetchYouTubeViews();
  }, [platform, videoUrl]);

  return (
    <a
      href={videoUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform transform hover:scale-105 h-full"
    >
      <Card className={`flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 ${getBorderColor()}`}>
        
        {/* Imagen con altura fija */}
        <div className="relative h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="rounded-full bg-primary-900/70 backdrop-blur-sm p-3">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <PlatformBadge platform={platform} />
          </div>
        </div>

        {/* Contenido */}
        <CardContent className="flex-1 flex flex-col justify-between p-4">
          <div>
            <h3 className="font-bold text-lg text-primary-900 mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
          </div>
          <div className="flex items-center mt-4">
  <div>
    <p className="font-medium text-sm text-primary-900">{author.name}</p>
    <p className="text-xs text-gray-500">{author.role}</p>
  </div>
</div>

        </CardContent>

        {/* Footer */}
        <CardFooter className="border-t pt-4 text-xs text-gray-500 flex flex-col items-start">
          <div className="flex items-center mb-1">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
          {views !== null && (
            <div className="flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              {views.toLocaleString()} vistas
            </div>
          )}
        </CardFooter>
      </Card>
    </a>
  );
};

export default StoryCard;
