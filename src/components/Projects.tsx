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
      title : "RummyBuddy",
      description : "RummyBuddy is a scorekeeping companion app developed in React Native, designed for Indian families and friend groups who play the physical version of 13-card Indian Rummy. Instead of digitizing the card game, the app replicates the real-world scoring experience: users manually play with cards offline, then enter their scores round-by-round in the app.",
      highlights : [
        "Created RummyBuddy, a React Native app for offline Rummy score tracking with 95%+ functionality using Redux Persist.",
        "Reduced Firestore usage by 80% by saving data only when the app goes to background or user logs out.",
        "Implemented dynamic round logic with dealer rotation, edit scores, enter scores and re-entry, ensuring 100% accurate game flow.",
       "Enabled user-specific data recovery with Firebase Auth, supporting secure state persistence post-uninstall."
      ],
      tech : ["React Native CLI", "Firebase Auth", "Firebase Firestore"],
      github : "https://github.com/saiTharunDusa/RummyBuddy",
      live: "https://play.google.com/store/apps/details?id=com.rummybuddy"
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
      title: "Food Delivery Web Application",
      description: "Frontend of Food Delivery Web Application.",
      highlights: [
        "Built a performant food delivery web app using React.js, Redux Toolkit, and lazy loading, with optimized builds via Parcel, enabling Hot Module Replacement (HMR), caching, and code minification for faster load times.",
        "Led test coverage and deployment by integrating React Testing Library, Jest, and Babel for end-to-end reliability, and deploying the platform on AWS Amplify for scalable, fault-tolerant delivery.",
      ],
      tech: ["React", "Tailwind CSS", "ReduxJS Toolkit", "React Testing Library", "Jest", "Babel", "AWS Amplify"],
      github: "https://github.com/saiTharunDusa/REACT",
      live: "https://main.d5znqyb40zfma.amplifyapp.com/",
    },
    {
      title: "E-commerce Application",
      description: "Bachelors final year project",
      highlights: [
        "Built a full-stack shopping cart platform with real-time product updates, secure user authentication (login, logout, reset) using Node.js, Express, and MongoDB, and an admin dashboard for inventory control with React.js and Redux.",
        "Integrated Braintree for payment processing, including card validation and transaction confirmation UI, delivering a secure and responsive e-commerce experience.",
      ],
      tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/tharundusa/Ecommerce-page",
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

