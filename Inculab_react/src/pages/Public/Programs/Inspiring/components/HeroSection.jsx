import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

// Variantes para animaciones suaves
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Efecto de respiración suave
const breathing = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.95, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const HeroSection = () => {
  return (
    <motion.div
      className="bg-primary-900 text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Fondo animado con círculos */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary-500 opacity-10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-500 opacity-10 blur-2xl"
          animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 pt-36 md:pt-44 pb-20 relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            variants={fadeUp}
            {...breathing}
          >
            Historias Inspiradoras Que Dan Forma al Futuro
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-10 text-gray-100"
            variants={fadeUp}
            transition={{ duration: 1.2, delay: 0.2 }}
            {...breathing}
          >
            Descubre los caminos de estudiantes, egresados y docentes que están marcando la diferencia en el mundo a través de la innovación, la pasión y la determinación.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 1.2, delay: 0.4 }}>
            <Link to="/inspiring/explore">
           <div className="flex justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 18px rgba(100, 100, 255, 0.4)",
                  textShadow: "0px 0px 6px rgba(255,255,255,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md flex items-center gap-2 transition duration-300"
              >
                Explorar Todas las Historias <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;