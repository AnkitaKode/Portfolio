import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Brain, Globe, Network, Cpu } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "Responsive UI/UX" },
      { name: "REST API Integration" }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-emerald-500 to-green-500",
    skills: [
      { name: "Java (Core Java & OOP)" },
      { name: "Spring Boot" },
      { name: "Spring Data JPA" },
      { name: "Hibernate & JDBC" },
      { name: "RESTful API Development" },
      { name: "JWT Authentication" },
      { name: "OAuth 2.0 / Google OAuth" },
      { name: "Exception Handling" },
      { name: "Multithreading" }
    ]
  },
  {
    title: "Database & Data Management",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "pgvector" },
      { name: "SQL Query Optimization" },
      { name: "Database Design" },
      { name: "Joins & Indexing" },
      { name: "Vector Databases" }
    ]
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Database Management Systems" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "SQL" }
    ]
  },
  {
    title: "Tools, Testing & DevOps",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Git / GitHub" },
      { name: "Maven" },
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "Postman" },
      { name: "JUnit" },
      { name: "OpenAPI / Swagger" },
      { name: "IntelliJ IDEA / VS Code" }
    ]
  },
  {
    title: "AI & Emerging Technologies",
    icon: Brain,
    gradient: "from-orange-500 to-rose-500",
    skills: [
      { name: "Generative AI" },
      { name: "Large Language Models (LLMs)" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Vector Embeddings" },
      { name: "Semantic Search" },
      { name: "Spring AI" },
      { name: "OpenAI APIs" },
      { name: "LLM Integration" },
      { name: "AI Agent Integration" }
    ]
  }
];

const additionalTags = [
  "SOLID Principles",
  "Design Patterns",
  "Oracle",
  "Coursera",
  "Udemy",
  "Google Cloud",
  "AWS",
  "Docker",
  "WebRTC",
  "Spring Security",
  "JWT",
  "OAuth 2.0",
  "Spring AI",
  "RAG",
  "LLM",
  "Vector Embeddings",
  "pgvector",
  "Postman",
  "JUnit",
  "Swagger",
  "Maven",
  "GitHub",
  "LLD",
  "HLD",
  "System Design",
  "Microservices",
  "React.js",
  "SQL Optimization"
];

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-5 py-2 mb-4">
            <Brain className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-medium text-xs sm:text-sm">Technical Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks powering performant, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.3 }}
              className="bg-gray-900/60 border border-white/10 hover:border-indigo-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3.5 mb-6">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${category.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <div className={`w-8 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-1.5`}></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <span className="text-gray-200 font-medium text-xs sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Additional Tools & Knowledge</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {additionalTags.map((tech) => (
              <span
                key={tech}
                className="bg-gray-800/80 hover:bg-gray-800 border border-gray-700/60 hover:border-indigo-500/50 text-gray-300 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
