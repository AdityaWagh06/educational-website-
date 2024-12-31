import React from 'react';

const Contact = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen py-24 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-center text-lg text-slate-400 mb-16 max-w-2xl mx-auto">
          Have questions or suggestions? We'd love to hear from you!
        </p>

        <form className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Email</label>
              <input 
                type="email" 
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Message</label>
              <textarea 
                rows="6"
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Your message here..."
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 
                       text-white font-medium shadow-lg shadow-indigo-500/25
                       hover:shadow-xl hover:shadow-indigo-500/40 transform 
                       hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
