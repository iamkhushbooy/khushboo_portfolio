"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/ecommerce.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://kyecommerce.vercel.app", 
    featured: true,
  },
  {
    id: 2,
    title: "Form Builder",
    description:
    "FormBuilder is a user-friendly tool for creating and sharing custom forms allowing creators to receive responses directly via email.",
    image: "/form.png",
    technologies: ["React.js","Next.js", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/iamkhushbooy/formbuilder",
    liveUrl: "https://kyformbuilder.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Tech_Bond",
    description:
     "Create personalized portfolios with skills, projects, and social links. Easy-to-use, clean, and responsive interface for sharing your profile.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Next.js", "Tailwind", "MongoDB"],
    githubUrl: "https://github.com/iamkhushbooy/tech_bond",
    liveUrl: "https://tech-bond.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Taskify",
    description:
     "I developed a to-do list app using HTML, Tailwind CSS, and JavaScript delivering a user-friendly experience to boost your productivity.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React.js", "Next.js", "Tailwind", "MongoDB"],
    githubUrl: "https://github.com/iamkhushbooy/taskify",
    liveUrl: "https://kytaskify.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Translator",
    description: "Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/iamkhushbooy/translater",
    liveUrl: "https://kykitranslate.netlify.app/",
    featured: false,
  }
 
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience in full-stack development.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold font-poppins mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Featured Projects
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glassmorphic rounded-2xl overflow-hidden group hover:bg-gray-800/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glassmorphic rounded-full hover:glow transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glassmorphic rounded-full hover:glow transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold font-poppins mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-bold font-poppins mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Other Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glassmorphic p-6 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4 className="text-lg font-bold font-poppins mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-500/20 text-gray-400 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glassmorphic px-8 py-4 rounded-full hover:bg-gray-800/30 transition-all duration-300 font-semibold"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
