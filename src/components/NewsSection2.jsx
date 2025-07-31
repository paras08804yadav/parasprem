import React from 'react';
import NewsCard2 from "./NewsCard2";

export default function NewsSection({ newsItems }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-3 mb-4"> खबरें</h2>
      <div className="space-y-4">
        {newsItems.map((news) => (
          <NewsCard2 key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
