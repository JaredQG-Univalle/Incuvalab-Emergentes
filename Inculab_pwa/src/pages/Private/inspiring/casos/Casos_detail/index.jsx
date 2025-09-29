//initJSfotos
import FilesViewer from "@/components/FilesViewer";
//endJSfotos
import Page from "@/components/Page";
import "./Casos_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Casos_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [casos, set_casos] = useState({});
    const populate = [
        //initJSid_categoria
"id_categoria",
//endJSid_categoria
//foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/casos/delete/${id}`).then(r => {
            history.push('/app/casos/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/casos/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_casos(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Casos" backURL="/app/casos/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/casos/update/${id}`}>
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
                    {/* initJSXtitulo */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Titulo:</IonLabel>
            <p>{casos?.titulo}</p>
        </IonItem>
        
{/* endJSXtitulo */}
{/* initJSXdescripcion */}

            <IonItem>
                <IonLabel position="stacked" className="font-bold">Descripcion:</IonLabel>
                <p style={{ whiteSpace: 'pre-wrap' }}>{casos?.descripcion}</p>
            </IonItem>
            
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Fotos:</IonLabel>
            <p>{<FilesViewer files={casos?.fotos} />}</p>
        </IonItem>
        
{/* endJSXfotos */}
{/* initJSXvideos */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Videos:</IonLabel>
            <p>{<FilesViewer files={casos?.videos} />}</p>
        </IonItem>
        
{/* endJSXvideos */}


{/* initJSXid_categoria */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Categorias:</IonLabel>
            <p>{casos?.id_categoria?.map(i => i.nombre_categoria).join(", ")}</p>
        </IonItem>
        
{/* endJSXid_categoria */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{casos?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(casos?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(casos?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}