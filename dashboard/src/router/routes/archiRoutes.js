import { lazy } from "react";
const Home = lazy(() => import("../../views/Home"))
const ArchiDashboard = lazy(() => import("../../views/archi/ArchiDashboard"))
const AddProduct = lazy(() => import("../../views/archi/AddProduct"))
const Products = lazy(() => import("../../views/archi/Products"))

export const archiRouters = [
    {
        path : '/',
        element : <Home />,
        ability : ['admin','archi']
    },
    {
        path : '/archi/dashboard',
        element : <ArchiDashboard />,
        ability : ['archi']
    },
    {
        path : '/archi/dashboard/add-product',
        element : <AddProduct />,
        ability : ['archi']
    },
    {
        path : '/archi/dashboard/products',
        element : <Products />,
        ability : ['archi']
    }
]