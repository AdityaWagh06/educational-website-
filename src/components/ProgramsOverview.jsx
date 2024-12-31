import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProgramsOverview = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const featuredPrograms = [
    {
      title: 'Life and Survival Skills',
      description: 'Essential skills for real-world challenges',
      icon: '🌟',
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      title: 'Social and Emotional Skills',
      description: 'Building confidence and relationships',
      icon: '💭',
      color: 'from-rose-500 to-pink-500',
      shadowColor: 'shadow-rose-500/20'
    },
    {
      title: 'Career and Professional Skills',
      description: 'Preparing for future success',
      icon: '💼',
      color: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/20'
    },
    {
      title: 'Digital and Technological Skills',
      description: 'Mastering modern technology',
      icon: '💻',
      color: 'from-blue-500 to-indigo-500',
      shadowColor: 'shadow-blue-500/20'
    },
  ];

  return (
    <div id="featured-programs" className="relative bg-slate-900 py-24 px-4">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Featured Programs
        </h2>
        <p className="text-center text-lg text-slate-400 mb-16 max-w-2xl mx-auto">
          Discover our most popular programs designed to empower the next generation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {featuredPrograms.map((program, index) => (
            <Link
              key={index}
              to={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl ${program.shadowColor} 
                           shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden 
                           border border-slate-700/50 flex flex-col`}>
                <div className={`bg-gradient-to-r ${program.color} p-8 flex items-center justify-center`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow text-sm">
                    {program.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-200">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            to="/programs"
            onClick={() => window.scrollTo(0, 0)}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 
                     text-white font-bold text-lg tracking-wide shadow-xl shadow-indigo-500/25
                     hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 
                     transition-all duration-200 inline-flex items-center"
          >
            View All Programs
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramsOverview; 