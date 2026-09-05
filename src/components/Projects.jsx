import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">

      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-gradient">Featured Projects</span>
      </h2>

      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col h-full"
          >

            {/* Project Header */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              {project.client && (
                <span className="text-xs bg-accentCyan/20 text-accentCyan px-2 py-1 rounded border border-accentCyan/30">
                  {project.client}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-accentPurple bg-accentPurple/10 px-2 py-1 rounded border border-accentPurple/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-8 flex-grow">
              {project.features.map((f, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accentCyan" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Project Links */}
            <div className="flex items-center gap-4 mt-auto">

              {/* GitHub Account */}
              <a
                href="https://github.com/dhirendra63"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-white/5 border border-white/10
                           text-gray-300
                           hover:text-white
                           hover:border-accentPurple/50
                           hover:bg-accentPurple/10
                           transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                {/* GitHub */}
              </a>

              {/* Live Demo */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-accentCyan/10
                             border border-accentCyan/20
                             text-accentCyan
                             hover:bg-accentCyan/20
                             transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;