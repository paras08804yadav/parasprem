// components/Header.jsx
import React from 'react';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = [
  "जागरण प्राइम",
  "पॉलिटिक्स",
  "दुनिया",
  "टेक",
  "बिजनेस",
  "स्पोर्ट्स",
  "मनोरंजन",
  "लाइफस्टाइल",
  "ऑटो",
  "अध्यात्म",
  "संपादकीय",
  "अन्य",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
    <h1 className="text-3xl font-bold text-black tracking-tight">
      <span className="text-red-600">पा</span>रस <span className="text-red-600">प्रे</span>म
    </h1>



      <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
        <Menu size={28} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="my-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <ul className="space-y-4 text-lg font-medium">
            {categories.map((category, i) => (
              <li key={i} className="flex justify-between items-center border-b py-2">
                {category}
                <span className="text-xl font-bold">+</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
