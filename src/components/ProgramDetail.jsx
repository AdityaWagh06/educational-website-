import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProgramDetail = () => {
  const { programName } = useParams();

  const programDetails = {
    'life-and-survival-skills': {
      title: 'Life and Survival Skills',
      content:
        'Learn essential life-saving skills to survive in challenging situations. Our program equips children with the knowledge of basic first-aid, how to build a shelter, and essential survival tactics in emergencies.',
      image: 'https://example.com/survival.jpg',
    },
    'social-and-emotional-skills': {
      title: 'Social and Emotional Skills',
      content:
        'This program helps kids build confidence, emotional intelligence, and communication skills. It focuses on teaching children how to manage emotions, build empathy, and interact positively with others.',
      image: 'https://example.com/social-emotional.jpg',
    },
    'career-and-professional-skills': {
      title: 'Career and Professional Skills',
      content:
        'Prepare your children for the future with our career and professional skills program. It introduces children to different professions, helps them understand basic workplace etiquette, and develops critical job skills like time management, teamwork, and leadership.',
      image: 'https://example.com/career.jpg',
    },
    'digital-and-technological-skills': {
      title: 'Digital and Technological Skills',
      content:
        'In today’s tech-driven world, digital literacy is crucial. Our program covers topics like coding, internet safety, and how to use technology creatively. Kids will learn how to build simple apps, games, and websites while understanding the importance of cybersecurity.',
      image: 'https://example.com/digital.jpg',
    },
    'critical-thinking-and-decision-making-skills': {
      title: 'Critical Thinking and Decision-Making Skills',
      content:
        'Develop your child’s ability to analyze, evaluate, and make decisions based on reasoning and logic. This program fosters creativity and problem-solving skills through fun activities and challenges, teaching kids how to think critically in various situations.',
      image: 'https://example.com/critical-thinking.jpg',
    },
    'health-and-wellness-skills': {
      title: 'Health and Wellness Skills',
      content:
        'This program focuses on physical and mental health, helping kids adopt healthy habits from a young age. It covers topics like nutrition, exercise, stress management, and emotional well-being, creating a holistic approach to health.',
      image: 'https://example.com/health.jpg',
    },
    'interpersonal-and-personal-development': {
      title: 'Interpersonal and Personal Development',
      content:
        'Our program focuses on enhancing personal growth and interpersonal relationships. Kids will learn self-awareness, goal-setting, and how to develop positive relationships with peers and adults, preparing them for a successful future.',
      image: 'https://example.com/interpersonal.jpg',
    },
    'technovation-and-creovation-skills': {
      title: 'Technovation and Creovation Skills',
      content:
        'Encourage creativity and innovation with our Technovation and Creovation program. It combines technology and creativity, helping kids develop their problem-solving skills through projects like building robots, apps, or digital art. Perfect for young inventors and creators!',
      image: 'https://example.com/technovation.jpg',
    },
  };

  const program = programDetails[programName];

  if (!program) {
    return <div>Program not found.</div>;
  }

  return (
    <div className="relative bg-gradient-to-r from-pink-300 to-pink-500 py-20 px-6 text-white">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})` }}
      ></div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-semibold text-center mb-8">{program.title}</h1>

        <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
          {program.content}
        </p>

        <div className="flex justify-center space-x-6">
          {/* Sign Up Button with Link */}
          <Link
            to="/signup" // Link to the sign-up page
            className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105 hover:bg-pink-600 hover:text-white"
          >
            Sign Up Now
          </Link>

          {/* More Information Button */}
          <a
            href="#"
            className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:bg-white hover:text-pink-600"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
