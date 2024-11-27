import { AiFillDashboard, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCategory, BiLoaderCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { CiChat1 } from 'react-icons/ci'
import { BsCurrencyDollar} from 'react-icons/bs'
export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Archi',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/archis'
    },
    {
        id: 5,
        title: 'Payment request',
        icon: <BsCurrencyDollar />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Archis',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/deactive-archis'
    },
    {
        id: 7,
        title: 'Archi Request',
        icon: <BiLoaderCircle />,
        role: 'admin',
        path: '/admin/dashboard/archis-request'
    },
    {
        id: 8,
        title: 'Chat Archi',
        icon: <CiChat1 />,
        role: 'admin',
        path: '/admin/dashboard/chat-archi'
    }
]