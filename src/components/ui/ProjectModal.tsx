import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tag, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  features: string[];
  technologies: string[];
  demoLink: string;
  githubLink: string;
  duration?: string;
  role?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Add keyboard event listener for Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] shadow-xl relative overflow-y-auto scrollbar-hide"
      >
        {/* Hero Section */}
        <div className="relative h-56">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Close Button - Moved inside hero section */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white z-10 cursor-pointer"
          >
            <X className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </motion.button>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-600" />
                Overview
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Project Details
              </h3>
              <div className="space-y-2 text-gray-600 text-sm">
                {project.role && (
                  <p><span className="font-medium">Role:</span> {project.role}</p>
                )}
                {project.duration && (
                  <p><span className="font-medium">Duration:</span> {project.duration}</p>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};