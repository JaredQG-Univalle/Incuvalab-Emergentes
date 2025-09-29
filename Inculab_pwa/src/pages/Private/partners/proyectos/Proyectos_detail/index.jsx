//initJSfotos
import FilesViewer from "@/components/FilesViewer";
//endJSfotos
import Page from "@/components/Page";
import "./Proyectos_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Proyectos_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [proyectos, set_proyectos] = useState({});
    const populate = [
        //initJSpropietario
"propietario",
//endJSpropietario
//foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/proyectos/delete/${id}`).then(r => {
            history.push('/app/proyectos/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/proyectos/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_proyectos(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Proyectos" backURL="/app/proyectos/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/proyectos/update/${id}`}>
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
                    {/* initJSXtitulo_proyecto */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Titulo Proyecto:</IonLabel>
            <p>{proyectos?.titulo_proyecto}</p>
        </IonItem>
        
{/* endJSXtitulo_proyecto */}
{/* initJSXdescripcion */}

            <IonItem>
                <IonLabel position="stacked" className="font-bold">Descripcion:</IonLabel>
                <p style={{ whiteSpace: 'pre-wrap' }}>{proyectos?.descripcion}</p>
            </IonItem>
            
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Fotos:</IonLabel>
            <p>{<FilesViewer files={proyectos?.fotos} />}</p>
        </IonItem>
        
{/* endJSXfotos */}
{/* initJSXvideo */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Video:</IonLabel>
            <p>{<FilesViewer files={proyectos?.video} />}</p>
        </IonItem>
        
{/* endJSXvideo */}
{/* initJSXpropietario */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Propietario:</IonLabel>
            <p>{proyectos?.propietario?.name}</p>
        </IonItem>
        
{/* endJSXpropietario */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{proyectos?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(proyectos?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(proyectos?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}