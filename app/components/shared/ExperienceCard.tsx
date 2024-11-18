// components/shared/ExperienceCard.tsx
import { motion } from "framer-motion";
import { Experience } from "@/types";
import Card from "../ui/Card";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.position}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.company}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {experience.duration}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              • {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}
