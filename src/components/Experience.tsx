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
  <section className="py-16 sm:py-20 bg-gray-50" id="experience">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Briefcase className="text-blue-600" />
        <span>Professional Experience</span>
        <a 
          href="https://drive.google.com/file/d/18CVkt9PsOpaXTKxfn6CFn8-T0gk73_d8/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline sm:ml-3"
        >
          View Certificate
        </a>
      </motion.h2>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            IT4YOURBUSINESS PRIVATE LIMITED
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Jan 2023 – Jun 2023 · Hyderabad, India
          </p>
        </div>
  
        <h4 className="text-base sm:text-lg md:text-xl text-blue-600 mb-4">
          Software Engineer Intern
        </h4>
        
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          Worked on full-stack product features in a fast-paced development team, contributing to both frontend and backend systems. Focused on building interactive UIs, automating internal tools, and implementing secure authentication mechanisms.
        </p>
  
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm sm:text-base">
  <li>
    Developed dynamic, responsive user interfaces using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, integrated with backend APIs using custom hooks.
  </li>
  <li>
    Implemented <strong>JWT-based authentication</strong> and protected routing with <strong>React Router</strong>, enabling secure role-based access.
  </li>
  <li>
    Built backend API endpoints using <strong>FastAPI</strong> and <strong>MongoDB</strong> for CRUD operations and input validation.
  </li>
  <li>
    Automated internal workflows using <strong>Python scripting</strong> and <strong>IPyWidgets</strong>, reducing manual effort for admin users.
  </li>
  <li>
    Participated in agile sprints, team stand-ups, peer code reviews, and end-to-end testing cycles.
  </li>
</ul>

      </motion.div>
    </div>
  </section>
  
  );
};

export default Experience;
