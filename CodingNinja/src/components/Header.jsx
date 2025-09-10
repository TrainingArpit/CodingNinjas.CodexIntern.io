import React, { useState } from 'react';
import Button from './UI/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">CodingNinjas</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Courses', 'Practice', 'Events', 'Campus Ninjas', 'Blog', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="text-sm">Login</Button>
            <Button className="text-sm">Sign Up</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {['Courses', 'Practice', 'Events', 'Campus Ninjas', 'Blog', 'About Us'].map((item) => (
              <a key={item} href="#" className="block text-gray-700 hover:text-orange-500 font-medium text-sm">
                {item}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <Button variant="outline" className="w-full text-sm">Login</Button>
              <Button className="w-full text-sm">Sign Up</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;