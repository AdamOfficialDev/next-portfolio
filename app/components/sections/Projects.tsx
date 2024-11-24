"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio V1",
    description:
      "First version of a personal portfolio with simple design and contact information.",
    image: "/assets/images/projects/1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "https://adamofficialdev.github.io/",
    category: "Frontend",
  },
  {
    title: "React Movie DB",
    description: "Movie database app built with React, fetching data from an API.",
    image: "/assets/images/projects/2.png",
    technologies: ["React", "Axios", "Bootstrap"],
    github: "#",
    demo: "https://adamreactmovie-adamofficialdev.vercel.app/",
    category: "Frontend",
  },
];

const categories = ["All"].concat(
  Array.from(new Set(projects.map((project) => project.category)))
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full" // Tambahkan flex flex-col dan h-full
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow"> {/* Tambahkan flex-grow */}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links - Pindah ke bawah dengan mt-auto */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FiExternalLink />
                      <span>Demo</span>
                    </a>
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