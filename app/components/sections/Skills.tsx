// components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5, level: 90, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: 85, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, level: 88, category: "Programming" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 82,
    category: "Programming",
  },
  { name: "React", icon: FaReact, level: 85, category: "Framework" },
  { name: "Next.js", icon: SiNextdotjs, level: 80, category: "Framework" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, category: "Styling" },
  { name: "Bootstrap", icon: FaBootstrap, level: 85, category: "Styling" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="text-3xl text-blue-500" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.category}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
