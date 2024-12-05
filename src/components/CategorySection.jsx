import React, { useRef, useState } from 'react';
import { FaLightbulb, FaGamepad, FaPaintBrush, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const CategorySection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto py-16 px-6 relative">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Discover Our Categories
      </h2>

      <div className="relative">
        {showLeftArrow && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:hidden cursor-pointer" onClick={scrollLeft}>
            <FaChevronLeft className="text-gray-400 text-3xl opacity-75" />
          </div>
        )}
        
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-4 px-4 sm:space-x-0 sm:grid sm:grid-cols-3 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',           // Firefox
            msOverflowStyle: 'none',          // IE and Edge
          }}
        >
          <div className="flex-shrink-0 w-64 sm:w-auto bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center items-center bg-pink-100 rounded-full w-16 h-16 mx-auto mb-6">
              <FaLightbulb className="text-pink-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Learning & Fun</h3>
            <p className="text-gray-600 text-center">
              Engage in interactive learning activities designed for curious minds.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 sm:w-auto bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center items-center bg-green-100 rounded-full w-16 h-16 mx-auto mb-6">
              <FaGamepad className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Interactive Games</h3>
            <p className="text-gray-600 text-center">
              Play fun games that challenge and enhance your skills and creativity.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 sm:w-auto bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center items-center bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6">
              <FaPaintBrush className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Creative Crafts</h3>
            <p className="text-gray-600 text-center">
              Discover fun DIY craft ideas and let your imagination flow.
            </p>
          </div>
        </div>

        {/* Right Scroll Arrow */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden cursor-pointer" onClick={scrollRight}>
          <FaChevronRight className="text-gray-400 text-3xl opacity-75" />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
