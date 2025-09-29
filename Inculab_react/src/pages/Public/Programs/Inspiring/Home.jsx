import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturedStory from './components/FeaturedStory';
import StoryGrid from './components/StoryGrid';
import "../Inspiring/styles/inspiring.css";


// Animación básica de aparición suave
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay,
  },
  viewport: { once: true },
});

// Animación de título con hover dinámico
const motionTitle = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.1, type: "spring", stiffness: 80 },
  whileHover: { scale: 1.05, rotate: [-1, 1, 0], transition: { yoyo: Infinity } },
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col gap-24"
      initial="initial"
      animate="animate"
    >
      {/* Hero animado con parallax suave */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>

      {/* Featured Story con animación de fondo y blur */}
      <motion.section
        className="container mx-auto px-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -60, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-primary-900 mb-8 tracking-tight"
          {...motionTitle}
        >
          Historia destacada
        </motion.h2>
        <FeaturedStory />
      </motion.section>

      {/* Story Grid con padding inferior para separar del footer */}
      <motion.section
        className="container mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-secondary-500 mb-8 tracking-tight"
          {...motionTitle}
        >
          Historias de éxito
        </motion.h2>
        <StoryGrid platformFilter="all" limit={6} />
      </motion.section>
    </motion.div>
  );
};

export default Home;
