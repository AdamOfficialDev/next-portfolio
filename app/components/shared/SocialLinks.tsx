// // components/shared/SocialLinks.tsx
// import { motion } from "framer-motion";
// import { SocialLink } from "@/types";
// import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// const socialLinks: SocialLink[] = [
//   {
//     platform: "GitHub",
//     url: "https://github.com/yourusername",
//     icon: FiGithub,
//   },
//   {
//     platform: "LinkedIn",
//     url: "https://linkedin.com/in/yourusername",
//     icon: FiLinkedin,
//   },
//   {
//     platform: "Twitter",
//     url: "https://twitter.com/yourusername",
//     icon: FiTwitter,
//   },
// ];

// export default function SocialLinks() {
//   return (
//     <div className="flex gap-4">
//       {socialLinks.map((social) => (
//         <motion.a
//           key={social.platform}
//           href={social.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ y: -3 }}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
//           aria-label={social.platform}
//         >
//           <social.icon size={20} />
//         </motion.a>
//       ))}
//     </div>
//   );
// }
