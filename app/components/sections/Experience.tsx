"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company A",
    period: "2022 - Present",
    description: [
      "Led frontend development for multiple high-impact projects",
      "Implemented responsive designs and optimized performance",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Tech Company B",
    period: "2020 - 2022",
    description: [
      "Developed and maintained client-facing applications",
      "Collaborated with UX designers to implement new features",
      "Improved application performance and accessibility",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Redux"],
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-500 transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex md:items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <FiBriefcase />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
