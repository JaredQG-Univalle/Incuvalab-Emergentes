//initJSid_receiver
import Autocomplete from "@/components/Autocomplete";
//endJSid_receiver
//initJSid_sender
import Select from "@/components/Select1";
//endJSid_sender
import Page from "@/components/Page";
import "./Mensajes_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Mensajes_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
    //fields
    const [mensajes, set_mensajes] = useState({
        //initJSid_sender
id_sender: "",
//endJSid_sender
//initJSid_receiver
id_receiver: "",
//endJSid_receiver
//initJSmessage
message: "",
//endJSmessage
//fieldsModel
    });
    


//extraStates

    //initJSid_sender
const [user_list, set_user_list] = useState([]);
//endJSid_sender


//foreigns

    async function getForeigns() {
        store.setLoading(true);
        Promise.all([
            //initJSid_sender
client.post('/user/list').then(r => set_user_list(r?.data?.list || [])),
//endJSid_sender


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
        //initJSid_sender
if (!mensajes?.id_sender) errors.push("El campo Remitente es obligatorio");
//endJSid_sender


//validaciones
        //Otros Validadores
        if (errors.length == 0) {
            store.setLoading(true);
            


//beforeSend
            if (id) {
                client.put(`/mensajes/update/${id}`, { mensajes }).then(r => {
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/mensajes/create`, { mensajes }).then(r => {
                    history.push('/app/mensajes/list');
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
                .post("/mensajes/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(mensajes).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : mensajes[key];
                        return acc;
                    }, {});
                    set_mensajes(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Mensajes" : "Crear Mensajes"} backURL={`/app/mensajes/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXid_sender */}

                <Select label="Seleccionar Remitente" options={user_list} field="name" value={mensajes?.id_sender} setValue={e => set_mensajes({ ...mensajes, id_sender: e })} />
                
{/* endJSXid_sender */}
{/* initJSXid_receiver */}

                <Autocomplete label="Seleccionar Destinatario" options={user_list} field="name" value={mensajes?.id_receiver} setValue={e => set_mensajes({ ...mensajes, id_receiver: e })} />
                
{/* endJSXid_receiver */}
{/* initJSXmessage */}

        <Input type="textarea" label="Mensaje" name="message" value={mensajes?.message} setValue={set_mensajes} errorText="Ingrese un Mensaje válido" required={false}  />
        
{/* endJSXmessage */}
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