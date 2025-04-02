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
    setIsMenuOpen(false);
    navigate(path);
  };

  React.useEffect(() => {
    const currentPath = location.pathname;
    const currentNavItem = navItems.find(item => item.path === currentPath);
    if (currentNavItem) {
      setCurrentPage(currentNavItem.label);
    }
  }, [location]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-slate-900 to-slate-900/80 backdrop-blur-sm border-b border-slate-800/50 z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="container mx-auto flex items-center justify-between py-5 px-6 relative">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-3 cursor-pointer group relative z-50"
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
                className="flex items-center space-x-2 cursor-pointer group"
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
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 
                       text-white font-medium shadow-lg shadow-indigo-500/25
                       hover:shadow-xl hover:shadow-indigo-500/40 transform 
                       hover:-translate-y-0.5 transition-all duration-300"
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
            className="md:hidden relative z-50 text-slate-400 hover:text-white transition-colors p-2"
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
        </div>
      </header>

      {/* Mobile Menu Overlay - Updated to be a dropdown instead of fullscreen */}
      {isMenuOpen && (
        <>
          {/* Semi-transparent backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Dropdown Menu */}
          <div className="fixed top-[88px] right-4 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl 
                         border border-slate-700/50 shadow-xl z-40 md:hidden
                         animate-slideIn">
            <div className="py-4">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                  className="flex items-center space-x-3 px-6 py-3 cursor-pointer group
                           hover:bg-slate-700/50 transition-colors"
                  onClick={() => navigateTo(item.label, item.path)}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className={`text-base ${
                    currentPage === item.label 
                      ? 'text-white' 
                      : 'text-slate-400 group-hover:text-white'
                  } transition-colors duration-300`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              
              <div className="border-t border-slate-700/50 mt-2 pt-2 px-4 space-y-2">
                <Link 
                  to="/login"
                  className="block w-full py-2 rounded-lg text-slate-300 hover:text-white 
                           font-medium text-center transition-all duration-300 
                           hover:bg-slate-700/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="block w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 
                           to-purple-500 text-white font-medium text-center
                           shadow-lg shadow-indigo-500/25 hover:shadow-xl 
                           hover:shadow-indigo-500/40 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Content Spacer */}
      <div className="h-[88px]"></div>
    </>
  );
};

export default Header;
