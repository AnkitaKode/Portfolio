
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Building } from 'lucide-react';
import AnimatedBrain from './AnimatedBrain';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-300 space-y-6"
          >
<p className="text-lg leading-relaxed">
  I'm Ankita Kumari, a passionate and dedicated Java Full-Stack Developer specializing in React-based front-end development based in India.
</p>
<p className="text-lg leading-relaxed">
  I specialize in building modern, scalable web applications using Java (Spring Boot) and React, combining technical precision with creative design. 
  I'm deeply passionate about crafting innovative, user-focused solutions that seamlessly blend functionality and aesthetics.
</p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <Calendar className="text-indigo-400 mb-3" size={24} />
                <h4 className="font-semibold text-white text-lg">Experience</h4>
                <p className="text-gray-300">Some months</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <Building className="text-indigo-400 mb-3" size={24} />
                <h4 className="font-semibold text-white text-lg">Company</h4>
                <p className="text-gray-300">Eduskill</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gray-800/50 rounded-r-lg">
                <h4 className="font-semibold text-white text-xl">Bachelor of Technology</h4>
                <p className="text-indigo-400 font-medium">Computer Science & Engineering</p>
                <p className="text-gray-400">JIS College of Engineering , Kalyani</p>
                <p className="text-gray-400 text-sm">2023 - 2027</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
