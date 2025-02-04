// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yoga Sai Raghav's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
