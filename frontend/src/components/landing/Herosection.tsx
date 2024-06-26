'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
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
      opacity: 1
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className="text-5xl sm:text-6xl font-bold mb-6" variants={itemVariants}>
          Effortlessly streamline your
          <br />
          <span className="text-blue-500">business payments</span> like
          <br />
          never before
        </motion.h1>

        <motion.p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          Unlock the power of a unified platform for seamless end-to-end payment processing and
          financial management. Discover the perfect solution to make your operations a reality.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 cursor-pointer">
          <RegisterLink>Get Started</RegisterLink>
          </Button>
        </motion.div>

        <motion.div 
          className="mt-16 bg-gray-900 rounded-xl p-8 shadow-2xl"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">95%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">45%</h3>
              <p className="text-gray-400">Decrease Expenses</p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">200k+</h3>
              <p className="text-gray-400">Money Flow Users</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;