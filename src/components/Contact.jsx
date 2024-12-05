import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center text-pink-600">Contact Us</h1>
      <p className="text-center text-gray-700 mt-4">
        Have questions or suggestions? We'd love to hear from you!
      </p>
      <form className="mt-8 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea 
            rows="4"
            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button 
          type="submit" 
          className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
