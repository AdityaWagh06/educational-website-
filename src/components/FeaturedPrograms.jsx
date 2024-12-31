import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPrograms = () => {
  const featuredPrograms = [
    {
      id: 'digital-and-technological-skills',
      title: 'Digital & Tech Skills',
      description: 'Learn coding, internet safety, and creative tech use',
      icon: '💻',
      color: 'from-indigo-500 to-blue-500',
      shadowColor: 'shadow-indigo-200'
    },
    {
      id: 'critical-thinking-and-decision-making-skills',
      title: 'Critical Thinking',
      description: 'Develop problem-solving and analytical skills',
      icon: '🧠',
      color: 'from-rose-500 to-pink-500',
      shadowColor: 'shadow-rose-200'
    },
    {
      id: 'life-and-survival-skills',
      title: 'Life Skills',
      description: 'Master essential survival and safety techniques',
      icon: '🌟',
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-200'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Featured Programs
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg max-w-2xl mx-auto">
          Discover our most popular programs designed to empower the next generation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredPrograms.map((program) => (
            <Link
              key={program.id}
              to={`/program/${program.id}`}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-white rounded-2xl ${program.shadowColor} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100`}>
                <div className={`bg-gradient-to-r ${program.color} p-8 flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-slate-600 group-hover:text-slate-800">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default FeaturedPrograms; 