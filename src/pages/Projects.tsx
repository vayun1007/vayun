import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Globe } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  category: 'AI' | 'ML' | 'Web';
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "OBJECT DETECTION SYSTEMS",
    description: "Developed real-time object detection systems using the YOLOv8 algorithm,tailored for specific use cases such as dog and gun detection.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1676299081847-5c7fe2c59049?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow"]
  },
  {
    title: "AI-Powered Fitness Form and Rep tracker ",
    description: "Developed system using OpenCV and machine learning models for real-time posture analysis Implemented automatic rep counting and form correction feedback to enhance workout efficiency",
    category: "ML",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800",
    technologies: ["PyTorch", "OpenCV", "MediaPipe"]
  },
  {
    title: "AI-Powered Stock Price Prediction",
    description: "Developed predictive models using ARIMA and LSTM to forecast stock prices with improved accuracy. Built an LSTM neural network for 30-day predictions, visualized with key highlights for better insights.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "AI", "Data Analysis"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'AI' | 'ML' | 'Web'>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categoryIcons = {
    AI: Brain,
    ML: Code,
    Web: Globe,
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 neon-text text-center">Projects</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'AI', 'ML', 'Web'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category 
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,255,255,0.5)]'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcons[project.category];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover-card group"
              >
                <div className="bg-gray-800/50 rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;