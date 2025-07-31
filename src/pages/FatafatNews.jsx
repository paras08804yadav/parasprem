import React from 'react';
import { useState, useRef } from 'react';
import { FaHeart, FaShare, FaBookmark, FaEllipsisH } from 'react-icons/fa';

const newsItems = [
   {
    id: 1,
    title: 'दिल्ली में भीषण गर्मी',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=60',
    category: 'मौसम',
    time: 'आज, 7:15 PM',
    highlight: 'तापमान 45°C पार',
    desc: 'दिल्ली में आज गर्मी ने सारे रिकॉर्ड तोड़ दिए। तापमान 45.6 डिग्री सेल्सियस दर्ज किया गया जो पिछले 10 सालों में सबसे ज्यादा है।'
  },
  {
    id: 2,
    title: 'बॉलीवुड में बड़ा उलटफेर',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&auto=format&fit=crop&q=60',
    category: 'मनोरंजन',
    time: 'आज, 9:45 PM',
    highlight: 'सलमान खान की नई फिल्म रद्द',
    desc: 'सलमान खान की आगामी फिल्म "किक 2" को निर्माताओं ने अचानक रद्द कर दिया है। सूत्रों के अनुसार, क्रिएटिव मतभेदों के कारण यह निर्णय लिया गया है।'
  },
  {
    id: 3,
    title: 'आईपीएल 2025 का नया शेड्यूल',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=60',
    category: 'खेल',
    time: 'आज, 8:30 PM',
    highlight: 'मुंबई इंडियंस बनाम चेन्नई सुपर किंग्स पहला मैच',
    desc: 'आईपीएल 2025 का शेड्यूल जारी कर दिया गया है। टूर्नामेंट का पहला मैच 28 मार्च को मुंबई और चेन्नई के बीच होगा।'
  },
  // Add 7 more news items following same structure
  {
    id: 4,
    title: 'दिल्ली में भीषण गर्मी',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=60',
    category: 'मौसम',
    time: 'आज, 7:15 PM',
    highlight: 'तापमान 45°C पार',
    desc: 'दिल्ली में आज गर्मी ने सारे रिकॉर्ड तोड़ दिए। तापमान 45.6 डिग्री सेल्सियस दर्ज किया गया जो पिछले 10 सालों में सबसे ज्यादा है।'
  },
  {
    id: 5,
    title: 'नई शिक्षा नीति लागू',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=60',
    category: 'शिक्षा',
    time: 'आज, 6:45 PM',
    highlight: '5+3+3+4 पैटर्न होगा लागू',
    desc: 'केंद्र सरकार ने नई शिक्षा नीति को लागू करने का फैसला किया है। अब स्कूली शिक्षा 5+3+3+4 के पैटर्न पर आधारित होगी।'
  },
  {
    id: 6,
    title: 'टेस्ला की नई इलेक्ट्रिक कार',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60',
    category: 'टेक्नोलॉजी',
    time: 'आज, 5:30 PM',
    highlight: '500 किमी की रेंज वाली कार',
    desc: 'टेस्ला ने अपनी नई इलेक्ट्रिक कार मॉडल Y का भारत में लॉन्च किया है। यह कार सिंगल चार्ज में 500 किलोमीटर तक चल सकती है।'
  },
  {
    id: 7,
    title: 'स्वास्थ्य बीमा में बड़ा बदलाव',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
    category: 'स्वास्थ्य',
    time: 'आज, 4:15 PM',
    highlight: 'अब 5 लाख तक का कवर',
    desc: 'सरकार ने स्वास्थ्य बीमा योजना में बड़ा बदलाव किया है। अब प्रति परिवार 5 लाख रुपये तक का मेडिकल कवर मिलेगा।'
  },
  {
    id: 8,
    title: 'बॉलीवुड में बड़ा उलटफेर',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&auto=format&fit=crop&q=60',
    category: 'मनोरंजन',
    time: 'आज, 9:45 PM',
    highlight: 'सलमान खान की नई फिल्म रद्द',
    desc: 'सलमान खान की आगामी फिल्म "किक 2" को निर्माताओं ने अचानक रद्द कर दिया है। सूत्रों के अनुसार, क्रिएटिव मतभेदों के कारण यह निर्णय लिया गया है।'
  },
  {
    id: 9,
    title: 'सोने के दाम में गिरावट',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60',
    category: 'बाजार',
    time: 'आज, 2:30 PM',
    highlight: '24 कैरेट सोना 1000 रुपये सस्ता',
    desc: 'अंतरराष्ट्रीय बाजार में सोने के दाम गिरने से भारत में भी सोना सस्ता हुआ है। 24 कैरेट सोना 1000 रुपये प्रति 10 ग्राम सस्ता हुआ है।'
  },
  {
    id: 10,
    title: 'सोने के दाम में गिरावट',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60',
    category: 'बाजार',
    time: 'आज, 2:30 PM',
    highlight: '24 कैरेट सोना 1000 रुपये सस्ता',
    desc: 'अंतरराष्ट्रीय बाजार में सोने के दाम गिरने से भारत में भी सोना सस्ता हुआ है। 24 कैरेट सोना 1000 रुपये प्रति 10 ग्राम सस्ता हुआ है।'
  },
];

export default function FatafatNews() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const newsRef = useRef(null);

  const handleScroll = () => {
    if (newsRef.current) {
      const { scrollTop, clientHeight } = newsRef.current;
      const newIndex = Math.floor(scrollTop / clientHeight);
      setCurrentNewsIndex(newIndex);
    }
  };

return (
  <div 
    ref={newsRef}
    className="h-screen w-full mt-14 snap-y snap-mandatory overflow-y-scroll bg-white scrollbar-hide"
    onScroll={handleScroll}
  >
    {newsItems.map((news, index) => (
      <div 
        key={news.id}
        className="h-screen w-full snap-start flex flex-col"
      >
        {/* News Image Full Width */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-72 object-cover"
        />

        {/* News Text Section with Rounded Top */}
        <div className="bg-white rounded-t-2xl -mt-6 px-5 py-4 ">
          
          {/* Category + Time */}
          <div className="text-[13px] text-pink-600 font-semibold mb-1">
            {news.category} &nbsp; | &nbsp; {news.time}
          </div>
          
          {/* Title */}
          <h2 className="text-[17px] font-bold text-black leading-tight mb-2">
            {news.title}
          </h2>

          {/* Highlight */}
          <p className="text-[15px] text-[#1c1c1c] font-medium mb-1">
            {news.highlight}
          </p>

          {/* Description */}
          <p className="text-[14px] text-gray-700 mb-4">
            {news.desc.slice(0, 150)}...
          </p>

          {/* Read More Button */}
          <button className="text-blue-800 border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            पूरी खबर पढ़ें →
          </button>
        </div>
      </div>
    ))}
  </div>
);
}