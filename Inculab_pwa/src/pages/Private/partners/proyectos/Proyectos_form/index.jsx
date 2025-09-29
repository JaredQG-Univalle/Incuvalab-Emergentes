//initJSpropietario
import Autocomplete from "@/components/Autocomplete";
//endJSpropietario
//initJSfotos
import FilesUpload from "@/components/FilesUpload";
//endJSfotos
import Page from "@/components/Page";
import "./Proyectos_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Proyectos_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
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
            



//initJSpropietario
client.post('/user/list').then(r => set_user_list(r?.data?.list || [])),
//endJSpropietario
//callForeigns
        ]).finally(() => {
            store.setLoading(false);
        });
    }

    function showE(message) {
        showErrors({
            header: 'Error!',
            message: message,
            buttons: [{
                text: 'Aceptar',
                cssClass: 'alert-button-danger',
            }],
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var errors = [];
        const isInvalid = Object.values(validate).some(val => val === false);
        if (isInvalid) errors.push("-Revisa los valores ingresados");
        //initJStitulo_proyecto
if (!proyectos?.titulo_proyecto) errors.push("El campo Titulo Proyecto es obligatorio");
//endJStitulo_proyecto



//initJSpropietario
if (!proyectos?.propietario) errors.push("El campo Propietario es obligatorio");
//endJSpropietario
//validaciones
        //Otros Validadores
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
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/proyectos/create`, { proyectos }).then(r => {
                    history.push('/app/proyectos/list');
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            }
        } else {
            const errorMessageText = errors.join('\n');
            showErrors({
                header: 'Error!',
                message: errorMessageText,
                buttons: [{
                    text: 'Aceptar',
                    cssClass: 'alert-button-danger',
                }],
            })
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
                    set_proyectos(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Proyectos" : "Crear Proyectos"} backURL={`/app/proyectos/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXtitulo_proyecto */}

        <Input type="text" label="Titulo Proyecto" name="titulo_proyecto" value={proyectos?.titulo_proyecto} setValue={set_proyectos} errorText="Ingrese un Titulo Proyecto válido" required={true}  />
        
{/* endJSXtitulo_proyecto */}
{/* initJSXdescripcion */}

        <Input type="textarea" label="Descripcion" name="descripcion" value={proyectos?.descripcion} setValue={set_proyectos} errorText="Ingrese un Descripcion válido" required={false}  />
        
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <FilesUpload label="Fotos" name="fotos" files={proyectos?.fotos} setFiles={e => set_proyectos({ ...proyectos, fotos: e })} ref={fotos_upload} accept="image/*" maxFiles={5} maxSize={5} maxSizeImage={0.5}  />
        
{/* endJSXfotos */}
{/* initJSXvideo */}

        <FilesUpload label="Video" name="video" files={proyectos?.video} setFiles={e => set_proyectos({ ...proyectos, video: e })} ref={video_upload} accept="video/*" maxFiles={1} maxSize={10} maxSizeImage={0.5}  />
        
{/* endJSXvideo */}
{/* initJSXpropietario */}

                <Autocomplete label="Seleccionar Propietario" options={user_list} field="name" value={proyectos?.propietario} setValue={e => set_proyectos({ ...proyectos, propietario: e })} />
                
{/* endJSXpropietario */}
{/* inputFields */}
                </IonList>
                <button type="submit" style={{ display: 'none' }} ref={submitRef}>Submit</button>
            </form>
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton color="success" onClick={() => submitRef.current && submitRef.current.click()}>
                    <IonIcon icon={save} />
                </IonFabButton>
            </IonFab>
        </Page>
    )
}