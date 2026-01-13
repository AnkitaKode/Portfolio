
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

const projects = [
  {
    title: "StreamNet – Real-Time Chat & Video Platform",
    description:
      "Engineered a real-time communication platform supporting one-to-one and group video calls with low-latency streaming and secure session handling.",
    tech: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "WebRTC",
      "JWT",
      "Tailwind CSS",
      "Framer Motion"
    ],
    features: [
      "One-to-One & Group Video Calls",
      "Real-Time Chat Messaging",
      "Low-Latency WebRTC Streaming",
      "JWT-Based Authentication",
      "Responsive & Animated UI"
    ],
    link: "https://stream-net-delta.vercel.app/#/",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "ShareNet – Community Resource Sharing Platform",
    description:
      "Built a peer-to-peer resource sharing platform with credit based access control, handling geolocation-based listings and secure media uploads.",
    tech: [
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "JWT",
      "WebRTC",
      "Tailwind CSS",
      "REST APIs"
    ],
    features: [
      "Credit-Based Resource Sharing",
      "Geolocation-Based Listings",
      "Secure Media Uploads",
      "Real-Time Chat & Video Calling",
      "Optimized REST APIs & Caching"
    ],
    link: "https://sharex-net.vercel.app/",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "QuantexAI – AI-Powered Chrome Extension",
    description:
      "Developed an AI-powered Chrome extension for real-time web content summarization with structured note management and PDF export.",
    tech: [
      "JavaScript",
      "Chrome Extensions (Manifest V3)",
      "REST APIs",
      "jsPDF",
      "HTML",
      "CSS"
    ],
    features: [
      "Active-Tab Content Extraction",
      "AI-Powered Summarization",
      "Tag-Based Notes & Search",
      "Clipboard Copy & PDF Export",
      "Secure Local Storage (CSP Compliant)"
    ],
    link: "https://github.com/AnkitaKode/QuantexAI", 
    gradient: "from-green-500 to-teal-500"
  },
{
  title: "E-Healthcare Platform",
  description:
    "Integrated e-healthcare web platform providing affordable medical access through online consultations, appointments, health monitoring, and emergency services.",
  tech: ["Java", "Maven", "JSP", "XML", "MySQL",  "MVC Architecture"],
  features: [
    "Doctor Appointment Booking",
    "Online Doctor Consultation",
    "Medicine Access System",
    "BP & Heart Rate Monitoring",
    "Symptom-Based Health Screening",
    "Ambulance On-Call Service"
  ],
  link:"https://github.com/AnkitaKode/E-Healthcare"
  gradient: "from-red-500 to-pink-500"
}


];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 group shadow-2xl border border-gray-700 hover:border-indigo-500/50"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
                  >
                    <Github className="text-gray-400 hover:text-white transition-colors" size={18} />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
                  >
                    <ExternalLink className="text-gray-400 hover:text-white transition-colors" size={18} />
                  </motion.div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg">
                      <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
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
