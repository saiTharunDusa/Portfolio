import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        background: [
          "linear-gradient(to right, #1a202c, #2d3748)",
          "linear-gradient(to right, #1e3a8a, #1e40af)",
          "linear-gradient(to right, #1a202c, #2d3748)"
        ]
      }}
      transition={{ 
        duration: 3,
        background: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      className="py-20 text-white relative overflow-hidden"
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SAI THARUN DUSA
          </motion.h1>

          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: <Mail size={20} />, text: "dusasaitharun@gmail.com", href: "mailto:dusasaitharun@gmail.com" },
              { icon: <Phone size={20} />, text: "+1 480-560-1345", href: "tel:+14805601345" },
              { icon: <Linkedin size={20} />, text: "LinkedIn", href: "https://linkedin.com/in/saitharundusa/" },
              { icon: <Github size={20} />, text: "GitHub", href: "https://github.com/saiTharunDusa" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                {item.icon}
                {item.text}
              </motion.a>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300  leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I am a Computer Science graduate student at Northern Arizona University with a strong foundation in full-stack development and AI technologies. My six-month internship at IT4YOURBUSINESS has equipped me with hands-on experience in building responsive web applications using React.js, Node.js, and MongoDB. I have demonstrated expertise in DevOps practices, including Docker containerization and Jenkins CI/CD pipelines. As a Google-certified Prompt Engineer, I bring unique skills in AI agent development and multimodal prompt design. My personal projects, including a GPT-powered movie discovery tool and a developer matchmaking platform, showcase my ability to build scalable, high-performance applications with modern web technologies. With a blend of technical proficiency, project experience, and a consistent track record of academic excellence (3.56 GPA), I am eager to contribute my skills as a Software Development Engineer.
          </motion.p>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;