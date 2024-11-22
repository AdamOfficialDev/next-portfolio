// app/page.tsx
"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./components/ui/Particles";
import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ParticlesBackground />

      <main className="relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.section variants={fadeInUp}>
            <Hero />
          </motion.section>

          <motion.section
            variants={fadeInUp}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <About />
          </motion.section>

          <motion.section variants={fadeInUp}>
            <Skills />
          </motion.section>

          <motion.section
            variants={fadeInUp}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <Experience />
          </motion.section>

          <motion.section variants={fadeInUp}>
            <Projects />
          </motion.section>

          <motion.section
            variants={fadeInUp}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <Contact />
          </motion.section>
        </motion.div>
      </main>

      <ScrollToTopButton />
    </>
  );
}
