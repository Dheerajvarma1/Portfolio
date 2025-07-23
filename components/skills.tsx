"use client"

import { motion } from 'framer-motion'
import { Cpu, Brain, Code, Database, Eye, Layers, Cloud, BarChart2, GitBranch, Settings2, Globe, Smartphone, Monitor, Server, Zap, Shield, Palette, Box, MessageSquare, Sparkles, Link } from 'lucide-react'

const aiMlSkills = [
  { name: 'TensorFlow', icon: Cpu },
  { name: 'PyTorch', icon: Brain },
  { name: 'OpenCV', icon: Eye },
  { name: 'Scikit-learn', icon: BarChart2 },
  { name: 'Keras', icon: Layers },
  { name: 'Pandas', icon: Database },
  { name: 'NumPy', icon: Database },
  { name: 'MLflow', icon: Cloud },
  { name: 'Weights & Biases', icon: Settings2 },
  { name: 'Natural Language Processing (NLP)', icon: MessageSquare },
  { name: 'Generative AI (LLMs)', icon: Sparkles },
  { name: 'LangChain', icon: Link },
  { name: 'Docker', icon: Code },
  { name: 'Kubernetes', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'AWS', icon: Cloud },
  { name: 'Azure', icon: Cloud },
  { name: 'GCP', icon: Cloud },
]

const softwareDevSkills = [
  { name: 'React', icon: Globe },
  { name: 'Next.js', icon: Zap },
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'C++', icon: Code },
  { name: 'HTML/CSS', icon: Palette },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'REST APIs', icon: Box },
  { name: 'GitHub', icon: GitBranch },
  { name: 'VS Code', icon: Monitor },
  { name: 'Postman', icon: Box },
  { name: 'Webpack', icon: Settings2 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-100 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        {/* AI/ML Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-primary-500">AI/ML Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tools and frameworks I use to build intelligent solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
          {aiMlSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md transition-all duration-200 border border-gray-200 dark:border-dark-700 cursor-pointer group
                hover:bg-blue-100 dark:hover:bg-blue-900/30"
              transition={{ layout: { duration: 0.7 }, scale: { duration: 0.7 }, boxShadow: { duration: 0.7 } }}
            >
              <skill.icon className="w-10 h-10 text-primary-500 mb-4 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
              <span className="text-base font-medium text-gray-800 dark:text-gray-200 text-center transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Software Development Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-primary-500">Software Development Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use for full-stack development and software engineering.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {softwareDevSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md transition-all duration-200 border border-gray-200 dark:border-dark-700 cursor-pointer group
                hover:bg-green-100 dark:hover:bg-green-900/30"
              transition={{ layout: { duration: 0.7 }, scale: { duration: 0.7 }, boxShadow: { duration: 0.7 } }}
            >
              <skill.icon className="w-10 h-10 text-primary-500 mb-4 transition-colors duration-200 group-hover:text-green-600 dark:group-hover:text-green-300" />
              <span className="text-base font-medium text-gray-800 dark:text-gray-200 text-center transition-colors duration-200 group-hover:text-green-700 dark:group-hover:text-green-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 