//initJSpropietario
import Autocomplete from "@/components/Autocomplete";
//endJSpropietario
//initJSfotos
import FilesUpload from "@/components/FilesUpload";
//endJSfotos
//initJSfotos
import { useRef } from "react";
//endJSfotos
import Icon from "@/components/Icon";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Error from '@/components/Error';
import { StoreContext } from "@/context/store";
import './Proyectos_form.css';
import client from "@/api";

export default function Proyectos_form() {
    //essentials
    const { id } = useParams();
    const store = useContext(StoreContext);
    const navigate = useNavigate();
    const [errors, set_errors] = useState([]);
    //fields
    const [proyectos, set_proyectos] = useState({
        //initJStitulo_proyecto
titulo_proyecto: "",
//endJStitulo_proyecto
//initJSdescripcion
descripcion: "",
//endJSdescripcion
//initJSfotos
fotos: [],
//endJSfotos
//initJSvideo
video: [],
//endJSvideo
//initJSpropietario
propietario: "",
//endJSpropietario
//fieldsModel
    });
    

//initJSfotos

        const fotos_upload = useRef();
        
//endJSfotos
//initJSvideo

        const video_upload = useRef();
        
//endJSvideo

//extraStates

    



//initJSpropietario
const [user_list, set_user_list] = useState([]);
//endJSpropietario
//foreigns

    async function getForeigns() {
        store.setLoading(true);
        Promise.all([
            




//callForeigns
        ]).finally(() => {
            store.setLoading(false);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var errors = [];
        //initJStitulo_proyecto
if (!proyectos?.titulo_proyecto) errors.push("El campo Titulo Proyecto es obligatorio");
//endJStitulo_proyecto



//initJSpropietario
if (!proyectos?.propietario) errors.push("El campo Propietario es obligatorio");
//endJSpropietario
//validaciones
        if (errors.length == 0) {
            store.setLoading(true);
            

//initJSfotos

        proyectos.fotos = [...proyectos.fotos, ...await fotos_upload.current.uploadFilesComponent()];
        
//endJSfotos
//initJSvideo

        proyectos.video = [...proyectos.video, ...await video_upload.current.uploadFilesComponent()];
        
//endJSvideo

//beforeSend
            if (id) {
                client.put(`/proyectos/update/${id}`, { proyectos }).then(r => {
                    store.showSuccess({ message: "Proyectos Actualizado", redirect: "/dashboard/proyectos/list", navigate });
                }).catch(e => {
                    const errorMessage = e?.response?.data?.message || "Error al Actualizar Registro";
                    set_errors([errorMessage]);
                    store.showErrors([errorMessage]);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/proyectos/create`, { proyectos }).then(r => {
                    store.showSuccess({ message: "Proyectos Creado", redirect: "/dashboard/proyectos/list", navigate });
                }).catch(e => {
                    const errorMessage = e?.response?.data?.message || "Error al Crear Registro";
                    set_errors([errorMessage]);
                    store.showErrors([errorMessage]);
                }).finally(() => store.setLoading(false));
            }
        } else {
            set_errors([errors[0]]);
            store.showErrors([errors]);
        }
    }

    




//extraEffect

    useEffect(() => {
        getForeigns();
        if (id) {
            store.setLoading(true);
            client
                .post("/proyectos/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(proyectos).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : proyectos[key];
                        return acc;
                    }, {});
                    




//convertRead
                    set_proyectos(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [id]);

    return (
        <>
            <div className="px-2 py-1 sm:py-2 xl:py-4">
                <div className="bg-gray-50 px-1  py-0.5 sm:py-0.5 2xl:py-1  sm:flex flex flex-wrap-reverse sm:items-center w-full">
                    <div className="sm:flex-auto">
                        <h1 className="ttext-balance 2xl:text-xl sm:text-lg text-sm  mt-2 sm:mt-0 font-semibold text-gray-900 uppercase">{id ? "EDITAR Proyectos" : "REGISTRAR Proyectos"}</h1>
                    </div>
                    <div className="ml-8 sm:ml-0 flex-none">
                        <Link
                            to="../proyectos/list"
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm bg-transparent 2xl:px-6 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                        >
                            <Icon name="ArrowLeftCircleIcon" className="2xl:h-6 2xl:w-6 sm:mr-4 mr-1 sm:h-5 sm:w-5 h-4 w-4" />
                            Atras
                        </Link>
                    </div>
                </div>
                <div className="sm:mt-3 2xl:mt-4 mt-1 bg-gray-50 rounded-lg border border-gray-200">
                    <Error title="Error en el Formulario" errors={errors} />
                    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
                        <div className="px-4 py-4">
                            <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 2xl:gap-4 sm:gap-2 gap-1">
                                {/* initJSXtitulo_proyecto */}

        <div className="">
            <label htmlFor="titulo_proyecto" className="block font-medium text-black 2xl:text-sm text-xs">
                Titulo Proyecto
            </label>
            <input type="text" name="titulo_proyecto" value={proyectos?.titulo_proyecto} onChange={e => set_proyectos({ ...proyectos, titulo_proyecto: e.target.value })} required  className="focus:ring-blue-300 focus:border-blue-300 block w-full shadow-sm 2xl:text-sm text-xs border-gray-300 rounded-md " />
        </div>
        
{/* endJSXtitulo_proyecto */}
{/* initJSXdescripcion */}

        <div className="">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-800">
                Descripcion
            </label>
            <textarea name="descripcion" value={proyectos?.descripcion} onChange={e => set_proyectos({ ...proyectos, descripcion: e.target.value })}  rows="3" className="focus:ring-blue-300 focus:border-blue-300 block w-full shadow-sm 2xl:text-sm text-xs border-gray-300 rounded-md "/>
        </div>
        
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <div className="col-span-3">
            <FilesUpload label="Fotos" name="fotos" files={proyectos?.fotos} setFiles={e => set_proyectos({ ...proyectos, fotos: e })} ref={fotos_upload} accept="image/*" maxFiles={5} maxSize={5} maxSizeImage={0.5}  />
        </div>
        
{/* endJSXfotos */}
{/* initJSXvideo */}

        <div className="col-span-3">
            <FilesUpload label="Video" name="video" files={proyectos?.video} setFiles={e => set_proyectos({ ...proyectos, video: e })} ref={video_upload} accept="video/*" maxFiles={1} maxSize={10} maxSizeImage={0.5}  />
        </div>
        
{/* endJSXvideo */}
{/* initJSXpropietario */}

                <div className="col-span-1">
                    <Autocomplete label="Seleccionar Propietario" options={user_list} fields={["name"]} value={proyectos?.propietario} setValue={e => set_proyectos({ ...proyectos, propietario: e })} />
                </div>
                
{/* endJSXpropietario */}
{/* inputFields */}
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="flex justify-end">
                                <Link
                                    to="../user/list"
                                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}