import Page from "@/components/Page";
import "./Mensajes_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Mensajes_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [mensajes, set_mensajes] = useState({});
    const populate = [
        //initJSid_sender
"id_sender",
//endJSid_sender
//initJSid_receiver
"id_receiver",
//endJSid_receiver
//foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/mensajes/delete/${id}`).then(r => {
            history.push('/app/mensajes/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/mensajes/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_mensajes(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Mensajes" backURL="/app/mensajes/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/mensajes/update/${id}`}>
                        <IonFabButton>
                            <IonIcon color="primary" icon={create}></IonIcon>
                        </IonFabButton>
                    </Link>
                    <IonFabButton id="present-alert">
                        <IonIcon color="danger" icon={trash}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
            {/* CONFIRM DELETE */}
            <IonAlert
                header="Alerta!"
                message='Esta seguro que desea eliminar el registro?'
                trigger="present-alert"
                buttons={[
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            console.log('Alert canceled');
                        },
                    },
                    {
                        text: 'Confirmar',
                        role: 'confirm',
                        cssClass: 'alert-button-danger',
                        handler: () => {
                            console.log('Alert confirmed');
                            deleteRegister();
                        },
                    },
                ]}
                onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
            ></IonAlert>
            <IonContent>
                <IonList>
                    {/* initJSXid_sender */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Remitente:</IonLabel>
            <p>{mensajes?.id_sender?.name}</p>
        </IonItem>
        
{/* endJSXid_sender */}
{/* initJSXid_receiver */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Destinatario:</IonLabel>
            <p>{mensajes?.id_receiver?.name}</p>
        </IonItem>
        
{/* endJSXid_receiver */}
{/* initJSXmessage */}

            <IonItem>
                <IonLabel position="stacked" className="font-bold">Mensaje:</IonLabel>
                <p style={{ whiteSpace: 'pre-wrap' }}>{mensajes?.message}</p>
            </IonItem>
            
{/* endJSXmessage */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{mensajes?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(mensajes?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(mensajes?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}