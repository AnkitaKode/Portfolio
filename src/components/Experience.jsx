import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      title: "Java Full Stack Developer Intern",
      company: "Eduskill Foundation",
      period: "Jan 2026 - Mar 2026",

      description:
        "Developed and deployed a full-stack web application using Java Spring Boot and React, improving system efficiency and implementing secure role-based access control for user management.",
      tech: ["Java", "Spring Boot", "React.js", "SQL Server", "REST APIs", "JWT"],

      achievements: [
        "Built scalable full-stack modules using Spring Boot and React, improving API response time by ~30%.",
        "Designed and implemented RESTful APIs with JWT-based authentication and role-based authorization.",
        "Developed dynamic dashboards enabling real-time data updates and improved user interaction.",
        "Collaborated using Git and GitHub for version control, code reviews, and streamlined deployment workflows."
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border-l-4 border-indigo-600 shadow-2xl"
            >

              {/* Top Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-indigo-400 text-lg font-semibold">
                    {exp.company}
                  </p>
                </div>

                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                {exp.achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 bg-gray-800/50 p-4 rounded-lg"
                  >
                    <Award className="text-indigo-400 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
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