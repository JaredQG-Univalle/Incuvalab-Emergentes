import Page from "@/components/Page";
import { IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonModal, IonSearchbar } from "@ionic/react";
import "./Mensajes_list.css";
import { chevronForward, print } from "ionicons/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "@/context/store";
import client from "@/api";
import { useLocation } from "react-router";
import Mensajes_report from "./Mensajes_report";

const docForPage = 50;

export default function Mensajes_list() {
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
        //initJSid_sender
"id_sender",
//endJSid_sender
//foreigns
    ];

    function getList(query) {
        store.setLoading(true);
        client.post('/mensajes/list', {
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
            client.post('/mensajes/list', {
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
        temp.read = store.checkPermissions(["read_mensajes"]);
        temp.create = store.checkPermissions(["create_mensajes"]);
        temp.report = store.checkPermissions(["report_mensajes"]);
        temp.update = store.checkPermissions(["update_mensajes"]);
        temp.delete = store.checkPermissions(["delete_mensajes"]);
        set_permissions(temp);
        getList({
            page: page,
            limit: docForPage,
            count: true
        });
    }, [location.pathname])

    return (
        <Page title="Lista de Mensajes" createURL={permissions.create ? "/app/mensajes/create" : null} permissions="read_mensajes">
            <IonSearchbar animated={true} debounce={1000} placeholder="Buscar..." onIonInput={e => search(e.target.value)} />
            <IonList className="w-full">
                {list.map((mensajes, index) => (
                    <React.Fragment key={index}>
                        <IonItem routerLink={`/app/mensajes/detail/${mensajes._id}`} routerDirection="forward">
                            <label className="bg-primary px-2 py-1 rounded-full mr-1 text-xs">{index + 1}</label>
                            <IonLabel className="font-semibold">
                                {/* initJSXid_sender */}
{mensajes?.id_sender?.name}
{/* endJSXid_sender */}

                            </IonLabel>
                            <IonIcon
                                icon={chevronForward}
                                className="cursor-pointer"
                            />
                        </IonItem>
                        <div className="p-4 border-t">
                            

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
                <Mensajes_report modal={modal} camposInit={[
                    //camposDefault
                ]} />
            </IonModal>
        </Page>
    )
}