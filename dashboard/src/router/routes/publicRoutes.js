import {lazy} from "react";
import AdminLogin from "../../views/auth/AdminLogin";
const Login = lazy(()=>import("../../views/auth/Login"))
const Register = lazy(()=>import("../../views/auth/Register"))
const Home = lazy(() => import("../../views/Home"))

const publicRoutes = [
    {
        path : '/',
        element : <Home />,
        ability : ['admin','archi']
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/admin/login',
        element : <AdminLogin />
    }
]

export default publicRoutes