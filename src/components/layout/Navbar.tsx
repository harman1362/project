import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, X, Menu } from 'lucide-react';

interface NavbarProps {
  scrollToSection?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
      className="fixed w-full shadow-sm z-50"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-blue-600 cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection?.('hero')}
          >
            <Code className="w-5 h-5" />
            <span>Portfolio</span>
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, color: "#2563EB" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection?.(item.id)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    scrollToSection?.(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}; 