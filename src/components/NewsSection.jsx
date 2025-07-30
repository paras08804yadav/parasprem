import NewsCard from "./NewsCard";

export default function NewsSection({ newsItems }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ताजा खबरें</h2>
      <div className="space-y-4">
        {newsItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
