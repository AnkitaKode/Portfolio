import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Brain, Code, Rocket, Star } from 'lucide-react';

export default function Hero() {
  const specializations = [
    { 
      text: "Software Development", 
      colors: "from-purple-400 to-pink-500", 
      description: "Core Java • Data Structures & Algorithms • OOPs Principles"
    },
    { 
      text: "Java Full-Stack Development", 
      colors: "from-blue-400 to-indigo-500", 
      description: "Java • Spring Boot • REST APIs • Microservices"
    },
    { 
      text: "AI Application Development", 
      colors: "from-indigo-400 to-purple-400", 
      description: "LLMs • RAG Architectures • Vector DBs • AI Integration"
    }
  ];

  const stats = [
    { icon: Code, number: "3+", label: "Months Experience", color: "text-blue-400", bgColor: "from-blue-500/10 to-blue-600/5" },
    { icon: Rocket, number: "15+", label: "Projects Delivered", color: "text-emerald-400", bgColor: "from-emerald-500/10 to-emerald-600/5" },
    { icon: Brain, number: "10+", label: "Technologies", color: "text-purple-400", bgColor: "from-purple-500/10 to-purple-600/5" },
    { icon: Star, number: "100%", label: "Client Satisfaction", color: "text-pink-400", bgColor: "from-pink-500/10 to-pink-600/5" }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] break-word-safe">
              <span className="block text-white mb-2 sm:mb-4">
                Hello, I'm
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-400 bg-clip-text text-transparent pb-1">
                Ankita Kumari
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-2">
              Transforming ideas into digital reality through robust software engineering and modern AI.
            </p>
          </div>

          {/* Specialization Cards */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {specializations.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.3 }}
                className="group bg-gray-900/60 hover:bg-gray-900/80 border border-white/10 hover:border-indigo-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-200 text-left"
              >
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-1 sm:mb-2 bg-gradient-to-r ${item.colors} bg-clip-text text-transparent`}>
                  {item.text}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto my-8 sm:my-14">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                className={`bg-gradient-to-br ${stat.bgColor} bg-gray-900/40 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-indigo-400/40 transition-all duration-200`}
              >
                <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 font-mono">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="https://drive.google.com/file/d/1PgYHTj5xuEiYKtc3fV0ewyNGpbLgwHRR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95"
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 border-2 border-indigo-400/40 hover:border-indigo-400 text-indigo-200 hover:text-white px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 active:scale-95"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            {[
              { icon: Github, href: "https://github.com/AnkitaKode", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ankitakumari26/", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="p-3.5 sm:p-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl sm:rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-200 active:scale-95"
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
