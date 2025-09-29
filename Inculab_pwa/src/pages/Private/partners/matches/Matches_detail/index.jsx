import Page from "@/components/Page";
import "./Matches_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Matches_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [matches, set_matches] = useState({});
    const populate = [
        //initJSid_propietario
"id_propietario",
//endJSid_propietario
//initJSid_usuario_interesado
"id_usuario_interesado",
//endJSid_usuario_interesado
//initJSid_proyecto
"id_proyecto",
//endJSid_proyecto
//foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/matches/delete/${id}`).then(r => {
            history.push('/app/matches/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/matches/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_matches(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Matches" backURL="/app/matches/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/matches/update/${id}`}>
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
                    {/* initJSXid_propietario */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Usuario Propietario:</IonLabel>
            <p>{matches?.id_propietario?.name}</p>
        </IonItem>
        
{/* endJSXid_propietario */}
{/* initJSXid_usuario_interesado */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Usuario Interesado:</IonLabel>
            <p>{matches?.id_usuario_interesado?.name}</p>
        </IonItem>
        
{/* endJSXid_usuario_interesado */}
{/* initJSXid_proyecto */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Proyecto:</IonLabel>
            <p>{matches?.id_proyecto?.titulo_proyecto}</p>
        </IonItem>
        
{/* endJSXid_proyecto */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{matches?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(matches?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(matches?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}