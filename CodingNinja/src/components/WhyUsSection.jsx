import React from 'react';
import Card from './UI/Card';

const WhyUsSection = () => {
  const features = [
    {
      icon: '👨‍🏫',
      title: 'Expert Tutors',
      description: 'Learn from industry experts with years of experience'
    },
    {
      icon: '❓',
      title: '24/7 Doubt Support',
      description: 'Get your doubts resolved instantly by our team of experts'
    },
    {
      icon: '📚',
      title: 'Structured Curriculum',
      description: 'Well-structured courses designed by industry professionals'
    },
    {
      icon: '💼',
      title: 'Placement Assistance',
      description: 'Get help with placements and interview preparation'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose CodingNinjas?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide the best learning experience to help you achieve your career goals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;