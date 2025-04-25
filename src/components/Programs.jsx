import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Life and Survival Skills',
      icon: '🌟',
      description: 'Essential skills for real-world challenges and outdoor adventures',
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      title: 'Social and Emotional Skills',
      icon: '💝',
      description: 'Building confidence, empathy, and strong relationships',
      color: 'from-rose-500 to-pink-500',
      shadowColor: 'shadow-rose-500/20'
    },
    {
      title: 'Career and Professional Skills',
      icon: '💼',
      description: 'Preparing for future success in the professional world',
      color: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/20'
    },
    {
      title: 'Digital and Technological Skills',
      icon: '💻',
      description: 'Mastering modern technology and digital literacy',
      color: 'from-blue-500 to-indigo-500',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      title: 'Critical Thinking and Decision-Making Skills',
      icon: '🎯',
      description: 'Developing analytical and problem-solving abilities',
      color: 'from-violet-500 to-purple-500',
      shadowColor: 'shadow-violet-500/20'
    },
    {
      title: 'Health and Wellness Skills',
      icon: '🌿',
      description: 'Promoting physical and mental well-being',
      color: 'from-teal-500 to-cyan-500',
      shadowColor: 'shadow-teal-500/20'
    },
    {
      title: 'Interpersonal and Personal Development',
      icon: '🤝',
      description: 'Growing as an individual and team player',
      color: 'from-red-500 to-rose-500',
      shadowColor: 'shadow-red-500/20'
    },
    {
      title: 'Technovation and Creovation Skills',
      icon: '🚀',
      description: 'Combining technology with creative innovation',
      color: 'from-indigo-500 to-blue-500',
      shadowColor: 'shadow-indigo-500/20'
    },
  ];

  console.log(programs); // Check if programs are available

  return (
    <div className="relative bg-slate-900 min-h-screen py-24 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Our Amazing Programs
        </h1>

        <p className="text-center text-lg text-slate-400 mb-16 max-w-3xl mx-auto">
          Embark on an exciting journey of learning and discovery with our specially designed programs for young minds!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl ${program.shadowColor} 
                           shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden 
                           border border-slate-700/50 flex flex-col`}>
                <div className={`bg-gradient-to-r ${program.color} p-8 flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
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
      </div>
    </div>
  );
};

export default Programs;
