import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Users, Calendar, Trophy, Lightbulb, Target } from 'lucide-react';

const TensorContributions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "AI Workshop Series",
      description: "Organized and led weekly workshops covering advanced topics in artificial intelligence and machine learning.",
      icon: Brain,
      date: "Fall 2023"
    },
    {
      title: "Hackathon Success",
      description: "Led the Tensor Club team to first place in the National AI Hackathon, developing an innovative healthcare solution.",
      icon: Trophy,
      date: "Summer 2023"
    },
    {
      title: "Community Growth",
      description: "Expanded club membership by 200% through engaging events and collaborative projects.",
      icon: Users,
      date: "2023"
    }
  ];

  const initiatives = [
    {
      title: "AI Research Group",
      description: "Founded and mentored a research group focusing on cutting-edge AI applications.",
      icon: Lightbulb
    },
    {
      title: "Industry Partnerships",
      description: "Established partnerships with leading tech companies for student opportunities.",
      icon: Target
    },
    {
      title: "Tech Conferences",
      description: "Organized two major tech conferences featuring industry leaders and researchers.",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">Tensor Contributions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As President of the Tensor Club, I've led initiatives to foster innovation and learning
            in artificial intelligence and machine learning.
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.section
          ref={ref}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover-card bg-gray-800/50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <span className="text-sm text-cyan-300">{achievement.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Initiatives */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover-card bg-gray-800/50 p-6 rounded-xl text-center"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">{initiative.title}</h3>
                  <p className="text-gray-300">{initiative.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Impact Stats */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center bg-gray-800/50 p-12 rounded-xl hover-card"
        >
          <h2 className="text-3xl font-bold mb-12 text-cyan-400">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-white mb-2">90+</p>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">5+</p>
              <p className="text-gray-300">Events Organized</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">5+</p>
              <p className="text-gray-300">Industry Partners</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TensorContributions;