import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Briefcase className="text-blue-600" />
          Professional Experience
          <a href='https://drive.google.com/file/d/18CVkt9PsOpaXTKxfn6CFn8-T0gk73_d8/view?usp=drive_link'>| Certificate</a>
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">IT4YOURBUSINESS</h3>
            <p className="text-gray-600">Jan 2023 – Jun 2023</p>
          </div>
          <h4 className="text-xl text-blue-600 mb-4">Software Engineer Intern</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Engineered responsive user interfaces using React.js and Tailwind CSS, implementing adaptive design techniques to enhance cross-device user experience and interface accessibility.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Developed comprehensive full-stack features leveraging modern web technologies, including dynamic product management with secure JWT authentication, React Router protection, and advanced state management using Redux Toolkit.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Implemented robust backend infrastructure by designing MongoDB schemas and integrating RESTful APIs, optimizing data retrieval, processing efficiency, and maintaining critical data integrity.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Constructed CI/CD pipelines with Jenkins, streamlining software development workflows and Containerized applications using Docker.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;