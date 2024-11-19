"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import { useEffect, useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface HeroProps {
  className?: string;
}

const socialLinks: SocialLink[] = [
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

export default function Hero({ className = "" }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  // Only render the motion component after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`h-screen flex items-center justify-center ${className}`.trim()}
    >
      <div className="max-w-4xl mx-auto px-4">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600">Muhammad Adam Abdillah</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate developer building amazing web experiences
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          // Initial render state without animation
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Muhammad Adam Abdillah</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate developer building amazing web experiences
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
