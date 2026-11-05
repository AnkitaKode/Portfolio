import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const projects = [
    {
      title: "AI Resume Analyzer – LLM + RAG Platform",
      description:
        "Full-stack AI platform that analyzes resumes, scores ATS compliance, and generates intelligent feedback with skill-gap queries using LLMs and Retrieval-Augmented Generation.",
      tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "pgvector", "OpenAI API", "REST APIs"],
      features: [
        "AI-Powered Resume Scoring",
        "RAG-Based Context Retrieval",
        "Vector Embeddings with pgvector",
        "Resume Upload & Text Extraction",
        "Chat Interface for Skill-Gap Queries",
        "ATS Feedback & Suggestions"
      ],
      link: "https://ai-resume-analyzer-rag.vercel.app"
    },
    {
      title: "HormoCare AI – PCOS Risk Assessment App",
      description:
        "Health platform analyzing menstrual, BMI, hormonal, and lifestyle data to provide real-time risk scores with personalized dietary and health recommendations.",
      tech: ["HTML5", "CSS3", "JavaScript", "PWA", "Local Storage", "Chart.js"],
      features: [
        "AI-Based Risk Scoring (0–100)",
        "Symptom Tracking (Cycle, Mood, Sleep)",
        "Diet Tracker & Weekly Meal Plans",
        "Personalized Health Recommendations",
        "Risk Visualization & Insights",
        "Client-Side Data Storage & Export"
      ],
      link: "https://hormo-care-ai-woad.vercel.app"
    },
    {
      title: "StreamNet – Real-Time Chat & Video Platform",
      description:
        "Engineered a real-time communication platform supporting 1-on-1 and group video calls with low-latency streaming and secure session handling.",
      tech: ["React.js", "Spring Boot", "MySQL", "WebRTC", "JWT", "Tailwind CSS"],
      features: [
        "1-on-1 & Group Video Calls",
        "Real-Time Chat Messaging",
        "Low-Latency WebRTC Streaming",
        "JWT-Based Authentication",
        "Fully Responsive Web Layout"
      ],
      link: "https://stream-net-delta.vercel.app"
    },
    {
      title: "ShareNet – Community Resource Sharing",
      description:
        "Peer-to-peer resource sharing platform with credit-based access control, geolocation-based listings, and real-time messaging.",
      tech: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "REST APIs"],
      features: [
        "Credit-Based Resource Sharing",
        "Geolocation-Based Listings",
        "Secure Media Uploads",
        "Real-Time Direct Chat",
        "Optimized Backend APIs"
      ],
      link: "https://sharex-net.vercel.app"
    },
    {
      title: "QuantexAI – AI Chrome Extension",
      description:
        "AI-powered Chrome extension for real-time web content summarization, structured note-taking, and PDF documentation exports.",
      tech: ["JavaScript", "Chrome Extensions API", "REST APIs", "jsPDF"],
      features: [
        "One-Click Content Extraction",
        "AI Fast Summarization",
        "Tag-Based Note Organizing",
        "PDF Document Export",
        "Encrypted Local Storage"
      ],
      github: "https://github.com/ankitakode/quantexai"
    },
    {
      title: "E-Healthcare Platform",
      description:
        "Enterprise healthcare web portal providing digital appointment booking, telemedicine consultations, and patient health monitoring.",
      tech: ["Java", "JSP", "Servlet", "MySQL", "MVC Architecture"],
      features: [
        "Doctor Appointment Booking",
        "Online Consultations",
        "Digital Prescription Records",
        "Health Vitals Tracking",
        "Emergency Care Directory"
      ],
      github: "https://github.com/AnkitaKode/E-Healthcare"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-5 py-2 mb-4">
            <FolderOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-medium text-xs sm:text-sm">Featured Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
              className="bg-gray-900/60 border border-white/10 hover:border-indigo-500/40 p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-5 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm text-gray-200 hover:text-white transition-colors"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/30 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm text-indigo-200 hover:text-white transition-colors"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-5">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-gray-400 text-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-md text-[11px] font-medium"
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
