'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const PaymentSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-8 h-8 bg-indigo-600 rounded-md mr-3 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
            <span className="text-indigo-600 font-semibold">Payments</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Accept and optimize payments, globally</h1>
          <p className="text-xl text-gray-600 mb-6">
            Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.
          </p>
          
          <motion.button 
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start with Payments
          </motion.button>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">See also</h3>
            <ul className="space-y-2">
              {['Tax for automating sales tax and VAT', 'Radar for fraud prevention and management', 'Terminal for custom in-person payments'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="text-indigo-600 hover:underline cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image src="/wooden.jpeg" alt="Wood Chair" width={60} height={60} className="rounded-md" />
                <div className="ml-3">
                  <p className="font-semibold">Wood Chair 001</p>
                  <p className="text-xl font-bold">€135.00</p>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-3 rounded-md mb-3">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.64 9.2c-.14-.05-.3-.1-.45-.15-.4-.12-.8-.24-1.2-.36-.4-.12-.76-.24-1.08-.36-.32-.12-.6-.24-.84-.36-.24-.12-.44-.24-.6-.36-.16-.12-.28-.24-.36-.36-.08-.12-.12-.24-.12-.36 0-.24.08-.44.24-.6.16-.16.4-.24.72-.24.4 0 .72.08.96.24.24.16.44.36.6.6.16.24.28.52.36.84l1.8-.24c-.08-.48-.24-.88-.48-1.2-.24-.32-.52-.6-.84-.84-.32-.24-.72-.4-1.2-.52-.48-.12-1-.18-1.56-.18-.56 0-1.08.08-1.56.24-.48.16-.88.36-1.2.6-.32.24-.56.52-.72.84-.16.32-.24.68-.24 1.08 0 .36.08.68.24.96.16.28.36.52.6.72.24.2.52.36.84.48.32.12.68.24 1.08.36.4.12.8.24 1.2.36.4.12.76.24 1.08.36.32.12.6.24.84.36.24.12.44.24.6.36.16.12.28.24.36.36.08.12.12.24.12.36 0 .24-.08.44-.24.6-.16.16-.4.24-.72.24-.48 0-.84-.12-1.08-.36-.24-.24-.44-.56-.6-.96l-1.8.24c.08.56.24 1.04.48 1.44.24.4.56.72.96.96.4.24.84.44 1.32.56.48.12 1 .18 1.56.18.56 0 1.08-.08 1.56-.24.48-.16.88-.36 1.2-.6.32-.24.56-.52.72-.84.16-.32.24-.68.24-1.08 0-.36-.08-.68-.24-.96-.16-.28-.36-.52-.6-.72-.24-.2-.52-.36-.84-.48-.32-.12-.68-.24-1.08-.36z" />
                </svg>
                Pay
              </span>
            </button>
            
            <button className="w-full bg-emerald-500 text-white py-3 rounded-md mb-3">Pay with link</button>
            
            <div className="text-center text-gray-500 mb-4">Of betaal op een andere manier</div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" value="maria.hoekstra@example.nl" className="w-full p-2 border rounded-md" readOnly />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Betaalmethode</label>
              <div className="flex space-x-2">
                <button className="border p-2 rounded-md">Kaart</button>
                <button className="border p-2 rounded-md bg-blue-50 border-blue-500">IDEAL</button>
                <button className="border p-2 rounded-md">SEPA Direct</button>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">IDEAL-bank</label>
              <select className="w-full p-2 border rounded-md">
                <option>ING bank</option>
              </select>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-md">Betaal €135.00</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;