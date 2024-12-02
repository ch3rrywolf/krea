import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiKnightBanner } from 'react-icons/gi'

import Pagination from '../Pagination'
import Search from '../components/Search'

const Products = () => {
  

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)

    

    return (
        <div className='px-2 lg:px-7 pt-5 '>
            <div className='w-full p-4  bg-[#283046] rounded-md'>
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5,].map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/${d}.jpg`} alt="" />
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <span>#zikipon</span> 
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <span>#zama9</span> 
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <span>#brand</span>
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                       <span>$price</span>
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        {
                                            d.discount === 0 ? <span>no discount</span> : <span>${d.discount}%</span>
                                        }
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <span>#stock</span>
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit /></Link>
                                            {/* <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link> */}
                                            <button className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash /></button>
                                            {/* <Link to={`/seller/dashboard/add-banner/${d._id}`} className='p-[6px] bg-cyan-500 rounded hover:shadow-lg hover:shadow-cyan-500/50'><GiKnightBanner /></Link> */}
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={50}
                            parPage={parPage}
                            showItem={4}
                        />
                    </div>
                
            </div>
        </div>
    )
}

export default Products