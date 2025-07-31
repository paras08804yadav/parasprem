import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reels.css';
import Home from "./pages/Home";
import EMagazine from "./pages/EMagazine";
import FatafatNews from "./pages/FatafatNews";
import Videos from "./pages/Videos";
import BottomNavbar from "./components/BottomNavbar";
import './styles/tailwind.css';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="px-0 md:px-[200px]">
      <Header />
      <div className="min-h-screen bg-gray-50"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emagazine" element={<EMagazine />} />
          <Route path="/fatafat" element={<FatafatNews />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      </div>
      <div className="flex flex-col mt-0 mb-10">
      <Footer />
      </div>
      <BottomNavbar />
    </Router>
  );
}

export default App;