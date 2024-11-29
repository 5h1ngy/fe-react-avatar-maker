import { RouteObject } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import { HiHome, HiBookmark, HiMagnifyingGlass } from "react-icons/hi2";

import withDynamicImport from "@/hocs/withDynamicImport";
import store, { actions } from '@/store';
import Error from "@/pages/Error"
import Loading from "@/pages/Loading"

const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Landing', <Loading />).pages({
            logo: "/logo.png",
            decorationBody: "/decoration.png",
            children: <Outlet />,
            navbarItems: [
                { icon: <HiHome />, label: "About", value: '/about' },
            ],
            navbarSubItems: [
                { icon: <HiHome />, label: 'Newset', value: '/home' },
                { icon: <HiMagnifyingGlass />, label: 'Search', value: '/search' },
                { icon: <HiBookmark />, label: 'My List', value: '/my-list' }
            ]
        }),
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                id: "home",
                path: 'home',
                loader: async function homeLoader() {
                    store.dispatch(actions.pageLanding.setHistory([{ id: 'home', label: 'Newset', current: true }]))

                    return null
                },
                element: withDynamicImport('Newest', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "my-list",
                path: 'my-list',
                loader: async function homeLoader() {
                    store.dispatch(actions.pageLanding.setHistory([{ id: 'my-list', label: 'My List', current: true }]))

                    return null
                },
                element: withDynamicImport('MyList', <Loading />).containers(),
                errorElement: <Error />,
            },
            {
                id: "details",
                path: "details/:id",
                loader: async function detailsLoader({ params }) {
                    const { id } = params;

                    if (!id) {
                        throw Error("ID is required to load details.");
                    }

                    await store.dispatch(actions.containerDetails.doGetDetails({ id }));

                    const state = store.getState();

                    if (!state.containerDetails.occurrence) {
                        throw Error("Category not found");
                    }

                    const { occurrence } = state.containerDetails;

                    store.dispatch(actions.pageLanding.setHistory([
                        { id: 'details', label: 'Details', current: true },
                        { id, label: occurrence.title, current: true }
                    ]));

                    return occurrence;
                },
                element: withDynamicImport('Details', <h1>Loading...</h1>).containers(),
                errorElement: <Error />,
            }
        ]
    }
];

export default routes;