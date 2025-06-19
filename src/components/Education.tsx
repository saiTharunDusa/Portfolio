import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    x: -100,
    rotateY: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden" id="education">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a90e2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-3xl font-bold mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <GraduationCap className="text-blue-600" />
          </motion.span>
          Education
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-lg shadow-lg p-8 transform-gpu"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <motion.h3 
                className="text-2xl font-bold text-gray-800"
                whileHover={{ scale: 1.05 }}
              >
                Northern Arizona University
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                Sep 2023 – Dec 2024
              </motion.p>
            </div>
            <motion.p 
              className="text-xl text-blue-600 mb-2"
              whileHover={{ x: 10 }}
            >
              Master of Science in Computer Science
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4"
              whileHover={{ x: 10 }}
            >
              CGPA: 3.55 / 4.0
            </motion.p>
            <motion.div 
              className="bg-gray-50 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold mb-2">Related Course Work:</h4>
              <p className="text-gray-700">
                Data Structures and Algorithms, Python, Web Development, Large Scale Data Structures (OOPs),
                Open Source Software Dev, Python for Business Analytics (Numpy, Pandas, Matplotlib, Statsmodels)
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-lg shadow-lg p-8 transform-gpu"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <motion.h3 
                className="text-2xl font-bold text-gray-800"
                whileHover={{ scale: 1.05 }}
              >
                JB Institute of Engineering and Technology
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                Aug 2019 – May 2023
              </motion.p>
            </div>
            <motion.p 
              className="text-xl text-blue-600 mb-2"
              whileHover={{ x: 10 }}
            >
              Bachelor of Technology in Computer Science and Engineering
            </motion.p>
            <motion.p 
              className="text-gray-700"
              whileHover={{ x: 10 }}
            >
              CGPA: 7.6 / 10.0
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;