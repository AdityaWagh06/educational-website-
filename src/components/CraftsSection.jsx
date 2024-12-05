import React from 'react';
import { FaHandPaper, FaGift, FaRecycle } from 'react-icons/fa';

const craftsData = [
  {
    title: 'Paper Origami',
    description: 'Learn the art of folding paper into fun shapes!',
    buttonText: 'Start Craft',
    color: 'bg-red-100',
    hoverColor: 'hover:bg-red-200',
    icon: <FaHandPaper className="text-red-500 text-3xl" />,
  },
  {
    title: 'DIY Greeting Cards',
    description: 'Create personalized greeting cards with this tutorial.',
    buttonText: 'Start Craft',
    color: 'bg-yellow-100',
    hoverColor: 'hover:bg-yellow-200',
    icon: <FaGift className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Recycled Art',
    description: 'Turn everyday items into beautiful works of art.',
    buttonText: 'Start Craft',
    color: 'bg-green-100',
    hoverColor: 'hover:bg-green-200',
    icon: <FaRecycle className="text-green-500 text-3xl" />,
  },
];

const CraftsSection = () => {
  return (
    <section id="diy-crafts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
          Explore DIY Crafts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {craftsData.map((craft, index) => (
            <div key={index} className={`${craft.color} p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  {craft.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">
                {craft.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{craft.description}</p>
              <button className={`w-full py-2 mt-2 rounded-lg text-white font-semibold ${craft.hoverColor} transition duration-300`}>
                {craft.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsSection;
