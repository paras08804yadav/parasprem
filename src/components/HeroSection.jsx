import React from "react";

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100 py-8 px-4 sm:px-8 md:px-16 ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative lg:gap-32">
        
        {/* Logo Section */}
        <a
          href="https://www.youtube.com/@paras_prem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center"
        >
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-32 md:w-40 lg:w-48 object-contain pb-2"
          />
          <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
            पारस प्रेम न्यूज़ चैनल
          </p>
        </a>

        {/* Editor Section */}
        <a
          href="tel:7905842461"
          className="flex flex-col items-center text-center"
        >
          <img
            src="/Editor.jpg"
            alt="Editor"
            className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-red-500 mb-2 shadow-md"
          />
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            बृज भूषण यादव उर्फ राजेश
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-1">
            संपादक - पारस प्रेम पत्रिका एंड न्यूज़ चैनल
          </p>
          <p className="text-sm md:text-base text-red-600 font-medium">
            मोबाइल: 7905842461
          </p>
        </a>

        
          <img
            src="/magazine cover.jpg"
            alt="Magazine Cover"
            className="w-40 md:w-48 lg:w-56 rounded-lg shadow-lg"
          />
          <span className="absolute top-0.5 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
            पारस प्रेम
          </span>
        
        
      </div>
    </div>
  );
}
