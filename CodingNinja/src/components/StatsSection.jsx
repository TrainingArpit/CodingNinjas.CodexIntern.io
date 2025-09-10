import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "50,000+", label: "Students Placed" },
    { number: "1000+", label: "Expert Instructors" },
    { number: "300%", label: "Average Salary Hike" },
    { number: "100+", label: "Countries Reached" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;