"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiDownload,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/adamofficialdev",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-adam-abdillah-38850922b",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adamrealcuy/",
    icon: FiInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/adam.abdillah.9041",
    icon: FiFacebook,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a passionate Frontend Developer with a keen eye for design
                and a commitment to creating responsive, user-friendly web
                applications. With expertise in modern JavaScript frameworks and
                libraries, I specialize in building scalable and performant web
                solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                My journey in web development started with a curiosity for
                creating beautiful user interfaces, and has evolved into a deep
                understanding of frontend architecture and best practices.
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={"assets/cv/CV Muhammad Adam Abdillah.pdf"}
                  download
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Download CV
                  <FiDownload size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Technical Background</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li>🚀 Specialized in React and Next.js development</li>
                <li>💻 Experience with modern frontend tools and practices</li>
                <li>🎨 Strong foundation in UI/UX principles</li>
                <li>
                  📱 Expertise in responsive design and mobile-first approach
                </li>
                <li>⚡ Performance optimization and best practices</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
