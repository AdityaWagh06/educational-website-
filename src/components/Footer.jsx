import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
        <nav className="mb-4">
          <a href="#home" className="hover:text-gray-400 mx-2">Home</a>
          <a href="#about" className="hover:text-gray-400 mx-2">About</a>
          <a href="#services" className="hover:text-gray-400 mx-2">Services</a>
          <a href="#contact" className="hover:text-gray-400 mx-2">Contact</a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
