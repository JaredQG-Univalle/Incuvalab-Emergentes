import React, { useEffect, useState, useContext } from "react";
import "./Partners.css";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import ProjectList from "./components/ProjectList";
import { useNavigate } from "react-router-dom";
 
export default function PartnersPage() {
  const [selectedArea, setSelectedArea] = useState("all");
  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };
  const navigate = useNavigate();
 
  const filtros = [
    { id: "all", label: "Todos" },
    { id: "Tecnología", label: "Tech" },
    { id: "Sostenibilidad", label: "Sostenibilidad" },
    { id: "Servicios", label: "Servicios" },
    { id: "Salud", label: "Salud" },
  ];
  return (
    <div className="partners-container">
    <br />
      <br />
      <br />
      <br />
      <h1 className="partners-title white-text">Partners</h1>
      <p className="partners-subtitle white-text">
        Encuentra socios potenciales para tu proyecto
      </p>
 
      <div className="add-project">
        <Button
          className="add-project-button"
          onClick={() => navigate("/partners/form")}
        >
          <Plus className="add-project-icon" /> Añadir mi proyecto o tesis
        </Button>
      </div>
 
      <div className="filters-container">
        <div className="filter-group">
          {filtros.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-button${selectedArea === id ? " active" : ""}`}
              onClick={() => setSelectedArea(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
 
      <ProjectList selectedArea={selectedArea} />
    </div>
  );
}