import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PlatformFilter from './components/PlatformFilter';
import StoryCard from './components/StoryCard';
import axios from 'axios';
import "../Inspiring/styles/inspiring.css";


const motionTitle = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.1, type: "spring", stiffness: 80 },
  whileHover: { scale: 1.05, rotate: [-1, 1, 0], transition: { yoyo: Infinity } },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    ease: "easeOut",
    delay,
  },
  viewport: { once: true },
});

const Explore = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [casos, setCasos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const casosPerPage = 9;

  useEffect(() => {
    async function fetchCasos() {
      try {
        const host = window.location.hostname;
        const api = `https://incuvalab-emergentes-1.onrender.com`;
        const response = await axios.post(`${api}/casos/list`, { query: {} });
        const list = response?.data?.list || [];
        setCasos(list);
      } catch (error) {
        console.error('Error fetching casos:', error);
      }
    }

    fetchCasos();
  }, []);

  // Reiniciar a página 1 si cambia el filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPlatform]);

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  // Filtrar por plataforma
  const filteredCasos = selectedPlatform === "all"
    ? casos
    : casos.filter(caso => caso.id_categoria?.toLowerCase() === selectedPlatform.toLowerCase());

  // Paginación
  const indexOfLast = currentPage * casosPerPage;
  const indexOfFirst = indexOfLast - casosPerPage;
  const currentCasos = filteredCasos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCasos.length / casosPerPage);

  return (
    <motion.div className="container mx-auto px-4 py-10 flex flex-col gap-10" initial="initial" animate="animate">
      
      {/* Volver */}
     <motion.div
  whileHover={{ x: -5, scale: 1.05 }}
  transition={{ type: "spring", stiffness: 100 }}
  className="mt-28 md:mt-36 w-fit"
>
  <Link
    to="/inspiring"
    className="text-primary-900 hover:underline flex items-center gap-2"
  >
    ← Volver
  </Link>
</motion.div>

      {/* Título */}
      <motion.h1 className="text-4xl font-extrabold text-primary-900 tracking-tight" {...motionTitle}>
        Explorar todas las Historias de éxito
      </motion.h1>

      {/* Filtro */}
      <motion.div {...fadeIn(0.3)}>
        <PlatformFilter selectedPlatform={selectedPlatform} onSelectPlatform={handlePlatformChange} />
      </motion.div>

      {/* Cards con animación al cambiar de página */}
      <motion.div {...fadeIn(0.5)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // fuerza la animación cuando cambia de página
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCasos.map((caso) => (
              <StoryCard
                key={caso._id}
                title={caso.titulo}
                excerpt={caso.descripcion}
                image={caso.fotos?.[0]?.url}
                author={{ name: "Incuvalab", role: "Autor", avatar: "/placeholder.svg" }}
                platform={caso.id_categoria}
                date={new Date(caso.createdAt).toLocaleDateString()}
                videoUrl={caso.videos}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Paginador numérico */}
      <motion.div className="flex justify-center gap-2 mt-8" {...fadeIn(0.6)}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'text-blue-500 hover:underline'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Explore;
