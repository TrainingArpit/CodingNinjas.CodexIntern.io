import React from 'react';
import Button from './UI/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img 
        src="/images/hero-image.jpg" 
        alt="Students coding" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Master Coding Skills
          <span className="block text-orange-500">For Your Dream Job</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Crack the code of your career with industry-relevant courses, practice problems, and mock interviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary">Explore Courses</Button>
          <Button>Take a Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;