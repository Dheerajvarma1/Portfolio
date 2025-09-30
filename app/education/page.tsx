"use client"
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'IIIT Dharwad',
    period: 'Aug 2022 – May 2026',
    focus: 'Parallel Computing, Data Structures and Algorithms, Cloud, AI, ML, Software Development, Backend, Computer Vision',
    gpa: '6.37/10'
  }
];

export default function Page() {
  return (
    <>
      <Navigation />
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Education
            </h2>
          </motion.div>
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
      </section>
      <Footer />
    </>
  );
}