"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Terminal, Wrench, Brain, Book, Cloud, Cpu, Lightbulb, type LucideIcon } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

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
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

interface SkillCategory {
  icon: React.ReactElement<LucideIcon>
  title: string
  skills?: string[]
  frontend?: string[]
  backend?: string[]
  platform?: string[]
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: SkillCategory[] = [
    {
      icon: <Code />,
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML/CSS", "SQL"],
    },
    {
      icon: <Terminal />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Brain />,
      title: "Web Development Libraries",
      frontend: ["React.js"],
      backend: ["Node.js", "Express.js"],
    },
    {
      icon: <Database />,
      title: "Databases",
      skills: ["MongoDB", "MongoDB Compass"],
    },
    {
      icon: <Cpu />,
      title: "Business Analytics using Python",
      skills: ["Numpy", "Pandas", "Matplotlib", "Statsmodels"],
      platform: ["Google Colab"],
    },
    {
      icon: <Cloud />,
      title: "Development Tools & Version Control",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      icon: <Book />,
      title: "Core CS Fundamentals",
      skills: ["OOPs", "Data Structures", "Algorithms", "DBMS", "Computer Networks", "Operating Systems"],
    },
    {
      icon: <Lightbulb />,
      title: "AI Prompting Essentials",
      skills: [
        "AI Agent Design",
        "Multimodal Prompting",
        "Prompt Chaining",
        "Prompt Design",
        "Prompt Evaluation and Iteration",
      ],
    },
    
  ]

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg shadow-lg p-6 transform-gpu"
            >
              <motion.div className="flex items-center gap-3 mb-4" whileHover={{ x: 10 }}>
                <motion.span
                  className="text-blue-600"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </motion.div>

              <div className="space-y-4">
                {category.frontend && (
                  <div>
                    <h4 className="font-semibold mt-2 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.frontend.map((skill) => (
                        <SkillTag key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}

                {category.backend && (
                  <div>
                    <h4 className="font-semibold mt-2 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.backend.map((skill) => (
                        <SkillTag key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}

                {category.skills && (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                )}

                {category.platform && category.platform.length > 0 && (
                  <div>
                    <h4 className="font-semibold mt-2 mb-2">Platform</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.platform.map((item) => (
                        <SkillTag key={item} skill={item} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface SkillTagProps {
  skill: string
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <motion.span
    variants={skillVariants}
    whileHover={{ scale: 1.05 }}
    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full transition-all duration-200 ease-in-out hover:bg-blue-200 hover:text-blue-900"
  >
    {skill}
  </motion.span>
)

export default Skills

