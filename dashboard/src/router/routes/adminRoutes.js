import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Category = lazy(() => import("../../views/admin/Category"))
const Archis = lazy(() => import("../../views/admin/Archis"))
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"))
const DeactiveArchis = lazy(() => import("../../views/admin/DeactiveArchis"))
const ArchiRequest = lazy(() => import("../../views/admin/ArchiRequest"))
const ArchiDetails = lazy(() => import("../../views/admin/ArchiDetails"))
const ChatArchi = lazy(() => import("../../views/admin/ChatArchi"))
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"))

export const adminRoutes = [
    {
        path : 'admin/dashboard',
        element : <AdminDashboard />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/orders',
        element : <Orders />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/category',
        element : <Category />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/archis',
        element : <Archis />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/payment-request',
        element : <PaymentRequest />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/deactive-archis',
        element : <DeactiveArchis />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/archis-request',
        element : <ArchiRequest />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/archi/details/:archiId',
        element : <ArchiDetails />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/chat-archis',
        element : <ChatArchi />,
        role : 'admin'
    },
    {
        path : 'admin/dashboard/order/details/:orderId',
        element : <OrderDetails />,
        role : 'admin'
    }
]