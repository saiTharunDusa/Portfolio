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

  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        SAI THARUN DUSA
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6"
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
            className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm sm:text-base"
          >
            {item.icon}
            {item.text}
          </motion.a>
        ))}
      </motion.div>

      <motion.p 
  variants={itemVariants}
  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-full break-words overflow-x-hidden px-2 sm:px-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
>

  After graduating with a Master's in Computer Science from Northern Arizona University with a strong technical foundation in full-stack development using the MERN stack, I gained professional experience as a Software Engineer Intern at IT4YOURBUSINESS and contributed to open-source projects like Responsively App. My portfolio showcases projects including RummyBuddy (a React Native app), DevTinder (a developer matchmaking platform), and Netflix-GPT (a movie recommendation tool). I've demonstrated competitive programming skills by solving 500+ LeetCode problems (top 6%) and achieving a top 20 position in the ICPC 2024 Rocky Mountain Regional competition. My technical expertise spans multiple programming languages, web technologies, mobile app development, and data analytics, complemented by a solid understanding of computer science fundamentals. I am currently seeking a full-time software development position where I can leverage my technical skills and problem-solving abilities to create innovative solutions.
  When I'm not coding, I enjoy solving algorithmic problems and expanding my technical knowledge. I'm passionate about learning new technologies and applying them to real-world problems. And made the RummyBuddy App. (Coming soon in Google Play Store).
</motion.p>

    </motion.div>
  </div>
</motion.header>

  );
};

export default Header;