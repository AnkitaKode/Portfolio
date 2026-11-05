import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const experiences = [
    {
      title: "Java Full Stack Developer Intern",
      company: "Eduskill Foundation",
      period: "Jan 2026 - Mar 2026",
      description:
        "Developed and deployed full-stack modules using Java Spring Boot and React, enhancing throughput, API response times, and implementing secure role-based access control (RBAC).",
      tech: ["Java", "Spring Boot", "React.js", "SQL Server", "REST APIs", "JWT", "Git"],
      achievements: [
        "Built scalable full-stack modules with Spring Boot & React, optimizing API response times by ~30%.",
        "Designed and implemented RESTful endpoints with JWT authentication and role-based authorization.",
        "Built real-time interactive dashboard components for live status updates and reporting.",
        "Collaborated using Git and GitHub workflows, code reviews, and automated deployment pipelines."
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-5 py-2 mb-4">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-medium text-xs sm:text-sm">Career Journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-900/60 border border-white/10 hover:border-indigo-500/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-l-4 border-l-indigo-500 transition-all duration-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-indigo-400 text-sm sm:text-base font-semibold">
                    {exp.company}
                  </p>
                </div>

                <span className="self-start sm:self-auto bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
                {exp.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 bg-white/5 border border-white/5 p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm text-gray-300"
                  >
                    <Award className="text-indigo-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
