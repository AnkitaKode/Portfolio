import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been received.');
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 sm:px-5 py-2 mb-4">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-medium text-xs sm:text-sm">Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, or sharing insights on modern engineering.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center space-x-4 p-4 sm:p-5 bg-gray-900/60 border border-white/10 rounded-2xl">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 sm:p-3.5 rounded-xl flex-shrink-0">
                <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base">Email</h3>
                <a href="mailto:ankita22501@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors text-xs sm:text-sm break-all">
                  ankita22501@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 sm:p-5 bg-gray-900/60 border border-white/10 rounded-2xl">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 sm:p-3.5 rounded-xl flex-shrink-0">
                <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Phone</h3>
                <a href="tel:+919142189942" className="text-gray-300 hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                  +91 9142189942
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 sm:p-5 bg-gray-900/60 border border-white/10 rounded-2xl">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-3 sm:p-3.5 rounded-xl flex-shrink-0">
                <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Location</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Kolkata, India</p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/ankitakode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 p-3.5 rounded-xl text-gray-300 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitakumari26/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 p-3.5 rounded-xl text-gray-300 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4 bg-gray-900/60 border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 text-white p-3 rounded-xl border border-white/10 focus:border-indigo-500 focus:outline-none text-base placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 text-white p-3 rounded-xl border border-white/10 focus:border-indigo-500 focus:outline-none text-base placeholder-gray-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">Subject</label>
              <input
                type="text"
                required
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-white/5 text-white p-3 rounded-xl border border-white/10 focus:border-indigo-500 focus:outline-none text-base placeholder-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">Your Message</label>
              <textarea
                rows="4"
                required
                placeholder="Let's build something amazing together..."
                className="w-full bg-white/5 text-white p-3 rounded-xl border border-white/10 focus:border-indigo-500 focus:outline-none text-base placeholder-gray-500 resize-none transition-colors"
              ></textarea>
            </div>

            {status && (
              <p className="text-emerald-400 text-sm font-medium">{status}</p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 cursor-pointer active:scale-98 text-base"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
