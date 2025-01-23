import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Menu, X, LineChart, Phone, Code, Server, PenTool as Tool } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { BrowserRouter } from 'react-router-dom';

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  // Split the title into words
  const words = children?.toString().split(' ');
  const firstWord = words?.[0];
  const restWords = words?.slice(1).join(' ');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center relative"
    >
      <motion.div
        animate={{ 
          background: [
            "linear-gradient(90deg, #4F46E5, #2563EB, #7C3AED)",
            "linear-gradient(90deg, #7C3AED, #4F46E5, #2563EB)",
            "linear-gradient(90deg, #2563EB, #7C3AED, #4F46E5)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="h-1.5 w-32 mx-auto mb-4 rounded-full"
      />
      <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block tracking-tight">
        {firstWord}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {restWords}
        </span>
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h2>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-gray-200/10 font-black uppercase tracking-widest">
        {children}
      </div>
    </motion.div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const navButtonVariants = {
    hover: {
      scale: 1.05,
      color: "#2563EB",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialLinkVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    image: string;
    tags: string[];
    longDescription?: string;
    features?: string[];
    technologies?: string[];
    demoLink?: string;
    githubLink?: string;
  } | null>(null);

  const ProjectModal = ({ project, onClose }: { 
    project: NonNullable<typeof selectedProject>;
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative h-64 overflow-hidden rounded-t-xl">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
              <p className="text-gray-600">{project.longDescription || project.description}</p>
            </div>

            {project.features && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      title: "Dynamic Dashboard for Analytics",
      description: "A comprehensive analytics dashboard with reusable Angular components, real-time data visualization, and NgRx state management.",
      tags: ["Angular", "D3.js", "NgRx"],
      longDescription: "Built a sophisticated analytics dashboard that processes and visualizes complex data in real-time. The application features interactive charts, customizable widgets, and advanced filtering capabilities.",
      features: [
        "Real-time data visualization with D3.js",
        "Customizable dashboard layouts",
        "Advanced filtering and search capabilities",
        "Data export functionality",
        "User authentication and role-based access"
      ],
      technologies: ["Angular", "D3.js", "NgRx", "TypeScript", "RxJS", "Angular Material"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/yourusername/project"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized user experiences.",
      tags: ["React", "Node.js", "MongoDB"],
      longDescription: "Developed a full-stack e-commerce solution that handles thousands of daily transactions. The platform includes advanced features like real-time inventory tracking, secure payment processing, and AI-powered product recommendations.",
      features: [
        "Real-time inventory management",
        "Secure payment gateway integration",
        "Personalized product recommendations",
        "Order tracking system",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redis", "AWS"],
      demoLink: "https://demo-store.com",
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
      title: "Real-time Chat Application",
      description: "A scalable real-time chat application with features like group messaging, file sharing, and end-to-end encryption.",
      tags: ["Socket.IO", "React", "Node.js"],
      longDescription: "Built a modern chat application that supports real-time messaging, file sharing, and group conversations. The application includes features like message encryption, read receipts, and offline message queuing.",
      features: [
        "Real-time messaging with Socket.IO",
        "End-to-end encryption",
        "Group chat functionality",
        "File and media sharing",
        "Message read receipts",
        "Online/offline status",
        "Message history and search"
      ],
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "AWS S3", "WebRTC"],
      demoLink: "https://chat-demo.com",
      githubLink: "https://github.com/yourusername/chat-app"
    }
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-poppins">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;