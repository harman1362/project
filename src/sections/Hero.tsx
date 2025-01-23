import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center py-12 sm:py-20">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]" />

      {/* Content */}
      <div className="container relative mx-auto px-4 lg:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-6 text-white"
          >
            Hi, I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Full Stack Developerx
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto mb-4 sm:mb-6"
          >
            Full Stack developer with 3.5 years of experience, eager to grow, learn, and tackle real-world challenges.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>workwithharman@gmail.com</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+1 647-640-1362</span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}; 