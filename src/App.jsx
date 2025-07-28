import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reels.css';
import Home from "./pages/Home";
import EMagazine from "./pages/EMagazine";
import FatafatNews from "./pages/FatafatNews";
import Videos from "./pages/Videos";
import BottomNavbar from "./components/BottomNavbar";
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-16 bg-gray-50"> {/* Added light gray background */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emagazine" element={<EMagazine />} />
          <Route path="/fatafat" element={<FatafatNews />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <BottomNavbar />
    </Router>
  );
}

export default App;