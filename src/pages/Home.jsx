import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  // Advertisement carousel data
  const ads = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60',
      title: 'विशेष ऑफर',
      desc: 'आज ही खरीदें और पाएं 50% तक की छूट'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60',
      title: 'नया संग्रह',
      desc: 'हमारे नए उत्पादों की खोज करें'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=60',
      title: 'महोत्सव',
      desc: 'दिवाली विशेष छूट'
    }
  ];

  // News data
  const newsItems = [
    {
      id: 1,
      title: 'संसद मानसून सत्र LIVE',
      desc: 'प्रधानमंत्री ने नई योजनाओं की घोषणा की',
      category: 'राष्ट्रीय',
      time: '58 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'PAK के खिलाफ कार्रवाई',
      desc: 'सरकार ने नई नीति की घोषणा की',
      category: 'राजनीति',
      time: '5 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1581092921461-39b2f2aa99f3?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'VIDEO: पाकिस्तान में हंगामा',
      desc: 'अंतरराष्ट्रीय सीमा पर तनाव',
      category: 'बिहार',
      time: '21 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      title: 'उत्तर प्रदेश में बड़ी खबर',
      desc: 'मुख्यमंत्री ने नई योजना की घोषणा की',
      category: 'उत्तर प्रदेश',
      time: '9 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      title: 'VIDEO: पाकिस्तान में हंगामा',
      desc: 'अंतरराष्ट्रीय सीमा पर तनाव',
      category: 'बिहार',
      time: '21 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      title: 'उत्तर प्रदेश में बड़ी खबर',
      desc: 'मुख्यमंत्री ने नई योजना की घोषणा की',
      category: 'उत्तर प्रदेश',
      time: '9 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 7,
      title: 'VIDEO: पाकिस्तान में हंगामा',
      desc: 'अंतरराष्ट्रीय सीमा पर तनाव',
      category: 'बिहार',
      time: '21 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 8,
      title: 'उत्तर प्रदेश में बड़ी खबर',
      desc: 'मुख्यमंत्री ने नई योजना की घोषणा की',
      category: 'उत्तर प्रदेश',
      time: '9 मिनट पहले',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-rotate ads every 2 seconds
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
    <div className="pb-16"> {/* Padding for bottom navbar */}
      {/* Advertisement Carousel */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
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
        
        {/* Navigation Arrows */}
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
        
        {/* Indicators */}
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

      {/* News Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">ताजा खबरें</h2>
        
        <div className="space-y-4">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-3">
                  <div className="flex items-center mb-1">
                    <span className="text-sm font-medium text-red-600">{news.category}</span>
                    <span className="text-xs text-gray-500 ml-2">{news.time}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{news.title}</h3>
                  <p className="text-gray-700 text-sm">{news.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}