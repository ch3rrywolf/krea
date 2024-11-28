import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Category = lazy(() => import("../../views/admin/Category"))
const Archis = lazy(() => import("../../views/admin/Archis"))

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
    }
]