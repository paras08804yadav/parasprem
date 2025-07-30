import { ScrollText } from "lucide-react";

const categories = [
  { label: "होम" },
  { label: "ताज़ा" },
  { label: "ब्रेकिंग" },
  { label: "राष्ट्रीय" },
  { label: "दुनिया" },
  { label: "बिजनेस" },
  { label: "मनोरंजन" },

];

const CategoryBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-5 overflow-x-auto whitespace-nowrap no-scrollbar">
      <div className="flex items-center space-x-6 py-2">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="text-sm font-medium text-black hover:text-red-600 transition duration-200 whitespace-nowrap"
          >
            {cat.icon && <span className="mr-1">{cat.icon}</span>}
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
