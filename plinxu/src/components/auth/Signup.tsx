// frontend/pages/signup.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignupPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { fullName, email, password });
      setSuccessMessage(response.data.message);
      setError('');
    } catch (error) {
      setError('Something went wrong.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-teal-100">
      {/* Left side with 3D objects */}
      <div className="w-1/2 bg-teal-200 p-12 relative overflow-hidden">
        <div className="absolute top-4 left-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#2DD4BF"/>
            <path d="M23 15L17 21L23 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Find 3D Objects, Mockups<br />and Illustration here.</h2>
        
        {/* Abstract 3D shapes */}
        <div className="relative h-64 w-64 mx-auto mt-12">
          <div className="absolute w-32 h-32 bg-pink-300 rounded-full top-0 left-0 transform -rotate-12"></div>
          <div className="absolute w-40 h-40 bg-blue-300 rounded-lg top-20 left-20 transform rotate-45"></div>
          <div className="absolute w-24 h-24 bg-yellow-200 rounded-full bottom-0 right-0"></div>
          <div className="absolute w-16 h-48 bg-purple-300 rounded-full -bottom-8 -left-8 transform rotate-12"></div>
        </div>
      </div>

      {/* Right side with signup form */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <select className="border-none text-sm text-gray-500">
              <option>English (UK)</option>
            </select>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 10C2.5 10 5 5 10 5C15 5 17.5 10 17.5 10C17.5 10 15 15 10 15C5 15 2.5 10 2.5 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-200"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-500 mt-8">
            Already have an account? <a href="#" className="text-teal-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
