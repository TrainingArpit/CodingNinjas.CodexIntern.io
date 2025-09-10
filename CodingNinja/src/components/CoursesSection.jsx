import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';

const CoursesSection = () => {
  const courses = [
    {
      title: "Data Science & Machine Learning",
      description: "Master Data Science, ML, Python, SQL, and more.",
      duration: "8 months",
      level: "Beginner Friendly",
      icon: "/images/icon-data.png"
    },
    {
      title: "Full Stack Web Development",
      description: "Learn MERN stack, build real-world projects.",
      duration: "6 months",
      level: "Intermediate",
      icon: "/images/icon-web.png"
    },
    {
      title: "Competitive Programming",
      description: "Excel in coding interviews and competitions.",
      duration: "4 months",
      level: "Advanced",
      icon: "/images/icon-trophy.png"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 text-center">
              <img src={course.icon} alt={course.title} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>⏱️ {course.duration}</span>
                <span>{course.level}</span>
              </div>
              <Button className="w-full">View Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;