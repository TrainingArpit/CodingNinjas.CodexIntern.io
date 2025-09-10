import React from 'react';
import Card from './UI/Card';

const PlacementSection = () => {
  const companies = [
    'Amazon', 'Google', 'Microsoft', 'Adobe', 
    'Flipkart', 'Paytm', 'Goldman Sachs', 'Walmart'
  ];

  const placements = [
    { name: 'Rahul Sharma', company: 'Amazon', package: '42 LPA', image: '/images/avatar1.jpg' },
    { name: 'Priya Singh', company: 'Microsoft', package: '38 LPA', image: '/images/avatar2.jpg' },
    { name: 'Amit Kumar', company: 'Google', package: '45 LPA', image: '/images/avatar3.jpg' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Placement Success</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Our Students Work At</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="p-6 text-center" hover={false}>
                <div className="text-gray-800 font-medium">{company}</div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Recent Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placements.map((placement, index) => (
              <Card key={index} className="p-6 text-center">
                <img src={placement.image} alt={placement.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{placement.name}</h4>
                <p className="text-gray-600 mb-2">Placed at {placement.company}</p>
                <p className="text-orange-500 font-bold">{placement.package}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;