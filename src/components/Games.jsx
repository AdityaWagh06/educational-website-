import React from 'react';

const Games = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto my-8 px-4 flex-1">
        <h1 className="text-3xl font-bold text-center text-pink-600">Games</h1>
        <p className="text-center text-gray-700 mt-4">
          Dive into our interactive and educational games, crafted to engage and educate.
        </p>
        {/* Add games section here */}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 KidzWorld. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Games;
