import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Use HashRouter
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsOverview from './components/ProgramsOverview';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProgramsPage from './components/Programs';
import ProgramDetail from './components/ProgramDetail';
import GamesPage from './components/Games';
import ContactPage from './components/Contact';
import AboutUsPage from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<><HeroSection /><ProgramsOverview /></>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:programName" element={<ProgramDetail />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
