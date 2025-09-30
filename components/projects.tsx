"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Code, 
  Database, 
  Eye, 
  MessageSquare, 
  Cpu,
  BarChart2,
  Globe,
  Smartphone,
  Bot,
  Target,
  Lightbulb,
  Search,
  Users,
  Shield,
  Github,
  ExternalLink
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';

const filters = [
  { id: 'all', name: 'All Projects' },
  { id: 'computer-vision', name: 'Computer Vision' },
  { id: 'nlp-rag', name: 'NLP/RAG' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile' }
]

const projects = [
  // Computer Vision Projects
  {
    title: "PaddyDoctorAPP",
    description: "AI-powered paddy disease classifier using deep learning with over 16,000 high-resolution images covering 14 classes. Achieved 99.6% training accuracy and 97.45% validation accuracy using Xception architecture.",
    features: [
      "Deep learning disease classification",
      "99.6% training accuracy with Xception",
      "Real-time disease predictions",
      "AWS EC2 deployment with web interface"
    ],
    technologies: ["Python", "TensorFlow", "Xception", "AWS EC2", "Web App", "NVIDIA Jetson Nano"],
    category: "computer-vision",
    icon: Eye,
    github: "https://github.com/Dheerajvarma1/PaddyDoctorAPP",
    demo: "https://www.youtube.com/watch?v=oF2EVdqZTg4"
  },
  {
    title: "FootballVision",
    description: "Advanced computer vision system using YOLO for real-time detection and classification of players, referees, and ball from live football footage with tactical mapping capabilities.",
    features: [
      "YOLO-based object detection",
      "Real-time player tracking",
      "Live tactical map generation",
      "Strategic formation analysis"
    ],
    technologies: ["Python", "YOLO", "OpenCV", "Computer Vision", "Real-time Processing"],
    category: "computer-vision",
    icon: Target,
    github: "https://github.com/Dheerajvarma1/FootballVision",
    demo: "https://www.youtube.com/watch?v=7vjQsNwXDew&feature=youtu.be"
  },
  {
    title: "GameCV",
    description: "Innovative OpenCV-based system that captures real-time body movements and translates them into game actions for hands-free gameplay with customizable gesture recognition.",
    features: [
      "Real-time body movement detection",
      "Action mapping to game controls",
      "Customizable gesture recognition",
      "OpenCV-powered processing"
    ],
    technologies: ["Python", "OpenCV", "Computer Vision", "Real-time Processing", "Game Integration"],
    category: "computer-vision",
    icon: Bot,
    github: "https://github.com/Dheerajvarma1/GameCV"
  },

  // NLP/RAG Projects
  {
    title: "WebRAG",
    description: "Retrieval-Augmented Generation system using LLMs to answer queries by scraping relevant web content. Built with Flask backend, Streamlit frontend, and LangChain for conversational memory.",
    features: [
      "Web content scraping and processing",
      "LLM-powered response generation",
      "Flask backend with Streamlit UI",
      "Conversational memory with LangChain"
    ],
    technologies: ["Python", "Flask", "Streamlit", "LangChain", "LLM API", "RAG System"],
    category: "nlp-rag",
    icon: Search,
    github: "https://github.com/Dheerajvarma1/WebRAG",
    demo: "https://www.youtube.com/watch?v=5qGcX6EHNNU"
  },
  {
    title: "NLP-TeachBot",
    description: "EduGuide AI - Intelligent lecture assistance system powered by NLP and AI to enhance teaching experience with real-time insights, automated summarization, and student engagement analysis.",
    features: [
      "Real-time lecture insights",
      "Automated content summarization",
      "Keyword extraction and enhancement",
      "Student engagement analysis"
    ],
    technologies: ["Python", "NLP", "AI", "Natural Language Processing", "Educational Technology"],
    category: "nlp-rag",
    icon: Brain,
    github: "https://github.com/Dheerajvarma1/NLP-TeachBot"
  },

  // Web Development Projects
  {
    title: "My Portfolio",
    description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS featuring animated gradients, smooth transitions, and dynamic project showcases with interactive elements.",
    features: [
      "Next.js with TypeScript",
      "Responsive design with Tailwind CSS",
      "Animated gradient borders",
      "Dynamic project filtering"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "CSS Animations"],
    category: "web",
    icon: Globe
  },

  // Mobile Projects
  {
    title: "PaddyDoctorAPP (Mobile)",
    description: "Mobile implementation of the AI-powered paddy disease detection system, providing farmers with on-field disease identification capabilities through smartphone cameras.",
    features: [
      "Mobile-optimized UI/UX",
      "Camera integration for image capture",
      "Offline prediction capabilities",
      "Farmer-friendly interface"
    ],
    technologies: ["Mobile Development", "AI Integration", "Camera API", "Offline ML", "User Experience"],
    category: "mobile",
    icon: Smartphone,
    github: "https://github.com/Dheerajvarma1/PaddyDoctorAPP",
    demo: "https://www.youtube.com/watch?v=oF2EVdqZTg4"
  }
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])

  // Gradient border effect
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const mouseX = e.clientX - rect.left - rect.width / 2
      const mouseY = e.clientY - rect.top - rect.height / 2
      
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
      angle = (angle + 360) % 360
      
      card.style.setProperty('--start', (angle + 60).toString())
    }

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as EventListener)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as EventListener);
      });
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative AI/ML solutions that demonstrate technical expertise 
            and real-world problem-solving capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              suppressHydrationWarning
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="project-card-content">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-neural-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/80" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                      {filters.find(f => f.id === project.category)?.name || 'Project'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Let's collaborate on your next innovative project. I'm always excited to work on 
            challenging problems that push the boundaries of technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
            onClick={() => {
              if (pathname !== '/') {
                router.push('/');
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              } else {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 