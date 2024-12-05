import React from 'react';
import { FaNewspaper, FaMicroscope, FaCalculator, FaHistory } from 'react-icons/fa';

const newsData = [
  {
    title: 'Technology Advancements',
    description: 'Stay updated with the latest in tech innovations!',
    buttonText: 'Read More',
    color: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-100',
    icon: <FaNewspaper className="text-blue-500 text-4xl" />,
  },
  {
    title: 'Science Discoveries',
    description: 'Explore groundbreaking discoveries in science!',
    buttonText: 'Read More',
    color: 'bg-green-50',
    hoverColor: 'hover:bg-green-100',
    icon: <FaMicroscope className="text-green-500 text-4xl" />,
  },
  {
    title: 'Math Insights',
    description: 'Learn about new mathematical theories and ideas!',
    buttonText: 'Read More',
    color: 'bg-yellow-50',
    hoverColor: 'hover:bg-yellow-100',
    icon: <FaCalculator className="text-yellow-500 text-4xl" />,
  },
  {
    title: 'Historical Events',
    description: 'Dive into significant historical moments and facts!',
    buttonText: 'Read More',
    color: 'bg-red-50',
    hoverColor: 'hover:bg-red-100',
    icon: <FaHistory className="text-red-500 text-4xl" />,
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsData.slice(0, 3).map((news, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 duration-300 ease-in-out ${news.color}`}
          >
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              {news.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {news.title}
            </h3>
            <p className="text-gray-600 mb-6">{news.description}</p>
            <button
              className={`py-2 px-4 rounded-md bg-pink-500 text-white font-semibold tracking-wide ${news.hoverColor} transition duration-300 ease-in-out transform hover:scale-105`}
            >
              {news.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
