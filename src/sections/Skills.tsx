import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool, Linkedin, Database, Cloud, Zap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        'React.js', 'Angular', 'Next.js',
        'TypeScript', 'JavaScript (ES6+)',
        'HTML5/CSS3', 'TailwindCSS',
        'Redux/NgRx',
        'Responsive Design', 'Bootstrap'
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        'Node.js', 'Express.js',
        'C#/.NET Core', 'Python',
        'RESTful APIs', 'GraphQL',
        'Microservices', 'WebSockets',
        'Authentication/JWT', 'OAuth',
        'API Security', 'Swagger/OpenAPI'
      ]
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: [
        'MongoDB', 'PostgreSQL',
        'MySQL',
        'Firebase', 'SQL Server',
        'Database Design', 'ORM/Mongoose'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        'AWS Services', 'Azure',
        'Docker', 'Kubernetes',
        'CI/CD', 'Jenkins',
        'GitHub Actions', 'Linux'
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Skills & Expertise</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Get to know me!</h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building scalable web applications. 
                My strong foundation in both frontend and backend technologies allows me to create 
                comprehensive solutions that deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I stay current with industry trends and continuously expand my skillset to tackle 
                modern development challenges. I'm particularly interested in cloud architecture, 
                microservices, and building high-performance applications.
              </p>
            </div>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="w-5 h-5 text-blue-600" />
                  <h6 className="font-semibold">{category.title}</h6>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 