import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen py-24 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-center text-lg text-slate-400 mb-16 max-w-3xl mx-auto">
          Welcome to KidzWorld! We are dedicated to providing fun and interactive learning experiences 
          for kids, helping them grow their skills in a creative and engaging way.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to inspire and empower kids by offering innovative learning tools, 
              fun activities, and exciting challenges that prepare them for the future.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">✨</span>
                <span>Engaging and interactive content tailored for kids</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🛡️</span>
                <span>Safe and kid-friendly environment</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">👩‍🏫</span>
                <span>Programs designed by educators and experts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
