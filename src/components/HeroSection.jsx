import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('backg.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-transparent to-transparent"></div>
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-5xl font-extrabold text-black drop-shadow-md animate-pulse">Welcome to KidzWorld!</h1>
        <p className="mt-4 text-2xl text-gray-600">Fun programs, exciting games, and more!</p>
      </div>
      <div className="absolute left-10 top-1/3 w-24 h-24 bg-blue-300 rounded-full floating"></div>
      <div className="absolute right-10 bottom-1/4 w-16 h-16 bg-yellow-300 rounded-full floating"></div>
    </section>
  );
};

export default HeroSection;
