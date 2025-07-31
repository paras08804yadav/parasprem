import React from 'react';
import VideoGrid from "./VideoGrid"; 

export default function VideoSection({ newsItems }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-3">वीडियो</h2>
      <div className="space-y-4">
        <VideoGrid newsItems= {newsItems} />
      </div>
    </div>
  );
}
