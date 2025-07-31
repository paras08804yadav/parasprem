import React from 'react';
export default function VideoCard2({ news }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={news.thumbnail}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-3">
          <div className="flex items-center mb-1">
        <span className="text-xs text-gray-500 ml-2">{news.date}</span>
          </div>
          <h3 className="font-bold text-lg mb-1">{news.title}</h3>
          <p className="text-gray-700 text-sm">{news.views}</p>
        </div>
      </div>
    </div>
  );
}
