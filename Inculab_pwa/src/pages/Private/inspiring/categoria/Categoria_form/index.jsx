import Page from "@/components/Page";
import "./Categoria_form.css";
import { IonFab, IonFabButton, IonIcon, IonList, useIonAlert } from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { StoreContext } from "@/context/store";
import { useContext, useEffect, useRef, useState } from "react";
import { save } from "ionicons/icons";
import client from "@/api";
import Input from "@/components/Input";

export default function Categoria_form() {
    const location = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const store = useContext(StoreContext);
    const submitRef = useRef(null);
    const [showErrors] = useIonAlert();
    const [validate, set_validate] = useState({});
    //fields
    const [categoria, set_categoria] = useState({
        //initJSnombre_categoria
nombre_categoria: "",
//endJSnombre_categoria
//initJSdescripcion
descripcion: "",
//endJSdescripcion
//fieldsModel
    });
    

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
        //initJSnombre_categoria
if (!categoria?.nombre_categoria) errors.push("El campo Nombre Categoria es obligatorio");
//endJSnombre_categoria

//validaciones
        //Otros Validadores
        if (errors.length == 0) {
            store.setLoading(true);
            

//beforeSend
            if (id) {
                client.put(`/categoria/update/${id}`, { categoria }).then(r => {
                    history.goBack();
                }).catch(e => {
                    if (e?.response?.data?.message) showE(e?.response?.data?.message);
                }).finally(() => store.setLoading(false));
            } else {
                client.post(`/categoria/create`, { categoria }).then(r => {
                    history.push('/app/categoria/list');
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
                .post("/categoria/read", {
                    query: {
                        find: { _id: id },
                    },
                })
                .then((r) => {
                    const fetchedData = r?.data || {};
                    const update = Object.keys(categoria).reduce((acc, key) => {
                        acc[key] = fetchedData.hasOwnProperty(key) && fetchedData[key] !== null ? fetchedData[key] : categoria[key];
                        return acc;
                    }, {});
                    set_categoria(update);
                })
                .finally(() => store.setLoading(false));
        }
    }, [location.pathname]);

    return (
        <Page title={id ? "Editar Categoria" : "Crear Categoria"} backURL={`/app/categoria/list`}>
            <form onSubmit={handleSubmit}>
                <IonList>
                    {/* initJSXnombre_categoria */}

        <Input type="text" label="Nombre Categoria" name="nombre_categoria" value={categoria?.nombre_categoria} setValue={set_categoria} errorText="Ingrese un Nombre Categoria válido" required={true}  />
        
{/* endJSXnombre_categoria */}
{/* initJSXdescripcion */}

        <Input type="textarea" label="Descripcion" name="descripcion" value={categoria?.descripcion} setValue={set_categoria} errorText="Ingrese un Descripcion válido" required={false}  />
        
{/* endJSXdescripcion */}
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