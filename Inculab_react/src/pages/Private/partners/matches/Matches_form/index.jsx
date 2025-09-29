//initJSid_proyecto
import Select from "@/components/Select1";
//endJSid_proyecto
//initJSid_propietario
import Autocomplete from "@/components/Autocomplete";
//endJSid_propietario
import Icon from "@/components/Icon";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Error from '@/components/Error';
import { StoreContext } from "@/context/store";
import './Matches_form.css';
import client from "@/api";

export default function Matches_form() {
    //essentials
    const { id } = useParams();
    const store = useContext(StoreContext);
    const navigate = useNavigate();
    const [errors, set_errors] = useState([]);
    //fields
    const [matches, set_matches] = useState({
        //initJSid_propietario
id_propietario: "",
//endJSid_propietario
//initJSid_usuario_interesado
id_usuario_interesado: "",
//endJSid_usuario_interesado
//initJSid_proyecto
id_proyecto: "",
//endJSid_proyecto
//fieldsModel
    });
    


//extraStates

    //initJSid_propietario
const [user_list, set_user_list] = useState([]);
//endJSid_propietario

//initJSid_proyecto
const [proyectos_list, set_proyectos_list] = useState([]);
//endJSid_proyecto
//foreigns

    async function getForeigns() {
        store.setLoading(true);
        Promise.all([
            

//initJSid_proyecto
client.post('/proyectos/list').then(r => set_proyectos_list(r?.data?.list || [])),
//endJSid_proyecto
//callForeigns
        ]).finally(() => {
            store.setLoading(false);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var errors = [];
        

//initJSid_proyecto
if (!matches?.id_proyecto) errors.push("El campo Proyecto es obligatorio");
//endJSid_proyecto
//validaciones
        if (errors.length == 0) {
            store.setLoading(true);
            


//beforeSend
            if (id) {
                client.put(`/matches/update/${id}`, { matches }).then(r => {
                    store.showSuccess({ message: "Matches Actualizado", redirect: "/dashboard/matches/list", navigate });
                }).catch(e => {
                    const errorMessage = e?.response?.data?.message || "Error al Actualizar Registro";
                    set_errors([errorMessage]);
                    store.showErrors([errorMessage]);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/matches/create`, { matches }).then(r => {
                    store.showSuccess({ message: "Matches Creado", redirect: "/dashboard/matches/list", navigate });
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
                .post("/matches/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(matches).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : matches[key];
                        return acc;
                    }, {});
                    


//convertRead
                    set_matches(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [id]);

    return (
        <>
            <div className="px-2 py-1 sm:py-2 xl:py-4">
                <div className="bg-gray-50 px-1  py-0.5 sm:py-0.5 2xl:py-1  sm:flex flex flex-wrap-reverse sm:items-center w-full">
                    <div className="sm:flex-auto">
                        <h1 className="ttext-balance 2xl:text-xl sm:text-lg text-sm  mt-2 sm:mt-0 font-semibold text-gray-900 uppercase">{id ? "EDITAR Matches" : "REGISTRAR Matches"}</h1>
                    </div>
                    <div className="ml-8 sm:ml-0 flex-none">
                        <Link
                            to="../matches/list"
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
                                {/* initJSXid_propietario */}

                <div className="col-span-1">
                    <Autocomplete label="Seleccionar Usuario Propietario" options={user_list} fields={["name"]} value={matches?.id_propietario} setValue={e => set_matches({ ...matches, id_propietario: e })} />
                </div>
                
{/* endJSXid_propietario */}
{/* initJSXid_usuario_interesado */}

                <div className="col-span-1">
                    <Autocomplete label="Seleccionar Usuario Interesado" options={user_list} fields={["name"]} value={matches?.id_usuario_interesado} setValue={e => set_matches({ ...matches, id_usuario_interesado: e })} />
                </div>
                
{/* endJSXid_usuario_interesado */}
{/* initJSXid_proyecto */}

                <div className="col-span-1">
                    <Select label="Seleccionar Proyecto" options={proyectos_list} field="titulo_proyecto" value={matches?.id_proyecto} setValue={e => set_matches({ ...matches, id_proyecto: e })} />
                </div>
                
{/* endJSXid_proyecto */}
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