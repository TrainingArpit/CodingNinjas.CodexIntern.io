import React from 'react';
import Card from './UI/Card';

const Testimonials = () => {
  const testimonials = [
    {
      text: "CodingNinjas changed my career completely. The instructors are amazing and the curriculum is industry-relevant.",
      name: "Aarav Patel",
      role: "SDE at Amazon",
      rating: 5,
      image: "/images/avatar1.jpg"
    },
    {
      text: "The doubt support is exceptional. They're available 24/7 and helped me clear all my concepts thoroughly.",
      name: "Neha Sharma",
      role: "Data Scientist at Microsoft",
      rating: 5,
      image: "/images/avatar2.jpg"
    },
    {
      text: "The projects and assignments are very practical. I could directly apply what I learned in my job interviews.",
      name: "Karan Singh",
      role: "Full Stack Developer at Google",
      rating: 5,
      image: "/images/avatar3.jpg"
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Students Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from our students who have transformed their careers with CodingNinjas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;