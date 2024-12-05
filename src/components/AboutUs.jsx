import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center text-pink-600">About Us</h1>
      <p className="text-center text-gray-700 mt-4">
        Welcome to KidzWorld! We are dedicated to providing fun and interactive learning experiences 
        for kids, helping them grow their skills in a creative and engaging way.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          Our mission is to inspire and empower kids by offering innovative learning tools, 
          fun activities, and exciting challenges.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Engaging and interactive content tailored for kids.</li>
          <li>Safe and kid-friendly environment.</li>
          <li>Programs designed by educators and experts.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
