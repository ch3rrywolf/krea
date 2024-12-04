import { privateRoutes } from "./privateRoutes";
import MainLayout from '../../layout/MainLayout'

export const getRoutes = () => {
    const allRoute = []
    privateRoutes.map(r=>{
        console.log(r)
    })
    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoutes
    }
}