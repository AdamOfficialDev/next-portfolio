"use client";
// components/layout/Header.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "#hero", sectionId: "hero" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Skills", href: "#skills", sectionId: "skills" },
  { name: "Experience", href: "#experience", sectionId: "experience" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Calculate which section is in view
      const sections = navigation.map((item) => item.sectionId);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Adjust this value based on your needs
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          M A A
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`transition-colors relative ${
                activeSection === item.sectionId
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {item.name}
              {activeSection === item.sectionId && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block transition-colors ${
                    activeSection === item.sectionId
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
