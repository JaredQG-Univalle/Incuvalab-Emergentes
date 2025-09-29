import { toast } from "react-toastify";
import React, { useEffect, useState, useContext } from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Briefcase, X, Heart, Eye } from "lucide-react";
import client from "@/api";
import { StoreContext } from "@/context/store";
import "./ProjectList.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
 
export default function ProjectList({ selectedArea }) {
  const store = useContext(StoreContext);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [selectedMatchIndex, setSelectedMatchIndex] = useState(null);
 
  useEffect(() => {
    async function fetchProjects() {
      try {
        store.setLoading(true);
        const response = await client.get("/proyectos/list");
        setProjects(response.data);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
      } finally {
        store.setLoading(false);
      }
    }
 
    fetchProjects();
  }, []);
 
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedArea]);
 
  const filteredProjects =
    selectedArea === "all"
      ? projects
      : projects.filter((p) => p.area === selectedArea);
 
  if (!filteredProjects.length) {
    return <p>No se encontraron proyectos en esta área.</p>;
  }
 
  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };
 
  const handleRemoveMatch = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el match permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        setMatches((prev) => prev.filter((match) => match._id !== id));
        setSelectedMatchIndex(null);
        toast.success("Match eliminado exitosamente");
      }
    });
  };
 
  const handleSelectMatch = (index) => {
    setSelectedMatchIndex(index);
  };
 
  const Llamada = () => {
    alert("Abrir reunión en Teams");
  };
 
  const handleChat = (match) => {
    alert(`Abrir chat con Teams para el proyecto: ${match.nombre}`);
  };
 
  const handleLike = () => {
    const likedProject = filteredProjects[currentIndex];
    setMatches((prev) => [...prev, likedProject]);
    toast.success(`💖 Te gustó el proyecto "${likedProject.nombre}"`);
    handleNext();
  };
 
  const handleDislike = () => {
    const dislikedProject = filteredProjects[currentIndex];
    toast.info(`❌ No te gustó el proyecto "${dislikedProject.nombre}"`);
    handleNext();
  };
 
  const handleGoToMatches = () => {
    navigate("/matches", { state: { matches } });
  };
 
  const project = filteredProjects[currentIndex];
 
  const ProjectCard = ({ data }) => (
    <Card key={data._id} className="tinder-card">
      <div className="card-image-container">
        <img
          src={data.fotos?.[0] || "/placeholder.jpg"}
          alt={data.nombre}
          className="card-cover-image"
        />
      </div>
 
      <CardContent className="profile-content">
        <h2 className="profile-name">{data.nombre}</h2>
        <p className="profile-title">{data.tema}</p>
 
        <div className="profile-detail">
          <MapPin className="profile-icon" />
          <span>{data.carrera}</span>
        </div>
 
        <div className="project-section">
          <h3>
            <Briefcase className="icon-inline" /> Descripción
          </h3>
          <p>{data.descripcion}</p>
        </div>
 
        <div className="project-section">
          <h3>
            <Briefcase className="icon-inline" /> Etapa del Proyecto
          </h3>
          <p>{data.etapa_proyecto}</p>
        </div>
 
        <div className="project-section">
          <h3>
            <Briefcase className="icon-inline" /> Socios Buscados
          </h3>
          <ul>
            {data.socios_buscados?.length > 0 ? (
              data.socios_buscados.map((socio, i) => (
                <li key={i}>🔹 {socio}</li>
              ))
            ) : (
              <li>No especificados</li>
            )}
          </ul>
        </div>
 
        <div className="project-section">
          <h3>
            <Briefcase className="icon-inline" /> Otra Habilidad
          </h3>
          <p>{data.otra_habilidad || "No especificada"}</p>
        </div>
 
        <div className="looking-for">
          <h3>Contacto</h3>
          <p>{data.contacto}</p>
        </div>
      </CardContent>
    </Card>
  );
 
  return (
    <>
      <div className="background-decor" />
 
      <div className="tinder-carousel">
        <button onClick={handleGoToMatches} className="view-matches-btn">
          <Eye size={20} /> Ver Matches
        </button>
 
        {showMatches ? (
          <div className="matches-list-crud">
            <h3> Tus Matches</h3>
            {matches.length === 0 ? (
              <p>Aún no tienes proyectos guardados.</p>
            ) : (
              matches.map((match, index) => (
                <Card key={match._id || index} className="match-card-crud">
                  <div className="image-wrapper">
                    <img
                      src={match.fotos?.[0]?.url || "/placeholder.jpg"}
                      alt={match.nombre}
                      className="profile-image"
                    />
                    <span
                      className="profile-badge"
                      style={{ backgroundColor: "#880043" }}
                    >
                      {match.area}
                    </span>
                  </div>
                  <CardContent className="profile-content">
                    <h2 className="profile-name">{match.nombre}</h2>
                    <h3 className="project-name">{match.tema}</h3>
                    <p>
                      <MapPin className="icon-inline" /> {match.carrera}
                    </p>
                    <p>
                      <Briefcase className="icon-inline" /> {match.descripcion}
                    </p>
                    <p>📧 {match.contacto}</p>
                    <div className="match-buttons">
                      <button
                        className="reunion-btn"
                        onClick={() => handleChat(match)}
                      >
                        <i className="fas fa-comments"></i> Reunión
                      </button>
                      <button
                        className="chat-btn"
                        onClick={() => handleChat(match)}
                      >
                        <i className="fas fa-comments"></i> Iniciar chat
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleRemoveMatch(match._id)}
                      >
                        <i className="fas fa-trash-alt"></i> Eliminar
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        ) : (
          <>
            <ProjectCard data={project} />
 
            <div className="tinder-buttons">
              <button onClick={handleDislike} className="dislike-btn">
                <X size={32} stroke="#880038" />
              </button>
              <button onClick={handleLike} className="like-btn">
                <Heart size={32} stroke="#880038" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}