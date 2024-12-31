import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProgramDetail = () => {
  const { programName } = useParams();

  const programDetails = {
    'life-and-survival-skills': {
      title: 'Life and Survival Skills',
      content:
        'Learn essential life-saving skills to survive in challenging situations. Our program equips children with the knowledge of basic first-aid, how to build a shelter, and essential survival tactics in emergencies.',
      features: [
        'Basic First Aid & Safety',
        'Emergency Response Training',
        'Navigation & Orienteering',
        'Safe Food & Water Skills',
        'Team Survival Challenges'
      ],
      reading: [
        'Survival Guide for Kids',
        'First Aid Basics',
        'Nature Safety Tips'
      ],
      image: 'https://example.com/survival.jpg',
    },
    'social-and-emotional-skills': {
      title: 'Social and Emotional Skills',
      content:
        'This program helps kids build confidence, emotional intelligence, and communication skills. It focuses on teaching children how to manage emotions, build empathy, and interact positively with others.',
      features: [
        'Emotional Intelligence Training',
        'Friendship Building Activities',
        'Conflict Resolution Skills',
        'Self-Expression Workshops',
        'Mindfulness Practices'
      ],
      reading: [
        'Understanding Emotions',
        'Making Friends Guide',
        'Being Kind to Others'
      ],
      image: 'https://example.com/social-emotional.jpg',
    },
    'career-and-professional-skills': {
      title: 'Career and Professional Skills',
      content:
        'Prepare your children for the future with our career and professional skills program. It introduces children to different professions, helps them understand basic workplace etiquette, and develops critical job skills like time management, teamwork, and leadership.',
      features: [
        'Career Exploration Activities',
        'Time Management Skills',
        'Leadership Development',
        'Teamwork Exercises',
        'Professional Communication'
      ],
      reading: [
        'Career Guide for Kids',
        'Leadership Basics',
        'Teamwork Essentials'
      ],
      image: 'https://example.com/career.jpg',
    },
    'digital-and-technological-skills': {
      title: 'Digital and Technological Skills',
      content:
        'In today\'s tech-driven world, digital literacy is crucial. Our program covers topics like coding, internet safety, and how to use technology creatively. Kids will learn how to build simple apps, games, and websites while understanding the importance of cybersecurity.',
      features: [
        'Basic Programming',
        'Internet Safety',
        'Digital Creation Tools',
        'Cybersecurity Basics',
        'Tech Problem Solving'
      ],
      reading: [
        'Coding Made Easy',
        'Digital Safety Guide',
        'Tech Creative Projects'
      ],
      image: 'https://example.com/digital.jpg',
    },
    'critical-thinking-and-decision-making-skills': {
      title: 'Critical Thinking and Decision-Making Skills',
      content:
        'Develop your child\'s ability to analyze, evaluate, and make decisions based on reasoning and logic. This program fosters creativity and problem-solving skills through fun activities and challenges, teaching kids how to think critically in various situations.',
      features: [
        'Problem-Solving Techniques',
        'Logical Reasoning Games',
        'Decision Making Practice',
        'Analysis Skills',
        'Creative Solutions'
      ],
      reading: [
        'Think Smart Guide',
        'Problem Solving Adventures',
        'Logic Games for Kids'
      ],
      image: 'https://example.com/critical-thinking.jpg',
    },
    'health-and-wellness-skills': {
      title: 'Health and Wellness Skills',
      content:
        'This program focuses on physical and mental health, helping kids adopt healthy habits from a young age. It covers topics like nutrition, exercise, stress management, and emotional well-being, creating a holistic approach to health.',
      features: [
        'Nutrition Education',
        'Physical Activities',
        'Mental Health Awareness',
        'Stress Management',
        'Healthy Lifestyle Habits'
      ],
      reading: [
        'Healthy Living for Kids',
        'Fun Exercise Guide',
        'Mindfulness for Children'
      ],
      image: 'https://example.com/health.jpg',
    },
    'interpersonal-and-personal-development': {
      title: 'Interpersonal and Personal Development',
      content:
        'Our program focuses on enhancing personal growth and interpersonal relationships. Kids will learn self-awareness, goal-setting, and how to develop positive relationships with peers and adults, preparing them for a successful future.',
      features: [
        'Self-Awareness Activities',
        'Goal Setting Workshops',
        'Relationship Building',
        'Communication Skills',
        'Personal Growth Projects'
      ],
      reading: [
        'Growing Up Confident',
        'Making Friends Guide',
        'Personal Development for Kids'
      ],
      image: 'https://example.com/interpersonal.jpg',
    },
    'technovation-and-creovation-skills': {
      title: 'Technovation and Creovation Skills',
      content:
        'Encourage creativity and innovation with our Technovation and Creovation program. It combines technology and creativity, helping kids develop their problem-solving skills through projects like building robots, apps, or digital art.',
      features: [
        'Basic Coding & Robotics',
        'Digital Art Creation',
        'Innovation Challenges',
        'Creative Problem Solving',
        'Tech Project Management'
      ],
      reading: [
        'Coding for Beginners',
        'Digital Art Basics',
        'Innovation for Kids'
      ],
      image: 'https://example.com/technovation.jpg',
    },
  };

  const program = programDetails[programName];

  if (!program) {
    return <div>Program not found.</div>;
  }

  return (
    <div className="relative bg-slate-900 min-h-screen py-24 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {program.title}
        </h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12 text-slate-400">
            {program.content}
          </p>

          {program.features && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50 p-8 mb-8">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Program Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.features.map((feature, index) => (
                  <div key={index} 
                       className="flex items-center space-x-4 group hover:bg-slate-700/50 p-3 rounded-xl transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      ✨
                    </span>
                    <span className="text-slate-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {program.reading && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Recommended Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.reading.map((book, index) => (
                  <div key={index} 
                       className="flex items-center space-x-4 group hover:bg-slate-700/50 p-3 rounded-xl transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      📚
                    </span>
                    <span className="text-slate-300 font-medium">
                      {book}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link
              to="/signup"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 
                       text-white font-bold text-lg tracking-wide shadow-xl shadow-indigo-500/25
                       hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 
                       transition-all duration-200 inline-flex items-center justify-center"
            >
              Sign Up Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button
              className="px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-slate-600
                       text-slate-300 hover:text-white font-bold text-lg tracking-wide
                       transform hover:-translate-y-0.5 transition-all duration-200
                       bg-slate-800/50 hover:bg-slate-800/80"
            >
              More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
