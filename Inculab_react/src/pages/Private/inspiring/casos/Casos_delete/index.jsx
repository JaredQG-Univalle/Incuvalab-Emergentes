import FilesViewer from "@/components/FilesViewer";
import Icon from "@/components/Icon";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "@/context/store";
import './Casos_delete.css';
import client from "@/api";

export default function Casos_delete() {
    const { id } = useParams();
    const store = useContext(StoreContext);
    const navigate = useNavigate();
    const [casos, set_casos] = useState({});
    const [showModal, setShowModal] = useState(false);

    const populate = [
        "id_categoria",
        "last_user",
    ];

    function deleteCasos() {
        store.setLoading(true);
        client.delete(`/casos/delete/${id}`).then(r => {
            store.showSuccess({ message: "Registro Eliminado", redirect: "/dashboard/casos/list", navigate });
        }).catch(e => {
            store.showErrors(["Error al Eliminar el Registro"]);
        }).finally(() => store.setLoading(false));
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
            }).finally(() => store.setLoading(false));
        }
    }, []);

    const confirmDeleteModal = (
        showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">¿Estás seguro?</h2>
                    <p className="text-sm text-gray-600 mb-6">Esta acción eliminará el caso de forma permanente.</p>
                    <div className="flex justify-end space-x-3">
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                deleteCasos();
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Sí, eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    return (
        <>
            {confirmDeleteModal}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 px-4 py-3 rounded-lg border-gray-200 border sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900 uppercase">ELIMINAR Casos</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            to="../casos/list"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                        >
                            <Icon name="ArrowLeftCircleIcon" className="h-6 w-6" />
                            Atras
                        </Link>
                    </div>
                </div>

                <div className="sm:mt-3 2xl:mt-4 mt-1 px-4 py-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-lg mt-2 max-w-xl text-2xl text-gray-500">
                        <p>¿Está seguro de eliminar el registro?</p>
                    </div>

                    <div className="mt-5">
                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="text-lg inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                        >
                            Eliminar Casos
                        </button>
                    </div>

                    <dl className="grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-1 2xl:gap-4 sm:gap-2 gap-1 mt-4">
                        <div>
                            <dt className="block font-medium text-black 2xl:text-sm text-xs">Titulo</dt>
                            <dd className="block font-medium text-black 2xl:text-sm text-xs">{casos?.titulo}</dd>
                        </div>

                        <div>
                            <dt className="block font-medium text-black 2xl:text-sm text-xs">Descripcion</dt>
                            <dd className="block font-medium text-black 2xl:text-sm text-xs" style={{ whiteSpace: 'pre-wrap' }}>
                                {casos?.descripcion}
                            </dd>
                        </div>

                        <div>
                            <dt className="block font-medium text-black 2xl:text-sm text-xs">Fotos</dt>
                            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                                <FilesViewer files={casos?.fotos} />
                            </dd>
                        </div>

                        <div>
                            <dt className="block font-medium text-black 2xl:text-sm text-xs">Video (URL)</dt>
                            <dd className="block font-medium text-blue-700 underline 2xl:text-sm text-xs break-all">
                                {casos?.videos}
                            </dd>
                        </div>

                        <div>
                            <dt className="block font-medium text-black 2xl:text-sm text-xs">Categoría</dt>
                            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                                {casos?.id_categoria}
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">Último Editor</dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {casos?.last_user?.name}
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">Creado en</dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(casos?.createdAt).toLocaleString("es-ES")}
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">Actualizado en</dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(casos?.updatedAt).toLocaleString("es-ES")}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
}
