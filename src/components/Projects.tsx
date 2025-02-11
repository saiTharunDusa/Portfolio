import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } },
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Netflix-GPT",
      description: "GPT-powered movie discovery tool with personalized search-based suggestions.",
      highlights: [
        "Enhanced user engagement using Tailwind CSS & accessibility",
        "Integrated auto-playing trailers and multilingual search bar",
        "Achieved 100 SEO scores in Lighthouse",
        "Improved performance score from 83 to 90+ using Lazy loading",
      ],
      tech: ["React", "Tailwind CSS", "GPT", "AWS Amplify"],
      github: "https://github.com/saiTharunDusa/netflix-gpt",
      live: "https://main.d2atfy7ms5mok0.amplifyapp.com/browse",
    },
    {
      title: "DevTinder",
      description: "Developer matchmaking platform using MERN stack for freelancers and open-source contributors.",
      highlights: [
        "High-performance user feed API using SET data structure",
        "Real-time communication with WebSocket",
        "Integrated Amazon SES for notifications",
        "RESTful APIs with JWT authentication",
      ],
      tech: ["MERN Stack", "WebSocket", "AWS EC2", "NGINX"],
      github: "https://github.com/saiTharunDusa/devTinder-Frontend",
      live: "https://www.devtinder.co/login",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden" id="projects">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="bg-gray-800 rounded-lg p-6 relative group"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <ul className="list-disc list-inside text-gray-400 mb-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  <Github size={20} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

