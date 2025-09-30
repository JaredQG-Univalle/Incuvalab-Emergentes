import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import PlatformBadge from './PlatformBadge';

const fadeInStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const FeaturedStory = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    async function fetchFeaturedStory() {
      try {
        const host = window.location.hostname;
        const api = `https://incuvalab-emergentes-1.onrender.com`;

        const response = await axios.post(`${api}/casos/read`, {
          query: {
            find: { _id: '680faf20cea984878e7ef67a' }
          }
        });

        const fetched = response?.data;
        if (fetched) {
          setFeatured(fetched);
        }
      } catch (error) {
        console.error('Error fetching featured story:', error);
      }
    }

    fetchFeaturedStory();
  }, []);

  if (!featured) {
    return (
      <div className="text-center text-gray-500 py-10">Cargando historia destacada...</div>
    );
  }

  return (
    <motion.div
      className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border-l-8 border-primary-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInStagger}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen + overlay + botón flotante */}
        <motion.div
          className="relative h-64 md:h-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <motion.img
            src={featured.fotos?.[0]?.url || "/placeholder.svg"}
            alt={featured.titulo}
            className="object-cover h-full w-full transform transition-transform duration-700 hover:scale-105 hover:blur-[1px]"
            whileHover={{ scale: 1.05 }}
          />

          <motion.div
            className="absolute inset-0 bg-black/30 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href={featured.videos}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.8)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0px 0px 6px rgba(255,255,255,0.4)",
                  "0px 0px 12px rgba(255,255,255,0.8)",
                  "0px 0px 6px rgba(255,255,255,0.4)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
              className="rounded-full bg-primary-900/70 backdrop-blur-sm p-3"
            >
              <Play className="h-6 w-6 text-white" />
            </motion.a>
          </motion.div>

          <div className="absolute bottom-4 left-4 z-10">
            <PlatformBadge platform={featured.id_categoria} />
          </div>
        </motion.div>

        {/* Texto animado en secuencia */}
        <motion.div
          className="p-6 md:p-8 flex flex-col justify-center"
          variants={fadeInStagger}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-primary-900 mb-4"
            variants={fadeInUp}
          >
            {featured.titulo}
          </motion.h3>

          <motion.p
            className="text-gray-700 text-md md:text-lg mb-6"
            variants={fadeInUp}
          >
            {featured.descripcion}
          </motion.p>

          <motion.div className="flex items-center mb-6" variants={fadeInUp}>
            <div>
              <p className="font-medium text-primary-900">Autor</p>
              <p className="text-sm text-gray-500">Incuvalab</p>
              
            </div>
          </motion.div>

          {/* Botón glowing final */}
          <motion.a
            href={featured.videos}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start bg-primary-900 hover:bg-primary-800 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition duration-300"
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 18px rgba(100, 100, 255, 0.4)",
              textShadow: "0px 0px 6px rgba(255,255,255,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Mirar la Historia Completa
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedStory;