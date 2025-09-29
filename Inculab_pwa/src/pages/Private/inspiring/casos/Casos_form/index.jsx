//initJSid_categoria
import MultiCheckbox from "@/components/MultiCheckbox";
//endJSid_categoria
//initJSfotos
import FilesUpload from "@/components/FilesUpload";
//endJSfotos
import Page from "@/components/Page";
import "./Casos_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Casos_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
    //fields
    const [casos, set_casos] = useState({
        //initJStitulo
titulo: "",
//endJStitulo
//initJSdescripcion
descripcion: "",
//endJSdescripcion
//initJSfotos
fotos: [],
//endJSfotos
//initJSvideos
videos: [],
//endJSvideos


//initJSid_categoria
id_categoria: [],
//endJSid_categoria
//fieldsModel
    });
    

//initJSfotos

        const fotos_upload = useRef();
        
//endJSfotos
//initJSvideos

        const videos_upload = useRef();
        
//endJSvideos



//extraStates

    





//initJSid_categoria
const [categoria_list, set_categoria_list] = useState([]);
//endJSid_categoria
//foreigns

    async function getForeigns() {
        store.setLoading(true);
        Promise.all([
            





//initJSid_categoria
client.post('/categoria/list').then(r => set_categoria_list(r?.data?.list || [])),
//endJSid_categoria
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
        //initJStitulo
if (!casos?.titulo) errors.push("El campo Titulo es obligatorio");
//endJStitulo






//validaciones
        //Otros Validadores
        if (errors.length == 0) {
            store.setLoading(true);
            

//initJSfotos

        casos.fotos = [...casos.fotos, ...await fotos_upload.current.uploadFilesComponent()];
        
//endJSfotos
//initJSvideos

        casos.videos = [...casos.videos, ...await videos_upload.current.uploadFilesComponent()];
        
//endJSvideos



//beforeSend
            if (id) {
                client.put(`/casos/update/${id}`, { casos }).then(r => {
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/casos/create`, { casos }).then(r => {
                    history.push('/app/casos/list');
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
                .post("/casos/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(casos).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : casos[key];
                        return acc;
                    }, {});
                    set_casos(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Casos" : "Crear Casos"} backURL={`/app/casos/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXtitulo */}

        <Input type="text" label="Titulo" name="titulo" value={casos?.titulo} setValue={set_casos} errorText="Ingrese un Titulo válido" required={true}  />
        
{/* endJSXtitulo */}
{/* initJSXdescripcion */}

        <Input type="textarea" label="Descripcion" name="descripcion" value={casos?.descripcion} setValue={set_casos} errorText="Ingrese un Descripcion válido" required={false}  />
        
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <FilesUpload label="Fotos" name="fotos" files={casos?.fotos} setFiles={e => set_casos({ ...casos, fotos: e })} ref={fotos_upload} accept="image/*" maxFiles={4} maxSize={5} maxSizeImage={0.5}  />
        
{/* endJSXfotos */}
{/* initJSXvideos */}

        <FilesUpload label="Videos" name="videos" files={casos?.videos} setFiles={e => set_casos({ ...casos, videos: e })} ref={videos_upload} accept="video/*" maxFiles={2} maxSize={10} maxSizeImage={0.5}  />
        
{/* endJSXvideos */}


{/* initJSXid_categoria */}

                <MultiCheckbox label="Seleccionar Categorias" options={categoria_list} field="nombre_categoria" value={casos?.id_categoria} setValue={e => set_casos({ ...casos, id_categoria: e })} />
                
{/* endJSXid_categoria */}
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