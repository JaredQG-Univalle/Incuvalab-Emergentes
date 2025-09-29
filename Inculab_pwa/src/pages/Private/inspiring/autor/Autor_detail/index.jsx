//initJSfoto
import FilesViewer from "@/components/FilesViewer";
//endJSfoto
import Page from "@/components/Page";
import "./Autor_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Autor_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [autor, set_autor] = useState({});
    const populate = [
        //foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/autor/delete/${id}`).then(r => {
            history.push('/app/autor/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/autor/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_autor(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Autor" backURL="/app/autor/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/autor/update/${id}`}>
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
                    {/* initJSXnombre */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Nombre:</IonLabel>
            <p>{autor?.nombre}</p>
        </IonItem>
        
{/* endJSXnombre */}
{/* initJSXfoto */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Foto:</IonLabel>
            <p>{<FilesViewer files={autor?.foto} />}</p>
        </IonItem>
        
{/* endJSXfoto */}
{/* initJSXbiografia */}

            <IonItem>
                <IonLabel position="stacked" className="font-bold">Biografia:</IonLabel>
                <p style={{ whiteSpace: 'pre-wrap' }}>{autor?.biografia}</p>
            </IonItem>
            
{/* endJSXbiografia */}
{/* initJSXprofesion */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Profesion:</IonLabel>
            <p>{autor?.profesion}</p>
        </IonItem>
        
{/* endJSXprofesion */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{autor?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(autor?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(autor?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}