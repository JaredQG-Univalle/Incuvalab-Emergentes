//initJSfoto
import FilesViewer from "@/components/FilesViewer";
//endJSfoto
import Page from "@/components/Page";
import { IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonModal, IonSearchbar } from "@ionic/react";
import "./Autor_list.css";
import { chevronForward, print } from "ionicons/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";
import { useLocation } from "react-router";
import Autor_report from "./Autor_report";

const docForPage = 50;

export default function Autor_list() {
    const location = useLocation();
    const store = useContext(StoreContext);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [sort, setSort] = useState(null);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);
    const [find, setFind] = useState({});
    const modal = useRef(null);
    const [permissions, set_permissions] = useState({});
    const select = [];
    const populate = [
        "last_user",
        //foreigns
    ];

    function getList(query) {
        store.setLoading(true);
        client.post('/autor/list', {
            query: {
                ...query,
                populate,
                //select
            }
        }).then(r => {
            setList(r.data.list);
            setTotal(r.data.count);
            setMaxPage(Math.ceil(r.data.count / docForPage));
        }).finally(() => {
            store.setLoading(false);
        });
    }

    function nextPage(ev) {
        if (page < maxPage) {
            client.post('/autor/list', {
                query: {
                    search: find,
                    page: page + 1,
                    limit: docForPage,
                    sort: sort,
                    count: false
                }
            }).then(r => {
                setList([list, ...r.data.list]);
            }).finally(() => {
                ev.target.complete();
            });
            setPage(page + 1);
        }
    }

    function search(value) {
        value = value.trim();
        var obj = { all: value };
        setFind(obj);
        setPage(1);
        getList({
            page: 1,
            limit: docForPage,
            search: obj,
            count: true
        });
    }

    useEffect(() => {
        var temp = {};
        temp.read = store.checkPermissions(["read_autor"]);
        temp.create = store.checkPermissions(["create_autor"]);
        temp.report = store.checkPermissions(["report_autor"]);
        temp.update = store.checkPermissions(["update_autor"]);
        temp.delete = store.checkPermissions(["delete_autor"]);
        set_permissions(temp);
        getList({
            page: page,
            limit: docForPage,
            count: true
        });
    }, [location.pathname])

    return (
        <Page title="Lista de Autor" createURL={permissions.create ? "/app/autor/create" : null} permissions="read_autor">
            <IonSearchbar animated={true} debounce={1000} placeholder="Buscar..." onIonInput={e => search(e.target.value)} />
            <IonList className="w-full">
                {list.map((autor, index) => (
                    <React.Fragment key={index}>
                        <IonItem routerLink={`/app/autor/detail/${autor._id}`} routerDirection="forward">
                            <label className="bg-primary px-2 py-1 rounded-full mr-1 text-xs">{index + 1}</label>
                            <IonLabel className="font-semibold">
                                {/* initJSXnombre */}
{autor?.nombre}
{/* endJSXnombre */}

                            </IonLabel>
                            <IonIcon
                                icon={chevronForward}
                                className="cursor-pointer"
                            />
                        </IonItem>
                        <div className="p-4 border-t">
                            {/* initJSXfoto */}

            <p><span className="font-semibold" style={{
                width: autor?.foto.length <= 1 ? '134px' :
                autor?.foto.length === 2 ? '268px' : '400px'
            }}>Foto:</span>
                <FilesViewer files={autor?.foto} extraClass="max-h-36" />
            </p>
            
{/* endJSXfoto */}

{/* initJSXprofesion */}
<p><span className="font-semibold">Profesion:</span>{autor?.profesion}</p>
{/* endJSXprofesion */}
{/* fields */}
                        </div>
                    </React.Fragment>
                ))}
            </IonList>
            <IonInfiniteScroll onIonInfinite={(ev) => nextPage(ev)}>
                <IonInfiniteScrollContent loadingText="Cargando..." loadingSpinner="bubbles" />
            </IonInfiniteScroll>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton id="open-report">
                    <IonIcon icon={print}></IonIcon>
                </IonFabButton>
            </IonFab>
            <IonModal ref={modal} trigger="open-report">
                <Autor_report modal={modal} camposInit={[
                    //camposDefault
                ]} />
            </IonModal>
        </Page>
    )
}