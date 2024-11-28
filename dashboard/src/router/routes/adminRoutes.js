import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Category = lazy(() => import("../../views/admin/Category"))
const Archis = lazy(() => import("../../views/admin/Archis"))
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"))
const DeactiveArchis = lazy(() => import("../../views/admin/DeactiveArchis"))
const ArchiRequest = lazy(() => import("../../views/admin/ArchiRequest"))

export const adminRoutes = [
    {
        path : 'admin/dashboard',
        element : <AdminDashboard />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/orders',
        element : <Orders />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/category',
        element : <Category />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/archis',
        element : <Archis />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/payment-request',
        element : <PaymentRequest />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/deactive-archis',
        element : <DeactiveArchis />,
        ability : 'admin'
    },
    {
        path : 'admin/dashboard/archis-request',
        element : <ArchiRequest />,
        ability : 'admin'
    }
]