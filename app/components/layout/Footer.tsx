// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiArrowUp,
} from "react-icons/fi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/adamofficialdev",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/muhammad-adam-abdillah-38850922b",
    label: "LinkedIn",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/adam.abdillah.9041",
    label: "Twitter",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/adamrealcuy/",
    label: "Instagram",
  },
];

const navigationLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Muhammad Adam Abdillah
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Adam Abdillah. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
