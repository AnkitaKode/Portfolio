import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: "AI Resume Analyzer – LLM + RAG Based Resume Intelligence Platform",
      description:
        "Built a full-stack AI platform that analyzes resumes, generates ATS feedback, and provides improvement suggestions using LLMs and Retrieval-Augmented Generation.",
      tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "OpenAI API", "pgvector", "REST APIs"],
      features: [
        "AI-Powered Resume Scoring",
        "RAG-Based Context Retrieval",
        "Vector Embeddings with pgvector",
        "Resume Upload & Text Extraction",
        "Chat Interface for Skill-Gap Queries",
        "ATS Feedback & Improvement Suggestions"
      ],
      link: "https://ai-resume-analyzer-rag.vercel.app/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "StreamNet – Real-Time Chat & Video Platform",
      description:
        "Engineered a real-time communication platform supporting one-to-one and group video calls with low-latency streaming and secure session handling.",
      tech: ["React.js", "Spring Boot", "MySQL", "WebRTC", "JWT", "Tailwind CSS"],
      features: [
        "One-to-One & Group Video Calls",
        "Real-Time Chat Messaging",
        "Low-Latency WebRTC Streaming",
        "JWT-Based Authentication",
        "Responsive UI"
      ],
      link: "https://stream-net-delta.vercel.app",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ShareNet – Community Resource Sharing Platform",
      description:
        "Built a peer-to-peer resource sharing platform with credit-based access control and geolocation-based listings.",
      tech: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "REST APIs"],
      features: [
        "Credit-Based Resource Sharing",
        "Geolocation-Based Listings",
        "Secure Media Uploads",
        "Real-Time Chat",
        "Optimized APIs"
      ],
      link: "https://sharex-net.vercel.app",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "QuantexAI – AI Chrome Extension",
      description:
        "AI-powered Chrome extension for real-time content summarization and structured note management.",
      tech: ["JavaScript", "Chrome Extensions", "REST APIs", "jsPDF"],
      features: [
        "Content Extraction",
        "AI Summarization",
        "Tag-Based Notes",
        "PDF Export",
        "Secure Storage"
      ],
      github: "https://github.com/ankitakode/quantexai",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "E-Healthcare Platform",
      description:
        "Web platform providing online consultation, appointment booking, and health monitoring.",
      tech: ["Java", "JSP", "MySQL", "MVC"],
      features: [
        "Appointment Booking",
        "Online Consultation",
        "Medicine Access",
        "Health Monitoring",
        "Emergency Services"
      ],
      github: "https://github.com/AnkitaKode/E-Healthcare",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-gray-700 hover:border-indigo-500/40"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mb-6">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-gray-300 text-sm">
                      • {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-xs"
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