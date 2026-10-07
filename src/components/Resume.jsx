import { motion } from "framer-motion";
import { FaFileDownload, FaFileAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-accentPurple font-semibold uppercase tracking-wider">
            My Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Download My <span className="text-gradient">Resume</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get a complete overview of my education, technical skills,
            projects, and development experience.
          </p>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 text-center"
        >
          {/* Resume Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-accentPurple/10 border border-accentPurple/30 flex items-center justify-center">
              <FaFileAlt className="text-4xl text-accentPurple" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Dhirendra's Resume
          </h3>

          <p className="text-gray-400 mt-3 mb-8">
            B.Tech CSE (AI & ML) • Software Developer
          </p>

          {/* Download Button */}
          <a
            href="/Dhirendr_resume.pdf"
            download="Dhirendra_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-accentPurple to-accentCyan
                       text-white font-bold
                       hover:scale-105
                       transition-all duration-300
                       shadow-lg shadow-accentPurple/20"
          >
            <FaFileDownload />
            Download Resume
          </a>

          <p className="text-xs text-gray-500 mt-5">
            PDF Format
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;