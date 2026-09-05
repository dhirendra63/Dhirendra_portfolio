import { motion } from 'framer-motion';
import { data } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16"><span className="text-gradient">Learning Journey</span></h2>
      <div className="relative border-l-2 border-accentPurple/30 ml-4 md:ml-0">
        {/* Academic Timeline */}
        {data.education.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accentPurple shadow-[0_0_10px_rgba(168,85,247,1)]" />
            <span className="text-sm text-accentCyan font-mono">{edu.duration}</span>
            <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution}</p>
            {edu.percentage && <p className="text-sm text-gray-500 mt-1">Score: {edu.percentage}</p>}
          </motion.div>
        ))}

        {/* Project Experience */}
        <div className="mb-10 ml-8 relative">
          <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accentCyan shadow-[0_0_10px_rgba(34,211,238,1)]" />
          <span className="text-sm text-accentCyan font-mono">Development Phase</span>
          <h3 className="text-xl font-bold mt-1">Project-Based Experience</h3>
          <div className="mt-3 space-y-3">
            {data.projects.map((proj, i) => (
              <div key={i} className="glass-card p-3 text-sm flex justify-between items-center">
                <span>{proj.title}</span>
                <span className="text-xs text-gray-500">Full Cycle Dev</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
