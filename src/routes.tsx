import { RouteObject, Navigate, Outlet } from "react-router-dom"
import { HiHome } from "react-icons/hi2";

import withDynamicImport from "@/hocs/withDynamicImport";
import Error from "@/pages/Error"
import Loading from "@/pages/Loading"

const routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Simple', <Loading />).pages({
            logo: "/logo.png",
            decorationBody: "/decoration.png",
            children: <Outlet />,
            navbarItems: [
                { icon: <HiHome />, label: "About", value: '/about' },
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
                element: withDynamicImport('Maker', <Loading />).containers(),
                errorElement: <Error />,
            },
        ]
    }
];

export default routes;