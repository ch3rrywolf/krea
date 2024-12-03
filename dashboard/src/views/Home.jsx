import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
    const { role } = useSelector(state => state.auth)
    if (role === 'archi') return <Navigate to='/archi/dashboard' replace />
    else if (role === 'admin') return <Navigate to='/admin/dashboard' replace />
    else return <Navigate to='/login' replace />
}

export default Home