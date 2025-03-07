import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text glitch-effect" data-text="VAYUN">
              VAYUN
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-cyan-400 mb-8"
          >
            AI Engineer • Full Stack Developer • Tensor Club President
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/yourusername" className="hover-card p-3 rounded-full bg-gray-800">
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover-card p-3 rounded-full bg-gray-800">
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="mailto:your.email@example.com" className="hover-card p-3 rounded-full bg-gray-800">
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade" className="text-center mb-16">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8 neon-text">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate AI Engineer and Full Stack Developer with a deep interest in cutting-edge technology.
              As the President of the Tensor Club, I lead initiatives that bridge the gap between theoretical machine
              learning concepts and practical applications. My work spans across various domains, from developing
              sophisticated AI models to creating intuitive web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal animation="slide" delay={200} className="hover-card p-6 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">AI & ML</h3>
                <p className="text-gray-400">Specialized in deep learning, computer vision, and natural language processing</p>
              </ScrollReveal>
              <ScrollReveal animation="slide" delay={400} className="hover-card p-6 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Web Development</h3>
                <p className="text-gray-400">Full stack development with modern frameworks and technologies</p>
              </ScrollReveal>
              <ScrollReveal animation="slide" delay={600} className="hover-card p-6 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Leadership</h3>
                <p className="text-gray-400">Leading Tensor Club initiatives and fostering tech community growth</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;