import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { data } from '../data/portfolioData';


const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-center px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gradient mb-2">{data.name}</h3>
        <p className="text-gray-500 text-sm mb-6">Software Developer | CSE (AI & ML)</p>
        <div className="flex justify-center gap-6 text-xl mb-8">
          <a href={data.linkedin} target="_blank" className="hover:text-accentPurple transition-colors"><FaLinkedin /></a>
          <a href={data.leetcode} target="_blank" className="hover:text-accentCyan transition-colors"><SiLeetcode /></a>
          <a href={`mailto:${data.email}`} className="hover:text-accentPurple transition-colors"><FaEnvelope /></a>
        </div>
        <p className="text-gray-600 text-xs">© 2026 {data.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
