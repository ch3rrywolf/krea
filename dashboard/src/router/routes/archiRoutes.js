import { lazy } from "react";

// const Home = lazy(() => import("../../views/Home"))
const ArchiDashboard = lazy(() => import("../../views/archi/ArchiDashboard"))
const AddProduct = lazy(() => import("../../views/archi/AddProduct"))
const Products = lazy(() => import("../../views/archi/Products"))
const DiscountProducts = lazy(() => import("../../views/archi/DiscountProducts"))
const Orders = lazy(() => import("../../views/archi/Orders"))
const Payments = lazy(() => import("../../views/archi/Payments"))
const ArchiToPro = lazy(() => import("../../views/archi/ArchiToPro"))
const ArchiToAdmin = lazy(() => import("../../views/archi/ArchiToAdmin"))
const Profile = lazy(() => import("../../views/archi/Profile"))
const EditProduct = lazy(() => import("../../views/archi/EditProduct"))
const OrderDetails = lazy(() => import("../../views/archi/OrderDetails"))

export const archiRouters = [
    
    {
        path : '/archi/dashboard',
        element : <ArchiDashboard />,
        role : 'archi',
        status : 'active'
    },
    {
        path: '/archi/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'archi',
        status: 'active'
    },
    {
        path : '/archi/dashboard/add-product',
        element : <AddProduct />,
        role : 'archi',
        status : 'active'
    },
    {
        path : '/archi/dashboard/products',
        element : <Products />,
        role : 'archi',
        status : 'active'
    },
    {
        path : '/archi/dashboard/discount-product',
        element : <DiscountProducts />,
        role : 'archi',
        status : 'active'
    },
    {
        path : '/archi/dashboard/orders',
        element : <Orders />,
        role: 'archi',
        visibility: ['active', 'deactive']
    },
    {
        path: '/archi/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'archi',
        visibility: ['active', 'deactive']
    },
    {
        path : '/archi/dashboard/payments',
        element : <Payments />,
        ability : ['archi']
    },
    {
        path: '/archi/dashboard/chat-support',
        element: <ArchiToAdmin />,
        role: 'archi',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/archi/dashboard/chat-pro',
        element: <ArchiToPro />,
        role: 'archi',
        status: 'active'
    },
    {
        path: '/archi/dashboard/chat-pro/:proId',
        element: <ArchiToPro />,
        role: 'archi',
        status: 'active'
    },
    {
        path: '/archi/dashboard/profile',
        element: <Profile />,
        role: 'archi',
        visibility: ['active', 'deactive', 'pending']
    }
]