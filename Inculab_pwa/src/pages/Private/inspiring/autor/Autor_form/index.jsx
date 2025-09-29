//initJSfoto
import FilesUpload from "@/components/FilesUpload";
//endJSfoto
import Page from "@/components/Page";
import "./Autor_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Autor_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
    //fields
    const [autor, set_autor] = useState({
        //initJSnombre
nombre: "",
//endJSnombre
//initJSfoto
foto: [],
//endJSfoto
//initJSbiografia
biografia: "",
//endJSbiografia
//initJSprofesion
profesion: "",
//endJSprofesion
//fieldsModel
    });
    
//initJSfoto

        const foto_upload = useRef();
        
//endJSfoto


//extraStates

    



//foreigns

    async function getForeigns() {
        store.setLoading(true);
        Promise.all([
            



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
        //initJSnombre
if (!autor?.nombre) errors.push("El campo Nombre es obligatorio");
//endJSnombre
//initJSfoto
if (!foto_upload.current.localFiles.length) errors.push("El campo Foto es obligatorio");
//endJSfoto


//validaciones
        //Otros Validadores
        if (errors.length == 0) {
            store.setLoading(true);
            
//initJSfoto

        autor.foto = [...autor.foto, ...await foto_upload.current.uploadFilesComponent()];
        
//endJSfoto


//beforeSend
            if (id) {
                client.put(`/autor/update/${id}`, { autor }).then(r => {
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/autor/create`, { autor }).then(r => {
                    history.push('/app/autor/list');
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
                .post("/autor/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(autor).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : autor[key];
                        return acc;
                    }, {});
                    set_autor(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Autor" : "Crear Autor"} backURL={`/app/autor/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXnombre */}

        <Input type="text" label="Nombre" name="nombre" value={autor?.nombre} setValue={set_autor} errorText="Ingrese un Nombre válido" required={true}  />
        
{/* endJSXnombre */}
{/* initJSXfoto */}

        <FilesUpload label="Foto" name="foto" files={autor?.foto} setFiles={e => set_autor({ ...autor, foto: e })} ref={foto_upload} accept="image/*" maxFiles={1} maxSize={5} maxSizeImage={0.5}  />
        
{/* endJSXfoto */}
{/* initJSXbiografia */}

        <Input type="textarea" label="Biografia" name="biografia" value={autor?.biografia} setValue={set_autor} errorText="Ingrese un Biografia válido" required={false}  />
        
{/* endJSXbiografia */}
{/* initJSXprofesion */}

        <Input type="text" label="Profesion" name="profesion" value={autor?.profesion} setValue={set_autor} errorText="Ingrese un Profesion válido" required={false}  />
        
{/* endJSXprofesion */}
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