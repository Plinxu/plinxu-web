'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const BillingSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:w-1/2 mb-10 lg:mb-0 pr-8">
          <motion.div variants={itemVariants} className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-3 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-green-500 font-semibold">Billing</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Capture recurring revenue
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 leading-relaxed">
            Support recurring business models, minimize churn, and automate finance operations.
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Start with Billing
          </motion.button>
          
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">See also</h3>
            <ul className="space-y-3">
              {[
                { title: 'Invoicing', desc: 'for invoice creation, collection, and tracking' },
                { title: 'Revenue Recognition', desc: 'for streamlined accrual accounting' },
                { title: 'Sigma', desc: 'for custom revenue reports' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-gray-600 text-sm ml-1">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto transform perspective-1000"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Typographic</span>
              </div>
              <div className="flex space-x-4 text-sm">
                <span>Products</span>
                <span>Pricing</span>
                <span>Contact</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Web</h3>
              <p className="text-gray-600">50-499 users</p>
            </div>
            
            <div className="text-center mb-6">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            
            <motion.button 
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-green-600 transition duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
            
            <div>
              <p className="font-semibold mb-3">This includes:</p>
              <ul className="space-y-2">
                {['Up to 3 fonts', '50k requests', '5 domains', 'Unlimited seats'].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BillingSection;