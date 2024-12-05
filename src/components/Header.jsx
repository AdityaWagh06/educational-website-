import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
  const navigate = useNavigate();  // React Router hook to programmatically navigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items with playful icons
  const navItems = [
    { label: 'Home', icon: '🏠', path: '/' },
    { label: 'Programs', icon: '🎨', path: '/programs' },
    { label: 'Games', icon: '🎮', path: '/games' },
    { label: 'Contact', icon: '📞', path: '/contact' },
    { label: 'About Us', icon: '⭐', path: '/about-us' }
  ];

  // Navigation handler
  const navigateTo = (pageName, path) => {
    setCurrentPage(pageName);
    navigate(path); // Using react-router's navigate function to go to the respective route
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Playful Logo with Bounce */}
        <div 
          className="flex items-center space-x-2 animate-bounce cursor-pointer"
          onClick={() => navigateTo('Home', '/')}
        >
          <span className="text-4xl">🌈</span>
          <h1 className="text-3xl font-extrabold">KidzWorld</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden absolute top-1/2 right-6 transform -translate-y-1/2 z-60"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 cursor-pointer 
                         transform hover:scale-110 transition duration-300 
                         ${currentPage === item.label ? 'text-yellow-300' : 'hover:text-yellow-300'}`}
              onClick={() => navigateTo(item.label, item.path)}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gradient-to-b from-pink-500 to-purple-600 z-50 flex flex-col items-center justify-center space-y-8 p-4">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-4 text-white text-2xl 
                           transform hover:scale-110 transition duration-300
                           ${currentPage === item.label ? 'text-yellow-300' : ''}`}
                onClick={() => navigateTo(item.label, item.path)}
              >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Login/Signup Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer 
                        hover:text-yellow-300 transition duration-300"
            onClick={() => navigateTo('Login', '/login')}
          >
            <span className="text-2xl">🔑</span>
            <span>Login</span>
          </div>
          <div 
            className="bg-yellow-400 text-purple-600 px-4 py-2 rounded-full 
                        hover:bg-yellow-500 transform hover:scale-105 transition cursor-pointer"
            onClick={() => navigateTo('SignUp', '/signup')}
          >
            Sign Up
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
