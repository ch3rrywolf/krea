import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const [state, setState] = useState({
        name : "",
        description : "",
        discount : "",
        price : "",
        brand : "",
        stock : "",
    })
    const inputHandle = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.vale
        })
    }
  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-[#283046] rounded-md'>
            <div className='flex justify-between items-center pb-4'>
                <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h1>
                <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2' to='/archi/dashboard/products'>Products</Link>
            </div>
            <div>
                <form>
                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='name'>Product name</label>
                            <input className='px-4 py-7 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" placeholder='product name' name='name' id="name" />
                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='brand'>Product name</label>
                            <input className='px-4 py-7 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" placeholder='brand' name='brand' id="brand" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct