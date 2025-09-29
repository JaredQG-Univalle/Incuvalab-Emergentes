import { useRef, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilesUpload from "@/components/FilesUpload";
import Error from "@/components/Error";
import Icon from "@/components/Icon";
import client from "@/api";
import { StoreContext } from "@/context/store";
import "./Casos_form.css";

export default function Casos_form() {
  const { id } = useParams();
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [errors, set_errors] = useState([]);
  const [casos, set_casos] = useState({
    titulo: "",
    descripcion: "",
    fotos: [],
    videos: "",
    id_categoria: "",
    fecha_video: "",
  });

  const fotos_upload = useRef();
  const hoy = new Date().toISOString().split("T")[0]; // Para bloquear fechas futuras

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = [];

    // Validaciones obligatorias
    if (!casos?.titulo) formErrors.push("El campo Título es obligatorio");
    if (!casos?.videos) formErrors.push("El campo Video es obligatorio");
    if (!casos?.id_categoria) formErrors.push("Debe seleccionar una Categoría");
    if (!casos?.fecha_video) formErrors.push("La Fecha del Video es obligatoria");

    // Validaciones específicas
    if (casos.titulo.length > 60) formErrors.push("El Título no debe superar los 60 caracteres");
    if (casos.descripcion.length > 500) formErrors.push("La Descripción no debe superar los 500 caracteres");

    if (casos.fecha_video > hoy) formErrors.push("La Fecha del video no puede ser posterior al día actual");

    const regexYoutube = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i;
    const regexFacebook = /^(https?:\/\/)?(www\.)?facebook\.com\//i;
    if (!(regexYoutube.test(casos.videos.trim()) || regexFacebook.test(casos.videos.trim()))) {
      formErrors.push("El link del video debe ser de YouTube o Facebook");
    }

    if (formErrors.length > 0) {
      set_errors(formErrors);
      store.showErrors(formErrors);
      return;
    }

    store.setLoading(true);

    try {
      let nuevasFotos = casos.fotos;
      const nuevasSubidas = await fotos_upload.current.uploadFilesComponent();

      if (!id && nuevasSubidas.length !== 1) {
        throw new Error("Debes subir exactamente una imagen.");
      }

      if (!id && nuevasSubidas.length === 1) {
        nuevasFotos = nuevasSubidas;
      }

      if (id && nuevasSubidas.length > 0) {
        if (casos.fotos.length > 0) {
          const fotosAntiguas = casos.fotos.map(f => ({ url: f.url }));
          await client.post("/files/deleteMany", { files: fotosAntiguas });
        }
        nuevasFotos = nuevasSubidas;
      }

      const nuevoCasos = {
        ...casos,
        fotos: nuevasFotos,
        videos: casos.videos.trim(),
        id_categoria: casos.id_categoria.trim(),
        fecha_video: casos.fecha_video,
      };

      if (id) {
        await client.put(`/casos/update/${id}`, { casos: nuevoCasos });
        store.showSuccess({ message: "Caso Actualizado", redirect: "/dashboard/casos/list", navigate });
      } else {
        await client.post(`/casos/create`, { casos: nuevoCasos });
        store.showSuccess({ message: "Caso Creado", redirect: "/dashboard/casos/list", navigate });
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error?.message || "Error al guardar el registro";
      set_errors([msg]);
      store.showErrors([msg]);
    } finally {
      store.setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      store.setLoading(true);
      client.post("/casos/read", { query: { find: { _id: id } } })
        .then((r) => {
          const fetchedData = r?.data || {};
          set_casos({
            titulo: fetchedData.titulo || "",
            descripcion: fetchedData.descripcion || "",
            fotos: fetchedData.fotos || [],
            videos: fetchedData.videos || "",
            id_categoria: fetchedData.id_categoria || "",
            fecha_video: fetchedData.fecha_video ? fetchedData.fecha_video.split('T')[0] : "",
          });
        })
        .finally(() => store.setLoading(false));
    }
  }, [id]);

  return (
    <div className="px-2 py-1 sm:py-2 xl:py-4">
      <div className="bg-gray-50 px-1 py-0.5 flex flex-wrap-reverse sm:items-center">
        <div className="flex-auto">
          <h1 className="text-xl font-semibold text-gray-900 uppercase">{id ? "Editar Caso" : "Registrar Caso"}</h1>
        </div>
        <div className="ml-8 flex-none">
          <Link to="../casos/list" className="inline-flex items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white">
            <Icon name="ArrowLeftCircleIcon" className="h-5 w-5 mr-1" /> Atras
          </Link>
        </div>
      </div>

      <div className="mt-4 bg-gray-50 rounded-lg border border-gray-200">
        <Error title="Error en el Formulario" errors={errors} />
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            <div>
              <label className="block font-medium text-sm">Título</label>
              <input
                type="text"
                value={casos.titulo}
                maxLength={60}
                onChange={e => set_casos({ ...casos, titulo: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              />
              <p className="text-sm text-gray-500 text-right">{casos.titulo.length}/60</p>
            </div>

            <div>
              <label className="block font-medium text-sm">Descripción</label>
              <textarea
                value={casos.descripcion}
                maxLength={500}
                onChange={e => set_casos({ ...casos, descripcion: e.target.value })}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              />
              <p className="text-sm text-gray-500 text-right">{casos.descripcion.length}/500</p>
            </div>

            <div className="col-span-3">
              <FilesUpload label="Fotos" name="fotos" files={casos.fotos} setFiles={e => set_casos({ ...casos, fotos: e })} ref={fotos_upload} accept="image/*" maxFiles={1} maxSize={5} maxSizeImage={0.5} />
            </div>

            <div className="col-span-3">
              <label className="block font-medium text-sm">Video (URL)</label>
              <input
                type="text"
                value={casos.videos}
                onChange={e => set_casos({ ...casos, videos: e.target.value })}
                placeholder="Pega la URL del video"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="col-span-3">
              <label className="block font-medium text-sm">Categoría</label>
              <select
                value={casos.id_categoria}
                onChange={e => set_casos({ ...casos, id_categoria: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              >
                <option value="">Seleccione una categoria</option>
                <option value="YouTube">YouTube</option>
                <option value="Facebook">Facebook</option>
              </select>
            </div>

            <div className="col-span-3">
              <label className="block font-medium text-sm">Fecha del Video</label>
              <input
                type="date"
                value={casos.fecha_video}
                max={hoy}
                onChange={e => set_casos({ ...casos, fecha_video: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Link to="../casos/list" className="mr-3 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancelar</Link>
            <button type="submit" className="rounded-md bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
