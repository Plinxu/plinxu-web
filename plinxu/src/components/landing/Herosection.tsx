'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const subtleFloatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const gradientAnimation = {
    background: [
      "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      animate={gradientAnimation}
    >
      {/* Refined background elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={subtleFloatingAnimation} 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div 
          animate={{ ...subtleFloatingAnimation, transition: { delay: 0.5 } }} 
          className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div 
          animate={{ ...subtleFloatingAnimation, transition: { delay: 1 } }} 
          className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-[150px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-[150px] sm:h-[250px] md:h-[350px] lg:h-[400px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
      </div>

      {/* Subtle fintech-themed floating elements */}
      <motion.div animate={subtleFloatingAnimation} className="absolute top-1/4 left-1/4 text-4xl sm:text-5xl md:text-6xl text-blue-300 opacity-20">$</motion.div>
      <motion.div animate={{ ...subtleFloatingAnimation, transition: { delay: 0.7 } }} className="absolute bottom-1/4 right-1/4 text-4xl sm:text-5xl md:text-6xl text-purple-300 opacity-20">€</motion.div>
      <motion.div animate={{ ...subtleFloatingAnimation, transition: { delay: 1.4 } }} className="absolute top-1/2 right-1/3 text-4xl sm:text-5xl md:text-6xl text-pink-300 opacity-20">₿</motion.div>

      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" variants={itemVariants}>
          Effortlessly streamline your
          <br />
          <span className="text-blue-600">business payments</span> like
          <br />
          never before
        </motion.h1>

        <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          Unlock the power of a unified platform for seamless end-to-end payment processing and
          financial management. Discover the perfect solution to make your operations a reality.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button 
            className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 cursor-pointer transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RegisterLink>Get Started</RegisterLink>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 bg-white bg-opacity-90 rounded-xl p-6 sm:p-8 shadow-lg"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { value: "95%", label: "Client Satisfaction" },
              { value: "45%", label: "Decrease Expenses" },
              { value: "200k+", label: "Money Flow Users" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle animated graph in the background */}
      <svg className="absolute bottom-0 left-0 w-full h-24 sm:h-32 text-blue-200 opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <motion.path 
          fill="currentColor" 
          fillOpacity="1" 
          initial={{ d: "M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,128C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" }}
          animate={{ 
            d: [
              "M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,128C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              "M0,64L60,96C120,128,240,192,360,202.7C480,213,600,171,720,144C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              "M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,128C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </svg>
    </motion.section>
  );
};

export default HeroSection;