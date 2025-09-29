//initJSid_proyecto
import Select from "@/components/Select1";
//endJSid_proyecto
//initJSid_propietario
import Autocomplete from "@/components/Autocomplete";
//endJSid_propietario
import Page from "@/components/Page";
import "./Matches_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Matches_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
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
            //initJSid_propietario
client.post('/user/list').then(r => set_user_list(r?.data?.list || [])),
//endJSid_propietario

//initJSid_proyecto
client.post('/proyectos/list').then(r => set_proyectos_list(r?.data?.list || [])),
//endJSid_proyecto
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
        

//initJSid_proyecto
if (!matches?.id_proyecto) errors.push("El campo Proyecto es obligatorio");
//endJSid_proyecto
//validaciones
        //Otros Validadores
        if (errors.length == 0) {
            store.setLoading(true);
            


//beforeSend
            if (id) {
                client.put(`/matches/update/${id}`, { matches }).then(r => {
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/matches/create`, { matches }).then(r => {
                    history.push('/app/matches/list');
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
                    set_matches(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Matches" : "Crear Matches"} backURL={`/app/matches/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXid_propietario */}

                <Autocomplete label="Seleccionar Usuario Propietario" options={user_list} field="name" value={matches?.id_propietario} setValue={e => set_matches({ ...matches, id_propietario: e })} />
                
{/* endJSXid_propietario */}
{/* initJSXid_usuario_interesado */}

                <Autocomplete label="Seleccionar Usuario Interesado" options={user_list} field="name" value={matches?.id_usuario_interesado} setValue={e => set_matches({ ...matches, id_usuario_interesado: e })} />
                
{/* endJSXid_usuario_interesado */}
{/* initJSXid_proyecto */}

                <Select label="Seleccionar Proyecto" options={proyectos_list} field="titulo_proyecto" value={matches?.id_proyecto} setValue={e => set_matches({ ...matches, id_proyecto: e })} />
                
{/* endJSXid_proyecto */}
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