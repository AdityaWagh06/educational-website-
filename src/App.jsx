import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import NewsSection from './components/NewsSection';
import QuizSection from './components/QuizSection';
import CraftsSection from './components/CraftsSection';
import GamesSection from './components/GamesSection';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProgramsPage from './components/Programs';
import ProgramDetail from './components/ProgramDetail'; // Import the new ProgramDetail component
import GamesPage from './components/Games';
import ContactPage from './components/Contact';
import AboutUsPage from './components/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategorySection />
              <NewsSection />
              <QuizSection />
              <CraftsSection />
              <GamesSection />
            </>
          }
        />
        {/* Other Pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:programName" element={<ProgramDetail />} /> {/* Add route for ProgramDetail */}
        <Route path="/games" element={<GamesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
