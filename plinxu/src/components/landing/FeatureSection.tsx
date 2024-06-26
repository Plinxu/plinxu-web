'use client'
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: string; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
  <motion.div 
    className={`p-6 rounded-xl ${color} shadow-lg`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </motion.div>
);

const StatCard: React.FC<{ title: string; value: string | number }> = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h4 className="text-sm text-gray-500">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate your business with a robust<br />set of empowering features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon="🔄"
            title="Powerful Automations"
            description="Experience the transformative power of our payment processing systems"
            color="bg-orange-100"
          />
          <FeatureCard 
            icon="🔒"
            title="Secured Platform"
            description="Rest assured with our advanced protection features and robust security measures"
            color="bg-blue-100"
          />
          <FeatureCard 
            icon="📊"
            title="Advanced Analytics"
            description="Uncover valuable insights and make data-driven decisions with our advanced analytics capabilities"
            color="bg-purple-100"
          />
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Claim your free trial<br />today and ignite<br />possibilities
              </h3>
              <p className="text-gray-600 mb-4">
                Seize this opportunity to embark on a transformative journey with our<br />
                cutting-edge solution. Take the first step today and unlock a world of<br />
                possibilities for your business.
              </p>
              <div className="flex items-center space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 grid grid-cols-2 gap-4">
              <StatCard title="Client Satisfaction" value="79%" />
              <StatCard title="Total Activity" value="455" />
              <div className="col-span-2">
                <StatCard title="Current Balance" value="$2000.09" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;