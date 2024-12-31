import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', icon: '🏠', path: '/' },
    { label: 'Programs', icon: '🎨', path: '/programs' },
    { label: 'Contact', icon: '📞', path: '/contact' },
    { label: 'About Us', icon: '⭐', path: '/about-us' }
  ];

  const navigateTo = (pageName, path) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false); // Close menu before navigation
    navigate(path);
  };

  // Update current page based on location
  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentNavItem = navItems.find(item => item.path === currentPath);
    if (currentNavItem) {
      setCurrentPage(currentNavItem.label);
    }
  }, [location]);

  return (
    <header className="relative bg-gradient-to-b from-slate-900 to-slate-900/80 backdrop-blur-sm border-b border-slate-800/50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      <div className="container mx-auto flex items-center justify-between py-5 px-6 relative">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setCurrentPage('Home')}
        >
          <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">🌈</span>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
            KidzWorld
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className={`flex items-center space-x-2 cursor-pointer group`}
              onClick={() => setCurrentPage(item.label)}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className={`font-medium text-base ${
                currentPage === item.label 
                  ? 'text-white' 
                  : 'text-slate-400 group-hover:text-white'
              } transition-colors duration-300`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login"
            className="px-5 py-2.5 rounded-xl text-slate-300 hover:text-white font-medium
                     transition-all duration-300 hover:bg-slate-800"
          >
            Login
          </Link>
          <Link 
            to="/signup"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white font-medium shadow-lg shadow-indigo-500/25
                     hover:shadow-xl hover:shadow-indigo-500/40 transform 
                     hover:-translate-y-0.5 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-400 hover:text-white transition-colors p-2 z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-slate-900/98 backdrop-blur-md z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                  className="flex items-center space-x-3 cursor-pointer group"
                  onClick={() => navigateTo(item.label, item.path)}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className={`text-xl ${
                    currentPage === item.label 
                      ? 'text-white' 
                      : 'text-slate-400 group-hover:text-white'
                  } transition-colors duration-300`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="pt-8 flex flex-col items-center space-y-4">
                <Link 
                  to="/login"
                  className="w-48 py-3 rounded-xl text-slate-300 hover:text-white font-medium
                           transition-all duration-300 hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="w-48 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 
                           text-white font-medium shadow-lg shadow-indigo-500/25
                           hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;