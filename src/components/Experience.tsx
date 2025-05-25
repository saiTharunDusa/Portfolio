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
          <a 
            href="https://drive.google.com/file/d/18CVkt9PsOpaXTKxfn6CFn8-T0gk73_d8/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 underline ml-3"
          >
            View Certificate
          </a>
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">IT4YOURBUSINESS PRIVATE LIMITED</h3>
            <p className="text-gray-600">Jan 2023 – Jun 2023 · Hyderabad, India</p>
          </div>
          <h4 className="text-xl text-blue-600 mb-4">Software Engineer Intern</h4>
          
          <p className="text-gray-700 mb-6">
            Worked on full-stack product features in a fast-paced development team, contributing to both frontend and backend systems. Focused on building interactive UIs, automating internal tools, and implementing secure authentication mechanisms.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Developed dynamic, responsive user interfaces using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, integrated with backend APIs using custom hooks.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Implemented <strong>JWT-based authentication</strong> and protected routing with <strong>React Router</strong>, enabling secure role-based access.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Built backend API endpoints using <strong>FastAPI</strong> and <strong>MongoDB</strong> for CRUD operations and input validation.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Automated internal workflows using <strong>Python scripting</strong> and <strong>IPyWidgets</strong>, reducing manual effort for admin users.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Participated in agile sprints, team stand-ups, peer code reviews, and end-to-end testing cycles.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
