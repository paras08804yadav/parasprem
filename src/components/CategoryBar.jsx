
import React from 'react';
import { ScrollText } from "lucide-react";

const categories = [
  { label: "ताज़ा" },
  { label: "ब्रेकिंग" },
  { label: "राष्ट्रीय" },
  { label: "दुनिया" },
  { label: "बिजनेस" },
  { label: "मनोरंजन" },
  { label: "खेल" },
  { label: "राजनीति" },
  { label: "अंतरराष्ट्रीय" },
  { label: "टेक्नोलॉजी" },
  { label: "स्वास्थ्य" },
  { label: "लाइफस्टाइल" },
  { label: "शिक्षा" },
  { label: "धर्म" },
  { label: "सामाजिक मुद्दे" },
  { label: "विज्ञान" },
  { label: "पर्यावरण" },
  { label: "इतिहास" },
  { label: "संस्कृति" },
  { label: "खेल समाचार" },
  { label: "मनोरंजन समाचार" },
  { label: "राजनीतिक समाचार" },
  { label: "आर्थिक समाचार" },
  { label: "कला और संस्कृति" },
  { label: "भ्रष्टाचार" },
  { label: "सुरक्षा और रक्षा" },
];


const CategoryBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 w-full overflow-x-auto no-scrollbar">
      <div className="inline-flex px-4 py-3 gap-3 min-w-max">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-all duration-200 rounded-full whitespace-nowrap border border-gray-300"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;