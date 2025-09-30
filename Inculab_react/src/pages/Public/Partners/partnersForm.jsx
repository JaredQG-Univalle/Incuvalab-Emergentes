import React, { useState, useRef, useEffect, useContext } from "react";
import "./PartnersForm.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { ChevronLeft, X, Check, Upload, AlertCircle } from "lucide-react";
import { StoreContext } from "@/context/store";
import Toast from "./components/Toast";
 
export default function PartnersForm() {
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("Tecnología");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const formRef = useRef(null);
 
  const allSkills = [
    "Desarrollo web",
    "Marketing digital",
    "Análisis de datos",
    "Sostenibilidad",
    "Ventas",
    "Medicina",
    "Diseño UX/UI",
    "Gestión de proyectos",
    "Inteligencia artificial",
    "Finanzas",
    "Investigación",
    "Biomedica",
  ];
 
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    descripcion_proyecto: "",
    area: "Tecnología",
    etapa_proyecto: "Idea inicial",
    fotos: [],
    video: [],
    socios_buscados: [],
    otra_habilidad: "",
    contacto: "",
  });
 
  // Función para contar palabras
  const wordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  };
 
  // Validaciones
  const isValidName = (name) =>
    /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ.,;:¿?¡!()\-]+$/.test(name) &&
    wordCount(name) <= 20 &&
    name.length <= 100;
 
  const isValidContact = (contact) =>
    /^\+591\s\d{8}$/.test(contact) ||
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
 
  const validateField = (name, value) => {
    let error = "";
 
    switch (name) {
      case "nombre":
        if (!value.trim()) {
          error = "El nombre del proyecto es obligatorio";
        } else if (!isValidName(value)) {
          error = "Máximo 20 palabras y 100 caracteres";
        }
        break;
      case "descripcion":
        const descCount = wordCount(value);
        if (!value.trim()) {
          error = "La descripción breve es obligatoria";
        } else if (descCount < 15 || descCount > 50) {
          error = `Debe tener entre 15-50 palabras (actual: ${descCount})`;
        }
        break;
      case "descripcion_proyecto":
        const detCount = wordCount(value);
        if (!value.trim()) {
          error = "La descripción detallada es obligatoria";
        } else if (detCount < 50 || detCount > 100) {
          error = `Debe tener entre 50-100 palabras (actual: ${detCount})`;
        }
        break;
      case "contacto":
        if (!value.trim()) {
          error = "La información de contacto es obligatoria";
        } else if (!isValidContact(value)) {
          error = "Formato inválido. Usa +591 XXXXXXXX o un email válido";
        }
        break;
      case "area":
        if (!value) error = "Selecciona un área del proyecto";
        break;
      case "etapa_proyecto":
        if (!value) error = "Selecciona una etapa del proyecto";
        break;
      case "fotos":
        if (value.length < 1) error = "Debes subir al menos una imagen";
        break;
      case "terms":
        if (!termsAccepted) error = "Debes aceptar los términos";
        break;
      default:
        break;
    }
 
    return error;
  };
 
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
 
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };
 
  const handleBlur = (field) => (e) => {
    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }));
    }
 
    const value = field === "terms" ? termsAccepted : formData[field];
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
 
  const toggleSocio = (skill) => {
    setFormData((prev) => {
      const updated = prev.socios_buscados.includes(skill)
        ? prev.socios_buscados.filter((s) => s !== skill)
        : [...prev.socios_buscados, skill];
      return { ...prev, socios_buscados: updated };
    });
  };
 
  const subirImagenACloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "proyectos_upload");
    data.append("cloud_name", "dj1t7xem6");
 
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dj1t7xem6/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
 
      const result = await res.json();
      return result.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      setErrors((prev) => ({
        ...prev,
        fotos: "Error al subir imágenes. Inténtalo de nuevo",
      }));
      return null;
    }
  };
 
  const handleAreaChange = (value) => {
    setSelectedArea(value);
    setFormData({ ...formData, area: value });
 
    if (touched.area) {
      const error = validateField("area", value);
      setErrors((prev) => ({ ...prev, area: error }));
    }
  };
 
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach((field) => {
      if (
        field !== "video" &&
        field !== "socios_buscados" &&
        field !== "otra_habilidad"
      ) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    });
    const photosError = validateField("fotos", formData.fotos);
    if (photosError) {
      newErrors.fotos = photosError;
      isValid = false;
    }
    const termsError = validateField("terms", termsAccepted);
    if (termsError) {
      newErrors.terms = termsError;
      isValid = false;
    }
 
    setErrors(newErrors);
    return isValid;
  };
 
  const handleSubmit = async () => {
    const allTouched = {};
    Object.keys(formData).forEach((field) => {
      allTouched[field] = true;
    });
    allTouched.terms = true;
    allTouched.fotos = true;
    setTouched(allTouched);
    if (!validateForm()) {
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
 
    try {
      store.setLoading(true);
 
      const payload = {
        proyectos: {
          nombre: formData.nombre,
          descripcion: formData.descripcion,
          descripcion_proyecto: formData.descripcion_proyecto,
          area: formData.area,
          etapa_proyecto: formData.etapa_proyecto,
          contacto: formData.contacto,
          fotos: formData.fotos,
          video: formData.video,
          socios_buscados: [
            ...formData.socios_buscados,
            ...(formData.otra_habilidad.trim()
              ? [formData.otra_habilidad.trim()]
              : []),
          ],
          otra_habilidad: formData.otra_habilidad.trim(),
        },
      };
 
      const api = "https://incuvalab-emergentes-1.onrender.com";
      const response = await fetch(`${api}/proyectos/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
 
      const data = await response.json();
      if (response.ok) {
        setToastMessage("¡Proyecto publicado exitosamente!");
        setShowToast(true);
 
        setFormData({
          nombre: "",
          descripcion: "",
          descripcion_proyecto: "",
          area: "Tecnología",
          etapa_proyecto: "Idea inicial",
          fotos: [],
          video: [],
          contacto: "",
          socios_buscados: [],
          otra_habilidad: "",
        });
        setSelectedArea("Tecnología");
        setTermsAccepted(false);
        setErrors({});
        setTouched({});
 
        setTimeout(() => {
          setShowToast(false);
          navigate("/partners");
        }, 3000);
      } else {
        setToastMessage(
          `Error al publicar: ${data.message || "Error desconocido"}`
        );
        setShowToast(true);
      }
    } catch (error) {
      console.error(error);
      setToastMessage("Error de conexión con el servidor");
      setShowToast(true);
    } finally {
      store.setLoading(false);
    }
  };
 
  return (
    <div className="new-project-container">
      <br />
      <br />
      <br />
      <br />
      <div className="form-wrapper">
        <div className="header-section">
          <Button asChild variant="ghost" size="sm" className="back-button">
            <Link to="/partners">
              <ChevronLeft className="icon" /> Volver a Partners
            </Link>
          </Button>
          <h1 className="form-title">Añadir nuevo proyecto</h1>
          <p className="form-subtitle">
            Comparte los detalles de tu proyecto o tesis para encontrar socios
            ideales
          </p>
        </div>
 
        <Card ref={formRef}>
          <CardHeader>
            <CardTitle>Información del proyecto</CardTitle>
            <CardDescription>
              Completa la información para que otros emprendedores puedan
              conocer tu proyecto
            </CardDescription>
          </CardHeader>
          <CardContent className="form-section">
            <div className="field-group">
              <Label htmlFor="nombre">Nombre del proyecto *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={handleInputChange("nombre")}
                onBlur={handleBlur("nombre")}
                required
                placeholder="Ej: App para monitoreo de salud"
                className={errors.nombre ? "input-error" : ""}
              />
              <div className="word-counter">
                {wordCount(formData.nombre)}/20 palabras
              </div>
              {errors.nombre && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.nombre}</span>
                </div>
              )}
            </div>
 
            <div className="field-group">
              <Label htmlFor="descripcion">Descripción breve *</Label>
              <Textarea
                id="descripcion"
                rows={2}
                value={formData.descripcion}
                onChange={handleInputChange("descripcion")}
                onBlur={handleBlur("descripcion")}
                required
                placeholder="Describe en 1-2 frases tu proyecto..."
                className={errors.descripcion ? "input-error" : ""}
              />
              <div className="word-counter">
                {wordCount(formData.descripcion)} palabras (15-50 requeridas)
              </div>
              {errors.descripcion && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.descripcion}</span>
                </div>
              )}
            </div>
 
            <div className="field-group">
              <Label htmlFor="descripcion_proyecto">
                Descripción detallada *
              </Label>
              <Textarea
                id="descripcion_proyecto"
                rows={5}
                value={formData.descripcion_proyecto}
                onChange={handleInputChange("descripcion_proyecto")}
                onBlur={handleBlur("descripcion_proyecto")}
                required
                placeholder="Explica tu proyecto, idea o tesis en detalle..."
                className={errors.descripcion_proyecto ? "input-error" : ""}
              />
              <div className="word-counter">
                {wordCount(formData.descripcion_proyecto)} palabras (50-100
                requeridas)
              </div>
              {errors.descripcion_proyecto && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.descripcion_proyecto}</span>
                </div>
              )}
            </div>
 
            <div className="field-group">
              <Label>Área del proyecto *</Label>
              <RadioGroup
                value={selectedArea}
                onValueChange={handleAreaChange}
                className="radio-grid"
              >
                {["Tecnología", "Sostenibilidad", "Servicios", "Salud"].map(
                  (area) => (
                    <label key={area} className="radio-card">
                      <RadioGroupItem value={area} id={`area-${area}`} />
                      <span>{area}</span>
                    </label>
                  )
                )}
              </RadioGroup>
              {errors.area && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.area}</span>
                </div>
              )}
            </div>
 
            <div className="field-group">
              <Label>Etapa del proyecto *</Label>
              <Select
                value={formData.etapa_proyecto}
                onValueChange={(val) => {
                  setFormData({ ...formData, etapa_proyecto: val });
                  if (touched.etapa_proyecto) {
                    const error = validateField("etapa_proyecto", val);
                    setErrors((prev) => ({ ...prev, etapa_proyecto: error }));
                  }
                }}
                onBlur={handleBlur("etapa_proyecto")}
              >
                <SelectTrigger
                  className={errors.etapa_proyecto ? "input-error" : ""}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="select-content">
                  <SelectItem value="Idea inicial">Idea inicial</SelectItem>
                  <SelectItem value="Concepto desarrollado">
                    Concepto desarrollado
                  </SelectItem>
                  <SelectItem value="Prototipo">Prototipo</SelectItem>
                  <SelectItem value="En crecimiento">En crecimiento</SelectItem>
                  <SelectItem value="MVP">MVP</SelectItem>
                </SelectContent>
              </Select>
              {errors.etapa_proyecto && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.etapa_proyecto}</span>
                </div>
              )}
            </div>
 
            <div className="field-group">
              <Label>Imágenes del proyecto *</Label>
              <label
                htmlFor="image-upload"
                className={`upload-box custom-upload ${
                  errors.fotos ? "input-error" : ""
                }`}
              >
                <Upload className="upload-icon" />
                <span className="upload-text">Seleccionar imágenes</span>
                <span className="upload-note">
                  Puedes subir varias imágenes (mínimo 1)
                </span>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={async (e) => {
                  const files = Array.from(e.target.files);
                  const urls = [];
 
                  for (const file of files) {
                    const url = await subirImagenACloudinary(file);
                    if (url) urls.push(url);
                  }
 
                  setFormData((prev) => ({
                    ...prev,
                    fotos: [...prev.fotos, ...urls],
                  }));
 
                  // Validar fotos después de subir
                  if (touched.fotos) {
                    const error = validateField("fotos", [
                      ...formData.fotos,
                      ...urls,
                    ]);
                    setErrors((prev) => ({ ...prev, fotos: error }));
                  }
                }}
              />
              <div className="preview-gallery">
                {formData.fotos.map((foto, idx) => (
                  <div className="preview-image-wrapper" key={idx}>
                    <img
                      src={foto}
                      alt={`foto-${idx}`}
                      className="preview-image"
                    />
                    <button
                      className="remove-image-btn"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          fotos: prev.fotos.filter((_, i) => i !== idx),
                        }));
 
                        // Validar fotos después de eliminar
                        if (touched.fotos) {
                          const updatedFotos = formData.fotos.filter(
                            (_, i) => i !== idx
                          );
                          const error = validateField("fotos", updatedFotos);
                          setErrors((prev) => ({ ...prev, fotos: error }));
                        }
                      }}
                    >
                      <X className="remove-icon" />
                    </button>
                  </div>
                ))}
              </div>
              {errors.fotos && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.fotos}</span>
                </div>
              )}
              <div className="image-counter">
                {formData.fotos.length} imagen(es) subida(s)
              </div>
            </div>
 
            <div className="field-group">
              <Label>Habilidades requeridas</Label>
              <div className="skills-grid">
                {allSkills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <Checkbox
                      id={skill}
                      checked={formData.socios_buscados.includes(skill)}
                      onCheckedChange={() => toggleSocio(skill)}
                    />
                    <Label htmlFor={skill}>{skill}</Label>
                  </div>
                ))}
              </div>
              <Label className="mt-3" htmlFor="otra_habilidad">
                Otra habilidad...
              </Label>
              <Input
                id="otra_habilidad"
                value={formData.otra_habilidad}
                onChange={handleInputChange("otra_habilidad")}
                placeholder="Ej: Biología, Blockchain..."
              />
              <div className="selected-skills">
                {formData.socios_buscados.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                    <X
                      size={14}
                      onClick={() => toggleSocio(skill)}
                      className="remove-skill"
                    />
                  </span>
                ))}
                {formData.otra_habilidad && (
                  <span className="skill-tag">
                    {formData.otra_habilidad}
                    <X
                      size={14}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          otra_habilidad: "",
                        }))
                      }
                      className="remove-skill"
                    />
                  </span>
                )}
              </div>
            </div>
 
            <div className="field-group">
              <Label htmlFor="contacto">Información de contacto *</Label>
              <Input
                id="contacto"
                value={formData.contacto}
                onChange={handleInputChange("contacto")}
                onBlur={handleBlur("contacto")}
                required
                placeholder="Ej: +591 61234567 o correo@ejemplo.com"
                className={errors.contacto ? "input-error" : ""}
              />
              {errors.contacto && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.contacto}</span>
                </div>
              )}
            </div>
 
            <div className="terms-box">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => {
                  setTermsAccepted(checked);
                  if (touched.terms) {
                    const error = validateField("terms", checked);
                    setErrors((prev) => ({ ...prev, terms: error }));
                  }
                }}
                onBlur={handleBlur("terms")}
              />
              <Label htmlFor="terms">
                Acepto los <Link to="/terms">Términos</Link> y la{" "}
                <Link to="/privacy">Política de privacidad</Link> *
              </Label>
              {errors.terms && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.terms}</span>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={store.loading}>
              {store.loading ? "Publicando..." : "Publicar proyecto"}
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
 
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
          type={toastMessage.includes("Error") ? "error" : "success"}
        />
      )}
    </div>
  );
}