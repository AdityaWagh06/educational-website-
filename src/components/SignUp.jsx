import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative bg-slate-900 min-h-screen py-24 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Choose a username"
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 
                         text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder-slate-500"
                placeholder="Choose a password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 
                       text-white font-medium shadow-lg shadow-indigo-500/25
                       hover:shadow-xl hover:shadow-indigo-500/40 transform 
                       hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
