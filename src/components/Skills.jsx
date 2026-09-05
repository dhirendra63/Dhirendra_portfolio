import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLayerGroup, FaTools, FaBrain, FaTerminal } from 'react-icons/fa';
import { data } from '../data/portfolioData';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-accentCyan text-xl" />
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-white/10 rounded-lg text-sm border border-white/5 hover:border-accentPurple transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    { title: "Programming Languages", skills: data.skills.languages, icon: FaCode },
    { title: "Frontend", skills: data.skills.frontend, icon: FaLayerGroup },
    { title: "Backend", skills: data.skills.backend, icon: FaTerminal },
    { title: "Database", skills: data.skills.database, icon: FaDatabase },
    { title: "Core Concepts", skills: data.skills.concepts, icon: FaBrain },
    { title: "Tools", skills: data.skills.tools, icon: FaTools },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16"><span className="text-gradient">Technical Skills</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <SkillCategory key={i} {...group} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
