import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-6"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Harmanpreet Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com", icon: Github },
              { href: "https://linkedin.com", icon: Linkedin },
              { href: "mailto:workwithharman@gmail.com", icon: Mail }
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                whileHover={{ y: -5 }}
                className="p-2 hover:text-blue-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}; 