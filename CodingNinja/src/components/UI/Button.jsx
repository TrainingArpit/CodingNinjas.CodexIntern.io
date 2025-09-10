import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50';
  
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50',
    outline: 'bg-transparent text-gray-800 border-2 border-gray-300 hover:bg-gray-50',
    dark: 'bg-gray-800 text-white hover:bg-gray-900'
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;