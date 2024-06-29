'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1 = () => {
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

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-indigo-600 font-semibold mb-4">
          Built for growth
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-gray-900 leading-tight max-w-3xl">
          Take your startup farther, faster
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
          Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Atlas</h2>
              <div className="text-2xl font-bold">RocketRides, Inc.</div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <ul className="space-y-2">
                  <li className="text-indigo-600 font-semibold">Overview</li>
                  <li className="text-gray-600">Company</li>
                  <li className="text-gray-600">Templates</li>
                  <li className="text-gray-600">Partners</li>
                </ul>
              </div>
              <div className="w-2/3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Incorporate your company
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stock issued for founders
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Purchase your shares
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    File 83(b) election
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Open a bank account
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-2xl">👋</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4">anything i can help with today?</p>
              <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4">
                Hey, can I buy a license just for myself?
              </div>
              <p className="text-gray-600 mb-4">Sure, in that case I'd recommend our starter plan.</p>
              <a href="#" className="text-blue-500 hover:underline">buy.stripe.com/Ae33Jis</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-4xl font-bold">$19.99</span>
                  <p className="text-gray-600">PER ITEM</p>
                </div>
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <p className="text-sm text-gray-600">Scan to pay</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Payment Links</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Validate your idea</h3>
              <p className="text-gray-600">Test your product idea by launching payments with little to no code.</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="font-bold text-gray-700">P</span>
            </div>
            <span className="text-xl font-bold">Powdur</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section1;