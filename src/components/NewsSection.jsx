import React from 'react';
import NewsCard2 from "./NewsCard";
import NewsGrid from "./NewsGrid"; 

export default function NewsSection({ newsItems }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-3">ताजा खबरें</h2>
      <div className="space-y-4">
        <NewsGrid newsItems={newsItems} />
      </div>
    </div>
  );
}
