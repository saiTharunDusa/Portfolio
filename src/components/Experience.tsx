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
      </motion.h2>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
      >
        {/* Current Experience */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Cloud Data Technology
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Feb 2025 – present · Wilmington, DE
          </p>
        </div>
  
        <h4 className="text-base sm:text-lg md:text-xl text-blue-600 mb-4">
          Front End Developer (Unpaid)
        </h4>
        
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          Building high-performance web applications with focus on responsive design, performance optimization, and seamless user experiences. Working with modern React ecosystem and GraphQL to deliver scalable solutions.
        </p>
  
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm sm:text-base">
          <li>
            Delivered responsive and reusable <strong>React components</strong> that improved user engagement by <strong>15%</strong> through better UI responsiveness and design accuracy aligned with Figma specifications.
          </li>
          <li>
            Reduced page load times by <strong>30%</strong> using <strong>lazy loading</strong> and <strong>code splitting</strong> techniques, enhancing overall application speed and scalability.
          </li>
          <li>
            Integrated <strong>GraphQL APIs</strong> to optimize data fetching workflows, decreasing API response handling time by <strong>25%</strong> and improving data-driven feature performance.
          </li>
        </ul>

        {/* Previous Experience */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              It4yourbusiness
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Aug 2021 – Jun 2023 · India
            </p>
          </div>
    
          <h4 className="text-base sm:text-lg md:text-xl text-blue-600 mb-4">
            Software Engineer
          </h4>
          
          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            Developed scalable frontend components and automated critical business workflows. Focused on creating reusable UI components with comprehensive testing and implementing Python automation solutions.
          </p>
    
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>
              Developed <strong>23 reusable UI components</strong> using <strong>React.js</strong>, <strong>Tailwind CSS</strong> and <strong>FastAPI Integration</strong> with comprehensive <strong>Jest testing</strong>, reducing development time by <strong>31%</strong> and production bugs by <strong>26%</strong>.
            </li>
            <li>
              Automated <strong>9 critical workflows</strong> using <strong>Python scripting</strong>, eliminating <strong>47 manual tasks</strong> and reducing processing time by <strong>73%</strong> to boost operational efficiency.
            </li>
          </ul>
        </div>

      </motion.div>
    </div>
  </section>
  
  );
};

export default Experience;