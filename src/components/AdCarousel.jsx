import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AdCarousel({ ads }) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(timerRef.current);
  }, [ads.length]);

  const goToPrevAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const goToNextAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  return (
    <div className="relative h-64 md:h-64 w-full overflow-hidden">
      {ads.map((ad, index) => (
        <div
          key={ad.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentAdIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={ad.image}
            alt={ad.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h3 className="text-xl font-bold">{ad.title}</h3>
            <p>{ad.desc}</p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevAd}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNextAd}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentAdIndex(index);
              resetTimer();
            }}
            className={`w-3 h-3 rounded-full ${index === currentAdIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
