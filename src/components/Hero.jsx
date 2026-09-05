import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { data } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center px-6 pt-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-xl text-accentCyan font-medium mb-2">Hi, I'm {data.name}</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {data.role.split('|')[0]} <br />
                    <span className="text-gradient">{data.role.split('|')[1]}</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                    {data.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                    <a href="#projects" className="bg-accentPurple px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                        View Projects
                    </a>
                    <a href="/resume_dhirendra.pdf"
                        download="Dhirendra_Resume.pdf"
                        className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="flex gap-6 text-2xl">
                    <a href={data.linkedin} target="_blank" className="hover:text-accentPurple transition-colors"><FaLinkedin /></a>
                    <a href={data.leetcode} target="_blank" className="hover:text-accentCyan transition-colors"><SiLeetcode /></a>
                    <a href={`mailto:${data.email}`} className="hover:text-accentPurple transition-colors"><FaEnvelope /></a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:flex justify-center items-center"
            >
                <div className="w-full h-[400px] glass-card p-4 relative overflow-hidden group">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-sm font-mono text-accentCyan/80">
<code>{`
class Developer {
  constructor() {
    this.name = "Dhirendra";
    this.focus = ["AI", "ML", "WebDev"];
    this.status = "Aspiring Software Dev";
  }
  solveProblems() {
    while(true) {
      this.learn();
      this.code();
      this.optimize();
    }
  }
}
const me = new Developer();
me.solveProblems();
`}
</code>
</pre>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accentPurple/20 blur-3xl rounded-full" />
     <div className="absolute -top-10 -left-10 w-40 h-40 bg-accentCyan/20 blur-3xl rounded-full" />
            </div>
            </motion.div>
        </section>
    );
};

export default Hero;
