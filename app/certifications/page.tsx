import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'Internshala: Natural Language Processing', year: 'Jan 2025 - Present' },
  { name: 'Internshala: Generative AI', year: 'Jan 2025 - Present' },
  { name: 'Internshala: SQL For Data Analytics', year: 'Oct 2024 – Dec 2024' },
  { name: 'Internshala: Data Science', year: 'May 2024 – May 2024' },
  { name: 'Internshala: Machine Learning', year: 'Apr 2024 – May 2024' },
  { name: 'JEE Mains 2022 | 94.5 Percentile (Top 5.5%)', year: 'Jul 2022' }
];

export default function CertificationsPage() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Awards & Certifications
          </h2>
        </motion.div>
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
    </section>
  );
}