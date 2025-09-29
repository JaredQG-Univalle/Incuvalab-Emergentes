import Page from "@/components/Page";
import "./Categoria_detail.css";
import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronDownCircle, create, trash } from "ionicons/icons";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";

export default function Categoria_detail() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const [categoria, set_categoria] = useState({});
    const populate = [
        //foreigns
        "last_user",
    ];

    function deleteRegister() {
        store.setLoading(true);
        client.delete(`/categoria/delete/${id}`).then(r => {
            history.push('/app/categoria/list');
        });
    }

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/categoria/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_categoria(r?.data);
            }).finally(() => store.setLoading(false))
        }
    }, [location.pathname]);

    return (
        <Page title="Ver Categoria" backURL="/app/categoria/list">
            <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                <IonFabButton>
                    <IonIcon icon={chevronDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <Link to={`/app/categoria/update/${id}`}>
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
                    {/* initJSXnombre_categoria */}

        <IonItem>
            <IonLabel position="stacked" className="font-bold">Nombre Categoria:</IonLabel>
            <p>{categoria?.nombre_categoria}</p>
        </IonItem>
        
{/* endJSXnombre_categoria */}
{/* initJSXdescripcion */}

            <IonItem>
                <IonLabel position="stacked" className="font-bold">Descripcion:</IonLabel>
                <p style={{ whiteSpace: 'pre-wrap' }}>{categoria?.descripcion}</p>
            </IonItem>
            
{/* endJSXdescripcion */}
{/* fieldsDetail */}
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Último Editor:</IonLabel>
                        <p>{categoria?.last_user?.name}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Creación:</IonLabel>
                        <p>{new Date(categoria?.createdAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" className="font-bold">Fecha de Actualización:</IonLabel>
                        <p>{new Date(categoria?.updatedAt).toLocaleString("es-ES")}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </Page>
    )
}