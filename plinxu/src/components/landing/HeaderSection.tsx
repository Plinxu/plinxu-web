"use client";

import React, { useState, useEffect } from 'react';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Transa</div>
          
          {/* Hamburger menu button */}
          <button 
            className="md:hidden z-20 focus:outline-none transition-transform duration-300 ease-in-out"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation menu for larger screens */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#resources" className="hover:text-blue-600 transition-colors">Resources</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <LoginLink className="text-blue-600 hover:text-blue-700 transition-colors">Sign In</LoginLink>
            <RegisterLink className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Sign Up</RegisterLink>
          </nav>
        </div>

        {/* Mobile menu */}
        <nav className={`
          md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}>
          <div className="flex flex-col space-y-4 pt-4">
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`
                  hover:text-blue-600 transition-colors transform
                  ${isMenuOpen ? 'animate-fadeInDown' : ''}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <LoginLink className={`
              text-blue-600 hover:text-blue-700 transition-colors transform
              ${isMenuOpen ? 'animate-fadeInDown' : ''}
            `} style={{ animationDelay: '400ms' }}>
              Sign In
            </LoginLink>
            <RegisterLink className={`
              bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block text-center transform
              ${isMenuOpen ? 'animate-fadeInDown' : ''}
            `} style={{ animationDelay: '500ms' }}>
              Sign Up
            </RegisterLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;