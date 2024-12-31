import React from 'react';

const HeroSection = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('featured-programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-2xl mb-2">
                Welcome to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500">
                KidzWorld!
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 
                     leading-relaxed max-w-3xl mx-auto">
            Discover an amazing world of learning and adventure! Join us on a journey 
            of creativity, knowledge, and fun.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPrograms}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 
                       text-white font-bold text-lg tracking-wide shadow-xl shadow-indigo-500/25
                       hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 
                       transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Programs
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button 
              className="px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-slate-600
                       text-slate-300 hover:text-white font-bold text-lg tracking-wide
                       transform hover:-translate-y-0.5 transition-all duration-200
                       bg-slate-800/50 hover:bg-slate-800/80"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute right-1/3 top-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        {/* Animated icons */}
        <div className="absolute left-[15%] top-[20%] text-4xl animate-float-slow opacity-75">💡</div>
        <div className="absolute right-[20%] top-[25%] text-4xl animate-float opacity-75">🚀</div>
        <div className="absolute left-[25%] bottom-[30%] text-4xl animate-bounce-slow opacity-75">⭐</div>
        <div className="absolute right-[15%] bottom-[20%] text-4xl animate-float-delayed opacity-75">✨</div>
      </div>
    </section>
  );
};

export default HeroSection;
