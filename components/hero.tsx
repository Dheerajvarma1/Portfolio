"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Brain, Cpu, Zap, Target } from 'lucide-react'
import Waves from './waves'

export function Hero() {
  const floatingIcons = [
    { icon: Brain, delay: 0, x: 20, y: -20 },
    { icon: Cpu, delay: 0.5, x: -30, y: 10 },
    { icon: Zap, delay: 1, x: 25, y: 30 },
    { icon: Target, delay: 1.5, x: -20, y: -30 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wave Background */}
      <Waves 
        lineColor="rgba(99, 102, 241, 0.15)"
        waveSpeedX={0.01}
        waveSpeedY={0.008}
        waveAmpX={25}
        waveAmpY={12}
        xGap={15}
        yGap={25}
        friction={0.92}
        tension={0.008}
        maxCursorMove={80}
        className="z-0"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 neural-bg opacity-20 z-10"></div>
      
      {/* Floating Neural Network Nodes */}
      <div className="absolute inset-0 overflow-hidden z-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.max(5, Math.min(95, (i * 5.5) % 100))}%`,
              top: `${Math.max(5, Math.min(95, (i * 4.8) % 100))}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden z-20">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-500/30"
            animate={{
              x: [0, item.x * 0.5, 0],
              y: [0, item.y * 0.5, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
            }}
            style={{
              left: `${Math.max(10, Math.min(85, 50 + (index * 15)))}%`,
              top: `${Math.max(15, Math.min(80, 35 + (index * 10)))}%`,
            }}
          >
            <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">AI/ML Specialist</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Transforming Ideas into
            </span>
            <br />
            <span className="gradient-text">Intelligent Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about leveraging cutting-edge artificial intelligence and machine learning 
            to solve complex problems and drive innovation across industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
            <a
              href="https://drive.google.com/file/d/1a3L34STuyBNhLEHmMU2NDLmQZlP_dCp2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '20+', label: 'Projects' },
              { number: '5+', label: 'Research Projects' },
              { number: '15+', label: 'Technologies' },
              { number: '24/7', label: 'AI Solutions' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-600 dark:text-gray-400"
        >
          <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
} 