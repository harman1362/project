import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out to me!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:workwithharman@gmail.com"
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg"
            >
              <Mail className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">workwithharman@gmail.com</p>
              </div>
            </motion.a>
            <motion.a
              href="tel:+16476401362"
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg"
            >
              <Phone className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 647-640-1362</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}; 