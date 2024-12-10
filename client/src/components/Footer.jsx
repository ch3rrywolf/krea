import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#D4BFAA]'>
        <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
            <div className='w-3/12 lg:w-4/12 sm:w-full'>
                <div className='flex flex-col gap-3'>
                    <img className='w-[190px] h-[70px]' src="http://localhost:3001/images/logo/logo6.png" alt='logo' />
                    <ul className='flex flex-col gap-2 text-slate-600'>
                        <li>Address :</li>
                        <li>Phone : </li>
                        <li></li>Email : 
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer