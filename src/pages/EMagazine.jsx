import { useState } from 'react';

export default function EMagazine() {
  const magazineData = [
  {
    year: 2024,
    magazines: [
      {
        id: 1,
        title: 'जनवरी 2024',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=400&fit=crop&q=60',
        desc: 'नववर्ष विशेषांक: नए साल की नई उम्मीदें'
      },
      {
        id: 2,
        title: 'फरवरी 2024',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=400&fit=crop&q=60',
        desc: 'प्रेम विशेषांक: वैलेंटाइन स्पेशल'
      },
      {
        id: 3,
        title: 'मार्च 2024',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=400&fit=crop&q=60',
        desc: 'वसंत विशेष: होली के रंग'
      },
      {
        id: 4,
        title: 'अप्रैल 2024',
        image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=300&h=400&fit=crop&q=60',
        desc: 'चुनाव विशेष: लोकतंत्र का महापर्व'
      },
      {
        id: 5,
        title: 'मई 2024',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=400&fit=crop&q=60',
        desc: 'गर्मी विशेषांक: ग्रीष्मकालीन योजनाएं'
      },
      {
        id: 6,
        title: 'जून 2024',
        image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&h=400&fit=crop&q=60',
        desc: 'मानसून विशेष: बारिश की बूंदें'
      },
      {
        id: 7,
        title: 'जुलाई 2024',
        image: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=300&h=400&fit=crop&q=60',
        desc: 'शिक्षा विशेष: नई शिक्षा नीति'
      },
      {
        id: 8,
        title: 'अगस्त 2024',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=400&fit=crop&q=60',
        desc: 'स्वतंत्रता दिवस विशेषांक'
      },
      {
        id: 9,
        title: 'सितंबर 2024',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&h=400&fit=crop&q=60',
        desc: 'त्योहार विशेष: गणेश चतुर्थी'
      },
      {
        id: 10,
        title: 'अक्टूबर 2024',
        image: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e1?w=300&h=400&fit=crop&q=60',
        desc: 'दिवाली विशेषांक: रोशनी का त्योहार'
      },
      {
        id: 11,
        title: 'नवंबर 2024',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=400&fit=crop&q=60',
        desc: 'छठ पूजा विशेष'
      },
      {
        id: 12,
        title: 'दिसंबर 2024',
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=300&h=400&fit=crop&q=60',
        desc: 'वर्षांत विशेष: साल की समीक्षा'
      }
    ]
  },
  {
    year: 2025,
    magazines: [
      {
        id: 13,
        title: 'जनवरी 2025',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=400&fit=crop&q=60',
        desc: 'नववर्ष विशेष: नए संकल्प'
      },
      {
        id: 14,
        title: 'फरवरी 2025',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=400&fit=crop&q=60',
        desc: 'किसान विशेषांक'
      },
      {
        id: 15,
        title: 'मार्च 2025',
        image: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?w=300&h=400&fit=crop&q=60',
        desc: 'महिला दिवस विशेष'
      },
      {
        id: 16,
        title: 'अप्रैल 2025',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop&q=60',
        desc: 'व्यापार विशेष: नई आर्थिक नीतियां'
      },
      {
        id: 17,
        title: 'मई 2025',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=400&fit=crop&q=60',
        desc: 'पर्यटन विशेष: गर्मियों में घूमने की जगहें'
      },
      {
        id: 18,
        title: 'जून 2025',
        image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=300&h=400&fit=crop&q=60',
        desc: 'पर्यावरण विशेष: विश्व पर्यावरण दिवस'
      },
      {
        id: 19,
        title: 'जुलाई 2025',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=300&h=400&fit=crop&q=60',
        desc: 'शिक्षा विशेष: नए शैक्षणिक सत्र की तैयारी'
      },
      {
        id: 20,
        title: 'अगस्त 2025',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=400&fit=crop&q=60',
        desc: 'स्वतंत्रता दिवस विशेषांक'
      },
      {
        id: 21,
        title: 'सितंबर 2025',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&h=400&fit=crop&q=60',
        desc: 'शिक्षक दिवस विशेष'
      },
      {
        id: 22,
        title: 'अक्टूबर 2025',
        image: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e1?w=300&h=400&fit=crop&q=60',
        desc: 'दिवाली विशेषांक'
      },
      {
        id: 23,
        title: 'नवंबर 2025',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=400&fit=crop&q=60',
        desc: 'गुरु नानक जयंती विशेष'
      },
      {
        id: 24,
        title: 'दिसंबर 2025',
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=300&h=400&fit=crop&q=60',
        desc: 'वर्षांत विशेष: साल की समीक्षा'
      }
    ]
  },
  {
    year: 2026,
    magazines: [
      {
        id: 25,
        title: 'जनवरी 2026',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=400&fit=crop&q=60',
        desc: 'नववर्ष विशेष: नए लक्ष्य'
      },
      {
        id: 26,
        title: 'फरवरी 2026',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=400&fit=crop&q=60',
        desc: 'विज्ञान विशेषांक'
      },
      {
        id: 27,
        title: 'मार्च 2026',
        image: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?w=300&h=400&fit=crop&q=60',
        desc: 'होली विशेष: रंगों का त्योहार'
      },
      {
        id: 28,
        title: 'अप्रैल 2026',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop&q=60',
        desc: 'व्यापार विशेष: नई आर्थिक योजनाएं'
      },
      {
        id: 29,
        title: 'मई 2026',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=400&fit=crop&q=60',
        desc: 'पर्यटन विशेष: गर्मियों में घूमने की जगहें'
      },
      {
        id: 30,
        title: 'जून 2026',
        image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=300&h=400&fit=crop&q=60',
        desc: 'योग दिवस विशेषांक'
      },
      {
        id: 31,
        title: 'जुलाई 2026',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=300&h=400&fit=crop&q=60',
        desc: 'शिक्षा विशेष: नए पाठ्यक्रम'
      },
      {
        id: 32,
        title: 'अगस्त 2026',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=400&fit=crop&q=60',
        desc: 'स्वतंत्रता दिवस विशेषांक'
      }
    ]
  }
];


  const [selectedMagazine, setSelectedMagazine] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">ई-पत्रिका संग्रह</h1>
      
      {/* Magazine Grid */}
      <div className="space-y-8">
        {magazineData.map((yearData) => (
          <div key={yearData.year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
              {yearData.year} की पत्रिकाएं
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {yearData.magazines.map((magazine) => (
                <div 
                  key={magazine.id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedMagazine(magazine)}
                >
                  {/* Magazine Cover with Title Always Visible */}
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={magazine.image} 
                      alt={magazine.title}
                      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white font-bold text-lg">{magazine.title}</h3>
                    </div>
                  </div>
                  
                  {/* Hover State - White Background with Month Name */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <h3 className="text-black font-bold text-xl">{magazine.title.split(' ')[0]}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Magazine Modal */}
      {selectedMagazine && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {selectedMagazine.title}
              </h3>
              <button 
                onClick={() => setSelectedMagazine(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-4 flex flex-col items-center">
              <img 
                src={selectedMagazine.image} 
                alt={selectedMagazine.title}
                className="max-w-full max-h-[60vh] object-contain mb-4"
              />
              <p className="text-gray-700 mb-4">{selectedMagazine.desc}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                पूरी पत्रिका पढ़ें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}