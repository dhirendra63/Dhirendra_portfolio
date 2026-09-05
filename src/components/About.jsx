import { motion } from 'framer-motion';
import { data } from '../data/portfolioData';

const About = () => {
  const infoCards = [
    { label: "Education", value: "B.Tech CSE (AI & ML)" },
    { label: "Problem Solving", value: "DSA with Java" },
    { label: "Software Dev", value: "Full Stack" },
    { label: "AI & ML", value: "Specialization" },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16"><span className="text-gradient">About Me</span></h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 text-gray-400 leading-relaxed"
        >
          <p className="text-lg">
            I am currently pursuing my <span className="text-white font-medium">{data.education[0].degree}</span> at <span className="text-white font-medium">{data.education[0].institution}</span>. 
            My academic foundation is strengthened by a Diploma in Computer Science & Engineering from {data.education[1].institution}, where I achieved {data.education[1].percentage}.
          </p>
          <p>
            I am passionate about building scalable software and solving complex algorithmic problems. My focus lies in bridging the gap between AI/ML concepts and practical software implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {infoCards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{card.label}</p>
              <p className="font-bold text-accentCyan">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
