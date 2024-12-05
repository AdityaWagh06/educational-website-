import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    'Life and Survival Skills',
    'Social and Emotional Skills',
    'Career and Professional Skills',
    'Digital and Technological Skills',
    'Critical Thinking and Decision-Making Skills',
    'Health and Wellness Skills',
    'Interpersonal and Personal Development',
    'Technovation and Creovation Skills',
  ];

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl font-semibold text-center text-pink-600 mb-12">
        Our Programs
      </h1>
      <p className="text-center text-xl text-gray-500 mb-16">
        A collection of thoughtfully curated programs to help children grow, learn, and develop essential life skills.
      </p>

      {/* Program List with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-medium text-gray-800 mb-4">{program}</h2>
            <p className="text-gray-600 text-lg mb-6">
              Dive deep into {program.toLowerCase()} and discover the benefits of developing these essential skills.
            </p>
            {/* Using Link component to navigate to the detailed program page */}
            <Link
              to={`/programs/${program.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-pink-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32"
        >
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,64L48,117.3C96,171,192,277,288,288C384,299,480,213,576,181.3C672,149,768,171,864,144C960,117,1056,43,1152,32C1248,21,1344,75,1392,101.3L1440,128V0H1392C1344,0,1248,0,1152,21C1056,43,960,117,864,144C768,171,672,149,576,181.3C480,213,384,299,288,288C192,277,96,171,48,117.3L0,64Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Programs;
