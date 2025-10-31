import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DonorRegistration from './pages/DonorRegistration';
import RequestBlood from './pages/RequestBlood';
import BloodBanks from './pages/BloodBanks';
import Events from './pages/Events';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import BloodInfo from './pages/BloodInfo';
import Hospitals from './pages/Hospitals';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<DonorRegistration />} />
            <Route path="/request" element={<RequestBlood />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blood-info" element={<BloodInfo />} />
            <Route path="/hospitals" element={<Hospitals />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;