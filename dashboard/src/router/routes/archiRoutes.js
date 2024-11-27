import { lazy } from "react";
const Home = lazy(() => import("../../views/Home"))

export const archiRouters = [
    {
        path : '/',
        element : <Home />,
        ability : ['admin','archi']
    }
]