import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-400 hover:underline">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
