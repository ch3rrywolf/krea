import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heders from '../components/Headers'
import Banner from '../components/Banner'
import Categorys from '../components/Categorys'

const Home = () => {
   
    return (
        <div className='w-full'>
            <Heders />
            <Banner />
            <div className='my-4'>
                <Categorys />
            </div>
            
        </div>
    )
}

export default Home