import React from 'react';
import VideoCard2 from "./VideoCard2";
// NewsGrid component (wrapper for cards)
export default function VideoGrid({ newsItems }) {
  return (
    <div className="container mx-auto  py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {newsItems.map((news, index) => (
          <VideoCard2 key={index} news={news} />
        ))}
      </div>
    </div>
  );
}
