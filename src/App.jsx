import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsOverview from './components/ProgramsOverview';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/login'; // Fixed case sensitivity
import ProgramsPage from './components/Programs';
import ProgramDetail from './components/ProgramDetail'; // Correct path to ProgramDetail
import ContactPage from './components/Contact';
import AboutUsPage from './components/AboutUs';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound'; // New 404 page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <HeroSection />
                <ProgramsOverview />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:programName" element={<ProgramDetail />} /> {/* Correct path */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            {/* Error Handling */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
