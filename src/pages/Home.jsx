import React from 'react';
import CategoryBar from "../components/CategoryBar";
import AdCarousel from "../components/AdCarousel";
import NewsSection from "../components/NewsSection";
import VideoSection from "../components/VideoSection";
import NewsSection2 from "../components/NewsSection2";

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
export default function Home() {

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
  const newsItem1 = [
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


  const newsItem2 = [
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


  return (
      <div className="pt-16 pb-16">
      <CategoryBar />
      <AdCarousel ads={ads} />
      <NewsSection newsItems={newsItem1} />
      <NewsSection2 newsItems={newsItem2} />
      <VideoSection newsItems={mockVideos} />
     
    </div>
  );
}