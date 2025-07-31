// NewsCard2 component (individual card)
import React from 'react';
export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image section */}
      <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-200">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>

      {/* Content section */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-red-600">
            {news.category}
          </span>
          <span className="text-xs text-gray-500 ml-2">{news.time}</span>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>

        <p className="text-gray-700 text-sm line-clamp-3 mb-4">{news.desc}</p>

        <button className="mt-auto text-blue-600 hover:text-blue-800 text-sm font-medium self-start">
          Read More →
        </button>
      </div>
    </div>
  );
}
