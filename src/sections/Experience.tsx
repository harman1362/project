import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Experience & Education</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="relative">
              <div className="absolute left-8 w-1 h-full bg-blue-200 z-0" />
              <div className="space-y-8">
                {[
                  
                  {
                    title: "Full Stack Angular Developer",
                    company: "Arethos Venture",
                    period: "Jan 2021 – July 2022",
                    location: "India",
                    points: [
                      "Developed reusable Angular components",
                      "Integrated RESTful APIs with RxJS and NgRx",
                      "Enhanced application performance"
                    ]
                  },
                  {
                    title: "Angular Developer",
                    company: "Info Viz Solutions",
                    period: "Jan 2020 – dec 2020",
                    location: "India",
                    points: [
                      "Architected and implemented reusable Angular components",
                      "Integrated robust APIs with RxJS and NgRx",
                      "Built responsive interfaces with Angular Material",
                      "Optimized performance with lazy loading and caching"
                    ]
                  }
                ].map((experience, index) => (
                  <ExperienceCard key={index} {...experience} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-8 w-1 h-full bg-purple-200 z-0" />
              <div className="space-y-8">
                {[
                  {
                    degree: "Post Graduate Certificate",
                    field: "Web Development",
                    school: "",
                    period: "2023 – 2024",
                    location: "Waterloo,Canada",
                    points: ["Advanced Web Development", "Full Stack Development"]
                  },
                  {
                    degree: "Bachelor of Technology",
                    field: "Computer Science",
                    school: "Punjab Technical University",
                    period: "2018 – 2022",
                    location: "Punjab, India",
                    points: ["Data Structures", "Web Technologies"]
                  }
                ].map((education, index) => (
                  <EducationCard key={index} {...education} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ title, company, period, location, points }: any) => (
  <motion.div className="relative pl-16">
    <motion.div className="absolute left-[29px] top-3 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <Briefcase className="w-5 h-5 text-blue-600" />
        <div>
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>{location}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <ul className="space-y-2">
        {points.map((point: string, i: number) => (
          <motion.li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const EducationCard = ({ degree, field, school, period, location, points }: any) => (
  <motion.div className="relative pl-16">
    <motion.div className="absolute left-[29px] top-3 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10" />
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <GraduationCap className="w-5 h-5 text-purple-600" />
        <div>
          <h3 className="font-bold text-lg leading-tight">{degree}</h3>
          <p className="text-sm text-gray-600">{field}</p>
          <p className="text-sm text-gray-600">{school}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>{location}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <ul className="space-y-2">
        {points.map((point: string, i: number) => (
          <motion.li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
); 