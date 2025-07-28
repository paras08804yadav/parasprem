import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const mockVideos = [
  {
    id: '1',
    title: 'दिल्ली में तेज़ बारिश के बाद जलभराव, देखें ताज़ा दृश्य',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
    views: '1.2M बार देखा गया',
    date: '2 दिन पहले',
  },
  {
    id: '2',
    title: 'चंद्रयान 3 की सफल लैंडिंग - भारत ने रचा इतिहास',
    thumbnail: 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    views: '3.4M बार देखा गया',
    date: '5 दिन पहले',
  },
  {
    id: '3',
    title: 'PM मोदी का नया संबोधन | जानें क्या बोले',
    thumbnail: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
    views: '2.1M बार देखा गया',
    date: '1 सप्ताह पहले',
  },
    {
    id: '4',
    title: 'दिल्ली में तेज़ बारिश के बाद जलभराव, देखें ताज़ा दृश्य',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
    views: '1.2M बार देखा गया',
    date: '2 दिन पहले',
  },
  {
    id: '5',
    title: 'चंद्रयान 3 की सफल लैंडिंग - भारत ने रचा इतिहास',
    thumbnail: 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    views: '3.4M बार देखा गया',
    date: '5 दिन पहले',
  },
  {
    id: '6',
    title: 'PM मोदी का नया संबोधन | जानें क्या बोले',
    thumbnail: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
    views: '2.1M बार देखा गया',
    date: '1 सप्ताह पहले',
  },
  {
    id: '7',
    title: 'दिल्ली में तेज़ बारिश के बाद जलभराव, देखें ताज़ा दृश्य',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
    views: '1.2M बार देखा गया',
    date: '2 दिन पहले',
  },
  {
    id: '8',
    title: 'चंद्रयान 3 की सफल लैंडिंग - भारत ने रचा इतिहास',
    thumbnail: 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    views: '3.4M बार देखा गया',
    date: '5 दिन पहले',
  },
  {
    id: '9',
    title: 'PM मोदी का नया संबोधन | जानें क्या बोले',
    thumbnail: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
    views: '2.1M बार देखा गया',
    date: '1 सप्ताह पहले',
  },
];


const Videos = () => {
  return (
     <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Shorts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 line-clamp-2">{video.title}</h3>
              <div className="text-sm text-gray-500 mt-2">
                <span>{video.views}</span> • <span>{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
