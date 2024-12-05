import React from 'react';
import { FaPuzzlePiece, FaMap, FaHeart } from 'react-icons/fa';

const gamesData = [
  {
    title: 'Puzzle Game',
    description: 'Challenge your brain with our engaging puzzle game!',
    buttonText: 'Play Now',
    color: 'bg-yellow-50',
    hoverColor: 'hover:bg-yellow-200',
    icon: <FaPuzzlePiece className="text-yellow-500 text-4xl" />,
  },
  {
    title: 'Adventure Quest',
    description: 'Embark on an exciting adventure in our thrilling quest game!',
    buttonText: 'Play Now',
    color: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-200',
    icon: <FaMap className="text-blue-500 text-4xl" />,
  },
  {
    title: 'Card Game',
    description: 'Enjoy classic card games with friends and family!',
    buttonText: 'Play Now',
    color: 'bg-green-50',
    hoverColor: 'hover:bg-green-200',
    icon: <FaHeart className="text-green-500 text-4xl" />,
  },
];

const GamesSection = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Play & Learn Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gamesData.map((game, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-md ${game.color} flex flex-col justify-between h-full transition-transform transform hover:-translate-y-2 duration-300 ease-in-out`}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full shadow-lg">
                {game.icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 text-center mb-2">
              {game.title}
            </h3>
            <p className="text-gray-600 text-center mb-4">{game.description}</p>
            <div className="mt-auto pt-4">
              <button
                className={`w-full py-2 rounded-md bg-pink-500 text-white font-semibold tracking-wide ${game.hoverColor} transition duration-300 ease-in-out transform hover:scale-105`}
              >
                {game.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
