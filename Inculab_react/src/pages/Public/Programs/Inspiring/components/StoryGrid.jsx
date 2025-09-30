import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';
import axios from 'axios';

const StoryGrid = ({ platformFilter = "all", limit }) => {
  const [casos, setCasos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }

    fetchCasos();
  }, []);

  let filteredCasos = platformFilter === "all"
    ? casos
    : casos.filter(caso => caso.id_categoria?.toLowerCase() === platformFilter.toLowerCase());

  if (limit && limit > 0) {
    filteredCasos = filteredCasos.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-500">Cargando casos...</p>
        </div>
      ) : filteredCasos.length > 0 ? (
        filteredCasos.map((caso) => (
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
        ))
      ) : (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-500">No stories found for this platform.</p>
        </div>
      )}
    </div>
  );
};

export default StoryGrid;
