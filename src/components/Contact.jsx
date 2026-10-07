import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_evwu9b7",
        "template_s58pwmd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "zLsuON-9MfJ29bF7-"
      );

      setStatus("Message sent successfully! ✓");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accentPurple font-semibold uppercase tracking-wider">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            {/* Email */}
            <div className="glass-card p-6 flex items-center gap-5">
              <FaEnvelope className="text-accentCyan text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:i.dhirendra63@gmail.com"
                  className="text-gray-200 hover:text-accentCyan transition"
                >
                  i.dhirendra63@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card p-6 flex items-center gap-5">
              <FaLinkedin className="text-accentPurple text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/dhirendra-00b988333/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-accentPurple transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-card p-6 flex items-center gap-5">
              <FaGithub className="text-white text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/dhirendra63"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-white transition"
                >
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* LeetCode */}
            <div className="glass-card p-6 flex items-center gap-5">
              <SiLeetcode className="text-accentCyan text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  LeetCode
                </p>

                <a
                  href="https://leetcode.com/u/dhirendra6392/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-accentCyan transition"
                >
                  LeetCode Profile
                </a>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-5"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder-gray-500 focus:border-accentPurple outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder-gray-500 focus:border-accentPurple outline-none transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder-gray-500 focus:border-accentPurple outline-none transition-all resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full py-3 rounded-lg bg-accentPurple text-white font-bold hover:bg-accentPurple/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-center text-sm text-gray-300">
                {status}
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;