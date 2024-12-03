import { AiFillDashboard, AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai'
import { BiCategory, BiLoaderCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { CiChat1 } from 'react-icons/ci'
import { BsCurrencyDollar, BsChat } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
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
        path: '/admin/dashboard/chat-archis'
    },

    {
        id: 9,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'archi',
        path: '/archi/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <AiOutlinePlus />,
        role: 'archi',
        path: '/archi/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <RiProductHuntLine />,
        role: 'archi',
        path: '/archi/dashboard/products'
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <RiProductHuntLine />,
        role: 'archi',
        path: '/archi/dashboard/discount-product'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'archi',
        path: '/archi/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <BsCurrencyDollar />,
        role: 'archi',
        path: '/archi/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat Pro',
        icon: <BsChat />,
        role: 'archi',
        path: '/archi/dashboard/chat-pro'
    },
    {
        id: 16,
        title: 'Chat Support',
        icon: <CiChat1 />,
        role: 'archi',
        path: '/archi/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <FiUsers />,
        role: 'archi',
        path: '/archi/dashboard/profile'
    }
]