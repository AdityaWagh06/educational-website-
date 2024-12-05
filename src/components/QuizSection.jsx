import React, { useRef, useState } from 'react';
import { FaGlobe, FaFlask, FaCalculator, FaLandmark, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const quizData = [
  {
    title: 'General Knowledge Quiz',
    description: 'Test your knowledge across various topics with this quiz!',
    buttonText: 'Start Quiz',
    color: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-100',
    icon: <FaGlobe className="text-blue-500 text-4xl" />,
  },
  {
    title: 'Science Quiz',
    description: 'Explore the wonders of science and test your understanding!',
    buttonText: 'Start Quiz',
    color: 'bg-green-50',
    hoverColor: 'hover:bg-green-100',
    icon: <FaFlask className="text-green-500 text-4xl" />,
  },
  {
    title: 'Math Challenge',
    description: 'Solve mathematical problems and improve your skills!',
    buttonText: 'Start Quiz',
    color: 'bg-yellow-50',
    hoverColor: 'hover:bg-yellow-100',
    icon: <FaCalculator className="text-yellow-500 text-4xl" />,
  },
  {
    title: 'History Quiz',
    description: 'Dive into the past and discover fascinating historical facts!',
    buttonText: 'Start Quiz',
    color: 'bg-red-50',
    hoverColor: 'hover:bg-red-100',
    icon: <FaLandmark className="text-red-500 text-4xl" />,
  },
];

const QuizSection = () => {
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
    <section id="quizzes" className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">
          Play & Learn Quizzes
        </h2>

        {/* Mobile: Horizontal Scroll, PC: Grid Layout */}
        <div className="relative">
          {showLeftArrow && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:hidden cursor-pointer" onClick={scrollLeft}>
              <FaChevronLeft className="text-gray-400 text-3xl opacity-75" />
            </div>
          )}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto space-x-4 px-4 sm:space-x-0 sm:grid sm:grid-cols-2 lg:grid-cols-4"
            style={{
              scrollbarWidth: 'none',           // Firefox
              msOverflowStyle: 'none',          // IE and Edge
            }}
          >
            {quizData.map((quiz, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-64 sm:w-auto p-4 mx-2 rounded-lg shadow-md flex flex-col justify-between items-center text-center transition-transform transform hover:-translate-y-2 duration-300 ease-in-out ${quiz.color}`}
                style={{ minHeight: '280px' }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                    {quiz.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                </div>
                <div className="w-full mt-auto pt-4">
                  <button
                    className={`w-full py-2 rounded-md bg-pink-500 text-white font-semibold tracking-wide ${quiz.hoverColor} transition duration-300 ease-in-out transform hover:scale-105`}
                  >
                    {quiz.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden cursor-pointer" onClick={scrollRight}>
            <FaChevronRight className="text-gray-400 text-3xl opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
