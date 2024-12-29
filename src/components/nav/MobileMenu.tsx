import React from 'react';

const MobileMenu = () => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
      <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
      <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
      <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</a>
      <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
    </div>
  </div>
);

export default MobileMenu;