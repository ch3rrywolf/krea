import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { get_archi, archi_status_update, messageClear } from '../../store/Reducers/archiReducer'

const ArchiDetails = () => {
    const dispatch = useDispatch()
    const { archi, successMessage } = useSelector(state=>state.archi)
    const { archiId } = useParams()
    console.log('archiId:', archiId);
    useEffect(()=> {
        dispatch(get_archi({ archiId }));
      }, [archiId])

    const [status, setStatus] = useState('')
    const submit = (e) => {
        e.preventDefault()
        dispatch(archi_status_update({
            archiId,
            status
        }))
    }

    useEffect(()=>{
        if(successMessage){
            toast.success(successMessage)
            dispatch(messageClear())
        }
    })

    useEffect(()=>{
        if(archi){
            setStatus(archi.status)
        }
    }, [archi])
  return (
    <div>
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            {
                                archi?.image ?     <img className='w-full h-[230px]' src="http://localhost:3000/images/admin.jpg" alt="" />
                                : <span>Image not uploaded</span>
                            }
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
                                    <span>{archi?.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>{archi?.email}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>{archi?.role}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>{archi?.status}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment Account: </span>
                                    <span>{archi?.payment}</span>
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
                                    <span>{archi?.shopInfo?.shopName}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Division: </span>
                                    <span>{archi?.shopInfo?.division}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>District: </span>
                                    <span>{archi?.shopInfo?.district}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Sub-District: </span>
                                    <span>{archi?.shopInfo?.sub_district}</span>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div className='flex gap-4 py-3'>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' required name='' id=''>
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