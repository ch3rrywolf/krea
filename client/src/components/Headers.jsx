import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr'
import { FaFacebookF, FaUser, FaLock, FaList } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'


const Headers = () => {
    const {pathname} = useLocation()
    const [showShidebar, setShowShidebar] = useState(true)
    const [categoryShow, setCategoryShow] = useState(true)
    const user = true
    console.log(pathname)

    const categorys = ['Meubles','Décoration','Jardin','ParPièce','Bâtiment/Architecture']
  return (
    <div className='w-full bg-white'>
            <div className='header-top bg-[#D4BFAA] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
                        <ul className='flex justify-start items-center gap-8'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><GrMail /></span>
                                <span>krea-design@gmail.com</span>
                            </li>
                            <span>Krea-design</span>
                        </ul>
                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4'>
                                    <a href="#"><FaFacebookF /></a>
                                </div>
                                <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]'>
                                    <img src="http://localhost:3000/images/language.png" alt="" />
                                    <span><MdOutlineKeyboardArrowDown/></span>
                                    <ul className='absolute invisible transition-all to-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10 group-hover:visible group-hover:top-6 group:hover:bg-black z-10'>
                                        <li>Bangla</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                                {
                                    user ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm' to= '/dashboard'>
                                        <span><FaUser/></span>
                                        <span>zellit mootez</span>
                                    </Link> : <div className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
                                        <span><FaLock/></span>
                                        <span>Login</span>
                                    </div>
                                }  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                            <div className='flex justify-between items-center'>
                                <Link to='/'>
                                    <img src="http://localhost:3000/images/logokrea.png" alt="logo" />
                                </Link>
                                <div className='justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                                    <span><FaList/></span>
                                </div>
                            </div>
                        </div>
                        <div className='md-lg:w-full w-9/12'>
                        <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                            <ul className='flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden'>
                                <li>
                                    <Link className={`p-2 block ${pathname === '/' ? 'text-[#8A4D76]':'text-slate-600'}`}>Home</Link>
                                </li>
                                <li>
                                    <Link className={`p-2 block ${pathname === '/shop' ? 'text-[#8A4D76]':'text-slate-600'}`}>Shop</Link>
                                </li>
                                <li>
                                    <Link className={`p-2 block ${pathname === '/blog' ? 'text-[#8A4D76]':'text-slate-600'}`}>Blog</Link>
                                </li>
                                <li>
                                    <Link className={`p-2 block ${pathname === '/about' ? 'text-[#8A4D76]':'text-slate-600'}`}>About</Link>
                                </li>
                                <li>
                                    <Link className={`p-2 block ${pathname === '/contact' ? 'text-[#8A4D76]':'text-slate-600'}`}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className='w-[85%] lg:w-[90%] mx-auto'>
                <div className='flex w-full flex-wrap md-lg:gap-8'>
                    <div className='w-3/12 md-lg:w-full'>
                        <div className='bg-white relative'>
                            <div onClick={()=>setCategoryShow(!categoryShow)} className='h-[50px] bg-violet-400 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
                                <div className='flex justify-center items-center gap-3'>
                                    <span><FaList/></span>
                                    <span>All Category</span>
                                </div>
                                <span className='pt-1'><MdOutlineKeyboardArrowDown/></span>
                            </div>
                            <div className={`${categoryShow ? 'h-0' : 'h-[400px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}>
                                <ul className='py-2 text-slate-600 font-medium h-full overflow-auto'>
                                    {
                                        categorys.map((c, i) => {
                                            return (
                                                <li key={i} className='flex justify-start items-center gap-2 px-[24px] py-[6px]'>
                                                    <Link className='text-sm block'>{c}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        
  )
}

export default Headers