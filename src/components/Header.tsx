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

I'm a passionate Software Engineer with a Master's in Computer Science from Northern Arizona University, currently crafting innovative solutions at Cloud Data Technology in Delaware. With over 3 years of experience spanning full-stack development, mobile applications, and performance optimization, I thrive at the intersection of cutting-edge technology and user-centered design.
My journey in software development has been marked by impactful contributions across diverse projects. I've developed 23+ reusable UI components that reduced development time by 31%, optimized applications to achieve 30% faster load times, and built scalable backend systems handling 500+ user profiles with sub-200ms response times. My work extends beyond traditional development—I've automated critical workflows that eliminated 47 manual tasks and contributed to open-source projects serving 150K+ active users.
What drives me is the opportunity to solve complex problems through elegant code. Whether I'm implementing real-time messaging systems that boost user engagement by 60%, developing mobile apps with 95% user retention, or competing in prestigious programming competitions like ICPC (top 20 regional finish), I bring a blend of technical expertise and creative problem-solving to every challenge.
I specialize in modern web technologies including React.js, Node.js, and Python, with extensive experience in mobile development using React Native and Firebase. My strong foundation in computer science fundamentals, combined with hands-on experience in data analytics and cloud technologies, allows me to build robust, scalable solutions that make a real difference.
When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that push the boundaries of what's possible with technology. I believe in continuous learning and am always excited to tackle new challenges that help me grow as a developer and create meaningful impact through software.
</motion.p>

    </motion.div>
  </div>
</motion.header>

  );
};

export default Header;