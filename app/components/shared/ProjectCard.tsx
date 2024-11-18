// components/shared/ProjectCard.tsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/types";
import Card from "../ui/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
              aria-label="View source on GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
              aria-label="View live site"
            >
              <FiExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </Card>
  );
}
