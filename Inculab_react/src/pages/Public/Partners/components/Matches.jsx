import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Card, CardContent } from "./ui/card";
import "./Matches.css";
import { MapPin, Briefcase, Trash, MessageSquare, Video } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function Matches() {
  const location = useLocation();
  const navigate = useNavigate();

  const [matches, setMatches] = React.useState(location.state?.matches || []);
  const [selectedMatchIndex, setSelectedMatchIndex] = React.useState(null);

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

  const handleTalk = () => {
    window.open("https://teams.microsoft.com/l/meeting/new", "_blank");
  };

  const handleChat = (match) => {
    const phone = match.contacto; // Ejemplo: "521234567890" (52 es México)
    const url = `https://web.whatsapp.com/send?phone=${phone}`;
    window.open(url, "_blank");
  };

  return (
    <div className="matches-list-crud">
    <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="matches-title">Tus Matches</h3>
      {matches.length === 0 ? (
        <p className="no-matches">Aún no tienes proyectos guardados.</p>
      ) : (
        <div className="match-grid">
          {matches.map((match, index) => (
            <Card key={match._id || index} className="match-card-crud">
              <div className="image-wrapper">
                <img
                  src={
                    match.fotos && match.fotos.length > 0
                      ? match.fotos[0]
                      : "/placeholder.jpg"
                  }
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
                <div className="info-row">
                  <MapPin className="icon-inline" />
                  <span>{match.carrera}</span>
                </div>
                <div className="info-row">
                  <Briefcase className="icon-inline" />
                  <span>{match.descripcion}</span>
                </div>

                <p>📧 {match.contacto}</p>

                <div className="match-buttons">
                  <button
                    className="reunion-btn"
                    onClick={() => handleTalk(match)}
                  >
                    Iniciar Reunión <Video size={16} className="button-icon" />
                  </button>
                  <button
                    className="chat-btn"
                    onClick={() => handleChat(match)}
                  >
                    Iniciar Chat{" "}
                    <MessageSquare size={16} className="button-icon" />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemoveMatch(match._id)}
                  >
                    Eliminar <Trash size={16} className="button-icon" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
