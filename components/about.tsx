"use client"

import { motion } from 'framer-motion'
import { Brain, Code, Database, TrendingUp, Users, Award } from 'lucide-react'
import { useState } from 'react'

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  const expertise = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural networks, CNN, RNN, Transformers, and advanced architectures',
    },
    {
      icon: Code,
      title: 'Machine Learning',
      description: 'Supervised/Unsupervised learning, model optimization, and deployment',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Data preprocessing, feature engineering, and statistical analysis',
    },
    {
      icon: TrendingUp,
      title: 'AI Solutions',
      description: 'End-to-end AI product development and system integration',
    },
    {
      icon: Users,
      title: 'Research & Development',
      description: 'Academic research, innovative AI applications, and cutting-edge projects',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Pioneering new AI applications and cutting-edge research',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science student specializing in AI/ML with expertise in developing intelligent solutions 
            through academic research and innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Personal Info */}
          <div className="flex justify-center mb-8 lg:mb-0">
            <div
              className="relative w-full max-w-md h-auto"
              style={{ aspectRatio: '1/1' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/mypic.jpg"
                alt="Profile picture"
                className={`absolute inset-0 w-full h-full object-cover shadow-xl transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                style={{ zIndex: 1 }}
              />
              <img
                src="/mypic2.jpg"
                alt="Profile picture hover"
                className={`absolute inset-0 w-full h-full object-cover shadow-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Transforming Ideas into Intelligent Solutions
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <p>
                As a Computer Science student passionate about artificial intelligence and machine learning, 
                I specialize in developing cutting-edge solutions that solve real-world problems. 
                My expertise spans from deep learning and computer vision to natural language 
                processing and predictive analytics.
              </p>
              <p>
                Through academic research and hands-on projects, I've worked on AI solutions across various domains including 
                healthcare, agriculture, and education. My approach combines theoretical knowledge with practical implementation 
                to create impactful, scalable solutions.
              </p>
              <p>
                Passionate about staying at the forefront of AI innovation, I continuously 
                research and implement the latest advancements in machine learning, ensuring 
                my solutions are always state-of-the-art.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Research Projects', value: '5+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Certifications', value: '6+' },
                { label: 'Academic Focus', value: 'AI/ML' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-lg"
                >
                  <div className="text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gradient-to-br dark:from-primary-500 dark:to-neural-500 rounded-2xl p-8 text-gray-800 dark:text-white border border-gray-200 dark:border-transparent">
              <div className="absolute inset-0 bg-transparent dark:bg-black/20 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Core Philosophy</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Innovation through intelligent automation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scalable and maintainable solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold ml-4 text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 