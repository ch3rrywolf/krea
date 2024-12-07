import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_archi } from '../../store/Reducers/archiReducer'

const ArchiDetails = () => {
    const dispatch = useDispatch()
    const { archi } = useSelector(state=>state.archi)
    const { archiId } = useParams()
    console.log('archiId:', archiId);
    useEffect(()=> {
        dispatch(get_archi({ archiId }));
      }, [archiId])
  return (
    <div>
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            <img className='w-full h-[230px]' src="http://localhost:3000/images/admin.jpg" alt="" />
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md'>
                                <div className='flex gap-2'>
                                    <span>Name: </span>
                                    <span>Zellit Mootez</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>zellitmootez96@gmail.com</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>Archi</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>Pending</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment Account: </span>
                                    <span>active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Address Info</h2>
                            </div>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md'>
                                <div className='flex gap-2'>
                                    <span>Shop Name: </span>
                                    <span>deco-home</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Division: </span>
                                    <span>tunis</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>District: </span>
                                    <span>ariana</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Sub-District: </span>
                                    <span>soukra</span>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>
                <div>
                    <form>
                        <div className='flex gap-4 py-3'>
                            <select className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' name='' id=''>
                                <option value="">--select status--</option>
                                <option value="active">Active</option>
                                <option value="deactive">Deactive</option>
                            </select>
                            <button className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 w-[170px]'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArchiDetails