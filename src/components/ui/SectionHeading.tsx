import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  const text = children?.toString() || '';
  const words = text.split(' ');
  const firstWord = words[0];
  const restWords = words.slice(1).join(' ');

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
      </h2>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-gray-200/10 font-black uppercase tracking-widest">
        {children}
      </div>
    </motion.div>
  );
}; 