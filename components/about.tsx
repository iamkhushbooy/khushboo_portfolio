"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Palette } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, MongoDB",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end application development",
    color: "from-purple-500 to-pink-500",
  },

]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
             "A passionate Full Stack Developer focused on building user-friendly and impactful digital experiences while continuously learning and improving."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glassmorphic p-1">
               <img
                  src="/image3.jpg"
                  alt="Khushboo Yadav"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-poppins">Crafting Digital Experiences</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm <span className="gradient-text font-semibold">Khushboo</span>, a full-stack developer based
                in India. I specialize in building exceptional digital experiences that are fast, accessible, and
                user-friendly.
              </p>
              <p>
                My journey in web development started with curiosity about how things work on the internet. Today, I've
                had the privilege of working on projects ranging from small business websites to large-scale
                applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glassmorphic rounded-full text-sm font-medium text-purple-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="glassmorphic p-6 rounded-2xl hover:bg-gray-800/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 font-poppins">{skill.title}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
