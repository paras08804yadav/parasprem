import React from 'react';
import NewsCard from "./NewsCard";
// NewsGrid component (wrapper for cards)
export default function NewsGrid({ newsItems }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
}
