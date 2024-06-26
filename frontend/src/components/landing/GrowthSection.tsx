'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const GrowthSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
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
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg max-w-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center">
              <span className="text-4xl font-bold">$19.99</span>
              <p className="text-gray-600">PER ITEM</p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image src="/qr-code.png" alt="QR Code" width={200} height={200} />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-between items-center"
          variants={itemVariants}
        >
          <div className="text-2xl font-semibold">Atlas</div>
          <div className="text-2xl font-semibold">RocketRides, Inc</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GrowthSection;