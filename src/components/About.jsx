import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Briefcase, Award, Code2, Brain, Users } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const achievements = [  
    {
      icon: GraduationCap,
      title: "Computer Science and Engineering",
      subtitle: "JIS College of Engineering, Kalyani (2027)",
      description: "Pursuing B.Tech with focus on software development, algorithms, and data structures."
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      subtitle: "Eduskill Foundation",
      description: "Java Full Stack Intern, contributing to full-stack development and enterprise solutions."
    },
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      subtitle: "Spring Boot & Modern Tech",
      description: "Proficient in Java, Spring Boot, MySQL, PostgreSQL, React.js and AI tools."
    }
  ];

  const stats = [
    { icon: Calendar, label: "Experience", value: "3+ Months" },
    { icon: Code2, label: "Projects", value: "15+ Done" },
    { icon: Users, label: "Clients", value: "100% Sat." },
    { icon: Award, label: "Tech Stack", value: "10+ Tools" }
  ];

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-5 py-2 mb-4">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-medium text-xs sm:text-sm">About Me</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A passionate Java Full Stack Developer dedicated to building innovative solutions that bridge 
            cutting-edge technology with exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Professional Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gray-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Briefcase className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" />
                Professional Journey
              </h3>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a dedicated <span className="text-indigo-400 font-semibold">Java Full Stack Developer</span> with experience at 
                  <span className="text-purple-400 font-semibold"> Eduskill Foundation</span> specializing in 
                  <span className="text-indigo-400 font-semibold"> Spring Framework</span> and 
                  <span className="text-purple-400 font-semibold"> MySQL</span>.
                </p>
                <p>
                  As a <span className="text-indigo-400 font-semibold">Computer Science and Engineering (2027)</span> student at JISCE Kalyani, 
                  I hold a strong foundation in Java development, algorithms, and data structures.
                </p>
                <p>
                  My expertise spans <span className="text-indigo-400 font-semibold">Full-Stack Development (Java)</span>, 
                  <span className="text-purple-400 font-semibold"> Spring Boot</span>, and 
                  <span className="text-emerald-400 font-semibold"> Databases & AI</span>.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center hover:border-indigo-500/40 transition-colors"
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-gray-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-start space-x-3.5 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                      {achievement.title}
                    </h4>
                    <p className="text-indigo-400 font-medium text-xs sm:text-sm mb-2">
                      {achievement.subtitle}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md shadow-indigo-500/20">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic mb-4 leading-relaxed">
              "Technology is not just about writing code—it's about creating possibilities, 
              solving real problems, and building the digital future that enhances human potential."
            </blockquote>
            <div className="flex items-center justify-center space-x-2 text-indigo-400 font-semibold text-xs sm:text-sm">
              <span className="w-6 h-0.5 bg-indigo-400"></span>
              <span>My Development Philosophy</span>
              <span className="w-6 h-0.5 bg-indigo-400"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
