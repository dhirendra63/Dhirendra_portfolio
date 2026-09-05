import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { data } from '../data/portfolioData';

const statsData = [
  { subject: 'DSA', A: 85, fullMark: 100 },
  { subject: 'Java', A: 80, fullMark: 100 },
  { subject: 'Python', A: 75, fullMark: 100 },
  { subject: 'Web Dev', A: 90, fullMark: 100 },
  { subject: 'SQL', A: 70, fullMark: 100 },
];

const CodingStats = () => {
  return (
    <section id="coding" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16"><span className="text-gradient">Coding Progress</span></h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="glass-card p-8 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={statsData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Radar
                name="Skill Level"
                dataKey="A"
                stroke="#a855f7"
                fill="#a855f7"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">LeetCode Profile</h3>
              <p className="text-gray-400 text-sm">Problem Solving & DSA</p>
            </div>
            <a href={data.leetcode} target="_blank" className="bg-accentCyan text-darkBg px-4 py-2 rounded-lg font-bold text-sm transition-transform hover:scale-105">
              View Profile
            </a>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
