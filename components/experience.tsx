"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  // Add other fields as needed
};

export function Experience() {
  // Experience
  const experiences: Experience[] = [
    {
      company: 'Luxury In Taste (LIT)',
      title: 'Cloud-AI / Internship',
      location: 'Hosur, TN, India',
      period: '28th May 2025 – 28th July 2025',
      description: 'Develop and implement cloud-based solutions using Microsoft Azure. Collaborate with developers to integrate new features using Python and React.js. Optimize cloud workflows and contribute to AI-driven projects.',
      achievements: [
        'Developed and implemented cloud-based solutions using Microsoft Azure.',
        'Collaborated with developers to integrate new features using Python and React.js.',
        'Optimized cloud workflows and contributed to AI-driven projects.'
      ],
      technologies: ['Microsoft Azure', 'Python', 'React.js', 'Cloud', 'AI']
    }
  ]

  // Education
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'IIIT Dharwad',
      period: 'Aug 2022 – May 2026',
      focus: 'Parallel Computing, Data Structures and Algorithms, Cloud, AI, ML, Software Development, Backend, Computer Vision',
      gpa: '6.37/10'
    }
  ]

  // Certifications & Awards
  const certifications = [
    { name: 'Internshala: Natural Language Processing', year: 'Jan 2025 - Present' },
    { name: 'Internshala: Generative AI', year: 'Jan 2025 - Present' },
    { name: 'Internshala: SQL For Data Analytics', year: 'Oct 2024 – Dec 2024' },
    { name: 'Internshala: Data Science', year: 'May 2024 – May 2024' },
    { name: 'Internshala: Machine Learning', year: 'Apr 2024 – May 2024' },
    { name: 'JEE Mains 2022 | 94.5 Percentile (Top 5.5%)', year: 'Jul 2022' }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in AI, ML, Cloud, and Computer Vision through hands-on experience, research, and academics.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-400"></div>
                  <div className="relative bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ml-12">
                    <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full border-4 border-white dark:border-dark-900"></div>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-primary-600 font-medium">
                        <Calendar className="w-4 h-4" />
                        <span className="text-primary-600 dark:text-primary-300">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Currently Focused on Academic Excellence
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I'm currently pursuing my B.Tech in Computer Science and Engineering, focusing on building a strong foundation 
                    in AI/ML through academic projects, research work, and certifications. I'm actively seeking opportunities 
                    to apply my skills in real-world scenarios.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    My research projects and academic achievements demonstrate my commitment to learning and innovation in the field of AI.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Education
          </h3>
          <div className="space-y-6 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {edu.degree}
                  </h4>
                  <span className="text-primary-600 dark:text-primary-300 font-medium">{edu.gpa} CGPA</span>
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.focus}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Awards & Certifications
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 