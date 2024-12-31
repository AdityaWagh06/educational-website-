import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import ProgramsOverview from './components/ProgramsOverview';
import FeaturedPrograms from './components/FeaturedPrograms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <Routes>
            {/* Main Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProgramsOverview />
                  {/* <CategorySection /> */}
                  {/* <NewsSection /> */}
                  {/* <QuizSection /> */}
                  {/* <CraftsSection /> */}
                  {/* <GamesSection /> */}
                  
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
