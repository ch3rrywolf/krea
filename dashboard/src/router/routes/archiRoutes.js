import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"))
const ArchiDashboard = lazy(() => import("../../views/archi/ArchiDashboard"))
const AddProduct = lazy(() => import("../../views/archi/AddProduct"))
const Products = lazy(() => import("../../views/archi/Products"))
const DiscountProducts = lazy(() => import("../../views/archi/DiscountProducts"))
const Orders = lazy(() => import("../../views/archi/Orders"))
const Payments = lazy(() => import("../../views/archi/Payments"))

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
    },
    {
        path : '/archi/dashboard/discount-product',
        element : <DiscountProducts />,
        ability : ['archi']
    },
    {
        path : '/archi/dashboard/orders',
        element : <Orders />,
        ability : ['archi']
    },
    {
        path : '/archi/dashboard/payments',
        element : <Payments />,
        ability : ['archi']
    }
]