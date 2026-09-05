import { motion } from "framer-motion";
import { data } from "../data/portfolioData";

const Certifications = () => {
  const handleDoubleClick = (cert) => {
    if (cert.name === "DSA with Java") {
      window.open("/DSA_with_Java.pdf", "_blank");
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-gradient">Certifications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {data.certifications.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            onDoubleClick={() => handleDoubleClick(cert)}
            className="glass-card p-6 flex items-center gap-4 cursor-pointer select-none"
          >
            <div className="w-12 h-12 rounded-full bg-accentPurple/20 flex items-center justify-center text-accentPurple font-bold">
              {i + 1}
            </div>

            <div>
              <h3 className="font-bold">{cert.name}</h3>

              <p className="text-sm text-gray-400">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;