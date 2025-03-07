import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, BookOpen, Briefcase, Code } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">Resume</h1>
          <a
            href="#download"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 text-black rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
        </motion.div>

        <div className="space-y-12">
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover-card bg-gray-800/50 p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Computer Science, B.S.</h3>
                <p className="text-gray-400">University of Technology • 2020 - 2024</p>
                <p className="text-gray-300 mt-2">Specialization in Artificial Intelligence and Machine Learning</p>
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hover-card bg-gray-800/50 p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">AI Research Intern</h3>
                <p className="text-gray-400">Tech Innovation Labs • Summer 2023</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Developed and implemented novel deep learning architectures</li>
                  <li>Collaborated with senior researchers on computer vision projects</li>
                  <li>Published research paper at leading AI conference</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                <p className="text-gray-400">Web Solutions Inc. • 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Built and maintained large-scale web applications</li>
                  <li>Implemented AI-powered features using TensorFlow.js</li>
                  <li>Led team of junior developers on key projects</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hover-card bg-gray-800/50 p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'TypeScript', 'C++', 'Java'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-cyan-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TensorFlow', 'PyTorch', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-cyan-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Awards Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hover-card bg-gray-800/50 p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-cyan-400">Awards</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Best AI Project</h3>
                <p className="text-gray-400">National Tech Innovation Competition 2023</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Outstanding Research Award</h3>
                <p className="text-gray-400">University Research Symposium 2022</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;