import { FaHome, FaBookOpen, FaNewspaper, FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around items-center py-2 z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center text-xs ${isActive ? 'text-blue-600' : 'text-gray-600'}`
        }
      >
        <FaHome className="text-xl mb-1" />
        <span>होम</span>
      </NavLink>
      
      <NavLink 
        to="/emagazine" 
        className={({ isActive }) => 
          `flex flex-col items-center text-xs ${isActive ? 'text-blue-600' : 'text-gray-600'}`
        }
      >
        <FaBookOpen className="text-xl mb-1" />
        <span>ई-पत्रिका</span>
      </NavLink>
      
      <NavLink 
        to="/fatafat" 
        className={({ isActive }) => 
          `flex flex-col items-center text-xs ${isActive ? 'text-blue-600' : 'text-gray-600'}`
        }
      >
        <FaNewspaper className="text-xl mb-1" />
        <span>फटाफट</span>
      </NavLink>
      
      <NavLink 
        to="/videos" 
        className={({ isActive }) => 
          `flex flex-col items-center text-xs ${isActive ? 'text-blue-600' : 'text-gray-600'}`
        }
      >
        <FaPlay className="text-xl mb-1" />
        <span>वीडियो</span>
      </NavLink>
    </nav>
  );
}