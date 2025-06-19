import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, CheckCircle, Code, Github, Trophy, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "UPGRAD CAMPUS",
      description: "Earned a Full Stack Development Certification",
      highlights: [
        "Participated in 20+ collaborative coding sessions",
        "Enhanced teamwork and agile development skills",
        "Mastered full-stack technologies and best practices",
      ],
      icon: <Code className="w-6 h-6" />,
      link: "https://certificate.givemycertificate.com/c/9fc97b8d-3d68-40fd-a1ae-5a4cba35ea6d",
    },
    {
      title: "LEETCODE",
      description: "Solved 500+ LeetCode problems",
      highlights: [
        "Sharpened algorithmic problem-solving skills",
        "Boosted confidence in coding challenges",
      ],
      icon: <Cpu className="w-6 h-6" />,
      link: "https://leetcode.com/u/sd2672/",
    },
    {
      title: "GITHUB",
      description: "Contributed to open-source development",
      highlights: [
        "Enhanced front-end responsiveness of responsively-app",
        "Improved user experience in open-source projects",
      ],
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/saiTharunDusa",
    },
    {
      title: "ICPC",
      description: "Participated in ICPC Northern America Regionals",
      highlights: [
        "Competed in Rocky Mountain Regional Contest 2024",
        "Solved complex algorithmic problems under time pressure",
        "Strengthened teamwork and problem-solving skills",
      ],
      icon: <Trophy className="w-6 h-6" />,
      link: "https://drive.google.com/drive/u/2/folders/1OiWaaFS8mAkXRHGkB1JGDDwNsEStu4GS",
    },
    {
      title: "Google Prompt Essentials",
      description: "Achieved Google Prompt Essentials Certification",
      highlights: [
        "Mastered AI Agent Design and Multimodal Prompting",
        "Learned Prompt Chaining and Prompt Design techniques",
        "Developed skills in Prompt evaluation and iteration",
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      link: "https://www.credly.com/badges/600c919c-718c-4523-b2cb-2eb981e24cde/linked_in_profile",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden" id="achievements">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          backgroundImage:
            "linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(90deg, #4a5568 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-3xl font-bold mb-12 flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Award className="text-blue-400 w-8 h-8" />
          Achievements and Contributions
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="bg-gray-800 rounded-lg p-6 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="flex items-center mb-4">
                <span className="text-blue-400 mr-3">{achievement.icon}</span>
                <h3 className="text-2xl font-bold text-blue-400">{achievement.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{achievement.description}</p>

              <ul className="mb-6 space-y-2">
                {achievement.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                <span className="border-b border-blue-400 group-hover:border-blue-300">
                  Link
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;